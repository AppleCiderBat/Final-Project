var productList = [
{name: "Jet's Extreme Gear",
price: 30.00,
image: "Jets_EG.png",
link: "JetEG.html"},
    
{name: "Wave's Extreme Gear",
price: 25.00,
image: "Waves_EG.png",
link: "WaveEG.html"},
    
{name: "Storm's Extreme Gear",
price: 26.00,
image: "Storms_EG.png",
link: "StormEG.html"},
    
{name: "Mario's hat",
price: 10.50,
image: "Marios_hat.jpg",
link: "MarioHat.html"},

{name: "Luigi's hat",
price: 10.50,
image: "Luigis_hat.jpg",
link: "LuigiHat.html"},
    
{name: "Mario's go-kart",
price: 40.00,
image: "Marios_go-kart.jpg",
link: "MarioKart.html"},
    
{name: "The Blue Shell",
price: 13.50,
image: "Blue_shell.png",
link: "BlueShell.html"},
    
{name: "Mega Man's helmet",
price: 15.00,
image: "MegaMan_helmet.jpg",
link: "MMhelmet.html"}];
    
$(document).ready(function () {
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