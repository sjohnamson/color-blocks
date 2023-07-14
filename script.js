console.log('🟥 🟦 🟩 🟨');

$(document).ready(onReady)


function onReady() {
    // create handler for buttons to reference addBlock functions and count functions
    // Red and blue have two handlers for the same on'click' event
    $('#red-btn').on('click', addRedBlock).on('click', countRed);

    $('#blue-btn').on('click', addBlueBlock).on('click', countBlue);

    // Green and Yellow have double jQuery events within one handler
    $('#green-btn').on('click', addGreenBlock)

    $('#yellow-btn').on('click', addYellowBlock)


    // create handler for buttons  to reference deleteBlock functions and subtractCount functions
    $('#blocks').on('click', '.red-fill', deleteRed).on('click', '.red-fill', subtractRedCount);

    $('#blocks').on('click', '.blue-fill', deleteBlue).on('click', '.blue-fill', subtractBlueCount);

    $('#blocks').on('click', '.green-fill', deleteGreen)

    $('#blocks').on('click', '.yellow-fill', deleteYellow)

}

// functions to add color blocks
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
    `);
    $('#green-count').html(function (i, val) {
        return Number(val) + 1
    });
}

// different way to add
let yellowCount =1;
function addYellowBlock() {
    $('#blocks').append(`
    <div class="block yellow-fill"></div>
    `);
    $('#yellow-count').empty()
    yellowCount++
    console.log(yellowCount)
    $('#yellow-count').append(yellowCount)
}

// functions to add to the color block counters
function countRed() {
    $('#red-count').html(function (i, val) {
        return Number(val) + 1
    });
}

function countBlue() {
    $('#blue-count').html(function (i, val) {
        return Number(val) + 1
    });
}

// function countGreen() {
//     $('#green-count').html(function (i, val) {
//         return Number(val) + 1
//     });
// }

// functions to delete color blocks
function deleteRed() {
    $(this).remove()
}

function deleteBlue() {
    $(this).remove()
}

function deleteGreen() {
    $(this).remove();
    $('#green-count').html(function (i, val) {
        return val - 1
    });
}

function deleteYellow() {
    $(this).remove();
    $('#yellow-count').empty()
    yellowCount--
    console.log(yellowCount)
    $('#yellow-count').append(yellowCount)   
}

// Functions to subtract the block counters
function subtractRedCount() {
    $('#red-count').html(function (i, val) {
        return val - 1
    });
}

function subtractBlueCount() {
    $('#blue-count').html(function (i, val) {
        return val - 1
    });
}

