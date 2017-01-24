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

function request(method,url,search){
	return new Promise(function (resolve,reject){
		var q=search;
		var xhr = new XMLHttpRequest();
		xhr.open(method, url+"?q="+q,true );
		xhr.onload =function(){
			if(this.readyState == 4 && this.status == 200){
				resolve(xhr.response);
				console.log(this.responseText);
			}else{
				reject({
					status: this.status,
					statusText : xhr.statusText

				});
				document.getElementById("principal").innerHTML="ERROR";
				document.getElementById("principal").style.backgroundColor="red";
			}
		};
		xhr.onerror =function (){
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
			document.getElementById("principal").innerHTML="ERROR";
			document.getElementById("principal").style.backgroundColor="red"; 
		};
		xhr.send();
	});
}