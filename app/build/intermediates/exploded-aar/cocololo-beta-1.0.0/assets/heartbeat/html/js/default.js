/*--------------------------------------------------------------------------*
 *
 *  default js
 *
 *  (C) Cosa-L Co.,Ltd.All Rights Reserved.
 *
 *  2012 Cosa-L Co.,Ltd.
 *  http://www.cosa-l.co.jp/
 *
 *  Last Modified: 2012-10-03
 *  Last Editor: Toshiyuki Hara
 *
 *  jQuery 1.8.2
/*--------------------------------------------------------------------------*/

//
// 共通項目
(function($) {

	tapdown();// ボタンをタップ（マウスダウン）したときの処理


	pageSet($('.page').attr('id')); // 各ページを読んだときのfunction

	$(function() {
	});

})(jQuery);

// 各ページを読んだときのfunction
function pageSet(pageNo) {

	if (pageNo == 'page1') {// 利用規約画面

		// contents内を上下の真ん中に置く


		layoutSetting();
		// 同意ボタンの処理


		$('a', '.btn_agree').bind('touchend mouseup', agree);

	} else if (pageNo == 'page2') {// 属性登録画面

		// contents内を上下の真ん中に置く


		layoutSetting();
		// 性別・生年月日・職業のチェック
		registChecker();
		$('a', '.gender').bind('touchend mouseup', inputGender); // 性別ボタンの処理


		$('select').bind('change', registChecker); // セレクタを操作した時の処理


		// 登録するボタンの処理


		$('a', '.btn_regist').bind('touchend mouseup', registerUser);

	} else if (pageNo == 'page3') {// 登録完了 開始


		// contents内を上下の真ん中に置く


		layoutSetting();
		// 開始ボタンの処理


		$('a', '.btn_start').bind('touchend mouseup', start);

	} else if (pageNo == 'page4') {// メインメニュー画面

		// contents内を上下の真ん中に置く


		layoutSetting();
		// 測定ボタンの処理


		$('a', '.btn_measure').bind('touchend mouseup', measure);
		// バッチリ行動ランキング
		$('a', '.btn_ranking').bind('touchend mouseup', ranking);
		// 設定・ヘルプ


		$('a', '.btn_help').bind('touchend mouseup', settings);

	} else if (pageNo == 'page5') {// 今の気持ち、行動を入力


		// contents内を上下の真ん中に置く


		layoutSetting();
		// セレクタのチェック
		selecterChecker();
		// セレクタを操作した時の処理


		$('select').bind('change', selecterChecker);
		// 次へボタンの処理


		$('a', '.btn_next').bind('touchend mouseup', input);
		// メニュー画面ボタンの処理


		$('a', '.btn_top').bind('touchend mouseup', backToMenu);

	} else if (pageNo == 'page6') {// 測定準備画面
		// 測定準備画面
		// contents内を上下の真ん中に置く


		layoutSetting();

		// 波形スタート


		waveformStart1();
		// メニュー画面ボタンの処理


		$('a', '.btn_top').bind('touchend mouseup', backToMenu);
		// 測定開始ボタン
		$('a', '.btn_measureStart').bind('touchend mouseup', startMeasurement);

	} else if (pageNo == 'page7') {// 測定中画面

		// contents内を上下の真ん中に置く


		layoutSetting();

		$.event.add(window, 'load', function() {
			setTimeout(function() {
				$('.box_scale,.box_progress').addClass('move');
			}, 500);
		});

		// 波形スタート


		waveformStart2();

		// メニュー画面ボタンの処理


		$('a', '.btn_top').bind('touchend mouseup', backToMenu);

	} else if (pageNo == 'page8') {// 結果画面

		// contents内を上下の真ん中に置く


		layoutSetting();
		// メニュー画面ボタンの処理


		$('a', '.btn_top').bind('touchend mouseup', backToMenu);
		// 共有ボタンの処理


		$('a', '.btn_share').bind('touchend mouseup', shareResult);
		// 終了ボタンの処理


		$('a', '.btn_end').bind('touchend mouseup', backToMenu);

	} else if (pageNo == 'page9') {// バッチリ行動ランキング

		// contents内を上下の真ん中に置く


		layoutSetting();
		// メニュー画面ボタンの処理


		$('a', '.btn_top').bind('touchend mouseup', backToMenu);

	} else if (pageNo == 'page10') {// 設定・ヘルプ


		// contents内を上下の真ん中に置く


		layoutSetting();
		// メニュー画面ボタンの処理


		$('a', '.btn_top').bind('touchend mouseup', backToMenu);
		// 自律神経とは?ボタンの処理


		$('a', '.btn_nerves').bind('touchend mouseup', help1);
		// 測定のしかたボタンの処理


		$('a', '.btn_howTo').bind('touchend mouseup', help2);
		// 注意事項ボタンの処理


		$('a', '.btn_notes').bind('touchend mouseup', help3);

	} else if (pageNo == 'page11') {// 自律神経とは?

		// contents内を上下の真ん中に置く


		// layoutSetting();
		// メニュー画面ボタンの処理


		$('a', '.btn_top').bind('touchend mouseup', backToMenu);

	} else if (pageNo == 'page12') {// 測定のしかた


		// contents内を上下の真ん中に置く


		// layoutSetting();
		// メニュー画面ボタンの処理


		$('a', '.btn_top').bind('touchend mouseup', backToMenu);

	} else if (pageNo == 'page13') {// 利用にあたっての注意事項


		// contents内を上下の真ん中に置く


		// layoutSetting();
		// メニュー画面ボタンの処理


		$('a', '.btn_top').bind('touchend mouseup', backToMenu);

	}
	// For Android App ------------ start ------------ hoshino
	else if (pageNo == 'for_android_app') { 
		// 心拍グラフの表示領域を、それを表示する WebView のサイズに合わせる。 
		var w = $('.box_waveform_android').width();
		var h = $('.box_waveform_android').height();
		
		// alert(w);
		// alert(h);
		$('#waveform1').attr('width', w);
		$('#waveform1').attr('height', h);

		// 波形スタート
		waveformStart1();
	}
	// For Android App ------------  end  ------------
}

