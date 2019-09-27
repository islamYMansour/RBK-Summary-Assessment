


$('#create').click(function(){
	if(getCheckedColor() !== "") {
		$('#list').append($('<li>').append($('<div>').text(getCheckedColor())).addClass(getCheckedColor()))
	}

})


$('#remove').click(function(){
	var listItems = $('#list li')
	for (var i = 0; i < listItems.length; i++) {
		if($(listItems[i]).hasClass(getCheckedColor())) {
			listItems[i].remove();
		}
	}
})

var blue = $("#blue")
var yellow = $("#yellow")
var red = $("#red")

function getCheckedColor(){
	if(blue.prop('checked') && yellow.prop('checked')&& red.prop('checked')) {
		return "black"
	} else if( blue.prop('checked') && yellow.prop('checked')) {
		return "green"
	} else if( yellow.prop('checked')&& red.prop('checked')) {
		return "orange"
	} else if(blue.prop('checked') && red.prop('checked')) {
		return "purple"
	} else if (blue.prop('checked')) {
		return "blue"
	} else if(yellow.prop('checked')) {
		return "yellow"
	} else if(red.prop('checked')) {
		return "red"
	} else {
		return ""
	}
}



// var list = document.getElementById("list");
// var item = document.getElementById("item");
// var color = document.getElementById("color");
// var btn = document.getElementById("btn");

// function addToList(item,color) {
// 	var li= document.createElement("li");
// 	var text = document.createTextNode(item)
// 	li.appendChild(text)
// 	 // li.createText(item)
// 	 list.appendChild(li)
// 	// body...
// }

// function checkColor(){
// 	var myColor =  color.value 
// 	if(myColor === "red" || myColor === "yellow" || myColor === "blue") {
// 		addToList(item.value,myColor)
// }
// 	return myColor

// }

// // btn.onclick() = function(){
// // 	console.log("dkfshfks")

// // }