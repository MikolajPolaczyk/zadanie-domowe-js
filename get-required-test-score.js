const students = [{
  id: 1,
  firstName: 'Jakub',
  lastName: 'Nieobecny',
},{
  id: 2,
  firstName: 'Julia',
  lastName: 'Kowalska',
},{
  id: 3,
  firstName: 'Kacper',
  lastName: 'Nowak',
}]

const homeworks = [{
  date: '2023-09-23',
  scores: {
    1: 0.8, // 80%
    2: 0.91, // 91%
    3: 0.64, // 64%
  }
}, {
  date: '2023-10-23',
  scores: {
    1: 0.72, // 72%
    2: 0.44, // 44%
    3: 0.95, // 95%
  }
}]


// propozycja rozwiazania

function getRequiredTestScore(fullName) {
  const student = students.find(
    (s) => `${s.firstName} ${s.lastName}` === fullName
  );

  if (!student) {
    return "Student not found";
  }

  const homeworkScores = homeworks.map((homework) =>
    homework.scores[student.id]
  );
  const averageHomeworkScore =
    homeworkScores.reduce((sum, score) => sum + score, 0) /
    homeworkScores.length;

  const requiredTestScore =
    (0.7 - 0.3 * averageHomeworkScore) / 0.7;

  return requiredTestScore.toFixed(2);
}

// przyklad uzycia:

console.log(getRequiredTestScore('Jakub Nieobecny')); // 0.67
console.log(getRequiredTestScore('Kacper Nowak')); // 0.66





