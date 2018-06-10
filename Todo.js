dele();
var inp = document.getElementById("input");
inp.addEventListener("keydown", function(event) {
	if(event.key == "Enter") {
		var ul = document.getElementById("ul");
		var li = document.createElement("li");
		var i = document.createElement("i");
		var span = document.createElement("span");
		var checkbox = document.createElement("input");
		checkbox.checked=false;
		checkbox.setAttribute("type", "checkbox");
		checkbox.onclick="strike();"
		i.className="fa fa-trash";
		span.appendChild(i);
		li.appendChild(checkbox);
		li.appendChild(span);
		li.appendChild(document.createTextNode(" " + inp.value));
		li.className="add";
		ul.appendChild(li);
		inp.value="";
		dele();
	};
});
function dele() {
	var close = document.getElementsByTagName("span");
	for(var i=0;i<close.length;i++) {
		close[i].addEventListener("click", function() {
			this.parentNode.style.display="none";
		});
	};
};
// striked();
// dele();
// var inp = document.getElementById("input");
// inp.addEventListener("keypress", function(event) {
// 	if(event.key == "Enter") {
// 		var ul = document.getElementById("ul");
// 		var li = document.createElement("li");
// 		var i = document.createElement("i");
// 		var span = document.createElement("span");
// 		i.className="fa fa-trash";
// 		i.setAttribute("onclick","dele()")
// 		span.appendChild(i);
// 		li.appendChild(span);
// 		li.appendChild(document.createTextNode(inp.value));
// 		li.setAttribute("onclick","striked()");
// 		ul.appendChild(li);
// 		inp.value="";
// 	};
// });
// function striked() {
// 	var strike = document.getElementsByTagName("li");
// 	for(var i=0;i<strike.length;i++) {
// 		strike[i].addEventListener("click", function() {
// 			this.classList.toggle("selected");
// 		});
// 	};
// };
// function dele() {
// 	var close = document.getElementsByTagName("span");
// 	for(var i=0;i<close.length;i++) {
// 		close[i].addEventListener("click", function() {
// 			this.parentNode.style.display="none";
// 		});
// 	};
// };