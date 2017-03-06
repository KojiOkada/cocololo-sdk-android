package com.winfrontier.cocololo.demo;

import android.Manifest;
import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.SurfaceView;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.winfrontier.cocololo.sdk.CocololoMeasument;
import com.winfrontier.cocololo.sdk.Core.Network.EnumSet;
import com.winfrontier.cocololo.sdk.Core.Network.GetLifescoreResult;
import com.winfrontier.cocololo.sdk.Profile;
import com.winfrontier.cocololo.sdk.View.Measurement.HeartbeatGraphView;

import java.util.Calendar;
import java.util.UUID;

public class MainActivity extends AppCompatActivity {

    private static final int MY_PERMISSIONS_REQUEST_CAMERA = 1111;

    private CocololoMeasument cocololoMeasument;

    private Button controller;
    private Button btnGetData;
    private EditText editText;
    private ProgressDialog progressDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        controller = (Button) findViewById(R.id.controller);
        btnGetData = (Button) findViewById(R.id.getdata);
        editText = (EditText) findViewById(R.id.edit_text);
        progressDialog = new ProgressDialog(this);
        progressDialog.setTitle("Get data.....");
        progressDialog.setCancelable(false);
        progressDialog.cancel();

        controller.setEnabled(false);
        btnGetData.setEnabled(false);

        // Init
        cocololoMeasument =
            new CocololoMeasument(this,
                (HeartbeatGraphView) findViewById(R.id.heart_beat_graph_view),
                (SurfaceView) findViewById(R.id.surface_view)
            );


        controller.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                cocololoMeasument.cocololoStart(new CocololoMeasument.OnMeasuringListener() {
                    @Override
                    public void onStared() {
                        btnGetData.setEnabled(false);
                        controller.setEnabled(false);
                    }

                    @Override
                    public void onProgress(float percent) {
                        Log.d("OnMeasuringListener", " onProgress -> " + percent);
                        int data = (int) (percent * 100);
                        controller.setText("Progress " + data + "%");
                    }

                    @Override
                    public void onSuccess() {
                        btnGetData.setEnabled(true);
                        controller.setEnabled(true);
                        controller.setText("Start");
                    }

                    @Override
                    public void onError(EnumSet.ErrorStatus errorStatus) {
                        controller.setEnabled(true);
                        controller.setText("Start");
                    }
                });
            }
        });


        btnGetData.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                getData();
            }
        });


        // Check Camera Permission for Android 6
        if (ContextCompat.checkSelfPermission(this,
            Manifest.permission.CAMERA)
            != PackageManager.PERMISSION_GRANTED) {

            if (ActivityCompat.shouldShowRequestPermissionRationale(this,
                Manifest.permission.CAMERA)) {
                Toast.makeText(MainActivity.this, " Please goto setting app, and turn on CAMERA permission for app ", Toast.LENGTH_SHORT).show();
            } else {
                ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.CAMERA},
                    MY_PERMISSIONS_REQUEST_CAMERA);
            }

        } else {
            prepareMeasument();
        }
    }

    private void prepareMeasument() {
        Log.d("Main", " prepareMeasument ");
        cocololoMeasument.cocololoPrepareMeasument(new CocololoMeasument.OnPrepareCamera() {
            @Override
            public void onCameraSuccess() {
                controller.setEnabled(true);
                btnGetData.setEnabled(false);
                Log.d("Main", " onCameraSuccess ");
            }

            @Override
            public void onCameraFailure() {
                Toast.makeText(MainActivity.this, " Camera error ", Toast.LENGTH_SHORT).show();
                controller.setEnabled(false);
                btnGetData.setEnabled(false);
            }
        });
    }

    private void getData() {

        btnGetData.setEnabled(false);
        progressDialog.show();
        editText.setText("Get data....");

        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, 1989);
        calendar.set(Calendar.MONTH, 9);
        calendar.set(Calendar.DAY_OF_MONTH, 3);

        Profile profile = new Profile(
            "cocololokey",
            UUID.randomUUID(),
            UUID.randomUUID().toString(),
            Profile.SEX_MALE,
            calendar.getTime(),
            "Vietnam",
            "No",
            178,
            82
        );

        cocololoMeasument.getLifeScoreResult(profile,
            new CocololoMeasument.OnGetLifeScoreResult() {
                @Override
                public void onResult(GetLifescoreResult lifescoreResult) {
                    btnGetData.setEnabled(true);
                    progressDialog.cancel();
                    editText.setText("GetLifescoreResult -> " + lifescoreResult);
                    Log.d("GetLifeScoreResult", " Data: " + lifescoreResult);
                }

                @Override
                public void onError(EnumSet.ErrorStatus errorStatus) {
                    btnGetData.setEnabled(true);
                    progressDialog.cancel();

                    if (errorStatus == EnumSet.ErrorStatus.FailAnalysis) {
                        AlertDialog.Builder alert = new AlertDialog.Builder(MainActivity.this);
                        alert.setTitle(R.string.alertTitleError);
                        alert.setMessage(R.string.alertMessageAnalysisError);
                        alert.setPositiveButton(R.string.alertButtonYes, new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                //remeasure();
                            }
                        });
                        alert.show();
                    }
                    // ネットワーク未接続時
                    else if (errorStatus == EnumSet.ErrorStatus.NoNetworkConnection || errorStatus == EnumSet.ErrorStatus.Timeout) {
                        AlertDialog.Builder alert = new AlertDialog.Builder(MainActivity.this);
                        alert.setTitle(R.string.alertTitleError);
                        alert.setMessage(R.string.alertMessageNetworkError);
                        alert.setPositiveButton(R.string.alertButtonYes, new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                //remeasure();
                            }
                        });
                        alert.show();
                    }
                    // COCOLOLO PHP メソッドによる測定データのアップロードに失敗した時
                    else if (errorStatus == EnumSet.ErrorStatus.InsertMeasurementInfoError) {
                        AlertDialog.Builder alert = new AlertDialog.Builder(MainActivity.this);
                        alert.setTitle(R.string.alertTitleError);
                        alert.setMessage(R.string.alertMessageInsertMeasurementInfoError);
                        alert.setPositiveButton(R.string.alertButtonYes, new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                // nothing
                            }
                        });
                        alert.show();
                    }
                    // その他エラー時（iOS 版に合わせてネットワークエラー未接続時と同じ処理）
                    else {
                        AlertDialog.Builder alert = new AlertDialog.Builder(MainActivity.this);
                        alert.setTitle(R.string.alertTitleError);
                        alert.setMessage(R.string.alertMessageNetworkError);
                        alert.setPositiveButton(R.string.alertButtonYes, new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {

                            }
                        });
                        alert.show();
                    }
                }
            });
    }


    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        Log.d("Main", "onRequestPermissionsResult");
        switch (requestCode) {
            case MY_PERMISSIONS_REQUEST_CAMERA: {
                if (grantResults.length > 0
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    Log.d("Main", "PERMISSION_GRANTED");
                    prepareMeasument();

                } else {
                    Toast.makeText(MainActivity.this, " Camera permission denied ", Toast.LENGTH_SHORT).show();
                }
                return;
            }
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        cocololoMeasument.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        cocololoMeasument.onResume();
    }

    @Override
    protected void onDestroy() {
        cocololoMeasument.onDestroy();
        super.onDestroy();
    }
}
