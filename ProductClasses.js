class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `Товар: ${this.name}, цена: ${this.price}`;
    }
}

class Cream extends Product {
    constructor(name, price, volume) {
        super(name, price);
        this.volume = volume;
    }

    getInfo() {
        return `${this.name} — ${this.volume}, цена: ${this.price} руб.`;
    }
}

class Shampoo extends Product {
    constructor(name, price, volume, hairType) {
        super(name, price);
        this.volume = volume;
        this.hairType = hairType;
    }

    getInfo() {
        return `${this.name} — ${this.volume}, для волос: ${this.hairType}, цена: ${this.price} руб.`;
    }
}

const myCream = new Cream("Дневной крем", 1200, "50 мл");
const myShampoo = new Shampoo("Шампунь", 800, "250 мл", "сухих волос");

console.log(myCream);
console.log(myShampoo);

console.log(myCream.getInfo());
console.log(myShampoo.getInfo());

export default Product;