
//PRODUCT SEARCH
function searchProduct() { 
    //store user input in variable, convert to Lower case text
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
     //get product elems and store them in variable
    const products = document.getElementsByClassName('product'); 

    //loop through array of products 
for (i = 0; i < products.length; i++) {
    //if looped element does not includes user input hide element 
    if (!products[i].innerHTML.toLowerCase().includes(input)) { 
        products[i].style.display="none"; 
    } 
    else { 
        //otherwise show element
        products[i].style.display="list-item";                  
    } 
} 
} 

module.exports()