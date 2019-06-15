var productList = [
    {name: "Health potion",
    price: 12.00,
    image: "minecraft_healing_potion.jpg",
    link: "HealthPot.html"},
        
    {name: "Diamond pickaxe",
    price: 25.00,
    image: "diamond_pickaxe.jpg",
    link: "DiamondPick.html"},
        
    {name: "Diamond axe",
    price: 20.00,
    image: "diamond_axe.jpg",
    link: "DiamondAxe.html"}];
        
    $(document).ready(function () {
        $("#featuredSection").append("<div id='featured'></div>");
        $("#featured").append("<img id='featImg' src='diamond_sword.jpg'>");
        $("#featured").append("<div id='featInfo'> <h1 id='featLine2'>Diamond sword</h1> <p id='featLine3'>One of the best swords out there, this sword won't break anytime soon!</p> <p id='prices'>$20.00</p> <button id='buyNow'>BUY NOW</button> </div>");
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