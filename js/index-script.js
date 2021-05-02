function btn_srch_click() {
  	var s = document.getElementById("txt-srch").value;
  	alert("searched for " + s);
}

function getSearchText(){
	return document.getElementById("txt-srch").value;
}


function setElementText(id,text) {
	document.getElementById(id).innerHTML = text;
}