//
// 共通項目
//

// ボタンをタップ（マウスダウン）したときの処理


function tapdown() {
	$('.btn').bind('touchstart mousedown', function(e) {
		e.preventDefault();
		if (!$(this).hasClass('disabled')) {
			$(this).addClass('tapdown');
			$(window).bind('touchend mouseup', function(e) {
				e.preventDefault();
				$('.btn').removeClass('tapdown');
				return false;
			});
		}
		return false;
	});
}

// contents内を上下の真ん中に置く


function layoutSetting() {
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var header = document.getElementById('header');
	var footer = document.getElementById('footer');
	var contents = document.getElementById('contents');

	if (header && !footer) {
		contents.style.height = windowHeight - header.clientHeight + 'px';
	} else if (header && footer) {
		contents.style.height = windowHeight - header.clientHeight
				- footer.clientHeight + 'px';
	} else {
		return false;
	}
}

// 性別ボタンの処理


function inputGender(e) {
	e.preventDefault();
	var btn = $(this);
	var gender = btn.attr('data-gender');

	if (gender == 'men') {
		$('a', '.btn_women').removeClass('active');
		btn.addClass('active');
		$('#hdn_gender').val(0);
	} else if (gender == 'women') {
		$('a', '.btn_men').removeClass('active');
		btn.addClass('active');
		$('#hdn_gender').val(1);
	} else {
		$('a', '.btn_women').removeClass('active');
		$('a', '.btn_men').removeClass('active');
		$('#hdn_gender').val('');
	}

	registChecker();
}

// 性別・生年月日・職業・都道府県のチェック
function registChecker() {

	if ($('#hdn_gender').val() == '') {
		$('a', '.permit').addClass('disabled')
	} else {
		selecterChecker();
	}
}

// セレクタのチェック
function selecterChecker() {
	$('select').each(function() {
		if ($(':selected', this).val() == '') {
			$('a', '.permit').addClass('disabled');
			return false;
		} else {
			$('a', '.permit').removeClass('disabled');
		}
	});
}

// 総合結果メーター resultOverallScale(x:副交感神経, y:交感神経)
// x:副交感神経→0〜100、y:交感神経→0〜100、真ん中は50,50
// どちらかの数値が49以下になると、トキメキちゃんがしかめっ面になる


function resultOverallScale(valLeft, valTop) {

	var resultScale = {
		vl : Math.round(5.26 * valLeft - 263),
		vt : Math.round(-(5.26 * valTop - 263)),
		zone : (valLeft < 50 || valTop < 50) ? false : true
	}
	var resultOverallScale = document.getElementById('resultOverallScale'); // トキメキちゃん
	var mouth = document.getElementById('mouth'); // トキメキちゃんの口

	if (!resultScale.zone) {
		setTimeout(function() {
			mouth.className = 'grimace';
		}, 600);
	}

	resultOverallScale.style.webkitTransform = 'translate(' + resultScale.vl
			+ 'px,' + resultScale.vt + 'px)';
}

// 波形スタート（測定準備中のとき）


