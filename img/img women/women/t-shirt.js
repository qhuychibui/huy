let womenClothes = {
    data : [
        {
            id: "MENPOLO1",
            name: "Áo Polo Vải Dry Pique | Kẻ Sọc",
            price: 489000,
            image: "../img/img women/polo/Áo Polo Vải Dry Pique Kẻ Sọc.avif",
        },
        {
            id: "MENPOLO2",
            name: "Áo Polo Vải Dry Pique | 2 Màu",
            price: 489000,
            image: "../img/img women/polo/Áo Polo Vải Dry Pique 2 Màu.avif",
        },
        {
            id: "MENPOLO3",
            name: "Áo Thun Slub Cotton | Cổ Henley",
            price: 195000,
            image: "../img/img women/t-shirt/Áo Thun Slub Cotton Cổ Henley.avif",
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
    price.innerHTML = "<b>Price:</b> " + products_item[i].price;
    container.appendChild(price)

    let button = document.createElement('button')
    button.classList.add('add-to-cart')

    let addToCartContainer = document.createElement('div')
    addToCartContainer.classList.add('add-to-cart-container')
    addToCartContainer.appendChild(button)

    button.setAttribute("onclick", `addToCart(${products_item.id}
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
    
    if (cart.length > 0){
        let exist = false
        for (let i=0; i<cart.length; i++){
            if (cart[i].name===name){
                exist=true
                break
            }
        }
        if(exist===true){
            alert("Sản phẩm đã tồn tại trong giỏ hàng")
        } else{
            cart.push({id:id,name:name,price:price,image:image,quantity: 1})
        }
    } else{
        cart.push({id, name, price, image, quantity:1})
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}
