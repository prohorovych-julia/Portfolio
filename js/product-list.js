(function () {
    const productsJson = `[
        {
            "id": "1",
            "name": "Cabernet",
            "price": "17.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/caberne.jpg"            
        },
        {
            "id": "2",
            "name": "Pinot-grigio",
            "price": "10.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/pinot-grigio.jpg"            
        },
        {
            "id": "3",
            "name": "Pinot Noir",
            "price": "12.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/pinot-noir.jpg"            
        },
        {
            "id": "4",
            "name": "Riesling",
            "price": "16.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/riesling.jpg"            
        },
        {
            "id": "5",
            "name": "Sauvignon",
            "price": "12.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/sauvigmon.jpg"            
        },
        {
            "id": "6",
            "name": "Soave",
            "price": "12.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/soave.jpg"            
        },
        {
            "id": "7",
            "name": "Syrah",
            "price": "13.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/syrah.jpg"            
        },
        {
            "id": "8",
            "name": "Zifandel",
            "price": "14.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/zifandel.jpg"            
        }
    ]`;

    const products = JSON.parse(productsJson);

    let productsHtmlArray = [];
    for (const product of products) {
        productsHtmlArray.push(`
            <div class="picture-our-wine">
                <div class="image-for-carousel">
                    <p><img class="picture-our-wine-bootle" src="${product.imgUrl}" alt="${product.name}"></p>
                </div>
                    <div class="add-to-cart">
                    <a href="#pinot-noir.html" class="buttom-our-wine">${product.name}</a>
                    <p class="price">${product.price}</p>
                    <a href="#Add-to-cart" class="buttom-add-to-cart">${product.cart}</a>
                    </div>
            </div>`);
    };

      (function() {
        const slides = productsHtmlArray;
        let currentSlideIndx = 0;

        function showCurrentSlide() {
            const slideCarousel = document.querySelector(".carousel-product-list .slide");
            slideCarousel.innerHTML = slides[currentSlideIndx];
        }
        function nextSlide() {
            currentSlideIndx++;
            if (currentSlideIndx >= slides.length) currentSlideIndx = 0;
            showCurrentSlide();
        }

        function previousSlide() {
            currentSlideIndx--;
            if (currentSlideIndx < 0) currentSlideIndx = slides.length - 1;
            showCurrentSlide();
        }
        setInterval(nextSlide, 5000);
        showCurrentSlide();

        document.querySelector(".carousel-product-list .previous-slide")
        .addEventListener("click", previousSlide);
        document.querySelector(".carousel-product-list .next-slide")
        .addEventListener("click", nextSlide);
       
        })();

})();




