$(document).ready(() => {
    //generate main game number between 19 - 120
    let mainNum = (min, max) => {
        return Math.floor(Math.random() * (120 - 19 + 1) + 19);
    }
    $('.randNum').text(mainNum);
    console.log(mainNum);

    //sets user's base number to zero
    let baseNum = 0;
    $('.userNum').attr('data-value', baseNum);
    $('.userNum').text(baseNum);

    //sets user's base win count to zero
    let wins = 0;
    $('.winCount').text(wins);

    //sets user's base loss count to zero
    let losses = 0;
    $('.lossCount').text(losses);

    //generates random numbers for the crystals
    const crysNumOne = () => {
        return Math.floor((Math.random() * 12) + 1);
    };
    $('.crystalOne').attr('data-value', crysNumOne());

    const crysNumTwo = () => {
        return Math.floor((Math.random() * 12) + 1);
    };
    $('.crystalTwo').attr('data-value', crysNumTwo());

    const crysNumThree = () => {
        return Math.floor((Math.random() * 12) + 1);
    };
    $('.crystalThree').attr('data-value', crysNumThree());

    const crysNumFour = () => {
        return Math.floor((Math.random() * 12) + 1);
    };
    $('.crystalFour').attr('data-value', crysNumFour());

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    //on click functions for crystals

    //adds crystal one's random number to the user number
    $('.crystalOne').on('click', function () {
        let crystalValueOne = parseInt($('.crystalOne').attr('data-value'));
        $('.userNum').text(baseNum += crystalValueOne);
    });

    //adds crystal two's randum number to the user number
    $('.crystalTwo').on('click', function () {
        let crystalValueTwo = parseInt($('.crystalTwo').attr('data-value'));
        $('.userNum').text(baseNum += crystalValueTwo);
    });

    //adds crystal three's randum number to the user number
    $('.crystalThree').on('click', function () {
        let crystalValueThree = parseInt($('.crystalThree').attr('data-value'));
        $('.userNum').text(baseNum += crystalValueThree);
    });

    //adds crystal four's randum number to the user number
    $('.crystalFour').on('click', function () {
        let crystalValueFour = parseInt($('.crystalFour').attr('data-value'));
        $('.userNum').text(baseNum += crystalValueFour);
    });

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    // win/loss counter
    if (baseNum === mainNum) {
        wins++;
    };

    if (baseNum > mainNum) {
        losses++;
    };

});