let featuredProducts = JSON.parse(localStorage.getItem("featuredProducts"))  ? JSON.parse(localStorage.getItem("featuredProducts"))  :

 [
    { Title: "MacBook Air",
    id: 1,
    Year: 2019,
    Colour: "Gold",
    Price: "R16 499.99",
    Cat: "MacBook",
    Img: "https://i.postimg.cc/3RfvXfNn/macbookair-2x.png"
    },

    {Title: "iPhone 12 Pro Max",
    id: 2,
    Year: 2021,
    Colour: "Gold",
    Price: "R14 999.99",
    Cat: "iPhone",
    Img: "https://i.postimg.cc/htZJJVq8/iphone-12-pro-max-gold.png"},
   
    {Title: "AirPods 2",
    id: 3,
    Year: 2020,
    Colour: "White",
    Price: "R2 399.99",
    Cat: "AirPods",
    Img: "https://i.postimg.cc/GtCmsZnW/kisspng-airpods-iphone-8-headphones-lightning-apple-earbud-bluetooth-5ad23923dabfb4-8065055215237266.png"},

    {Title: "Apple Watch Series 3",
    id: 4,
    Year: 2019,
    Colour: "Black",
    Price: "R4 999.99",
    Cat: "iWatch",
    Img: "https://i.postimg.cc/2SNCKdBG/Apple-Watch-PNG-Download-Image-768x827.png"},

    {Title: "iPhone 13 mini",
    id: 5,
    Year: 2021,
    Colour: "Midnight",
    Price: "13 499.99",
    Cat: "iPhone",
    Img: "https://i.postimg.cc/g0qF5fPk/iphone-13-midnight.png"},

    {Title: `MacBook Pro 16"`,
    id: 6,
    Year: 2019,
    Colour: "Space Grey",
    Price: "R26 999.99",
    Cat: "MacBook",
    Img: "https://i.postimg.cc/63HBTDq5/Download-computer-laptop-mac-macbook-pro-snow-leopard-icon-1-1.png"}
];
let retrievedProducts = localStorage.getItem("featuredProducts");
let RetrievedArray = JSON.parse(localStorage.getItem("featuredProducts"));


function showProducts(featuredProducts){
    for(i = 0; i < featuredProducts.length; i++){
        document.getElementById("gallery").innerHTML += `
        <div class="gallery_item">
    <img src="${featuredProducts[i].Img}"/></div>
`}
    
}
showProducts(featuredProducts);

// Add products 
function addProduct() {
    featuredProducts.push({
      id: featuredProducts.length + 1,
      Img: document.querySelector("#img-add").value,
      Title: document.querySelector("#title-add").value,
      Year: document.querySelector("#year-add").value,
      Colour: document.querySelector("#color-add").value,
      Price: document.querySelector("#price-add").value,
      Cat: document.querySelector("#category-add").value,
    });
    // Save to local storage
    localStorage.setItem("featuredProducts", JSON.stringify(featuredProducts));
    //
    showProducts();
  }

//   Filter by category 

filterCategory = () => {
    let categorySelect = document.querySelector("#categorySelect").value;
    if (categorySelect) {
      console.log(categorySelect);
      document.querySelector("#gallery").innerHTML = "";
      let categoryView = featuredProducts.filter(
        (featuredProducts) => featuredProducts.Cat === categorySelect
      );
      categoryView.forEach((featuredProducts) => {
        document.getElementById("gallery").innerHTML += `
        <div class="gallery_item">
    <img src="${featuredProducts.Img}"/></div>
`;
        console.log(categoryView);
      });
    } else {
      display();
    }
  };

//   Filter by City 
filterCity = () => {
    let citySelect = document.querySelector("#citySelect").value;
    if (citySelect) {
      console.log(citySelect);
      document.querySelector("#box-container").innerHTML = "";
      let cityView = properties.filter(
        (property) => property.city === citySelect
      );
      cityView.forEach((featuredProducts) => {
        document.getElementById("gallery").innerHTML += `
        <div class="gallery_item">
    <img src="${featuredProducts.Img}"/></div>
`;
        console.log(cityView);
      });
    } else {
      display();
    }
  };
  

// display = () => {document.querySelector("#gallery").innerHTML = ""; 
//  JSON.parse(retrievedProducts).forEach((Product) => {document.querySelector("#gallery").innerHTML += `<div class="gallery_item"><img src="${Product.Img}" alt="product"></div>`})};

