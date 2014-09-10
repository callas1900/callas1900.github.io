
/**
 * 魔法力計算用
 * F : mAtk * Int係数^2 * Lv係数^2 * 乗算補正 + 加算補正
 * M : mAtk * Int係数^2 * Lv係数^2 * 1.17 * 乗算補正 + マスタリー + 加算補正
 */
function calcMa(mAtk,LV,intSome,magicP,enP,mst,set){
	if(mAtk == ""){mAtk = 1}
	try{
		if(LV > 75){throw "まだ76以上は対応していません。";}
		if(7 <= LV  && LV <= 13){mst = 1.9}
		if(14 <= LV && LV <= 19){mst = 3.5}
		if(20 <= LV && LV <= 24){mst = 5.7}
		if(25 <= LV && LV <= 29){mst = 8.3}
		if(30 <= LV && LV <= 34){mst = 11.9}
		if(35 <= LV && LV <= 39){mst = 16.6}
		if(40 <= LV && LV <= 43){mst = 22.6}
		if(44 <= LV && LV <= 47){mst = 28.5}
		if(48 <= LV && LV <= 51){mst = 35.4}
		if(52 <= LV && LV <= 55){mst = 43.2}
		if(56 <= LV && LV <= 57){mst = 52.1}
		if(58 <= LV && LV <= 59){mst = 56.8}
		if(60 <= LV && LV <= 61){mst = 61.7}
		if(62 <= LV && LV <= 63){mst = 66.8}
		if(64 <= LV && LV <= 65){mst = 72.1}
		if(66 <= LV && LV <= 67){mst = 77.4}
		if(68 <= LV && LV <= 69){mst = 82.9}
		if(70 <= LV && LV <= 71){mst = 88.4}
		if(72 <= LV && LV <= 73){mst = 93.8}
		if(74 <= LV && LV <= 75){mst = 99.3}
	} catch(e){
		alert("Error : " + e);
		return;
	}

	if(FigFlg == false){
		msg += "ウェッポンマスタリー = " + mst + "<br>";
	}

	int = eval(int) + eval(intSome)
	msg += "INT = " + int + "<br>";
	int = eval(int) - eval(12);

	int = document.all["intData"].rows[int].cells[1].innerText;
	msg += "INT係数 = " + int + "<br>";

	msg += "LV = " + LV + "<br>";
	LV = eval(LV) + eval(42);
	LV = document.all["intData"].rows[LV].cells[1].innerText;
	msg += "lv係数 = " + LV + "<br>";
	
	if(FigFlg == true){
		maAns = mAtk * int * int * LV * LV;
		msg += "ファイター補正<br>";
		} else {
			maAns = mAtk * int * int * LV * LV * 1.17;
			msg += "メイジ補正<br>";
			}
	msg += "<b>補正前魔法力 = " + maAns + "</b><br>";
/*------------------------------
	乗算補正 
	------------------------------*/
	var enpa = document.forms[0].enpa.value;
	var bs = document.forms[0].bs.value;
	switch(enpa){
			case '1':
				maAns = maAns * 1.55;
				msg += "エンパワーLv.1補正<br>";
				break;
			case '2':
				maAns = maAns * 1.65;
				msg += "エンパワーLv.2補正<br>";
				break;
			case '3':
				maAns = maAns * 1.75;
				msg += "エンパワーLv.3補正<br>";
				break;
			}
	switch(bs){
			case '1':
				maAns = maAns * 1.10;
				msg += "バサクLv.1補正<br>";
				break;
			case '2':
				maAns = maAns * 1.16;
				msg += "バサカLv.2補正<br>";
				break;
			}
	switch(set){
			case 'D1':
				maAns = maAns * 1.10;
				msg += "ナレッジセット効果補正(10%UP)<br>";
				break;
			case 'B1':
				maAns = maAns * 1.10;
				msg += "シルノエンセット効果補正(10%UP)<br>";
				break;
			case 'A2':
				maAns = maAns * 1.08;
				msg += "ナイトメアセット効果補正(8%UP)<br>";
				break;
			case 'S1':
				maAns = maAns * 1.17;
				msg += "アルカナセット効果補正(17%UP)<br>";
				break;
			}
	msg += "<b>乗算補正後魔法力 = " + maAns + "</b><br>";
	
/*------------------------------
	ウェッポンマスタリー加算補正 
	------------------------------*/
	if(FigFlg == false){
		maAns = eval(maAns) + eval(mst);
		}
	
/*------------------------------
	加算補正 
	------------------------------*/
	switch(magicP){
			case 'ms':
				numMaP = 75;
				maAns += eval(numMaP);
				msg += "OPマジックパワー補正 = +" + numMaP + "<br>";
				break;
			case 'ds':
				numMaP = 99;
				maAns += eval(numMaP);
				msg += "OPマジックパワー補正 = +" + numMaP + "<br>";
				break;
			case 'soe':
				numMaP = 112;
				maAns += eval(numMaP);
				msg += "OPマジックパワー補正 = +" + numMaP + "<br>";
				break;
			case 'tow':
				numMaP = 139;
				maAns += eval(numMaP);
				msg += "OPマジックパワー補正 = +" + numMaP + "<br>";
				break;
			case 'es':
				numMaP = 153;
				maAns += eval(numMaP);
				msg += "OPマジックパワー補正 = +" + numMaP + "<br>";
				break;
			case 'som':
				numMaP = 167;
				maAns += eval(numMaP);
				msg += "OPマジックパワー補正 = +" + numMaP + "<br>";
				break;
			}
	switch(enP){
			case 'ds':
				numEnP = 24;
				maAns += eval(numEnP);
				msg += "OPエンパワー補正 = +" + numEnP + "<br>";
				break;
			case 'soe':
				numEnP = 27;
				maAns += eval(numEnP);
				msg += "OPエンパワー補正 = +" + numEnP + "<br>";
				break;
			case 'es':
				numEnP = 30;
				maAns += eval(numEnP);
				msg += "OPエンパワー補正 = +" + numEnP + "<br>";
				break;
	}
	msg += "<b>加算補正後魔法力 = " + maAns + "</b><br>";

	return maAns;
}


