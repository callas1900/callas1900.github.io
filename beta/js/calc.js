var maAns;
var mpAns;
var msAns;
var int;
var men;
var wit;
var numMaP;
var FigFlg = false;
var msg;

/**
 * calc()
 * 
 */

function calc(){
	msg   ="<br>";
	try {
		var LV    = document.forms[0].lv.value;
		if(LV > 0){}else{throw "キャラクターレベルは必須入力項目です。"}
		var mAtk  = document.forms[0].wep.value;
		if(mAtk > 0){}else{throw "武器魔法力は必須入力項目です。"}
		var JOB   = document.forms[0].job.value;
		var intSome = document.forms[0].intSome.value;
		var menSome = document.forms[0].menSome.value;
		var witSome = document.forms[0].witSome.value;
		if (eval(intSome) + eval(menSome) + eval(witSome) > 0){throw "染料の合計値を正しくセットしてください。"}
		var set   = document.forms[0].set.value;
		var magicP = document.forms[0].magicP.value;
		var enP = document.forms[0].enP.value;
		var mst = 0;
		var baseMp = document.forms[0].lv.value;
	} catch(e) {
		alert("Error : " + e);
		return;
	}

	switch(JOB){
		case 'HM':
			int = 41;
			men = 39;
			wit = 20;
			FigFlg = false;
			break;
		case 'DM':
			int = 44;
			men = 37;
			wit = 19;
			FigFlg = false;
			break;
		case 'EM':
			int = 37;
			men = 40;
			wit = 23;
			FigFlg = false;
			break;
		case 'OM':
			int = 31;
			men = 42;
			wit = 15;
			FigFlg = false;
			break;
		case 'HF':
			int = 21;
			men = 25;
			wit = 11;
			FigFlg = true;
			break;
		case 'DF':
			int = 25;
			men = 26;
			wit = 12;
			FigFlg = true;
			break;
		case 'EF':
			int = 23;
			men = 26;
			wit = 14;
			FigFlg = true;
			break;
		case 'OF':
			int = 18;
			men = 27;
			wit = 12;
			FigFlg = true;
			break;
		}

	switch(set){
			case 'D2':
				int -= eval(1);
				wit += eval(1);
				msg += "エルブンミスリルセット補正<br>";
				break;
			case 'C1':
				int += eval(4);
				wit -= eval(1);
				msg += "デーモンセット補正<br>";
				break;
			case 'C2':
				int -= eval(1);
				wit += eval(1);
				msg += "ブレスドセット補正<br>";
				break;
			case 'B2':
				int -= eval(2);
				wit += eval(3);
				men -= eval(1);
				msg += "ブルー ウルヴズローブセット補正<br>";
				break;
			case 'B3':
				int += eval(2);
				wit -= eval(3);
				men += eval(1);
				msg += "ドゥームローブセット補正<br>";
				break;
			case 'A4':
				wit += eval(2);
				men -= 2;
				msg += "ダーククリスタルローブセット補正<br>";
				break;
			case 'A1':
				int -= eval(2);
				wit += eval(2);
				msg += "タラムローブセット補正<br>";
				break;
			case 'A2':
				int += eval(2);
				wit -= eval(2);
				msg += "ナイトメアローブセット補正<br>";
				break;
			case 'A3':
				int -= eval(1);
				men += eval(1);
				msg += "マジェスティックローブセット補正<br>";
				break;
			case 'S1':
				int += eval(1);
				wit += eval(1);
				men -= eval(2);
				msg += "アルカナセット補正<br>";
				break;
			}
	//MA計算
	try{
		maAns = calcMa.call(this.mAtk,mAtk,LV,intSome,magicP,enP,mst,set);
	} catch(e) {
		alert("Error : functionException : calcMa");
		return;
	}
	
	//MP計算
	try{
		mpAns = calcMp.call(this.men,men,menSome,baseMp,LV,set,FigFlg);
	} catch(e) {
		alert("Error : functionException : calcMp");
		return;
	}
	//MS計算
	try{
		msAns = calcMs.call(this.wit,wit,witSome,LV,set,FigFlg);
	} catch(e) {
		alert("Error : functionException : calcMs");
		return;
	}


	
	var maAnsIndex = maAns.toString().indexOf(".") + eval(3);
	var mpAnsIndex = mpAns.toString().indexOf(".") + eval(3);
	var msAnsIndex = msAns.toString().indexOf(".") + eval(3);


	document.all.ansMa.innerHTML = maAns.toString().substring(0,maAnsIndex);
	document.all.ansMp.innerHTML = mpAns.toString().substring(0,mpAnsIndex);
	document.all.ansMs.innerHTML = msAns.toString().substring(0,msAnsIndex);
	document.all.result.innerHTML = msg;

	}
	
	
	
