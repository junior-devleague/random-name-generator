const students = require('./students/studentListExample');

function generateRandomName(array) {
  let randomStudent = array[Math.floor(Math.random() * array.length)];
  return randomStudent;
}

console.log(generateRandomName(students.names));
