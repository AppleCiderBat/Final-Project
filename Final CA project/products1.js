var productList = [
{name: "Shadow's hovershoes",
price: 15.00,
image: "Shadows_shoes.png",
link: "ShadowShoes.html"},
    
{name: "Amy Rose's hammer",
price: 10.50,
image: "Amys_hammer.png",
link: "AmyHammer.html"},
    
{name: "Crafting table",
price: 12.50,
image: "crafting_table.jpg",
link: "CraftingTable.html"},
    
{name: "Diamond sword",
price: 20.00,
image: "diamond_sword.jpg",
link: "DiamondSword.html"},
    
{name: "Diamond pickaxe",
price: 25.00,
image: "diamond_pickaxe.jpg",
link: "DiamondPick.html"},
    
{name: "Diamond axe",
price: 18.50,
image: "diamond_axe.jpg",
link: "DiamondAxe.html"},
    
{name: "Health potion",
price: 12.00,
image: "minecraft_healing_potion.jpg",
link: "HealthPot.html"},
    
{name: "Enderpearl",
price: 11.00,
image: "enderpearl.jpg",
link: "Enderpearl.html"}];

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