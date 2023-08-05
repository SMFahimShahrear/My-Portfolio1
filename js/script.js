const burgerMenuButton = document.querySelector(".burger-menu-button"); 
const burgerMenuOverlay = document.querySelector(".burger-menu-overlay"); 
const dropdownNavigation = document.querySelector(".drop-down-navigation");

burgerMenuOverlay.classList.add("hidden");

burgerMenuButton.addEventListener("click", ()=>{
    burgerMenuOverlay.classList.toggle("hidden");
    burgerMenuButton.children[0].classList.toggle("hidden");
    burgerMenuButton.children[1].classList.toggle("hidden");
})

  $('.stars-in-sunday-slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: `<img class="right-carousel-arrow carousel-arrow" src="./images/right-arrow.png" alt="">`,
      prevArrow: `<img class="left-carousel-arrow carousel-arrow" src="./images/left-arrow.png" alt="">`,
      responsive: [
    ]
  });
  
  const swiper = new Swiper('.highlight-features-slider', {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  })

  dropdownNavigation.addEventListener("click", () => {
    document.querySelector(".footer-navList").classList.toggle("visible");
    document.querySelector(".uparrow-icon").classList.toggle("hidden");
    document.querySelector(".dropdown-icon").classList.toggle("hidden");
  })
  function ShowHide(e){
  }

  function goBack(){
    history.go(-1);
  }

  const frameCollections = [
    {
      frameId: "frame_01",
      frameName: "SOELAE IN BLACK",
      framePrice: 270.00,
      frameImage: "https://www.sololearn.com/Certificate/CT-M7UARPTJ/jpg",
      frameImageAlt: "",
      frameType: "",
      frameUsers: "",
      frameColors: "",
    }, 
    {
      frameId: "frame_02",
      frameName: "ODIN DUA IN ALE",
      framePrice: 250.00,
      frameImage: "https://www.sololearn.com/Certificate/1014-25709311/jpg",
      frameType: "",
      frameUsers: "",
      frameColors: "",
    }, 
    {
      frameId: "frame_03",
      frameName: "CIRCE IN AMBER",
      framePrice: 225.00,
      frameImage: "https://www.sololearn.com/Certificate/1023-25709311/jpg",
      frameType: "",
      frameUsers: "",
      frameColors: "",
    }, 
    {
      frameId: "frame_04",
      frameName: "CALYPSO IN BLACK",
      framePrice: 225.00,
      frameImage: "https://www.sololearn.com/certificates/course/en/25709311/1024/landscape/png",
      frameType: "",
      frameUsers: "",
      frameColors: "",
    }, 
    {
      frameId: "frame_05",
      frameName: "CIRCE IN BLACK",
      framePrice: 225.00,
      frameImage: "product-showcase-item-5.png",
      frameType: "",
      frameUsers: "",
      frameColors: "",
    }, 
    {
      frameId: "frame_06",
      frameName: "CALYPSO IN CHAMPAGNE",
      framePrice: 225.00,
      frameImage: "product-showcase-item-6.png",
      frameType: "",
      frameUsers: "",
      frameColors: "",
    },
    {
      frameId: "frame_07",
      frameName: "CALYPSO IN WHITE",
      framePrice: 225.00,
      frameImage: "product-showcase-item-7.png",
      frameType: "",
      frameUsers: "",
      frameColors: "",
    }, 
    {
      frameId: "frame_08",
      frameName: "MAIA IN WHITE",
      framePrice: 225.00,
      frameImage: "product-showcase-item-8.png",
      frameType: "",
      frameUsers: "",
      frameColors: "",
    }, 
    {
      frameId: "frame_09",
      frameName: "ELECTRA IN TOKYO TORT",
      framePrice: 225.00,
      frameImage: "product-showcase-item-9.png",
      frameType: "",
      frameUsers: "",
      frameColors: "",
    }, 
    {
      frameId: "frame_10",
      frameName: "CAM IN BLACK",
      framePrice: 260.00,
      frameImage: "product-showcase-item-10.png",
      frameType: "",
      frameUsers: "",
      frameColors: "",
    }, 
    {
      frameId: "frame_11",
      frameName: "CALYPSO IN TOKYO TORT",
      framePrice: 225.00,
      frameImage: "product-showcase-item-11.png",
      frameType: "",
      frameUsers: "",
      frameColors: "",
    }, 
  ]

function mainCodes() {
    if (pageNavigation == 0) {
       console.log("0");
    }
    else if (pageNavigation == 1) {
       console.log("1");
       const productPurchaseWrapper = document.querySelector(".product-purchase-wrapper");

      let frameNumber = parseInt(sessionStorage.getItem("frameIndex"));
      
      productPurchaseWrapper.querySelector(".product-purchase-image").innerHTML=
      `<img src="${frameCollections[frameNumber].frameImage}" alt="">`;
      productPurchaseWrapper.querySelector(".product-purchase-name p").textContent = `${frameCollections[frameNumber].frameName}`;
      productPurchaseWrapper.querySelector(".product-purchase-price p").textContent = `$${frameCollections[frameNumber].framePrice}`;

    }
    else if (pageNavigation == 2) {
      console.log('2');

      document.querySelector(".website-navigation-sort").addEventListener("click", ()=>{
        document.querySelector(".website-navigation-sort-options").classList.toggle("hidden");
      })
      
      document.querySelector(".website-navigation-filter").addEventListener("click", ()=>{
        document.querySelector(".website-navigation-filter-options").classList.toggle("hidden");
      })
        let productShowcase = document.querySelector("section.product-showcase .showcase-wrapper");
     
  for(let i = 0; i<= frameCollections.length-1; i++){
      productShowcase.insertAdjacentHTML("beforeend",
  `
  <div class="product ${frameCollections[i].frameId}">
  <a href="./product-page.html" onclick="productPageInstruction(this)">
      <div class="product-image">
          <img src="${frameCollections[i].frameImage}" alt="">
      </div>
      <div class="product-description">
          <p class="product-name">${frameCollections[i].frameName}</p>
          <p class="product-price">$${frameCollections[i].framePrice}</p>
      </div>
  </a>
</div>
  `);
  }
    }
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


waitForElm('.stars-in-sunday').then((elm) => {
        pageNavigation = 0;
        mainCodes();
})

waitForElm('.product-purchase-frame').then((elm) => {
    pageNavigation = 1;
    mainCodes();
});

waitForElm('.product-showcase').then((elm) => {
    pageNavigation = 2;
    mainCodes();
});

function productPageInstruction(e){
  frameCollections.find(function(post, index){
    if(post.frameId === e.parentNode.classList[1]){
      sessionStorage.setItem("frameIndex", index);
    }
  })
}

function sortingFunction(e){
  let productShowcase = document.querySelector("section.product-showcase .showcase-wrapper");

  frameCollections.sort((a, b) => {
    return a.framePrice - b.framePrice;
  })
  console.log(frameCollections);
  productShowcase.innerHTML = ``;
  for(let i = 0; i<= frameCollections.length-1; i++){
    productShowcase.insertAdjacentHTML("beforeend",
`
<div class="product ${frameCollections[i].frameId}">
<a href="./product-page.html" onclick="productPageInstruction(this)">
    <div class="product-image">
        <img src="${frameCollections[i].frameImage}" alt="">
    </div>
    <div class="product-description">
        <p class="product-name">${frameCollections[i].frameName}</p>
        <p class="product-price">$${frameCollections[i].framePrice}</p>
    </div>
</a>
</div>
`);
}

e.classList.toggle("opacityLow");

}
