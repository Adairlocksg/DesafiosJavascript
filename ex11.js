const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const disponibleCash = [100, 50, 20, 10];
const bills = {};
let startCash;

rl.question("quantos deseja retirar ? ", (cashToWithdraw) => {
  startCash = cashToWithdraw;

  if(isPossibleToWithdraw()) {
    generateQuantityOfBills();

    console.log('valor do Saque: ', cashToWithdraw)

    Object.keys(bills)?.forEach(billKey => {
        console.log(bills[billKey], ' nota de ', billKey);
    })
  } else {
    console.log('Nao eh possivel retirar esse valor')
  }

  rl.close();
});

rl.on("close", function () {
  process.exit();
});

const isPossibleToWithdraw = () => {
    return !!(startCash % 10 === 0)
};

const generateQuantityOfBills = () => {
  disponibleCash.forEach((cash) => {
    const quantityOfCash = startCash / cash;

    if (quantityOfCash >= 1) {
      bills[cash.toString()] = Math.floor(quantityOfCash);
      startCash = startCash % cash;
    } else {
      return;
    }

    if (startCash !== 0) {
      generateQuantityOfBills();
    } else {
      return;
    }
  });
};
