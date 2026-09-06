function showTemperature(city, temperature) {
  console.log(`сейчас в ${city} температура ${temperature}°C`);
}

showTemperature("Москва", 22);

const speedOfLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(300000000);

const product = "наушники";
const price = 1500;

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`Вы купили ${product} за ${price} рублей`);
  } else {
    const difference = price - budget;
    console.log(
      `Недостаточно средств. Пополните баланс на ${difference} рублей`,
    );
  }
}

buyProduct(1000);
