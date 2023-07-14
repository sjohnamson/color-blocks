console.log('🟥 🟦 🟩 🟨');

$(document).ready(onReady)


function onReady() {
    // create handler for buttons to reference addBlock functions and count functions
    $('#red-btn').on('click', addRedBlock).on('click', countRed);

    $('#blue-btn').on('click', addBlueBlock).on('click', countBlue);

    $('#green-btn').on('click', addGreenBlock).on('click', countGreen);

    $('#yellow-btn').on('click', addYellowBlock).on('click', countYellow);


    // create handler for buttons  to reference deleteBlock functions and subtractCount functions
    $('#blocks').on('click', '.red-fill', deleteRed).on('click', '.red-fill', subtractRedCount);

    $('#blocks').on('click', '.blue-fill', deleteBlue).on('click', '.blue-fill', subtractBlueCount);

    $('#blocks').on('click', '.green-fill', deleteGreen).on('click', '.green-fill', subtractGreenCount);

    $('#blocks').on('click', '.yellow-fill', deleteYellow).on('click', '.yellow-fill', subtractYellowCount);

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
        return Number(val) + 1
    });
}

function countBlue() {
    $('#blue-count').html(function (i, val) {
        return Number(val) + 1
    });
}

function countGreen() {
    $('#green-count').html(function (i, val) {
        return Number(val) + 1
    });
}

function countYellow() {
    $('#yellow-count').html(function (i, val) {
        return Number(val) + 1
    });
}

// functions to delete color blocks
function deleteRed() {
    $(this).remove()
}

function deleteBlue() {
    $(this).remove()
}

function deleteGreen() {
    $(this).remove()
}

function deleteYellow() {
    $(this).remove()
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

function subtractGreenCount() {
    $('#green-count').html(function (i, val) {
        return val - 1
    });
}

function subtractYellowCount() {
    $('#yellow-count').html(function (i, val) {
        return val - 1
    });
}