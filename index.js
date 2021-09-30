const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector(".output");

function clickHandler() {
    const initial = Number(initialPrice.value);
    const quantity = Number(stocksQuantity.value);
    const current = Number(currentPrice.value);

    if (initial < 1 || quantity < 1 || current < 1) {
        output.innerText = 'Please make sure to fill all values and values should be greater than 0.';
        return
    }

    calculateProfitAndLoss(initial, quantity, current);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current) {
        const loss = (initial - current) * quantity;
        const lossInPercentage = (loss / (initial * quantity)) * 100;
   

    output.innerText = `Hey, the loss is ${loss} and the percent is ${lossInPercentage.toFixed(2)}%`;

    }
    else if (current > initial) {
        const profit = (current - initial) * quantity;
        const profitInPercentage = (profit / (initial * quantity)) * 100;
    

    output.innerText = `Hey, the profit is ${profit} and the percent is ${profitInPercentage.toFixed(2)}%`;

    } else {
        output.innerText = 'No pain no gain, no gain no pain.';
    }
}

checkBtn.addEventListener('click', clickHandler);