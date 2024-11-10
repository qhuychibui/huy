
let womenClothes = {
    data : [
        {
            id: "WOMENSHIRT1",
            name: "Áo Kiểu Vải Lawn Mềm Xếp Nếp",
            price: 489000,
            image: "../img/img women/shirt/Áo Kiểu Vải Lawn Mềm Xếp Nếp.avif",
        },
        {
            id: "WOMENSHIRT2",
            name: "Áo Sơ Mi Vải Linen Cao Cấp Kẻ Sọc",
            price: 489000,
            image: "../img/img women/shirt/Áo Sơ Mi Vải Linen Cao Cấp Kẻ Sọc.avif",
        },
        {
            id: "WOMENSHIRT3",
            name: "Áo Thun Slub Cotton | Cổ Henley",
            price: 195000,
            image: "../img/img women/shirt/Áo Kiểu Vải Lawn Mềm Xếp Nếp Caro.avif",
        },
    ]
}
let products_item = womenClothes.data

for(let i=0; i < products_item.length; i++){
    let card = document.createElement('div')
    card.classList.add('card')
    document.getElementById('products').appendChild(card)

    let imgContainer = document.createElement('div')
    imgContainer.classList.add('image-container')
    card.appendChild(imgContainer)

    let img = document.createElement('img')
    img.setAttribute('src', products_item[i].image)
    imgContainer.appendChild(img)

    let container = document.createElement('div')
    container.classList.add('container')
    imgContainer.appendChild(container)

    let name = document.createElement('h5')
    name.classList.add('product-name')
    name.innerText = products_item[i].name
    container.appendChild(name)

    let price = document.createElement('h6')
    price.innerHTML = "<b>Price:</b> " + products_item[i].price + "đ";
    container.appendChild(price)

    let button = document.createElement('button')
    button.classList.add('add-to-cart')

    let addToCartContainer = document.createElement('div')
    addToCartContainer.classList.add('add-to-cart-container')
    addToCartContainer.appendChild(button)

    button.setAttribute("onclick", `addToCart(${JSON.stringify(products_item[i].id)}
                                             ,${JSON.stringify(products_item[i].name)}
                                             ,${JSON.stringify(products_item[i].price)}
                                             ,${JSON.stringify(products_item[i].image)})`)
    button.innerHTML = 'Thêm vào giỏ hàng'
    
    container.appendChild(addToCartContainer)
    card.appendChild(container);
    document.getElementById("products").appendChild(card)

}

const addToCart = (id, name, price, image) => {
    let cart;
    if (localStorage.getItem("cart") != null){
        cart = localStorage.getItem("cart")
        cart = JSON.parse(cart)
    } else {
        cart = []
    }

    let email = sessionStorage.getItem("email")

    if (cart.length > 0){
        let exist = false
        for (let i=0; i<cart.length; i++){
            if (cart[i].name===name && cart[i].email === email){
                exist=true
                break
            }
        }
        if(exist===true){
            alert("Sản phẩm đã tồn tại trong giỏ hàng")
        } else{
            cart.push({id:id,name:name,price:price,image:image,quantity: 1, email: email})
        }
    } else{
        cart.push({id, name, price, image, quantity:1, email: email})
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}