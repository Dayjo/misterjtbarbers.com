var backgroundImage = document.getElementById('background');
var queuecam = document.querySelector('.content-block.queuecam');

window.addEventListener('scroll', function(){
	update_background_image();
}, true);

setInterval(update_background_image, 1000);

function update_background_image(){
	if ( window.scrollY >= queuecam.offsetTop  ) {
		backgroundImage.classList.add('two')
	}
	else {
		backgroundImage.classList.remove('two');
	}
}
/*
var low_res  = 'http://fc8774.myfoscam.org:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=thesite&pwd=sitepassword';
var high_res = 'http://fc8774.myfoscam.org:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=thesite&pwd=sitepassword';

document.getElementById('queuecam-img').src = 'http://fc8774.myfoscam.org:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=thesite&pwd=sitepassword';
document.getElementById('queuecam-img').onload = function(){
	this.src = 'http://fc8774.myfoscam.org:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=thesite&pwd=sitepassword&cachebuster=' + Math.random();
}*/