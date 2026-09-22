"use strict";

// 3. Объект с данными пользователя
const userProfile = {
  firstName: "Анна",
  lastName: "Иванова",
  email: "anna.ivanova@example.com",
  job: "Веб-разработчик",
  position: "Junior Frontend Developer",
  age: 23,
  country: "Россия",
  city: "Москва",
  relationshipStatus: "Не замужем",
  hobbies: ["чтение", "спорт", "путешествия"],
};

// 4. Объект автомобиля и добавление владельца отдельной строкой
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Белый",
  transmission: "Автоматическая",
};

car.owner = userProfile;

// 5. Добавление максимальной скорости, если такого свойства ещё нет
function addMaximumSpeed(carObject) {
  if (!("maximumSpeed" in carObject)) {
    carObject.maximumSpeed = 210;
  }
}

addMaximumSpeed(car);

// 6. Вывод значения переданного свойства объекта
function printObjectProperty(object, property) {
  console.log(object[property]);
}

printObjectProperty(car, "brand");
printObjectProperty(car, "maximumSpeed");

// 7. Массив названий продуктов
const products = ["Хлеб", "Молоко", "Яблоки", "Сыр", "Кофе"];

// 8. Массив книг и добавление книги в конец списка
const books = [
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Чёрный",
    genre: "Роман",
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Красный",
    genre: "Антиутопия",
  },
  {
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    coverColor: "Зелёный",
    genre: "Фэнтези",
  },
];

books.push({
  title: "Дюна",
  author: "Фрэнк Герберт",
  year: 1965,
  coverColor: "Синий",
  genre: "Научная фантастика",
});

// 9. Книги вселенной Гарри Поттера и объединение двух массивов
const harryPotterBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "Бордовый",
    genre: "Фэнтези",
  },
  {
    title: "Гарри Поттер и Кубок огня",
    author: "Дж. К. Роулинг",
    year: 2000,
    coverColor: "Синий",
    genre: "Фэнтези",
  },
];

const allBooks = [...books, ...harryPotterBooks];

// 10. Создание нового массива с признаком редкой книги через map
function addRareStatus(bookList) {
  return bookList.map((book) => ({
    ...book,
    isRare: book.year > 2000,
  }));
}

const booksWithRareStatus = addRareStatus(allBooks);

console.log("Автомобиль:", car);
console.log("Продукты:", products);
console.log("Все книги:", allBooks);
console.log("Книги с признаком редкости:", booksWithRareStatus);