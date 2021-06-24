/*
	pages.js
	
	general config/settings for the myn startpage

	###	PAGES		###
	pages is a multidimensional array of arrays of all the 
	links in the startpage.
	
	each array element is a 'page' array composed of link objects
	that each contain a title and link url.

	the start page with automatically adapt to the number 
	of pages/links present, so as long as the pages array
	is formatted correctly, it'll work :)
*/

var font = "Source Code Pro";						// global page font
var background_color = "#262626";				// background panel color
var foreground_color = "#eeeeee";				// link text color
var alt_foreground_color = "#777777";			// nav button text color
var pages = [
	[
		{
			"title": "youtube",
			"link": "https://www.youtube.com",
		},
		{
			"title": "mail",
			"link": "https://mail.google.com"
		},
		{
			"title": "twitter",
			"link": "https://www.twitter.com"
		}
	],
	[
		{
			"title": "github",
			"link": "https://www.github.com"
		},
		{
			"title": "lh:8060",
			"link": "localhost:8060"
		},
		{
			"title": "lh:8080",
			"link": "localhost:8080"
		}
	],
	[
		{
			"title": "reddit",
			"link": "https://www.reddit.com"
		},
		{
			"title": "unixporn",
			"link": "https://www.reddit.com/r/unixporn"
		},
		{
			"title": "mk",
			"link": "https://www.reddit.com/r/mechanicalkeyboards"
		}
	]
]
