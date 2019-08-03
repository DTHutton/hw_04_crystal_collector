$(document).ready(function () {
    const random = () => {
        main = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $('.randNum').text('Your number to match is: ' + main);
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
    $('.winCount').text('Wins: ' + wins);

    let losses = 0;
    $('.lossCount').text('Losses: ' + losses);

    const winner = () => {
        wins++
        $('.winCount').text('You have ' + wins);
    }

    const loser = () => {
        losses++
        $('.lossCount').text('Losses: ' + losses);
    }

    const userNum = () => {
        score = 0;
        $('.userNum').text('Your total score is: ' + score);
    }
    userNum();

    winLossFunction = () => {
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
    }

    //on click functions
    $('.crystalOne').on('click', function () {
        $('.userNum').text('Your total score is: ' + (score += one));
        winLossFunction();
    });

    $('.crystalTwo').on('click', function () {
        $('.userNum').text('Your total score is: ' + (score += two));
        winLossFunction();
    });

    $('.crystalThree').on('click', function () {
        $('.userNum').text('Your total score is: ' + (score += three));
        winLossFunction();
    });

    $('.crystalFour').on('click', function () {
        $('.userNum').text('Your total score is: ' + (score += four));
        winLossFunction();
    });
});