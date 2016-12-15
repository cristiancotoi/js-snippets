/**
* Remove videos from YouTube history if specific keywords are found in title.
*/

var titleKeywords = [
	'Brett Domino',
	'Enrique Iglesias',
	'Shakira',
	'Katy Perry',
	'Alvaro Soler',
	'Major Lazer',
	'Speakeasy Three',
	'The Chainsmokers',
	'Ariana Grande',
	'Anna Kendrick',
	'Shawn Mendes'
];

function removeVideoByArtist(name) {
	console.log('Removing', name);
	$('.yt-uix-tile-link').each(function(index,element){
		var text = $(element).text();
		if(text.indexOf(name)>-1){
			var $closeBtn = $(element).parents('li>div.yt-lockup-video').find('button.dismiss-menu-choice');
			$closeBtn.get(0).click();
		}
	});
}

function injectScriptAndUse() {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
  script.onload = function() {
    console.log('loaded');
	setTimeout(function() {
		titleKeywords.forEach(removeVideoByArtist);
	}, 1500);
  };
  head.appendChild(script);
}

injectScriptAndUse();
