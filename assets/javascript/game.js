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

    //crystal one code
    //generates crystal one's random number between 1 - 12
    let crysNumOne = () => {
        return Math.floor((Math.random() * 12) + 1);
    }
    //sets crysNumOne to the number generated by above function
    $('.crysNumOne').text(crysNumOne);

    //on click function
    $('.crystalOne').on('click', function () {

    });

    //crystal two code
    //generates crystal two's random number between 1 - 12
    let crysNumTwo = () => {
        return Math.floor((Math.random() * 12) + 1);
    }
    //sets crysNumTwo to the number generated by above function
    $('.crysNumTwo').text(crysNumTwo);

    //on click function
    $('.crystalTwo').on('click', function () {

    });

    //crystal three code
    //generates crystal three's random number between 1 - 12
    let crysNumThree = () => {
        return Math.floor((Math.random() * 12) + 1);
    }
    //sets crysNumThree to the number generated by above function
    $('.crysNumThree').text(crysNumThree);

    //on click function
    $('.crystalThree').on('click', function () {

    });

    //crystal four code
    //generates crystal four's random number between 1 - 12
    let crysNumFour = () => {
        return Math.floor((Math.random() * 12) + 1);
    }
    //sets crysNumFour to the number generated by above function
    $('.crysNumFour').text(crysNumFour);

    //on click function
    $('.crystalFour').on('click', function () {

    });



});