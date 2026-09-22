import { comments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter((number) => number >= 5);

const books = ["Мастер и Маргарита", "1984", "Дюна", "Гарри Поттер"];

const hasDune = books.includes("Дюна");

function reverseArray(array) {
  return [...array].reverse();
}

const reversedNumbers = reverseArray(numbers);
const reversedBooks = reverseArray(books);

const commentsWithComEmail = comments.filter((comment) =>
  comment.email.includes(".com"),
);

const commentsWithNewPostId = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));

const commentIdsAndNames = comments.map(({ id, name }) => ({ id, name }));

const commentsWithValidation = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));

const emailsWithReduce = comments.reduce((emails, comment) => {
  emails.push(comment.email);
  return emails;
}, []);

const emailsWithMap = comments.map((comment) => comment.email);

const emailsWithToString = emailsWithMap.toString();
const emailsWithJoin = emailsWithMap.join(", ");

console.log(numbersFromFive);
console.log(hasDune);
console.log(reversedNumbers);
console.log(reversedBooks);
console.log(commentsWithComEmail);
console.log(commentsWithNewPostId);
console.log(commentIdsAndNames);
console.log(commentsWithValidation);
console.log(emailsWithReduce);
console.log(emailsWithMap);
console.log(emailsWithToString);
console.log(emailsWithJoin);
