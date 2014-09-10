function opCheck(){
if(document.maForm.op[0].checked == true){
				 document.all.opMp.style.display = 'none';
				 document.all.opEp.style.display = 'none';
				 document.forms[0].magicP.value = '1';
				 document.forms[0].enP.value = '1';
	}
if(document.maForm.op[1].checked == true){
				 document.all.opMp.style.display = 'block';
				 document.all.opEp.style.display = 'none';
				 document.forms[0].enP.value = '1';
	}
if(document.maForm.op[2].checked == true){
				 document.all.opMp.style.display = 'none';
				 document.all.opEp.style.display = 'block';
				 document.forms[0].magicP.value = '1';
	}
if(document.maForm.op[3].checked == true){
				 document.all.opMp.style.display = 'none';
				 document.all.opEp.style.display = 'none';
				 document.forms[0].magicP.value = '1';
				 document.forms[0].enP.value = '1';
	}
if(document.maForm.op[4].checked == true){
				 document.all.opMp.style.display = 'none';
				 document.all.opEp.style.display = 'none';
				 document.forms[0].magicP.value = '1';
				 document.forms[0].enP.value = '1';
	}
if(document.maForm.op[5].checked == true){
				 document.all.opMp.style.display = 'none';
				 document.all.opEp.style.display = 'none';
				 document.forms[0].magicP.value = '1';
				 document.forms[0].enP.value = '1';
	}
}


function resetEnchant(){
	document.forms[0].enpa.value  = '0';
	document.forms[0].bs.value    = '0';
	document.forms[0].bsoul.value = '0';
	document.forms[0].ac.value    = '0';
}

function resetSome(){
	document.forms[0].intSome.value = '0';
	document.forms[0].menSome.value = '0';
	document.forms[0].witSome.value = '0';
}

function contSome(){

	if( document.forms[0].job.value == 'HF' || 
		document.forms[0].job.value == 'EF' ||
		document.forms[0].job.value == 'DF' ||
		document.forms[0].job.value == 'OF') {
			document.forms[0].menSome.disabled = 'disabled';
			document.forms[0].menSome.value = '0';
	} else {
		document.forms[0].menSome.disabled = '';
	}

}


