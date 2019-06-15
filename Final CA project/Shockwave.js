var productList = [
    {name: "Amy Rose's hammer",
    price: 10.50,
    image: "Amys_hammer.png",
    link: "AmyHammer.html"},
        
    {name: "Mario's go-kart",
    price: 40.00,
    image: "Marios_go-kart.jpg",
    link: "MarioKart.html"},
        
    {name: "Diamond pickaxe",
    price: 25.00,
    image: "diamond_pickaxe.jpg",
    link: "DiamondPick.html"}];
        
    $(document).ready(function () {
        $("#featuredSection").append("<div id='featured'></div>");
        $("#featured").append("<img id='featImg' src='shockwave_grenade.png'>");
        $("#featured").append("<div id='featInfo'> <h1 id='featLine2'>Fortnite Shockwave Grenade</h1> <p id='featLine3'>Just like in the game, this will launch you high into the air!  Just make sure you have a safe place to land!</p> <p id='prices'>$25.00</p> <button id='buyNow'>BUY NOW</button> </div>");
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