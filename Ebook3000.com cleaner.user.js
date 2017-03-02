// ==UserScript==
// @name       Ebook3000.com cleaner
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @copyright  2014, Cristian Cotoi
// @include    http://www.ebook3000.com/index_*
// @include    http://www.ebook3000.com/
// @include    http://ebook3000.com/index_*
// @include    http://ebook3000.com/
// @grant      gm_getValue
// @grant      gm_setValue
// ==/UserScript==

function remover(text){
	var allDivs;
	//console.log("Looking for: " + text);
	allDivs = document.evaluate("//div[@class='index_box_tools']/a[contains(text(),'"+text+"')]/parent::div/parent::div",
		document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	//console.log(text + ": " + allDivs.snapshotLength);
	for (var i = 0; i < allDivs.snapshotLength; i++) {
		allDivs.snapshotItem(i).style.display='none';
	}
}

function skipLanguages(text){
	var allDivs;
	//console.log("Looking for: " + text);
	allDivs = document.evaluate("//div[contains(@class,'index_box_info')][contains(text(),'"+text+" |')]/parent::div",
		document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	//console.log(text + ": " + allDivs.snapshotLength);
	for (var i = 0; i < allDivs.snapshotLength; i++) {
		allDivs.snapshotItem(i).style.display='none';
	}
}

function blockSpecificItems(text){
	var allDivs;
	//console.log("Looking for: " + text);
	allDivs = document.evaluate("//div[contains(@class,'index_box_title')]/a[contains(text(),'"+text+"')]/parent::div/parent::div",
		document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	//console.log(text + ": " + allDivs.snapshotLength);
	for (var i = 0; i < allDivs.snapshotLength; i++) {
		allDivs.snapshotItem(i).style.display='none';
	}
}

function highlighter(text, foreground, bckcolor){
	var allDivs;
	allDivs = document.evaluate("//div[@class='index_box_tools']/a[contains(text(),'"+text+"')]/parent::div/parent::div",
		document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = 0; i < allDivs.snapshotLength; i++) {
		allDivs.snapshotItem(i).style.background = bckcolor;
		allDivs.snapshotItem(i).style.color = foreground;
	}
}

remover("For Men");
remover("For Women");
remover("Novel");
remover("Fashion & Lifestyle");

remover("Comics");
remover("Newspaper");
remover("Sports");

skipLanguages("German");
skipLanguages("French");
skipLanguages("Spanish");
skipLanguages("Italian");

blockSpecificItems("Supermodel");

highlighter("Cooking", "#A00", "#beb");
highlighter("Business", "#A00", "#aaa");
highlighter("Finances", "#A00", "#ccf");
highlighter("Family", "#A00", "#fcf");
highlighter("Relationship", "#A00", "#fcf");