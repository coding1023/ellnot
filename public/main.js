


//JQUERY
$(document).ready(function(){
 

//CART
//if the document is still loading.
if (document.readyState == 'loading') {
    //wait for the entire HTML page to be parsed
    document.addEventListener('DOMContentLoaded', ready)
} else {
    //fire function ready
    ready()
}

function ready() {
    //get all remove items button from cart elements
    const removeCartItemButtons = $('.btn-danger')
    //loop through buttons elems
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        const button = removeCartItemButtons[i]
        //click on single button elem to fire removeCartItem function
       $(button).click(removeCartItem)
    }



//get quantity inputs elements from cart elems
let quantityInputs = $('.cart-item-quantity')
//loop through elems
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        //on change fire function changeQuantity
        $(input).change(changeQuantity);
    }

    //get add to cart buttons
const addToCartBtn= $('.add-to-cart-btn')
    //loop through buttons elems
    for (let i = 0; i < addToCartBtn.length; i++) {
        let button = addToCartBtn[i]
         //click on single button elem to fire addToCart function
        $(button).click(addToCart)
    }
 //when user clicks on button fires purchase function 
    $('.btn-purchase').click(purchase)


//ADD TO CART
function addToCart(e) {
    //store the btn that triggered event in button variable
    const button = e.target
//target product (second parents of button)
const product = $(button).parents()[1];
// get product title
    const title = $(product).find('.product-title:eq(0)').text();
    //get product price
    const price = $(product).find('.item-price:eq(0)').text()
    //get image src
    const imageSrc = $(product).find('.product-image:eq(0)').attr('src')
    //get value of checked radio button with name of size within div with class 'sizes'
    const size = $(product).find('.input-size[name=size]:checked', '.sizes').val()
    //fire functions:
    addItemToCart(title, price, imageSrc, size)
    updateCartTot()
    console.log($(product).find('.product-image:eq(0)').attr('src'));
}


 //CREATE INSTANCE OF ITEM TO BE ADDED TO CART
function addItemToCart(title, price, imageSrc, size) {
    //create and store cart row elem in const
    const cartRow = document.createElement('div')
   //add cart row class to div
    $(cartRow).addClass('cart-row row')
    //get cart container elem
    const cartProducts = $('.cart-container')[0]
    //add class container to elem
    $(cartProducts).addClass('container')
    //create content to append to cart row
     if (size !== undefined) {
     let content = ` 
        <div class="cart-item cart-column col-md-2 mt-4">
           <span class="title text-danger">${title}</span>
           </div> 
            <div class="cart-item cart-column col-md-2 mt-4">
              <img class="cart-item-image img-fluid" src="${imageSrc}" width="150" height="100">
        </div>  <div class="cart-item cart-column col-md-2 mt-4">
          <span class="size text-danger">Size ${size}</span></div> 
           <div class="cart-item cart-column col-md-2 mt-4">
         <span class="cart-price text-success cart-column">${price}</span></div>
        <div class="cart-quantity cart-column col-md-2 mt-4">
            <input class="cart-item-quantity" type="number" value="1">
            </div>
            <div class="col-md-2 mt-4">
            <button class="btn btn-sm btn-danger" type="button">REMOVE</button>
        </div>  </div>`
        //add content to cartRow
    $(cartRow).html(content);
    //append cartRow to div
    $(cartProducts).append(cartRow)
    //remove cart item on click firing function
    $(cartRow).find('.btn-danger').click(removeCartItem)
    //change quantity firing changeQuantity function
    $(cartRow).find('.cart-item-quantity').change(changeQuantity)
    } else{
        alert('Please choose product size!');
    }
}


//PURCHASE
function purchase() {
    //alert message to user
    alert('Thank you for your purchase')
    //get cart items first elements
    let itemsToCart = $('.cart-container')[0]
    //while loop -until the node has child nodes
    while (itemsToCart.hasChildNodes()) {
        //remove child element (elem in cart)
        itemsToCart.removeChild(itemsToCart.firstChild)
    }
    //fire function updateCartTot
    updateCartTot()
}


//UPDATE CART TOTAL
function updateCartTot() {
    //get cart container
    let productContainer = $('.cart-container')[0]
        //get cart row within container
    let cartRows = $(productContainer).find('.cart-row');
    //init var tot of 0
    let tot = 0
    //loop through cart rows elems
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        //get price element in cart
        let priceElement = $(cartRow).find('.cart-price')[0]; 
        //get quantity elem in cart
        let quantityEl = $(cartRow).find('.cart-item-quantity')[0]
        //replace parsed value of price elem inner text with empty string to reset tot price value
        let price = parseFloat(priceElement.innerText.replace('£', ''))
        //get value of item quantity
        let quantity = $(quantityEl).val()
        //get total multiplying price with quantity
        tot = tot + (price * quantity)
    }
    //round up tot value
    tot = Math.round(tot * 100) / 100
    //display tot amount value
    $('.cart-total-amount').text('£' + tot)
    
}
 //REMOVE CART ITEM
