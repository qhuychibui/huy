// let menClothes = {
//     data : [
//         {
//             id: 1,
//             name: "AIRism Cotton Áo Thun In Họa Tiết",
//             price: 293000,
//             image: "etsy/kids' clothing/AIRism Cotton Áo Thun In Họa Tiết.png",
//         },
//         {
//             id: 2,
//             name: "Áo Polo Vải Dry Pique Ngắn Tay",
//             price: 391000,
//             image: "etsy/kids' clothing/Áo Polo Vải Dry Pique Ngắn Tay.png",
//         },
//     ]
// }
// for (let i of menClothes.data) {
//     let card = document.createElement("div")
//     card.classList.add("card")

//     let imgContainer = document.createElement("div")
//     imgContainer.classList.add("image-container")

//     let image = document.createElement("img")
//     image.setAttribute("src", i.image)
//     image.classList.add("image")
//     imgContainer.appendChild(image)
//     card.appendChild(imgContainer)

//     let container = document.createElement("div")
//     container.classList.add("container")

//     let name = document.createElement("h5");
//     name.classList.add("product-name");
//     name.innerText = i.name.toUpperCase();
//     container.appendChild(name);

//     let price = document.createElement("h6");
//     price.innerText = i.price +"đ";
//     container.appendChild(price);

  
//     card.appendChild(container);
//     document.getElementById("products").appendChild(card);
// }