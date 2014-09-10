/**
 * MP量計算用
 * 
 */
function calcMp(men,menSome,baseMp,LV,set,FigFlg){

	if(FigFlg == true){
		mpAns = "noData." 
		return mpAns;
	}
	
	if(men > 0){
		men = eval(men) + eval(menSome);
		msg += "MEN = " + men + "<br>";
		men = eval(men) + eval(96);
	}	
	men = document.all["intData"].rows[men].cells[1].innerText;
	msg += "MEN係数 = " + men + "<br>";

	baseMp = eval(baseMp) + eval(102);
	baseMp = document.all["intData"].rows[baseMp].cells[1].innerText;
	mpAns = men * baseMp;
	msg += "<b>補正前MP量 = " + mpAns + "</b><br>";

	if(document.maForm.op[4].checked == true){
		mpAns = mpAns * 1.3;
		msg += "OPマナアップ補正(30%UP)<br>";
	}
	if(document.maForm.op[5].checked == true){
		mpAns = mpAns * 1.6;
		msg += "OPアップダウン補正(60%UP(HP-40%))<br>";
	}
	
	var bsoul = document.forms[0].bsoul.value;
	switch(bsoul){
			case '1':
				mpAns = mpAns * 1.10;
				msg += "ブレスザソウルLv.1補正<br>";
				break;
			case '2':
				mpAns = mpAns * 1.15;
				msg += "ブレスザソウルLv.2補正<br>";
				break;
			case '3':
				mpAns = mpAns * 1.20;
				msg += "ブレスザソウルLv.3補正<br>";
				break;
			case '41':
				mpAns = mpAns * 1.25;
				msg += "ブレスザソウルLv.4補正<br>";
				break;
			case '5':
				mpAns = mpAns * 1.30;
				msg += "ブレスザソウルLv.5補正<br>";
				break;
			case '6':
				mpAns = mpAns * 1.35;
				msg += "ブレスザソウルLv.6補正<br>";
				break;
			}
	
	msg += "<b>乗算補正後MP量 = " + mpAns + "</b><br>";

	if(1 <= LV  && LV <= 19){mpAns += 0}
	if(20 <= LV && LV <= 29){
		mpAns += eval(30);
		msg += "ブーストマナLV1(MP+30)<br>";
	}
	if(30 <= LV && LV <= 39){
		mpAns += eval(50);
		msg += "ブーストマナLV2(MP+50)<br>";
	}
	if(40 <= LV && LV <= 47){
		mpAns += eval(70);
		msg += "ブーストマナLV3(MP+70)<br>";
	}
	if(48 <= LV && LV <= 55){
		mpAns += eval(100);
		msg += "ブーストマナLV4(MP+100)<br>";
	}
	if(56 <= LV && LV <= 59){
		mpAns += eval(140);
		msg += "ブーストマナLV5(MP+140)<br>";
	}
	if(60 <= LV && LV <= 65){
		mpAns += eval(152);
		msg += "ブーストマナLV6(MP+152)<br>";
	}
	if(66 <= LV && LV <= 71){
		mpAns += eval(180);
		msg += "ブーストマナLV7(MP+180)<br>";
	}
	if(72 <= LV && LV <= 75){
		mpAns += eval(200);
		msg += "ブーストマナLV8(MP+200)<br>";
	}

	switch(set){
		case 'D1':
			mpAns += eval(147) + eval(92);
			break;
		case 'D2':
			mpAns += eval(169) + eval(105);
			break;
		case 'D3':
			mpAns += eval(239);
			break;
		case 'C1':
			mpAns += eval(284) + eval(177);
			break;
		case 'C2':
			mpAns += eval(314) + eval(196);
			mpAns += eval(171);
			msg += "ブレスドセット効果補正(MP+171)<br>";
			break;
		case 'C3':
			mpAns += eval(225) + eval(141);
			break;
		case 'B1':
			mpAns += eval(345) + eval(216);
			break;
		case 'B2':
			mpAns += eval(377) + eval(236);
			mpAns += eval(206);
			msg += "ブルー ウルヴズローブセット効果補正(MP+206)<br>";
			break;
		case 'B3':
			mpAns += eval(377) + eval(236);
			break;
		case 'B4':
			mpAns += eval(561);
			break;
		case 'A1':
			mpAns += eval(409) + eval(256);
			break;
		case 'A2':
			mpAns += eval(718);
			break;
		case 'A3':
			mpAns += eval(718);
			mpAns += eval(240);
			msg += "マジェスティックローブセット効果補正(MP+240)<br>";
			break;
		case 'A4':
			mpAns += eval(665);
			break;
	}

	msg += "<b>加算補正後MP量 = " + mpAns + "</b><br>";
	return mpAns;

}