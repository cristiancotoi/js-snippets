// ==UserScript==
// @name        rarbg highlighter
// @namespace   com.alfy
// @description Highlight good movies on rarbg.com
// @include     https://rarbg.to/*
// @version     1
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

function highlightRating(minRating, maxRating, color){
    var divs;
    divs = document.evaluate("//span[contains(text(),'IMDB')]",
            document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    for (index = 0; index < divs.snapshotLength; ++index) {
        var inner = divs.snapshotItem(index).innerHTML;
        var rating = inner.substring(inner.indexOf('IMDB'));
        rating = rating.replace('IMDB: ','');
        rating = rating.replace('/10','');

        if(rating>=minRating && rating<maxRating){
            divs.snapshotItem(index).parentElement.parentElement.style.backgroundColor = color;
        }
    }
}

function highlightKeyword(keyword, color){
    var divs;
    divs = document.evaluate("//span[contains(text(),'IMDB')]",
            document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    for (index = 0; index < divs.snapshotLength; ++index) {
        var inner = divs.snapshotItem(index).innerHTML;

        if(inner.indexOf(keyword)>-1){
          divs.snapshotItem(index).style.backgroundColor = color;
        }
    }
}

function highlightTitle(keyword, color){
    var divs;
    divs = document.evaluate("//table[@class='lista2t']/tbody/tr/td/a[@title]",
            document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    for (index = 0; index < divs.snapshotLength; ++index) {
        var inner = divs.snapshotItem(index).innerHTML;

        if(inner.indexOf(keyword)>-1){
          divs.snapshotItem(index).style.backgroundColor = color;
        }
    }
}

function killByKeyword(keyword){
    var divs;
    divs = document.evaluate("//span[contains(text(),'" + keyword + "')]/parent::*/parent::*",
            document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    for (index = 0; index < divs.snapshotLength; ++index) {
        var inner = divs.snapshotItem(index).innerHTML;

        if(inner.indexOf(keyword)>-1){
          divs.snapshotItem(index).style.display = 'none';
        }
    }
}

function killByRating(minRating, maxRating){
    var divs;
    divs = document.evaluate("//span[contains(text(),'IMDB')]",
            document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    parentDivs = document.evaluate("//span[contains(text(),'IMDB')]/parent::*/parent::*",
            document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    for (index = 0; index < divs.snapshotLength; ++index) {
        var inner = divs.snapshotItem(index).innerHTML;
        var rating = inner.substring(inner.indexOf('IMDB'));
        rating = rating.replace('IMDB: ','');
        rating = rating.replace('/10','');

        if(rating>=minRating && rating<maxRating){
            parentDivs.snapshotItem(index).style.display = 'none';
        }
    }
}


//highlightRating(6, 7, "#A9D");
highlightRating(7, 8, "#CBF");
highlightRating(8, 10, "#FAA");

highlightKeyword('Animation', '#AFA');

highlightTitle('2015', '#AFA');
highlightTitle('2016', '#FCA');
highlightTitle('2017', '#ACF');

killByKeyword('Horror');
killByRating(0,5);
