$(document).ready(function () {
    const random = () => {
        main = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $('.randNum').text(main);
    }
    random();

    const crystal = () => {
        one = Math.floor((Math.random() * 12) + 1);
        two = Math.floor((Math.random() * 12) + 1);
        three = Math.floor((Math.random() * 12) + 1);
        four = Math.floor((Math.random() * 12) + 1);
    }
    crystal();

    let wins = 0;
    $('.winCount').text(wins);

    let losses = 0;
    $('.lossCount').text(losses);

    const winner = () => {
        wins++
        $('.winCount').text(wins);
    }

    const loser = () => {
        losses++
        $('.lossCount').text(losses);
    }

    const userNum = () => {
        score = 0;
        $('.userNum').text(score);
    }
    userNum();


    //on click functions
    $('.crystalOne').on('click', function () {
        $('.userNum').text(score += one);
        if (score === main) {
            alert('Winner winner tofu dinner!');
            winner();
            random();
            crystal();
            userNum();
        }

        if (score > main) {
            alert('Sucks to suck!');
            loser();
            random();
            crystal();
            userNum();
        }
    });

    $('.crystalTwo').on('click', function () {
        $('.userNum').text(score += two);
        if (score === main) {
            alert('Winner winner tofu dinner!');
            winner();
            random();
            crystal();
            userNum();
        }

        if (score > main) {
            alert('Sucks to suck!');
            loser();
            random();
            crystal();
            userNum();
        }
    });

    $('.crystalThree').on('click', function () {
        $('.userNum').text(score += three);
        if (score === main) {
            alert('Winner winner tofu dinner!');
            winner();
            random();
            crystal();
            userNum();
        }

        if (score > main) {
            alert('Sucks to suck!');
            loser();
            random();
            crystal();
            userNum();
        }
    });

    $('.crystalFour').on('click', function () {
        $('.userNum').text(score += four);
        if (score === main) {
            alert('Winner winner tofu dinner!');
            winner();
            random();
            crystal();
            userNum();
        }

        if (score > main) {
            alert('Sucks to suck!');
            loser();
            random();
            crystal();
            userNum();
        }
    });


});