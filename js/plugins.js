/*$(document).ready(function(){
	$('#principal').fadeIn(5000)
});*/


/*function request(url) {
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("principal").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}*/

function request(method,url){
	return new Promise(function (resolve,reject){
		var xhr = new XMLHttpRequest();
		xhr.open(method, url, true);
		xhr.onload =function(){
			if(this.status >=200 && this.status <=300){
				resolve(xhr.response);
				document.getElementById("principal").innerHTML =this.responseText;
			}else{
				reject({
					status: this.status,
					statusText : xhr.statusText
				});
			}
		};
		xhr.onerror =function (){
			reject({
				status: this.status,
				statusText: xhr.statusText

			});
		};
		xhr.send();
	});
}