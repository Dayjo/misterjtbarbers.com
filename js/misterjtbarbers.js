var backgroundImage = document.getElementById('background');
var queuecam = document.querySelector('.content-block.queuecam');
var queuecam__img = document.getElementById('queuecam__img');
var gallery = document.getElementById('gallery');
var gallery_images = gallery.querySelector('img');

var high_res = 'http://fc8774.myfoscam.org:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=thesite&pwd=sitepassword';
var stream 	= 'http://fc8774.myfoscam.org:88/cgi-bin/CGIStream.cgi?cmd=GetMJStream&usr=thesite&pwd=sitepassword';
var closed_image = 'images/photos/shop-large.jpg';

window.addEventListener('scroll', function(){
	update_background_image();
}, true);

setInterval(update_background_image, 1000);
setInterval(gallery_update, 5000);

function gallery_update(){
	var current = gallery.querySelector('img.current');
	var next = current.nextElementSibling;
	
	// No last one, so get the first one
	if ( next == null ) {
		next = gallery.querySelector('img');
	}

	current.className = "";
	next.className = "current";

}

function update_background_image(){
	if ( window.scrollY >= queuecam.offsetTop  ) {
		backgroundImage.classList.add('two')
	}
	else {
		backgroundImage.classList.remove('two');
	}
}

var d=new Date();
var today = d.getDay();
var tdate = d.getDate();
var month = 1 + d.getMonth();
var year = d.getFullYear();
var hour  = d.getHours();
var weareopen = false;
var openingHours = {1:{"open":9,"close":18},2:{"open":9,"close":18},3:{"open":9,"close":18},4:{"open":9,"close":18},5:{"open":9,"close":19},6:{"open":8,"close":16},0:{"open":0,"close":0}};
var todaysdate = tdate + '-' + month + '-' + year;
var holidays = {'11-1-2012': {}, '12-1-2012': {}, '13-1-2012': {}, '14-1-2012': {}, '15-1-2012': {}, '16-1-2012': {}, '17-1-2012': {}, '18-1-2012': {}, '19-1-2012': {}, '20-1-2012': {}, '21-1-2012': {}, '22-1-2012': {}, '23-1-2012': {}};


if ( !WURFL.is_mobile ) {
	queuecam__img.src = high_res;
	queuecam__img.onload = queuecam__img.onerror = function(){
		this.src = high_res + '&cachebuster=' + Math.random();
	}
}
else {
	queuecam__img.src = stream;
}

if ( ( openingHours[today].open <= hour && openingHours[today].close > hour ) && ( !holidays[todaysdate] || (holidays[todaysdate].open <= hour && holidays[todaysdate].close > hour) )) {
      weareopen = true;
      document.getElementById("queuecam").classList.remove("closed");

} else {
      weareopen = false;
      document.getElementById("queuecam").classList.add("closed");
      queuecam__img.src = closed_image;
}


var form = document.getElementById("contact_form");
var submit_button = document.getElementById("submit_button");

form.onsubmit = function(e) {
	var f = ajax.formToData('contact_form');
	submit_button.innerText = "Sending...";
	submit_button.disabled = true;

	ajax.send("contact.php", "POST", "name=" + f.name + "&email=" + f.email + "&message=" + f.message, null, true, function(data){
		if ( data == "sent" ) {
			form.className = "submitted";
		}
	});

	e.preventDefault();
	return false;
}

/*
var low_res  = 'http://fc8774.myfoscam.org:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=thesite&pwd=sitepassword';

*/
//document.getElementById('queuecam-img').src = 'http://fc8774.myfoscam.org:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=thesite&pwd=sitepassword';
