function initialize() {
  var div = document.getElementById('items');
  
}


var breakout = {
  image: "./imgs/Breakout.png",
  name: "Breakout",
  price: "$100.00"
}
var dominus = {
  image: "./imgs/Dominus.png",
  name: "Dominus",
  price: "$200.00"
}
var mantis = {
  image: "./imgs/Mantis.png",
  name: "Mantis",
  price: "$300.00"
}
var merc = {
  image: "./imgs/Merc.png",
  name: "Merc",
  price: "$400.00"
}

var octane = {
  image: "./imgs/Octane.png",
  name: "Octane",
  price: "$500.00"
}

var items = [breakout,dominus,mantis,merc,octane]

function createItemList(){
  var itemList = document.getElementById("itemList");
  for(i=0;i < items.length;i++){

    console.log(items[i]);

    var div = document.createElement("div");
    var img = document.createElement("img");
    var name = document.createElement("h5");
    var price = document.createElement("h6");

    div.classList.add("item")

    img.src = items[i].image;
    img.classList.add("item-image");

    name.innerHTML = items[i].name;
    name.classList.add("item-name")

    price.innerHTML = items[i].price;
    price.classList.add("item-price")

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);

    itemList.appendChild(div);
  }
}
