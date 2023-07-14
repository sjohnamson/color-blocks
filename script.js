console.log('🟥 🟦 🟩 🟨');

$(document).ready(onReady)


function onReady() {
// create handler for red to reference addBlock function
$('#red-btn').on('click', addRedBlock);
$('#red-btn').on('click', countRed);

// // create handler for blue to reference addBlock function
$('#blue-btn').on('click', addBlueBlock);
$('#blue-btn').on('click', countBlue);

// // create handler for green to reference addBlock function
$('#green-btn').on('click', addGreenBlock);
$('#green-btn').on('click', countGreen);

// // create handler for yellow to reference addBlock function
$('#yellow-btn').on('click', addYellowBlock);
$('#yellow-btn').on('click', countYellow);


// create handler for buttons  to reference deleteBlock function
// $('#blocks').on('click', '.red-fill', deleteRed)
// $('#blocks').on('click', '.blue-fill', deleteBlue)
// $('#blocks').on('click', '.green-fill', deleteGreen)
// $('#blocks').on('click', '.yellow-fill', deleteYellow)

}

// function to add color blocks
function addRedBlock() {
    $('#blocks').append(`
    <div class="block red-fill"></div>
    `)
}

function addBlueBlock() {
    $('#blocks').append(`
    <div class="block blue-fill"></div>
    `)
}

function addGreenBlock() {
    $('#blocks').append(`
    <div class="block green-fill"></div>
    `)
}

function addYellowBlock() {
    $('#blocks').append(`
    <div class="block yellow-fill"></div>
    `)
}

// functions to add to the color block counters
function countRed() {
    $('#red-count').html(function (i, val) {
        return val * 1 +1 
    });
}

function countBlue() {
    $('#blue-count').html(function (i, val) {
        return val * 1 +1 
    });
}

function countGreen() {
    $('#green-count').html(function (i, val) {
        return val * 1 +1 
    });
}

function countYellow() {
    $('#yellow-count').html(function (i, val) {
        return val * 1 +1 
    });
}


// functions to delete color blocks
// function deleteRed() {
//     $(this).remove()
// }

// function deleteBlue() {
//     $(this).remove()
// }

// function deleteGreen() {
//     $(this).remove()
// }

// function deleteYellow() {
//     $(this).remove()
// }