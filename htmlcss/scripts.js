
var list = document.getElementById("list");
var item = document.getElementById("item");
var color = document.getElementById("color");
var btn = document.getElementById("btn");

function addToList(item,color) {
	var li= document.createElement("li");
	var text = document.createTextNode(item)
	li.appendChild(text)
	li.classList.add(color)
	 // li.createText(item)
	 list.appendChild(li)

	// body...
}

function checkColor(){
	var myColor =  color.value
	if(myColor === "red" || myColor === "yellow" || myColor === "blue") {
		addToList(item.value,myColor)
}
	return myColor

}

btn.onclick = function(){
	checkColor()
}