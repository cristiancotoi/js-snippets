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
	'Graham Norton',
	'Meghan Trainor',
	'Wiz Khalifa',
	'Maroon 5',
	'Passenger',
	'Ed Sheeran',
	'Coldplay',
	'Lorde',
	'David Bowie',
	'Taylor Swift',
	'Ellie Goulding',
	'MAGIC',
	'Bruno Mars',
	'Shawn Mendes',
	'World Cup',
	'Pentatonix',
	'Fifth Harmony',
	'Peter Hollens',
	'Alan Walker',
	'Pitbull',
	'Steve Harvey',
	'BBC Radio 1',
	'Ricky Martin',
	'Valesca Popozuda',
	'Dove Cameron',
	'Rihanna',
	'Cláudia Leitte',
	'Claudia Leitte',
	'Claudia Leite',
	'Sapão',
	'The Chipettes'
];

var removedItems = 0;

function removeVideoWhenLocatorContainsText(locator, name) {
	$(locator).each(function(index,element){
		var text = $(element).text().toLowerCase();
		if(text.indexOf(name.toLowerCase())>-1){
			var $closeBtn = $(element).parents('li>div.yt-lockup-video').find('button.dismiss-menu-choice');
			var btn = $closeBtn.get(0);
                        if(btn) btn.click();
			removedItems++;
		}
	});
}


function removeVideoByArtist(name) {
	removeVideoWhenLocatorContainsText('.yt-uix-tile-link', name);
}

function removeVideoByChannelName(name) {
	removeVideoWhenLocatorContainsText('.yt-uix-sessionlink', name);
}

function injectScriptAndUse() {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
  script.onload = function() {
    console.log('loaded');
	setTimeout(function() {
		titleKeywords.forEach(removeVideoByArtist);
		titleKeywords.forEach(removeVideoByChannelName);
		console.log('Removed', removedItems==0?'no':removedItems, 'items');
	}, 1500);
  };
  head.appendChild(script);
}

injectScriptAndUse();
