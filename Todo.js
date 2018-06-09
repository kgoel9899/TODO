var close = document.getElementsByTagName("span");
for(var i=0;i<close.length;i++) {
	close[i].addEventListener("click", function() {
		this.parentNode.style.display="none";
	});
};
var strike = document.getElementsByTagName("li");
for(var i=0;i<strike.length;i++) {
	strike[i].addEventListener("click", function() {
		this.classList.toggle("selected");
	});
};
var inp = document.getElementById("input");
inp.addEventListener("keypress", function(event) {
	if(event.key == "Enter") {
		// var ul = document.getElementById("ul");
		// var li = document.createElement("li");
		// li.appendChild(document.createTextNode(inp.value));
		// var span = document.createElement("span");
		// span.className = "fa fa-times close";
		// li.appendChild(span);
		// ul.appendChild(li);
		this.append("<li><span><i class='fa fa-times close'></i></span>" + inp.value + "</li>");
		inp.value="";

	}
});
