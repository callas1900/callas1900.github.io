/**
 * 詠唱速度計算用
 * 
 */
function calcMs(wit,witSome,LV,set){

	
	if(wit > 0){
		wit = eval(wit) + eval(witSome);
		msg += "WIT = " + wit + "<br>";
		wit = eval(wit) + eval(174);
	}	

	wit = document.all["intData"].rows[wit].cells[1].innerText;
	msg += "WIT係数 = " + wit + "<br>";
	msAns = 333 * wit;
	msg += "<b>補正前詠唱速度 = " + msAns + "</b><br>";

	if(document.maForm.op[3].checked == true){
		msAns = msAns * 1.15;
		msg += "OPアキュメン補正(15%UP)<br>";
	}

	if(FigFlg == false){
		if(1 <= LV  && LV <= 25){msAns += 0}
		if(25 <= LV && LV <= 39){
			msAns = msAns * 1.05;
			msg += "ファスト スペル キャスティングLV1(5%)<br>";
		}
		if(40 <= LV && LV <= 55){
			msAns = msAns * 1.07;
			msg += "ファスト スペル キャスティングLV2(7%)<br>";
		}
		if(56 <= LV && LV <= 75){
			msAns = msAns * 1.1;
			msg += "ファスト スペル キャスティングLV3(10%)<br>";
		}
	} else if(FigFlg == true){
		msg += "ファイター補正（詠唱）<br>";
	}

	switch(set){
		case 'D3':
			msAns = msAns * 1.05;
			msg += "誓いのコート効果補正(5%UP)<br>";
			break;
		case 'C3':
			msAns = msAns * 1.15;
			msg += "カルミセット効果補正(15%UP)<br>";
			break;
		case 'B4':
			msAns = msAns * 1.15;
			msg += "アバローブセット効果補正(15%UP)<br>";
			break;
		case 'A1':
			msAns = msAns * 1.15;
			msg += "タラムローブセット効果補正(15%UP)<br>";
			break;
		case 'A3':
			msAns = msAns * 1.15;
			msg += "マジェスティックローブセット効果補正(15%UP)<br>";
			break;
		case 'A4':
			msAns = msAns * 1.15;
			msg += "ダーククリスタルローブセット効果補正(15%UP)<br>";
			break;
	}
	var bs = document.forms[0].bs.value;
	var ac = document.forms[0].ac.value;
	switch(bs){
			case '1':
				msAns = msAns * 1.05;
				msg += "バサクLv.1補正<br>";
				break;
			case '2':
				msAns = msAns * 1.08;
				msg += "バサカLv.2補正<br>";
				break;
			}
	switch(ac){
			case '1':
				msAns = msAns * 1.15;
				msg += "アキュメンLv.1補正<br>";
				break;
			case '2':
				msAns = msAns * 1.23;
				msg += "アキュメンLv.2補正<br>";
				break;
			case '3':
				msAns = msAns * 1.30;
				msg += "アキュメンLv.3補正<br>";
				break;
			}
	msg += "<b>乗算補正後詠唱速度 = " + msAns + "</b><br>";
	return msAns;
}