function waveformStart1() {
	// Random data
	var line1 = new TimeSeries();
	/* var line2 = new TimeSeries(); */

	setInterval(function() {
		var y = document.getElementById("y1").value;
		line1.append(new Date().getTime(), y);
		/* line2.append(new Date().getTime(), Math.random()); */
	}, 100);

	var smoothie = new SmoothieChart({
		grid : {
			strokeStyle : 'rgb(51, 51, 51)',
			fillStyle : 'rgb(0, 0, 0)',
			lineWidth : 1,
			millisPerLine : 1000,
			verticalSections : 5
		}
	});

	smoothie.addTimeSeries(line1, {
		strokeStyle : 'rgb(0, 255, 0)',
		fillStyle : 'rgba(0, 255, 0, 0.4)',
		lineWidth : 2							// For Android App    hoshino（iOS 版 COCOLOLO に合わせる）
	});

	/*
	 * smoothie.addTimeSeries(line2, { strokeStyle: 'rgb(255, 0, 255)',
	 * fillStyle: 'rgba(255, 0, 255, 0.3)', lineWidth: 3 });
	 */

	smoothie.streamTo(document.getElementById("waveform1"), 100);
}

// 波形スタート（測定中のとき）


function waveformStart2() {
	// Random data
	var line1 = new TimeSeries();
	/* var line2 = new TimeSeries(); */
	setInterval(function() {
		var y = document.getElementById("y2").value;
		line1.append(new Date().getTime(), y);
		/* line2.append(new Date().getTime(), Math.random()); */
	}, 100);

	var smoothie = new SmoothieChart({
		grid : {
			strokeStyle : 'rgb(51, 51, 51)',
			fillStyle : 'rgb(0, 0, 0)',
			lineWidth : 1,
			millisPerLine : 1000,
			verticalSections : 5
		}
	});
	smoothie.addTimeSeries(line1, {
		strokeStyle : 'rgb(0, 255, 0)',
		fillStyle : 'rgba(0, 255, 0, 0.4)',
		lineWidth : 3
	});
	/*
	 * smoothie.addTimeSeries(line2, { strokeStyle: 'rgb(255, 0, 255)',
	 * fillStyle: 'rgba(255, 0, 255, 0.3)', lineWidth: 3 });
	 */

	smoothie.streamTo(document.getElementById("waveform2"), 100);
}

// 輝度データの受信
function onReciveBrightness1(brightness) {
	document.getElementById("y1").value = brightness;

}

// 輝度データの受信
function onReciveBrightness2(brightness) {
	document.getElementById("y2").value = brightness;
}

// 職業を設定する


function setJob(job) {
	var opts = document.getElementById("set_occupation").options;
	for ( var i = 0; i < opts.length; i++) {
		if (opts[i].value == job) {
			opts[i].selected = true;
			return;
		}
	}
}

//場所（都道府県）を設定する


function setRegion(region) {
	var opts = document.getElementById("set_region").options;
	for ( var i = 0; i < opts.length; i++) {
		if (opts[i].value == region) {
			opts[i].selected = true;
			return;
		}
	}
}

// 行動ランキングの値を設定する


function setRanking(rateStress, stress_1, stress_2, stress_3, rateTired,
		tired_1, tired_2, tired_3, rateCarefree, carefree_1, carefree_2,
		carefree_3, rateIdeal, ideal_1, ideal_2, ideal_3) {

	// ストレス的中率


	var predictive_stress = document.getElementById("box_predictive_stress");
	predictive_stress.innerHTML = rateStress;
	// ストレス1位


	var ranking_stress_1 = document.getElementById("box_ranking_stress_1");
	ranking_stress_1.innerHTML = stress_1;
	// ストレス2位


	var ranking_stress_2 = document.getElementById("box_ranking_stress_2");
	ranking_stress_2.innerHTML = stress_2;
	// ストレス3位


	var ranking_stress_3 = document.getElementById("box_ranking_stress_3");
	ranking_stress_3.innerHTML = stress_3;

	// ぐったり的中率


	var predictive_tired = document.getElementById("box_predictive_tired");
	predictive_tired.innerHTML = rateTired;
	// ぐったり1位


	var ranking_tired_1 = document.getElementById("box_ranking_tired_1");
	ranking_tired_1.innerHTML = tired_1;
	// ぐったり2位


	var ranking_tired_2 = document.getElementById("box_ranking_tired_2");
	ranking_tired_2.innerHTML = tired_2;
	// ぐったり3位


	var ranking_tired_3 = document.getElementById("box_ranking_tired_3");
	ranking_tired_3.innerHTML = tired_3;

	// のんびり的中率


	var predictive_carefree = document
			.getElementById("box_predictive_carefree");
	predictive_carefree.innerHTML = rateCarefree;
	// のんびり1位


	var ranking_carefree_1 = document.getElementById("box_ranking_carefree_1");
	ranking_carefree_1.innerHTML = carefree_1;
	// のんびり2位


	var ranking_carefree_2 = document.getElementById("box_ranking_carefree_2");
	ranking_carefree_2.innerHTML = carefree_2;
	// のんびり3位


	var ranking_carefree_3 = document.getElementById("box_ranking_carefree_3");
	ranking_carefree_3.innerHTML = carefree_3;

	// バッチリ的中率


	var predictive_ideal = document.getElementById("box_predictive_ideal");
	predictive_ideal.innerHTML = rateIdeal;
	// バッチリ1位


	var ranking_ideal_1 = document.getElementById("box_ranking_ideal_1");
	ranking_ideal_1.innerHTML = ideal_1;
	// バッチリ2位


	var ranking_ideal_2 = document.getElementById("box_ranking_ideal_2");
	ranking_ideal_2.innerHTML = ideal_2;
	// バッチリ3位


	var ranking_ideal_3 = document.getElementById("box_ranking_ideal_3");
	ranking_ideal_3.innerHTML = ideal_3;

}

