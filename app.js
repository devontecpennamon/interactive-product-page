// Main gallery items
const mainImages = document.querySelectorAll('.mainimg');
const imageThumbnails = document.querySelectorAll('.img-thumbnail');
// Mains Lightbox Items
const mainImagesLightbox = document.querySelectorAll('.mainimg-lightbox');
const imageThumbnailsLightbox = Array.from(document.getElementsByClassName('img-thumbnail-lightbox'));
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxBackground = document.querySelector('.lightbox-background');
// Gallery buttons
const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const prevButtonMain = document.querySelector('.previous-main');
const nextButtonMain = document.querySelector('.next-main');
const lightboxXButton = document.querySelector('.lightbox-x');
// Shop operator variables
const minusItem = document.querySelector('.operator-img-minus');
const plusItem = document.querySelector('.operator-img-plus');
let cartNumber = document.getElementById('added-number');
let cartValue = document.querySelector('.cart-value');
const addItemButton = document.getElementById('add-item-button');
// Cart/dropdown variables
const cartButton = document.getElementById('cart-image');
const cartContent = document.querySelector('.dropdown-content');
let checkoutNumber = document.getElementById('checkout-number');
let totalPrice = document.getElementById('total-price');
let checkoutRow = document.querySelector('.checkout-row');
const emptyCart = document.getElementById('empty-cart');
const cartDelete = document.querySelector('#delete-img')
const closeCartButton = document.getElementById('close-cart')
// Hamburger menu variables
const hamburgerMenu = document.getElementById('hamburger-menu');
const closeHamburgerMenu = document.getElementById('close-hamburger');
const navbarContainer = document.querySelector('.navbar-container');
const navbarContainerItems = document.querySelectorAll('.nav-item');

// Hamburger Menu open and close event listeners
// Open Hamburger menu
hamburgerMenu.addEventListener('click', () => {
    navbarContainer.style.width = '280px';
    navbarContainer.style.height = '100vh';
    closeHamburgerMenu.style.display = 'block';
    for (let i = 0; i <= navbarContainerItems.length; i++) {
        navbarContainerItems[i].style.display = 'flex';
    }
});

// Close Hamburger menu
closeHamburgerMenu.addEventListener('click', () => {
    navbarContainer.style.width = '0';
    navbarContainer.style.height = '0';
    closeHamburgerMenu.style.display = 'none';
    for (let i = 0; i <= navbarContainerItems.length; i++) {
        navbarContainerItems[i].style.display = 'none';
    }
})

// setting counter variable for later
let counter = 0;
let cartCounter = 0;

// Delete items from cart
cartDelete.addEventListener('click', () => {
    cartDelete.style.display = 'none';
    checkoutRow.style.display = 'none';
    emptyCart.style.display = 'block';
    cartValue.innerText = '0';
    cartNumber.innerText = '0';
    cartCounter = 0;
})

// Opens cart dropdown menu
cartButton.addEventListener('click', () => {
    cartContent.style.display = 'block';
}) 

closeCartButton.addEventListener('click', () => {
    cartContent.style.display = 'none';
})

// increases/decreases add to cart number 
minusItem.addEventListener('click', () => {
    if (cartCounter > 0) {
        cartCounter--;
        cartNumber.innerText = cartCounter;
    }
})

plusItem.addEventListener('click', () => {
    if (cartCounter < 30) {
        cartCounter++;
        cartNumber.innerText = cartCounter;
    }
})

// Adds item(s) to cart
addItemButton.addEventListener('click', () => {
    if (cartCounter > 0) {
        cartValue.innerText = cartNumber.innerText;
        checkoutNumber.innerText = cartCounter;
        totalPrice.innerText = `$${125 * cartCounter}.00`;
    }
     if (cartCounter > 0) {
        checkoutRow.style.display = 'flex';
        emptyCart.style.display = 'none';
        cartDelete.style.display = 'block'
    }
})

// Displays image when page loads
if (counter == 0) {
    mainImages[0].style.opacity = '1';
    mainImages[0].style.left = '50%';
    mainImagesLightbox[0].style.opacity = '1';
    mainImagesLightbox[0].style.left = '50%';
};

// Lightbox Prev/Next buttons changes image
prevButton.addEventListener('click', () => {
    counter--;
    lightboxSlideHandler();
});

