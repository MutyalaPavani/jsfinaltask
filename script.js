// // 1.Display only the product title inside an <h1> tag.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<h1>${c.title}</h1>`;
//     })
// })


// // 2.Display the product ID and title inside an <h2> tag.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<h2>${c.title}</h2>`;
//     })
// })


// // 3.Display the first 30 characters of each product title.fetch("https://fakestoreapi.com/products")
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<h2>${c.title.slice(0,30)}...</h2>`;
//     })
// })


// // 4.Display the first 100 characters of each product description.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<p>${c.description.slice(0,100)}...</p>`;
//     })
// })


// // 5.Display each product's image inside a <div>.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<div><img src="${c.image}"</div>`;
//     })
// })


// // 6.Display the product title, description, and image inside a single <div>.

// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<div> 
//         <h3>${c.title}</h3> 
//         <p>${c.description}</p>
//         <img src="${c.image}" width="200px"> 
//         </div>`;
//     })
// })


// // 7.Display each product's price inside a <p> tag.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<p>Price:${c.price}</p>`;
//     })
// })


// // 8.Display each product's category inside an <h3> tag.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<p>Category:${c.category}</p>`;
//     })
// })


// // 9.Display the product title in uppercase.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<h1>${c.title.toUpperCase()}</h1>`;
//     })
// })


// // 10.Display the product title and its total character count.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<h1>${c.title} (${c.title.length} charaters)</h1>`;
//     })
// })


// // 11.Display the first 5 products only.

// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.slice(0,5).forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<div> 
//         <h3>${c.id}.${c.title}</h3>
//         <p>${c.description}</p>
//         <p>Price: ${c.price}</p>
//         <p>Category: ${c.category}</p>
//         <img src="${c.image}" width="200px">

//         </div>`;
//     })
// })


// // 12.Display products with their IDs, titles, and prices.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<div> 
//         <p>Id:${c.id} Title:${c.title} Price: ${c.price}</p>
//         </div>`;
//     })
// })


// // 13.Display each product's image with a width of 200px.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<div><img src="${c.image}" width="200px"></div>`;
//     })
// })


// // 14.Add a separate <div> for each product and give it a class name of "card".
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         let card= document.createElement("div")
//         card.className = "card"
//         card.innerHTML = `<img src="${c.image}" width="200px">
//         <h3> ${c.id}.${c.title}</h3>
//         <p>$${c.price}</p>
//         <p>${c.category}</p>
//         <p>${c.description}</p>`;
//         api.appendChild(card);
//     })
// })


// // 15.Display the product title and description, limiting the description to 50 characters.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<p>
//         Title:${c.title}   Description:${c.description.slice(0,50)}...</p>`;
//     })
// })


// // 16.Display all product titles in the browser console and on the webpage.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         console.log(c.title);
//         let api= document.querySelector(".api")
//         api.innerHTML += `<p>${c.title}</p>`;
//     })
// })

// // 17.Display each product's title and category inside the same <div>.
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     jsData.forEach((c,i,t) => {
//         let api= document.querySelector(".api")
//         api.innerHTML += `<div><h3>${c.title}</h3> <p>${c.category}</p></div>`;
//     })
// })


// // 18.Display a message inside .api when the API data is successfully loaded.

//  fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     let api = document.querySelector(".api")
//         api.innerHTML = "API data is successfully loaded ";
//     })


// // 19.Display "Loading..." inside .api before fetching the API data.
//  let api= document.querySelector(".api")
//  api.innerHTML ="Loading......"
//  fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     api.innerHTML = "";
//     jsData.forEach((c,i,t) => {
//         api.innerHTML += `<p>${c.title}</p>`;
//     })
// })


// // 20.Use.finally() to display "API request completed" after the request
// let api1= document.querySelector(".api")
//   fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json()
// })
// .then((jsData) => {
//     api1.innerHTML = "<p>Data is loaded</p>";
//     })

// .catch((error) => {
//     api1.innerHTML=error;
// })
// .finally(() =>
// {
// api1.innerHTML = "API request completed"
// })



//<=============== MINI PROJECT ==================>

let api = "https://fakestoreapi.com/products"

fetch(api).then((successData)=>{

    return successData.json()

})

.then((jsData)=>{

    jsData.forEach((c,i,t)=>{

        let div = document.createElement("div")

        div.innerHTML = `<h1>${c.id}. ${c.title.slice(0,50)}...</h1>

        <h2>Price: $${c.price}</h2>

        <p>${c.description.slice(0,100)}...</p>

        <img src="${c.image}" alt="${c.title}"/>`

        let apiTag = document.querySelector(".api")

        apiTag.append(div)

    })
})

.catch((error)=>{

    let apiTag = document.querySelector(".api")

    apiTag.innerHTML = error

    apiTag.style.color = "red"

})

.finally(()=>{

    console.log("API request completed");

})


