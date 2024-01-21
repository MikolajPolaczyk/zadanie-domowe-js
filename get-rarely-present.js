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

const presence = [{
  date: '2023-09-17',
  students: [1, 2, 3],
}, {
  date: '2023-09-24',
  students: [1, 2, 3],
}, {
  date: '2023-10-08',
  students: [1, 2, 3],
}, {
  date: '2023-10-15',
  students: [2, 3]
}]


// rozwiazanie

function getRarelyPresent(threshold) {
  const rarelyPresentStudents = [];

  students.forEach((student) => {
    const studentId = student.id;
    const totalPresence = presence.filter((p) => p.students.includes(studentId)).length;
    const attendanceRate = totalPresence / presence.length;

    if (attendanceRate < threshold) {
      rarelyPresentStudents.push(`${student.firstName} ${student.lastName}`);
    }
  });

  return rarelyPresentStudents;
}

console.log(getRarelyPresent(0.8)); // ['Jakub Nieobecny']
console.log(getRarelyPresent(0.7)); // []






