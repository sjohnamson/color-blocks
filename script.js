console.log('🟥 🟦 🟩 🟨');

$(document).ready(onReady)


function onReady() {
// create handler for red to reference addBlock function
$('#red-btn').on('click', addRedBlock);

// // create handler for blue to reference addBlock function
$('#blue-btn').on('click', addBlueBlock)

// // create handler for green to reference addBlock function
$('#green-btn').on('click', addGreenBlock)

// // create handler for yellow to reference addBlock function
$('#yellow-btn').on('click', addYellowBlock)


// create handler for buttons  to reference deleteBlock function
$('#blocks').on('click', '.red-fill', deleteRed)
$('#blocks').on('click', '.blue-fill', deleteBlue)
$('#blocks').on('click', '.green-fill', deleteGreen)
$('#blocks').on('click', '.yellow-fill', deleteYellow)

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