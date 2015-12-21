var activenav = "#home";
$(document).ready(function() {
	setupAjax();
	loadVersion();
	$("#m-navbar a, #m-navbar-right a").click(function(event){
		openTemplate($(this).attr("href"));
	});
	var currentHash = window.location.hash;
	console.log(currentHash);
	if(currentHash.indexOf("#")<0){
		currentHash = activenav;
	}
	openTemplate(currentHash);
});
function openTemplate(template){
	if(template==""){template="home";}
	else{template=template.substring(1);}
	$("#m-maincontent").load("template/"+template);
	var old_li = findLiForHash(activenav);
	old_li.removeClass("active");
	var new_li = findLiForHash("#"+template);
	new_li.addClass("active");
	activenav = "#"+template;
}
function findLiForHash(hash){
	return $("#m-navbar")
			.find("a[href='"+hash+"']")
			.closest("li");
}
function setupAjax(){
	$( document ).ajaxStart(function() {
		$("#m-ajax-spinner").show();
	});
	$( document ).ajaxStop(function() {
		$("#m-ajax-spinner").hide();
	});
}
function loadVersion(){
	$("#m-version-footer").load("version.txt");
}