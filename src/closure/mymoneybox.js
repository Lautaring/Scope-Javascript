// function moneybox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Moneybox: ${saveCoins}`);
// }

// moneybox(6);
// moneybox(10);

function moneybox(){
    let saveCoins = 0;
    function countcoins(coins){
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`);
    }
    return countcoins;
}

const mymoneybox = moneybox();
mymoneybox(5);
mymoneybox(10);
mymoneybox(15);

const moneyBoxAna = moneybox();
moneyBoxAna(5);
moneyBoxAna(12);
moneyBoxAna(25);