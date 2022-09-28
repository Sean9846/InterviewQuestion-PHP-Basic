document.getElementById("submit").onclick = function() {myFunction()};

function myFunction(){
	test = document.getElementById("uname").value;
	if (test == '')
		document.getElementById("info").innerHTML = "Username can't be empty!";
	else {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("info").innerHTML = this.responseText;
			}			
		};
		xmlhttp.open("GET", "info.php?q=" + test, true);
		xmlhttp.send();
	}
}