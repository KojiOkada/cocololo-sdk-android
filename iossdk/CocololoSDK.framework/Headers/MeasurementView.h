//
//  MeasurementView.h
//  COCOLOLO
//

#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>
#import <MediaPlayer/MediaPlayer.h>
#import "CocololoDelegate.h"
#import "CocololoDataSource.h"
#import "Connection.h"
enum
{
	kMeasurement			,
	kMusicMeasurement		,
};

@protocol MeasurementViewDelegate;

@interface MeasurementView : UIView <AVCaptureVideoDataOutputSampleBufferDelegate,UIWebViewDelegate, ConnectionDelegate> {
	AVCaptureSession			*captureSession_;			// セッション
	AVCaptureDeviceInput		*deviceInputRef_;			// 入力(参照)
	AVCaptureVideoDataOutput	*dataOutput_;				// データ出力
	
	// UI
	UIWebView					*webView_;
	// 測定
	NSMutableArray				*measurementData_;
	NSInteger					leftDuration_;				// 計測残り時間
	CGFloat						radian_;					// １秒あたりの回転角度
	NSTimer						*timer_;					// タイマー
	// フラグ
	BOOL						isMeasuring_;				// YES:測定中
	NSInteger					measurementType_;			//
    //輝度の前回値
    double                      beforeBrightness_;//1つ前の輝度の値
	// 閾値チェック日
	NSDate						*checkDate;
	BOOL						measument_;
    bool isCMContentsStart;
    NSInteger durationMeasurement;
}

@property (nonatomic, assign) id<CocololoDelegate> delegate;
@property (nonatomic, assign) id<CocololoDataSource> dataSource;

- (void)cocololoStart;
- (void)cocololoCancel;
- (void)cocololoSetupData;
- (void)cocololoStartCamera;
- (NSInteger)getMinProgress;
- (NSInteger)getMaxProgress;

@end
