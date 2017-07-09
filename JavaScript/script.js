var left = document.querySelector(".slider_wrap .left");
right = document.querySelector(".slider_wrap .right");

var active_item = document.querySelector(".slider .active");


left.addEventListener("click", function() {
    active_item.classList.remove("active");
    if (active_item.previousElementSibling == null) {
        var index = active_item.parentNode.childElementCount - 1;
        active_item.parentNode.children[index].classList.add("active");
        active_item = active_item.parentNode.children[index];
    } else {
        active_item.previousElementSibling.classList.add("active");
        active_item = active_item.previousElementSibling;
    }
})

right.addEventListener("click", function() {
    active_item.classList.remove("active");
    if (active_item.nextElementSibling == null) {
        active_item.parentNode.children[index].classList.add("active");
        active_item = active_item.parentNode.children[index];
    } else {
        active_item.nextElementSibling.classList.add("active");
        active_item = active_item.nextElementSibling;
    }
})


var human_img = document.querySelector(".human img");

human_img.addEventListener("click", function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x, y);
    var isare = document.createElement("isare");
    isare = screenX;
    isare = screenY;



})