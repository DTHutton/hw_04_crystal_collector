$(document).ready(() => {

    //generate main game number between 19 - 120
    let mainNum = (min, max) => {
        return Math.floor(Math.random() * (120 - 19 + 1) + 19);
    }
    //sets randNum to number generated by the above function
    $('.randNum').text(mainNum);

    //sets user's base number to zero
    let baseNum = 0;
    $('.userNum').text(baseNum);

    //sets user's base win count to zero
    let baseWinNum = 0;
    $('.winCount').text(baseWinNum);

    //sets user's base loss count to zero
    let baseLossNum = 0;
    $('.lossCount').text(baseLossNum);

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    //crystal one code
    //generates crystal one's random number
    let crysNumOne = () => {
        return Math.floor((Math.random() * 12) + 1);
    }
    //sets crysNumOne to the number generated by above function
    $('.crysNumOne').text(crysNumOne);
    console.log(crysNumOne);
    crysNumOne = parseInt(crsyNumOne);

    //adds crystal one's random number to the user number
    $('.crystalOne').on('click', function () {
        console.log((baseNum + crysNumOne));

    });

    //crystal two code
    //generates crystal two's random number
    let crysNumTwo = () => {
        return Math.floor((Math.random() * 12) + 1);
    }
    //sets crysNumTwo to the number generated by above function
    $('.crysNumTwo').text(crysNumTwo);

    //adds crystal two's randum number to the user number
    $('.crystalTwo').on('click', function () {

    });

    //crystal three code
    //generates crystal three's random number
    let crysNumThree = () => {
        return Math.floor((Math.random() * 12) + 1);
    }
    //sets crysNumThree to the number generated by above function
    $('.crysNumThree').text(crysNumThree);

    //adds crystal three's randum number to the user number
    $('.crystalThree').on('click', function () {

    });

    //crystal four code
    //generates crystal four's random number
    let crysNumFour = () => {
        return Math.floor((Math.random() * 12) + 1);
    }
    //sets crysNumFour to the number generated by above function
    $('.crysNumFour').text(crysNumFour);

    //adds crystal four's randum number to the user number
    $('.crystalFour').on('click', function () {

    });

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    //win/loss counter code 
    //TODO outline, needs refactor
    let winCount = () => {
        baseWinNum++;
    }

    let lossCount = () => {
        baseLossNum++;
    }

    let winLossF = () => {
        if (baseNum === mainNum) {
            winCount();
        }
        else {
            lossCount();
        }
    }

    console.log(winLossF());


});