// バッチリ行動ランキングボタンの処理


function ranking() {
	window.android.ranking();
}

// 結果データを設定する


function setResult(LF, HF, heartRate, feeling, msg, isHit) {

	// 心拍数を設定する

//表示しない
//	var hr = document.getElementById("box_heartRate");
//	hr.innerHTML = heartRate;

	// 気持ちの設定


	if (feeling == 1) {

		document.getElementById("box_feeling ideal").className = "box_feeling ideal active";

	} else if (feeling == 2) {

		document.getElementById("box_feeling stress").className = "box_feeling stress active";

	} else if (feeling == 3) {

		document.getElementById("box_feeling tired").className = "box_feeling tired active";

	} else if (feeling == 4) {
		document.getElementById("box_feeling carefree").className = "box_feeling carefree active";

	}

	// 的中フラグを設定する


	if (isHit == 1) {
		document.getElementById("bingo").className = "bingo active";
	}

	// コメント


	var advice = document.getElementById("box_advice");
	advice.innerHTML = msg;

	// ハートマークを移動させる
	resultOverallScale(HF, LF);
}

// 同意ボタンの処理


function agree() {
	window.android.agree();
}

// 登録ボタンの処理


function registerUser() {

	var bool = 1;
	if ($('#hdn_gender').val() == '') {
		bool = 0;
		return false
	} else {
		$('select').each(function() {
			if ($(':selected', this).val() == '') {
				bool = 0;
				return false;
			}
		});
	}

	if (bool == 1) {
		var sex;
		if ($('#hdn_gender').val() == '0') {
			sex = 0;
		} else {
			sex = 1;
		}

		// yearを取得する


		var year = document.getElementById('year').value;
		// monthを取得する


		var month = document.getElementById('month').value;
		// monthを取得する


		var day = document.getElementById('day').value;
		// 職業を取得する


		var occupation = document.getElementById('occupation').value;

		// 都道府県を取得する
		var region = document.getElementById('region').value;

		// javaのソースを呼び出す


		window.android.registerUser(sex, year + month + day, occupation, region);
	}
}

// 開始ボタンの処理


function start() {
	window.android.start();
}

// 測定ボタンの処理


function measure() {
	window.android.measure();
}

// 設定・ヘルプ


function settings() {
	window.android.settings();
}

// バッチリ行動ランキング
function ranking() {
	window.android.ranking();
}

// 行動、主観入力処理


function input() {

	var bool = 1;
	$('select').each(function() {
		if ($(':selected', this).val() == '') {
			bool = 0;
			return false;
		}
	});

	if (bool == 1) {
		var action = document.getElementById('action').value;
		var feeling = document.getElementById('feeling').value;
		window.android.input(action, feeling);
	}
}

// メニュー画面移行処理


function backToMenu() {
	window.android.backToMenu();
}

// 測定ボタンの処理


function prepare() {
	window.android.prepare();
}

// カメラを止める
function stopCamera() {
	window.android.closeCamera();
}

// 測定を開始する


function startMeasurement() {
	window.android.startMeasurement();
}

// 職業を保存する


function saveOccupation() {
	obj = document.getElementById('set_occupation');
	index = obj.selectedIndex;
	var job = obj.options[index].value
	window.android.saveOccupation(job);
}

//都道府県を保存する


function saveRegion() {
	obj = document.getElementById('set_region');
	index = obj.selectedIndex;
	var region = obj.options[index].value
	window.android.saveRegion(region);
}

// 結果を共有する


function shareResult() {
	window.android.shareResult();
}

// 終了


function end() {
	window.android.end();
}

// 自律神経とは?ボタンの処理


function help1() {
	window.android.help1();
}

// 測定のしかたボタンの処理


function help2() {
	window.android.help2();
}

// 注意事項ボタンの処理


function help3() {
	window.android.help3();
}