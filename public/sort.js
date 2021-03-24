//SORT PRODUCTS if html select elements are targeted
//when the value of element has been changed
$(document).on("change", ".products-sorting", function() {
//sorting method stores value of this
    const sortingMethod = $(this).val();
// if select option is l2h  -- FIRE FUNCTION
    if(sortingMethod == 'l2h')
    {
        sortProductsPriceAscending();
    }
// if select option is h2l
    else if(sortingMethod == 'h2l')
    {
        sortProductsPriceDescending();
// if select option is type
    } else if( sortingMethod == 'type'){
        sortProductsByType();
// if select option is size
    } else if( sortingMethod == 'size'){
        sortProductsBySize();
    }

});



// store sorted items to const- reusable chunk of code for various sorting methods
const appendSortedItems= (sorted)=> {
// create div
    let row= document.createElement('div');
//add class of row row-swap to div
    $(row).addClass('row row-swap');
//send get request to get sorted function and store in let variable
    let got= $(sorted).get()
   //remove column
    $('.col-swap').remove()
   //remove row
    $('.row-swap').remove()
//loop through array of elements $(sorted).get
for (let i = 0; i < got.length; i++) {
 //get single element iterating             
    const element = got[i];
// create div
    let col= document.createElement('div')  
// add class of col
    $(col).addClass('col-lg-3 col-md-6 mb-4');
//append col to div -row
    $(col).appendTo(row)
// append element to col
    $(element).appendTo(col)
//append row to main div container
    $(row).appendTo('#list')
}
}
//get main container #list
const $cont = $('#list'); 

//REUSABLE SORTING ASCENDING AND DESCENDING FUNCTIONS
//sort ascending function stored in a const
const sortAscending= (data)=> {
//find .product within container and fire function .sort passing 2 attributes of data (a,b)
      let sorted= $cont.find('.product').sort(function(a, b)  
        { 
          //return a.data  - b.data to sort elements
            return  a.getAttribute(data) -  
           b.getAttribute(data); 
        })
   //append elements
        appendSortedItems(sorted)
}

//sort descending function stored in a const
const sortDescending= (data)=> {
//find .product within container and fire function .sort passing 2 attributes of data (a,b)
      let sorted= $cont.find('.product').sort(function(a, b)  
        { 
    //return b.data  - a.data to sort elements
            return  b.getAttribute(data) -  
            a.getAttribute(data); 
        })
//append elements
        appendSortedItems(sorted)
}

//sorting functions, sort items by price, type, size

//SORT PRODUCTS BY PRICE ASCENDING
function sortProductsPriceAscending()
{
  //store data-price in const so we can target elements with this value
    const d= 'data-price'
   //fire function sortAscending passing as parameter d
     sortAscending(d)
}



// SORT PRODUCTS BY PRICE DESCENDING
function sortProductsPriceDescending()
{   //store data-price in const so we can target elements with this value

       const d= 'data-price'
   //fire function sortDescending passing as parameter d
     sortDescending(d)
}

//SORT PRODUCTS BY TIPE
function sortProductsByType(){
   const d= 'data-category'
   //fire function sortAscending passing as parameter d
     sortAscending(d)
}

function sortProductsBySize(){
  //store data-price in const so we can target elements with this value
const d= 'data-size'
//fire function
     sortAscending(d)
}