//written by jordan
var musicTitles = 
					[ 
						"The Jolly Boys - Hanging on the telephone - track  5 - Great Expectations",
						"Paramore Decode", 
						"Flyleaf - Im So Sick", 
						"Seether - Gasoline", 
						"Blu Cantrell - Breathe" ,
						"Sia - Chandelier",
						"Seether - Truth",
						"Sizzla - I Need You",
						"Seether - Tied My Hands"
					];

var AUDIOTAGJS_AMBIENT_AUDIO = document.createElement('audio'); //needs to be global, so as to be controllable outside and beyond
var RANDOM_STARTUP_TITLE;

$(document).ready(function() 
{
	//establish employme voice welcome element
	
	RANDOM_STARTUP_TITLE = musicTitles [ getRandomValueBasedOnArraySize ( musicTitles ) ];
	AUDIOTAGJS_AMBIENT_AUDIO.setAttribute('src', 'data/audios/'+ RANDOM_STARTUP_TITLE + '.mp3' );
	document.getElementById ( 'ProfileVolumeControlWidgetAreaComponentZero' ).innerHTML = RANDOM_STARTUP_TITLE;
	AUDIOTAGJS_AMBIENT_AUDIO.load()
	AUDIOTAGJS_AMBIENT_AUDIO.addEventListener("load", function() { 
		AUDIOTAGJS_AMBIENT_AUDIO.play(); 
		$(".duration span").html(AUDIOTAGJS_AMBIENT_AUDIO.duration);
		$(".filename span").html(AUDIOTAGJS_AMBIENT_AUDIO.src);
	}, false);

	AUDIOTAGJS_AMBIENT_AUDIO.play ();
});


function getRandomValueBasedOnArraySize ( value )
{//0-len(value)-1
	return Math.floor ( ( Math.random ( ) * ( value.length - 1 ) ) + 0 );
}

