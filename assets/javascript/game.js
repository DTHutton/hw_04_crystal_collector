$(document).ready(() => {
    //Variables
    let mainRandNum = '';
    let crysOneNum = '';
    let crysTwoNum = '';
    let crysThreeNum = '';
    let crysFourNum = '';

    //DOM



    //generate main game number between 19 - 120
    let mainNum = (min, max) => {
        return Math.floor(Math.random() * (120 - 19 + 1) + 19);
    }
    $('.randNum').text(mainNum);

    //crystal one code
    //on click function
    $('.crystalOne').on('click', function () {
        console.log('crystal one');
    });

    //crystal two code
    //on click function
    $('.crystalTwo').on('click', function () {
        console.log('crystal two');
    });

    //crystal three code
    //on click function
    $('.crystalThree').on('click', function () {
        console.log('crystal three');
    });

    //crystal four code
    //on click function
    $('.crystalFour').on('click', function () {
        console.log('crystal four');
    });

});