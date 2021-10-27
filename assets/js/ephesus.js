function toggleNightMode(){
	document.documentElement.setAttribute('data-theme', 'light');
	localStorage.setItem("theme","");
}