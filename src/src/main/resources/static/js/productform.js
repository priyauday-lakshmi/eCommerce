
// Lakshmi Start


//Development APIs
const addAPI = 'http://localhost:8080/eScriptCoder/add';

//production APIs
//const addAPI = 'XXX/eScriptCoder/add';
//const addAPI = 'https://fsdwebdemospring.azurewebsites.net/item/add';



////production APIs
//// const addAPI = 'https://webdemoedward.azurewebsites.net/product/add';
//// const displayCategoryAPI = 'https://webdemoedward.azurewebsites.net/product/all';
//
//function displayProduct() {
//    //fetch data from database using the REST API endpoint from Spring Boot
//    fetch(displayProductAPI)
//        .then((resp) => resp.json())
//        .then(function (data) {
//            console.log("2. receive data")
//            console.log(data);
//
//            data.forEach(function (product) {
//                const productObj = {
//                    id: product.id,
//                    productName: product.productName,
//                    description: product.description,
//                    inventory: product.inventory,
//                    quantity: product.quantity,
//                    price: product.price,
//                    product_url: product.product_url
//                };
//
//                //This array consist of 12 objects
//                productList.push(productObj);
//            });
//
//            //Display all the 12 objects from the productList array
//            renderProductPage();
//        })
//        .catch(function (error) {
//            console.log(error);
//        });
//}
//
////(3)  Display all products when user launch the product.html page
//function renderProductPage() {
//
//
//    let display = "";
//
//
//    for (let i = 0; i < productList.length; i++) {
//
//        display += `
//        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
//        <div class="card img-fluid" style="width: 14rem;" id="productCard">
//        <a id="item${i + 1}" href="#" data-bs-toggle="modal" data-bs-target="#productModal" onClick="displayDetails(${i + pageStart})">
//            <img src=${filteredProductArray[i].imageURL} class="card-img-top" alt="image">
//                <div class="card-body">
//                    <h5 class="card-title">${filteredProductArray[i].productName}</h5>
//                    <h6 class="card-title">$${filteredProductArray[i].price}</h6>
//                </div>
//        </a>
//        </div>
//    </div>
//       `
//    }
//
//    document.querySelector("#row").innerHTML = display;
//
//} //End of renderProductPage function
//
//function displayDetails(index) {
//    //When user clicks on any "More" button, the details of the selected product will be displayed
//    document.querySelector("#modalName").innerHTML = filteredProductList[index].productName;
//    document.querySelector("#modalDescription").innerHTML = filteredProductList[index].description;
//    document.querySelector("#modalPrice").innerHTML = filteredProductList[index].price;
//    document.querySelector("#modalImg").src = filteredProductList[index].imageURL;
//}

// addProduct(name, description, imageURL, inventory, quantity, price, storeImage)
function addProduct(category_id, productName, description, product_url, inventory, price,
imageObject)
{
    // FormData us an Object provided by the Browser API for us to send the data over to the backend
    const formData = new FormData();
    formData.append('category_id', category_id);
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('product_url', product_url);
    formData.append('inventory', inventory);
    //formData.append('quantity', quantity);
    formData.append('price', price);
    formData.append('imagefile', imageObject);


    fetch(addAPI, {
        method: 'POST',
        body: formData
    })
        .then(function (response) {
            console.log(response.status); // Will show you the status - 200 ok, 500, 404
            if (response.ok) {
                alert("Successfully Added Product!")
            }
            else {
                alert("Something went wrong. Please try again")
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Error adding item to Product")
        });
}


// lakshmi End


















// // Get the form element
// const form = document.querySelector('form');


// // Listen for the form submission event
// let button = document.querySelector("#savebutton");
// button.addEventListener('click', function (e) {
//   e.preventDefault(); // prevent form submission
  
//   // Get the product details from the form
//   const category = document.getElementById('cate').value;
//   const name = document.getElementById('product').value;
//   const quantity = parseInt(document.getElementById('quantity').value);
//   const price = parseFloat(document.getElementById('exampleInputEmail1').value);
//   const description = document.getElementById('exampleInput').value;

  // Check if the quantity is valid
  
  // if (quantity <= 0) {
  //   alert('Quantity must be greater than 0');
  //   return;
  // } else if (quantity > 50) {
  //   alert('Quantity cannot exceed 50');
  //   return;
  // }
   
  

//   
//Global variable - to store the image object
let storeImage = ""


//When user clicks on 'Save Item', calls API to add items to the database
//1)store all the inputs into variables
//2)do validation
//calls a function from the productController.js to access the API to add items to the Database
//3)Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {


   // Prevent default action of the Form submission
   event.preventDefault();
   // Select the inputs
   const category_id = document.querySelector('#Category').value;
   const productName = document.querySelector('#newItemNameInput ').value;
   const description = document.querySelector('#newItemDescription').value;

   //Browser security will not be able to track/store the actual path of where you choose your image
   //C:/user/Desktop/t-shirt_new.jpg
   //C:\\fakepath\\t-shirt_new.jpg
   const product_url = document.querySelector('#productImage').value.replace("C:\\fakepath\\",
   "");
   const inventory = document.querySelector('#inventory').value;
   //const quantity = document.querySelector('#quantity').value;
   const price = document.querySelector('#newItemPrice').value;


   
//       if (quantity <= 0) {
//    alert('Quantity must be greater than 0');
//    return;
//  } else if (quantity > 10) {
//    alert('Quantity cannot exceed 10');
//    return;
//  }
   


  //3) calls a function from the productController.js to access the API to add items to the Database
   addProduct(category_id, productName, description, product_url, inventory, price,
   storeImage); //arguments


});


// select file input
const input = document.querySelector('#productImage');

productImage.addEventListener('change', () => {
   storeImage = input.files[0]; // array of files for us to access
});

