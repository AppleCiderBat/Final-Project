var productList = [
{name: "Amy Rose's hammer",
price: 10.50,
image: "Amys_hammer.png",
link: "AmyHammer.html"},

{name: "Pok&eacute;ball",
price: 8.50,
image: "pokeball.jpg",
link: "Pokeball.html"},

{name: "Fortnite Chug Jug",
price: 15.00,
image: "chugjug.jpg",
link: "Chugjug.html"}];

function visitPage() {
    window.location="BlueShell.html";
}

$(document).ready(function () {
    $("#featuredSection").append("<div id='featured'></div>");
    $("#featured").append("<img id='featImg' src='Blue_shell.png' alt='Spikey blue shell'>");
    $("#featured").append("<div id='featInfo'><p id='featLine1'>Featured Product</p> <h1 id='featLine2'>The Blue Shell</h1> <p id='featLine3'>This weapon of mass frustration to those in first place is now available to take home!<br>We do, however, advise...</p> <button id='learnMore' onclick='visitPage()'>LEARN MORE</button> </div>");
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