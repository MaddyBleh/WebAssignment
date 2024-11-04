// Get buttons from HTML
const btndisplayXY = document.getElementById('displayXY');
const btnthemeSwap = document.getElementById('themeSwap');
const btnmodalShow = document.getElementById('modalShow');
const btnimageSwap = document.getElementById('swapImage');

// Formatting of HTML elements to fix page
document.getElementById('modal').style.display = 'none'; // Hide modal, doesn't load on first click unless this is here
document.getElementById('mouseXp').style.display = "none"; // Hide Mouse X, table box is larger than intended if this isn't here
document.getElementById('mouseYp').style.display = "none"; // Hide Mouse Y, table box is larger than intended if this isn't here

// Create listen events
btndisplayXY.addEventListener('mouseover', function() {
    displayXY();
}); 

btndisplayXY.addEventListener('mouseout', function() {
    showTable();
});

btndisplayXY.addEventListener('mousemove', function(event) {
    mouseXY(event);
});

btnthemeSwap.addEventListener('click', function() {
    themeSwap();
});

btnmodalShow.addEventListener('click', function() {
    modalShow();
});

btnimageSwap.addEventListener('click', function() {
    swapImage();
});

// GENERAL FUNCTIONS

// mouseXY
function mouseXY(event) {
    let mouseX = event.clientX; // Get mouse X position
    let mouseY = event.clientY; // Get mouse Y position
    document.getElementById('mouseXp').innerText = `Mouse X: ${mouseX}`; // Display X
    document.getElementById('mouseYp').innerText = `Mouse Y: ${mouseY}`; // Display Y
}

// showTable
function showTable() {
    document.getElementById('table').style.display = "table"; // Show table
    document.getElementById('mouseXp').style.display = "none"; // Hide Mouse X
    document.getElementById('mouseYp').style.display = "none"; // Hide Mouse Y
}

// BUTTON FUNCTIONALITY

// displayXY
function displayXY() {
    document.getElementById('table').style.display = "none"; // Hide table
    document.getElementById('mouseXp').style.display = "block"; // Show Mouse X
    document.getElementById('mouseYp').style.display = "block"; // Show Mouse Y
}

// themeSwap
function themeSwap() {
    let root = document.querySelector(':root');
    let rootstyles = getComputedStyle(root);

    if (rootstyles.getPropertyValue('--bgColor') == '#428bca') {
        root.style.setProperty('--bgColor', '#11c034');
        // console.log('changed.')
    }
    else {
        root.style.setProperty('--bgColor', '#428bca');
        // console.log('reset.')
    }
}

// modalShow
function modalShow() {
    let modal = document.getElementById('modal');
    // console.log(modal.style.display);
    // If the modal is hidden, show modal
    if (modal.style.display == 'none') {
        modal.style.display = 'block';
        // console.log('if branch');
    }
    // If the modal is shown, hide it
    else {
        modal.style.display = 'none';
        // console.log('else branch');
    }
}

// Set image array and index
const images = ['people.jpg', 'sports.jpg', 'business.jpg'];
let index = 0

// swapImage
function swapImage() {
    let image = document.getElementById('image'); // Get the image element
    let modalImage = document.getElementById('modal-image'); // Get the modal-image element
    
    image.src = `img/${images[index]}`;
    modalImage.src = `īmg/${images[index]}`;
    index++;
    if (index >= images.length) {
        index = 0;
    }
}