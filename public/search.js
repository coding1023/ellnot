$(document).ready(function(){
//on keyup function, when user types in searchbar input
$(document).on('keyup', '#searchbar',function(){
//store user input in variable, convert to Lower case text
let input = $('#searchbar').val()
//if input is not a number
if(isNaN(input)){
//transform input to lower case 
  input=input.toLowerCase(); 
//otherwise parse string and return floating number
    } else {
        parseFloat(input)
    }
//get product elems and store them in variable
    const products = $('.product'); 
//get nav link active targeting selected category by user
    let navLinkCategoriesActive= $("ul#tabs li a.active").html().toLowerCase()
//loop through array of products 
for (i = 0; i < products.length; i++) {
  //get product html
 let productText= products[i].innerHTML.toLowerCase();
// get product category
    let productCategory= $(products[i]).find('.category-txt').html().toLowerCase()
//get category: All link
        let navLinkShowAll= 'All';
//make sure it is a string
        String(navLinkShowAll)
 // if product innerHtml does not have chars not = to input
    if (!productText.includes(input)){ 
     products[i].style.display="none"; 
}
// if product innerHtml  have chars = to input 
    else if(productText.includes(input))
    {      
// if product category of product is = to nav link active of specific category: or nav link active is = to nav link all
if( productCategory == navLinkCategoriesActive ||       navLinkCategoriesActive == navLinkShowAll.toLowerCase() ){
//show element
    products[i].style.display="block"; 
        } 
// if category of product is not = to nav link active of specific category:
    else if(productCategory !== navLinkCategoriesActive || productCategory !== navLinkShowAll.toLowerCase() ){
  //hide element
  products[i].style.display="none"; 
  //otherwise
  }    else{
    //show element
    products[i].style.display="block"; 
        }       
      } 
    } 
   } );

//JQUERY
 
//FILTER
//view all or category

//get product card
let items = $('.product');
//get cat-link buttons and add function on click
let buttons = $('.cat-link').click(function() {
//if btn id is = all
  if (this.id == 'all') {
 //show elements
    items.show();
//otherwise
  } else {
//
    let element = $('.' + this.id).show();
 //elements that are not = element are hidden
    items.not(element).hide();
  }
//remove class of active from buttons
  buttons.removeClass('active');
//add class of active to clicked (active) button
  $(this).addClass('active');
})

});