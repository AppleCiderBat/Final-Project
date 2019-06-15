var productList = [
{name: "Proto Man's helmet",
price: 20.00,
image: "Protomans_helmet.jpeg",
link: "PMhelmet.html"},
    
{name: "Mega Man's Mega Buster",
price: 15.00,
image: "Megaman_megabuster.jpg",
link: "MMbuster.html"},
    
{name: "Proto Man's Buster",
price: 18.50,
image: "Protomans_megabuster.jpg",
link: "PMbuster.html"},
    
{name: "Sans' jacket",
price: 12.99,
image: "Sans_jacket.jpg",
link: "Sans.html"},

{name: "Sora's Keyblade",
price: 19.50,
image: "Soras_keyblade.jpg",
link: "Keyblade.html"},
    
{name: "Pok&eacute;ball",
price: 8.50,
image: "pokeball.jpg",
link: "Pokeball.html"},
    
{name: "Fortnite Chug Jug",
price: 15.00,
image: "chugjug.jpg",
link: "Chugjug.html"},
    
{name: "Fortnite Shockwave Grenade",
price: 25.00,
image: "shockwave_grenade.png",
link: "Shockwave.html"}];
    
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