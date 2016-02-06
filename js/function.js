/* Function.js
 * By Fauzan Muhammad Rifqy
 *
 * This file is use for Sign Up functionality which can pop up sign up form.
 * 
 */

function popUp(){
	var popUpWindow = document.getElementById("fz-id-popUpDaftar");

	if(popUpWindow.style.display === "none" || popUpWindow.style.display == ""){
		popUpWindow.style.display = "block";
	}else{
		popUpWindow.style.display = "none";
	}
	return false;
}

function popUp2(){
	var popUpWindow = document.getElementById("fz-id-popUpDaftar2");
	var targetBlur = document.getElementById("layout-id");

	if(popUpWindow.style.display === "none" || popUpWindow.style.display == ""){
		popUpWindow.style.display = "table";
		targetBlur.className = "layout blur";
	}else{
		popUpWindow.style.display = "none";
		targetBlur.className = "layout";
	}
	return false;
}