nextButton.addEventListener('click', () => {
    counter++;
    lightboxSlideHandler();
});

// Main Prev/Next buttons changes image
prevButtonMain.addEventListener('click', () => {
    counter--;
    slideHandler();
});

nextButtonMain.addEventListener('click', () => {
    counter++;
    slideHandler();
});

// Turns off lightbox
lightboxXButton.addEventListener('click', () => {
    lightboxContainer.style.display = 'none';
    lightboxBackground.style.display = 'none';
    lightboxXButton.style.display = 'none';
});

// Turns off lightbox when background is clicked
lightboxBackground.addEventListener('click', () => {
    lightboxBackground.style.display = 'none';
    lightboxContainer.style.display = 'none';
    lightboxXButton.style.display = 'none';
});

// Turns on lightbox
mainImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxContainer.style.display = 'block';
        lightboxBackground.style.display = 'block';
        lightboxXButton.style.display = 'block';
    })
})

// Handles Slide animation for main images
function slideHandler() {
    for (let i = 0; i <= mainImages.length; i++) {
        // Image 1 animation Logic
        if (counter == 0) {
            mainImages[0].style.opacity = '1';
            mainImages[0].style.left = '50%';
        }
        else {
            mainImages[0].style.opacity = '0';
            mainImages[0].style.left = '20%';
        }
        // Image 2 animation Logic
        if (counter == 1) {
            mainImages[1].style.opacity = '1';
            mainImages[1].style.left = '50%';
        }
        else {
            mainImages[1].style.opacity = '0';
            mainImages[1].style.left = '20%';
        }
        // Image 3 animation Logic
        if (counter == 2) {
            mainImages[2].style.opacity = '1';
            mainImages[2].style.left = '50%';
        }
        else {
            mainImages[2].style.opacity = '0';
            mainImages[2].style.left = '20%';
        }
        // Image 4 animation Logic
        if (counter == 3) {
            mainImages[3].style.opacity = '1';
            mainImages[3].style.left = '50%';
        }
        else {
            mainImages[3].style.opacity = '0';
            mainImages[3].style.left = '20%';
        }
        // Loops counter back to original state
        if (counter > 3) {
            counter = 0;
        }
        if (counter < 0) {
            counter = 3;
        }
    }
}

// Changes image when thumbnail is clicked on main images
imageThumbnails.forEach(image => {
    image.addEventListener('click', () => {
        let imageData = image.getAttribute('data-img');
        counter = imageData;
        slideHandler();
        console.log(counter);
    })
});

//Lightbox animation handler
function lightboxSlideHandler() {
    for (let i = 0; i <= mainImagesLightbox.length; i++) {
        // Lightbox Image 1 animation Logic
        if (counter == 0) {
            mainImagesLightbox[0].style.opacity = '1';
            mainImagesLightbox[0].style.left = '50%';
        }
        else {
            mainImagesLightbox[0].style.opacity = '0';
            mainImagesLightbox[0].style.left = '20%';
        }
        // Lightbox Image 2 animation Logic
        if (counter == 1) {
            mainImagesLightbox[1].style.opacity = '1';
            mainImagesLightbox[1].style.left = '50%';
        }
        else {
            mainImagesLightbox[1].style.opacity = '0';
            mainImagesLightbox[1].style.left = '20%';
        }
        // Lightbox Image 3 animation Logic
        if (counter == 2) {
            mainImagesLightbox[2].style.opacity = '1';
            mainImagesLightbox[2].style.left = '50%';
        }
        else {
            mainImagesLightbox[2].style.opacity = '0';
            mainImagesLightbox[2].style.left = '20%';
        }
        // Lightbox Image 4 animation Logic
        if (counter == 3) {
            mainImagesLightbox[3].style.opacity = '1';
            mainImagesLightbox[3].style.left = '50%';
        }
        else {
            mainImagesLightbox[3].style.opacity = '0';
            mainImagesLightbox[3].style.left = '20%';
        }
        // Loops counter back to original state
        if (counter > 3) {
            counter = 0;
        }
        if (counter < 0) {
            counter = 3;
        }
    }
}

// Changes image when thumbnail is clicked on lightbox images
imageThumbnailsLightbox.forEach(images => {
    images.addEventListener('click', () => {
        let imageData = images.getAttribute('data-img');
        counter = imageData;
        lightboxSlideHandler();
        console.log(counter);
    })
});