function removeCartItem(e) {
    //store the btn that triggered event in button variable
    let button = e.target
    //remove div.cart-row
    $(button).parent().parent().remove()
    //fire function to update cart total
    updateCartTot()
}


//CHANGE QUANTITY
function changeQuantity(e) {
   //store the input that triggered event in variable
    let input = e.target
    //if val of input is not a number or is <= 0 assign val to 1
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    //update total
    updateCartTot()
}

}


let main= $('#main-image')
let thumb1=$('#thumbnail1')
let thumb2=$('#thumbnail2')

allImgMain= $('.product-image')
allThumb1= $('.thumbnail');
allThumb1Img= $('.thumbnail').children('img').eq(0)

//CHANGE IMAGE ON HOVER (element hovered, change src of this elem, second elem selected)
 function changeImageHover(hoverSel,changeSrcSel,secondSel) {
//if hover on element, add function click, mouseover, mouseout
$(hoverSel).on({
    'click mouseover mouseout ': function() {
    //store in var: is  hovered,clicked,mouseout elem src = to main image src? 
         var src = ($(this).attr('src') === $(changeSrcSel).attr('src'))
    //if true- return main image src
         ? $(changeSrcSel).attr('src') //else  change main img src to hovered thumbnail 1 img source
             : $(hoverSel).attr('src')
         $(changeSrcSel).attr('src', src); 
//change thumbnail 1 hovered img source to thumbnail 2 source
         $(this).attr('src', $(secondSel).attr('src'))
//change thumbnail 2 src to thumbnail 1 src as done with main img
            $(secondSel).attr('src', src)
     }
});
 }

//fire functions for each cards (thumbnail x of card x,main img of cardx and thumbnail 2 of cardx )
changeImageHover(thumb1, main, thumb2 )
changeImageHover($('#t1Card2'), $('#mainImageCard2'), $('#t2Card2') )
changeImageHover($('#t1Card3'), $('#mainImageCard3'), $('#t2Card3') )
changeImageHover($('#t1Card4'), $('#mainImageCard4'), $('#t2Card4') )
changeImageHover($('#t1Card5'), $('#mainImageCard5'), $('#t2Card5') )
changeImageHover($('#t1Card6'), $('#mainImageCard6'), $('#t2Card6') )
changeImageHover($('#t1Card7'), $('#mainImageCard7'), $('#t2Card7') )
changeImageHover($('#t1Card8'), $('#mainImageCard8'), $('#t2Card8') )
changeImageHover($('#t1Card9'), $('#mainImageCard9'), $('#t2Card9') )
changeImageHover($('#t1Card10'), $('#mainImageCard10'), $('#t2Card10') )
changeImageHover($('#t1Card11'), $('#mainImageCard11'), $('#t2Card11') )
changeImageHover($('#t1Card12'), $('#mainImageCard12'), $('#t2Card12') )
changeImageHover($('#t1Card13'), $('#mainImageCard13'), $('#t2Card13') )



//disable right click option
// contextmenu event is sent to  element when the right button of the mouse is clicked on it, but before the context menu is displayed
   $("img").on("contextmenu",function(){
  //return false - menu won’t open
       return false;
    }); 



})
