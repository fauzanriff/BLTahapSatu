/* Function.js
 * By Fauzan Muhammad Rifqy
 *
 * This file is use for Sign Up functionality which can pop up sign up form.
 * 
 */

function popUp(){
	var popUpWindow = document.getElementById("fz-id-popUpDaftar");
	//popUpWindow.style.display = popUpWindow.style.display === 'none' ? 'block' : 'none';
	//window.alert("clicked");

	if(popUpWindow.style.display === "none" || popUpWindow.style.display == ""){
		popUpWindow.style.display = "block";
	}else{
		popUpWindow.style.display = "none";
	}
	return false;
}

//document.getElementById("fz-id-daftar").addEventListener("click", popUp);