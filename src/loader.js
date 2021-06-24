/* 
	loader.js
	by chiyeon

	loads the start page based on the 'pages' array in pages.js
*/

// start to build webpage elements
build_page();

// 'hides' all pages that are not selected
// with css class "hidden"
function select_page(page) {
	var containers = document.getElementsByClassName("links-container");
	var navigation_buttons = document.getElementsByTagName("button");
	for(var i = 0; i < containers.length; i++) {
		if(page == i) {
			containers[i].classList.remove("hidden");
			navigation_buttons[i].classList.add("selected");
		} else {
			containers[i].classList.add("hidden");
			navigation_buttons[i].classList.remove("selected");
		}
	}
}

// starter function that creates the proper number of
// pages & populates them with links
function build_page() {

	// set font & colors
	var body = document.getElementById("background");
	body.style.fontFamily = font;
	body.style.backgroundColor = background_color;
	body.style.color = foreground_color;

	// create the pages or link containers for each
	// array element in the pages array
	var num_pages = pages.length;
	for(var i = 0; i < num_pages; i++) {
		// make the first page visible, all others hidden
		var hidden = (i == 0) ? false : true;
		body.innerHTML += generate_link_container(hidden);
	}

	// for each page or 'container', populate corresponding links & titles
	var containers = document.getElementsByClassName("links-container");
	for(var i = 0; i < containers.length; i++) {
		pages[i].forEach(link => {
			containers[i].innerHTML += generate_link_element(link);	
		});
	}

	// finally create the adequate number of 'select page' buttons
	var navigation_container = document.getElementById("navigation");
	for(var i = 1; i <= num_pages; i++) {
		// apply 'selected' css class to first nav button
		var selected = (i == 1) ? true : false;
		navigation_container.innerHTML += generate_navigation_button(i, selected);
	}
}

// creates a link element to a specified url
function generate_link_element(link_data) {
	return `<a class="link" style="color: ${foreground_color}" href=${link_data.link}>${link_data.title}</a>`;
}

// creates a container for each page
function generate_link_container(is_hidden) {
	return `<div class="links-container${is_hidden ? " hidden" : ""}"></div>`
}

// creates a button to select a particular page
function generate_navigation_button(number, is_selected) {
	return `<button style="color: ${alt_foreground_color}" ${is_selected ? 'class="selected" ' : ''}onclick="select_page(${number - 1})">${number}</button>`
}
