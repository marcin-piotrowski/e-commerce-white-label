function toggleNightMode(){
	document.documentElement.setAttribute('data-theme', 'light');
	document.getElementById('mode-switcher').classList.remove('active');
	localStorage.setItem("theme","");
}