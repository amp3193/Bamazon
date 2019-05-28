function loadProductList() {
    $.get("/api/products/", displayProductList);
}

function displayProductList(productList) {
    // debug logging to make sure we got data
    console.log(productList);

    // generate the HTML for all of the products that we received
    let html = " ";
    for (let i = 0; i < productList.length; i++) {
        if (i > 0) {
            html += '<p class="divider" />'
        }

        html += getProductHtml(productList[i]);
    }

    // set the HTML on the page
    $("#root").html(html);

    // register the click event for all of the buttons we added.
    // we have to do this AFTER setting the HTML on the page because otherwise
    // we won't be able to look them up by ID.
    for (let i = 0; i < productList.length; i++) {
        const product = productList[i];
        const btnId = `cart-btn-${product.id}`;
        $('#' + btnId).on('click', function() {
            displayCartForProduct(product)
        });
    }
}

// generate the HTML for a single product
function getProductHtml(product) {
    return `
    <div class="card id="product-card">
    <h3>${product.name}</h3>
    <img src="${product.imgSrc}" style="width:100%"
    <p id="product-price">Price: $${product.price} USD</p>
    <p id="product-quantity">Available: ${product.stock_quantity}</p>
    <p><button id="cart-btn-${product.id}">Add to Cart</button></p>
    </p>
    `
}

function displayCartForProduct(product) {
    console.log(product.id);

    // generate the HTML for buying a single product
    let html = `
    <div>
        <h2>Cart</h2>
        <div class="modal-body">
            <h3 id="product-name">${product.name}</h3>
            <p id="product-price">Price: $${product.price} USD</p>
            <p id="product-quantity">Available: ${product.stock_quantity}</p>
            <input id="product-qty" name="quantity" type="number" min="1" max="99" value="1">
        </div>
        <div class="modal-footer">
            <button type="button" id="cancel-btn" class="btn btn-secondary">Cancel</button>
            <button type="button" id="purchase-btn" class="btn btn-success">Purchase</button>
        </div>
    </div>
    `;

    // set the HTML on the page
    $("#root").html(html);

    // register the button listeners
    $("#cancel-btn").on('click', function() {
        loadProductList();
    });
    $("#purchase-btn").on('click', function() {
        const quantity = $("#product-qty").val().trim();
        handlePurchase(product, quantity);
    });
}

function handlePurchase(product, quantity) {
    console.log("handlePurchase: " + product.name + " x " + quantity);

    // TODO request update database and reduce quantity

    // TODO handle success (alert success message, then load product list)

    // TODO handle failure (alert failure message, do NOT load product list)
}

loadProductList();