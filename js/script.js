// Get buttons from HTML
const btndisplayXY = document.getElementById('displayXY');
const btnthemeSwap = document.getElementById('themeSwap');
const btnmodalShow = document.getElementById('modalShow');
const btnimageSwap = document.getElementById('imageSwap');

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
    imageSwap();
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