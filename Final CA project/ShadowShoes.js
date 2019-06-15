var productList = [
{name: "Mario's hat",
price: 10.50,
image: "Marios_hat.jpg",
link: "MarioHat.html"},
    
{name: "Mega Man's helmet",
price: 15.00,
image: "MegaMan_helmet.jpg",
link: "MMhelmet.html"},
    
{name: "Fortnite Chug Jug",
price: 15.00,
image: "chugjug.jpg",
link: "Chugjug.html"}];
    
$(document).ready(function () {
    $("#featuredSection").append("<div id='featured'></div>");
    $("#featured").append("<img id='featImg' src='Shadows_shoes.png'>");
    $("#featured").append("<div id='featInfo'> <h1 id='featLine2'>Shadow's hovershoes</h1> <p id='featLine3'>With these hovershoes, you can glide along at super fast speeds, just like Shadow the Hedgehog himself!</p> <p id='prices'>$15.00</p> <button id='buyNow'>BUY NOW</button> </div>");
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