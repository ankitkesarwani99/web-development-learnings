/***************** Start *********************************/

const url = "https://fakestoreapi.com/products";
const products = [];

function getProductData(object) {
    for (key in object) {
        const product = {};
        product.image = object[key]['image'];
        product.name = object[key]['title'];
        product.price = object[key]['price'];
        product.rating = object[key]['rating']['rate'];
        products.push(product);
    }
}


function renderProductsContent(products) {
    const div = document.getElementById("container");
    for (let i = 0; i < products.length; i++) {
        const innerDiv = document.createElement('div');
        const image = document.createElement('img');
        image.src = products[i].image;
        image.className = "product-image";

        const Price = document.createElement('h6');
        const priceNode = document.createTextNode(`Price - ${products[i].price}`);
        Price.appendChild(priceNode);
        Price.className = "price-tag";

        const rating = document.createElement('h6')
        const ratingNode = document.createTextNode(`Rating - ${products[i].rating}`);
        rating.appendChild(ratingNode);
        rating.className = "rating-tag";

        const name = document.createElement('h6');
        const nameNode = document.createTextNode(products[i].name);
        name.appendChild(nameNode);
        name.className = "name-tag";

        innerDiv.appendChild(image);
        innerDiv.appendChild(name);
        innerDiv.appendChild(Price);
        innerDiv.appendChild(rating)
        innerDiv.className = "inner-div";
        div.appendChild(innerDiv);
    }
}

function removeProductContent() {
    const parent = document.getElementById("container");
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}

function buttonClickHandler(clickedButtonId) {
    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id === clickedButtonId) {
            buttons[i].classList.add("button_highlighted");
        } else {
            buttons[i].classList.remove("button_highlighted");
        }
    }
}

document.getElementById("btn-price-L-H").addEventListener("click", function btnPriceLowToHigh() {
    buttonClickHandler("btn-price-L-H");
    products.sort((a, b) => (a.price > b.price ? 1 : -1));
    removeProductContent();
    renderProductsContent(products);
});
document.getElementById("btn-price-H-L").addEventListener("click", function btnPriceLHighToLow() {
    buttonClickHandler("btn-price-H-L");
    products.sort((a, b) => (a.price < b.price ? 1 : -1));
    removeProductContent();
    renderProductsContent(products);
});
document.getElementById("btn-rating-L-H").addEventListener("click", function btnRateLowToHigh() {
    buttonClickHandler("btn-rating-L-H");
    products.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    removeProductContent();
    renderProductsContent(products);
});
document.getElementById("btn-rating-H-L").addEventListener("click", function btnRateHighToLow() {
    buttonClickHandler("btn-rating-H-L");
    products.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    removeProductContent();
    renderProductsContent(products);
});

function getMyStoreData() {
    fetch(url).then((response) => {
        return response.json();
    }).then((object) => {
        getProductData(object);
        renderProductsContent(products);
    })
}
getMyStoreData();




/***************** Finish *********************************/




// function getMyStoreData() {
//     const products = callProductApi();
//     console.log(products)
//     renderProductsContent(products);
//     console.log(products)
//     console.log("Request Completed")
// }

// getMyStoreData();

 // const products = callProductApi();
    // products.sort((a, b) => (a.rating > b.rating ? 1 : -1))
    // renderProductsContent(products);


// function callProductApi() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);

//     xhr.onload = function () {
//         console.log(this.responseText);
//         let object = JSON.parse(this.responseText);
//         const products = []
//         console.log(object);

//         for (key in object) {
//             const product = {};
//             product.image = object[key]['image'];
//             product.name = object[key]['title'];
//             product.price = object[key]['price'];
//             product.rating = object[key]['rating']['rate'];
//             products.push(product);
//         }

//         console.log([products]);
//         return products;
//     }
//     xhr.send();
// }


// const url = "https://fakestoreapi.com/products";

// function renderProductsContent(products) {
//     const div = document.getElementById("container");
//     for (let i = 0; i < products.length; i++) {
//         const innerDiv = document.createElement('div');
//         const image = document.createElement('img');
//         image.src = products[i].image;
//         image.className = "product-image";

//         const Price = document.createElement('h6');
//         const priceNode = document.createTextNode(`Price - ${products[i].price}`);
//         Price.appendChild(priceNode);
//         Price.className = "price-tag";

//         const rating = document.createElement('h6')
//         const ratingNode = document.createTextNode(`Rating - ${products[i].rating}`);
//         rating.appendChild(ratingNode);
//         rating.className = "rating-tag";

//         const name = document.createElement('h6');
//         const nameNode = document.createTextNode(products[i].name);
//         name.appendChild(nameNode);
//         name.className = "name-tag";

//         innerDiv.appendChild(image);
//         innerDiv.appendChild(name);
//         innerDiv.appendChild(Price);
//         innerDiv.appendChild(rating)
//         innerDiv.className = "inner-div";
//         div.appendChild(innerDiv);
//     }
// }

// function buttonClickHandler(clickedButtonId) {
//     let buttons = document.querySelectorAll('button');
//     for (let i = 0; i < buttons.length; i++) {
//         if (buttons[i].id === clickedButtonId) {
//             buttons[i].classList.add("button_highlighted");
//         } else {
//             buttons[i].classList.remove("button_highlighted");
//         }
//     }
// }
// function removeProductContent() {
//     const parent = document.getElementById("container");
//     while (parent.firstChild) {
//         parent.firstChild.remove()
//     }
// }
// // document.getElementById("btn-price-L-H").addEventListener("hover", buttonHovered());
// document.getElementById("btn-price-L-H").addEventListener("click", function btnPriceLowToHigh() {
//     buttonClickHandler("btn-price-L-H");
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((object) => {
//         let products = getProductData(object);
//         products.sort((a, b) => (a.price > b.price ? 1 : -1));
//         removeProductContent();
//         renderProductsContent(products);
//     })
// });
// document.getElementById("btn-price-H-L").addEventListener("click", function btnPriceLHighToLow() {
//     buttonClickHandler("btn-price-H-L");
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((object) => {
//         const products = getProductData(object);
//         products.sort((a, b) => (a.price < b.price ? 1 : -1));
//         removeProductContent();
//         renderProductsContent(products);
//     })
// });
// document.getElementById("btn-rating-L-H").addEventListener("click", function btnRateLowToHigh() {
//     buttonClickHandler("btn-rating-L-H");
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((object) => {
//         const products = getProductData(object);
//         products.sort((a, b) => (a.rating > b.rating ? 1 : -1));
//         removeProductContent();
//         renderProductsContent(products);
//     })
// });
// document.getElementById("btn-rating-H-L").addEventListener("click", function btnRateHighToLow() {
//     buttonClickHandler("btn-rating-H-L");
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((object) => {
//         const products = getProductData(object);
//         products.sort((a, b) => (a.rating < b.rating ? 1 : -1));
//         removeProductContent();
//         renderProductsContent(products);
//     })

// });
// function getProductData(object) {
//     const products = [];
//     for (key in object) {
//         const product = {};
//         product.image = object[key]['image'];
//         product.name = object[key]['title'];
//         product.price = object[key]['price'];
//         product.rating = object[key]['rating']['rate'];
//         products.push(product);
//     }
//     return products;
// }
// function getMyStoreData() {
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((object) => {
//         const products = getProductData(object);
//         renderProductsContent(products);
//     })
// }
// getMyStoreData();

