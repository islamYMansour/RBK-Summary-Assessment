


var createbtn = $("#create")

function isChecked(id) {
	return $(id).prop('checked') 
}
$('#create').click(function(){
	console.log(isChecked())		
    var li= document.createElement("li");
	var text = ""
	if(isChecked("#item1") && isChecked("#item2") && isChecked("#item3")) {
		$("#list").append(li)

	}



})





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