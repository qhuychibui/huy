// fetch("https://fakestoreapi.com/products/category/men's clothing")
//             .then(res=>res.json())
//             .then(json=>console.log(json))

isLogin = sessionStorage.getItem("isLogin");

if(!isLogin){
    window.location.href = "../index.html"
}

let cart_products = localStorage.getItem("cart")
let email = sessionStorage.getItem("email")

cart_products = JSON.parse(cart_products)

if(cart_products.length > 0) {
    let cart = document.getElementById('cart');
    let product_items = ``;

    for(let i = 0; i < cart_products.length; i++) {
        if(cart_products[i].email === email){
            product_items += `
                <div class="product">
                    <img src="${cart_products[i].image}" alt="" class="image">
                    <div class="name">
                        ${cart_products[i].name}
                    </div>
                    <div class="price">
                        ${cart_products[i].price} VND
                    </div>
                    <div class="quantity">
                        <button onclick="decreaseQuantity('${cart_products[i].id}')">-</button>
                        <span id="quantity-${cart_products[i].id}">${cart_products[i].quantity}</span>
                        <button onclick="increaseQuantity('${cart_products[i].id}')">+</button>
                    </div>
                    <button class="status" onclick="deleteProduct('${cart_products[i].id}')">Xóa</button>
                </div>`;
        }
        
    }
    cart.innerHTML = product_items;
}

const increaseQuantity = (id) => {
    let cart_products = localStorage.getItem("cart")
    cart_products = JSON.parse(cart_products)

    for(let i=0; i<cart_products.length; i++){
        if (cart_products[i].id === id){
            cart_products[i].quantity += 1
            document.getElementById(`quantity-${cart_products[i].id}`).innerHTML = cart_products[i].quantity
            localStorage.setItem("cart", JSON.stringify(cart_products))
            break
        }            
    }
};


const decreaseQuantity = (id) => {
    let cart_products = localStorage.getItem("cart")
    cart_products = JSON.parse(cart_products)
    
    for(let i=0; i<cart_products.length; i++){
        if (cart_products[i].id === id){
            cart_products[i].quantity -= 1
            if(cart_products[i].quantity < 1){
                alert("Số lượng sản phẩm không thể nhỏ hơn 1")
            }else{
                document.getElementById(`quantity-${cart_products[i].id}`).innerHTML = cart_products[i].quantity
                localStorage.setItem("cart", JSON.stringify(cart_products))
                break
            }            
        }
    }
};

const deleteProduct = (id) => {
    let email = sessionStorage.getItem("email")
    let cart_products = localStorage.getItem("cart")
    cart_products = JSON.parse(cart_products)

    const index = cart_products.findIndex(product => product.id === id && product.email === email);
    if (index !== -1) {
        cart_products.splice(index, 1); // Xóa phần tử tại vị trí tìm thấy
        localStorage.setItem("cart", JSON.stringify(cart_products))
        window.location.reload()
    }
};
