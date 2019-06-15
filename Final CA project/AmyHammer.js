var productList = [
{name: "Shadow's hovershoes",
price: 15.00,
image: "Shadows_shoes.png",
link: "ShadowShoes.html"},

{name: "Mega Man's helmet",
price: 15.00,
image: "MegaMan_helmet.jpg",
link: "MMhelmet.html"},

{name: "Diamond sword",
price: 20.00,
image: "diamond_sword.jpg",
link: "DiamondSword.html"}];

$(document).ready(function () {
    $("#featuredSection").append("<div id='featured'></div>");
    $("#featured").append("<img id='featImg' src='Amys_hammer.png'>");
    $("#featured").append("<div id='featInfo'> <h1 id='featLine2'>Amy's hammer</h1> <p id='featLine3'>This hammer always fits its user, and is a great weapon against robots!</p> <p id='prices'>$10.50</p> <button id='buyNow'>BUY NOW</button> </div>");
    productList.forEach(function (product){
        buildProduct(product)
    })
});

function buildProduct(product) {
    var productHTML = `<div class="product">
    <a href='${product.link}'>
        <img class="productPhoto" src='${product.image}'/>
    </a>
    <h3>${product.name}</h3>
    <p>$${product.price.toFixed(2)}</p>
    </div>`;
    $(".products").append(productHTML);
};

$(document).ready(function () {
    $("#social").prepend("<p id='rightSide'>Contact Us</p>",
    "<p id='phone'><b>Phone:</b> (101) 010-9999",
    "<p id='fakeAddress'><b>Address:</b> 999 Glitch Ave<br>Nowhere, SC, 12345</p>",
    "<p><a id='facebook' href='https://www.facebook.com/'> <i class='fa fa-facebook-square'></i>  Like us on Facebook</a></p>",
    "<p><a id='twitter' href='https://twitter.com/'> <i class='fa fa-twitter'></i>  Follow us on Twitter</a></p>");
});