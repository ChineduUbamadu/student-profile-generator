// Array of 12 student objects
const students = [
  {
    firstName: "Arinzechukwu",
    middleName: "Peter",
    lastName: "Okafor",
    age: 20,
    score: 88,
    courses: ["Mathematics", "Biology", "Chemistry", "English"]
  },
  {
    firstName: "Abiola",
    middleName: "Simon",
    lastName: "Adedayo",
    age: 22,
    score: 76,
    courses: ["Economics", "English", "Commerce", "Mathematics"]
  },
  {
    firstName: "Chukwugozie",
    middleName: "Andrew",
    lastName: "Umeh",
    age: 19,
    score: 91,
    courses: ["English", "Literature-in-English", "Mathematics", "History"]
  },
  {
    firstName: "Etim",
    middleName: "Samuel",
    lastName: "Utibe-Abasi",
    age: 21,
    score: 83,
    courses: ["Computer Science", "Chemistry", "Further Mathematics", "Physics"]
  },
  {
    firstName: "Umaru",
    middleName: "Musa",
    lastName: "Bello",
    age: 18,
    score: 95,
    courses: ["Geography", "Physics", "Mathematics", "English"]
  },
  {
    firstName: "Ogochukwu",
    middleName: "James",
    lastName: "Nwankwo",
    age: 23,
    score: 68,
    courses: ["Igbo", "English", "History", "Mathematics"]
  },
  {
    firstName: "Abimbola",
    middleName: "John",
    lastName: "Obaloluwa",
    age: 20,
    score: 90,
    courses: ["Yoruba", "Mathematics", "Government", "English"]
  },
  {
    firstName: "Itoro",
    middleName: "Ubong Abasi",
    lastName: "Ebem",
    age: 22,
    score: 84,
    courses: ["Further Mathematics", "Fine Art", "Technical Drawing", "Physics"]
  },
  {
    firstName: "Tunde",
    middleName: "Ayomide",
    lastName: "Olatunji",
    age: 19,
    score: 73,
    courses: ["Financial Accounting", "Commerce", "Economics", "English"]
  },
  {
    firstName: "Chukwuebuka",
    middleName: "Thaddaeus",
    lastName: "Ezechukwu",
    age: 21,
    score: 87,
    courses: ["CRS", "Literture-in-English", "Government", "Mathematics"]
  },
  {
    firstName: "James",
    middleName: "Jatau",
    lastName: "Barau",
    age: 20,
    score: 82,
    courses: ["English", "Mathematics", "Physics", "Chemistry"]
  },
  {
    firstName: "Ibrahim",
    middleName: "Mohamed",
    lastName: "Usman",
    age: 18,
    score: 94,
    courses: ["Data Processing", "English", "Mathematcis", "Economics"]
  }
];

// Using destructuring and .map() to create new array of strings describing each students using template literals
const descriptions = students.map(({ firstName, middleName, lastName, age, score, courses }) => {
  return `${firstName} ${middleName} ${lastName} is ${age} years old and scored ${score}. He is taking: ${courses.join(", ")}.`;
});

// Using .forEach() to Log each student's description to the console
descriptions.forEach(description => {
  console.log(description);
});
