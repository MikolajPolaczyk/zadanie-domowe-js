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

const students = [
  { id: 1, firstName: 'Jakub', lastName: 'Nieobecny' },
  { id: 2, firstName: 'Julia', lastName: 'Kowalska' },
  { id: 3, firstName: 'Kacper', lastName: 'Nowak' }
];

const presence = [
  { date: '2023-09-17', students: [1, 2, 3] },
  { date: '2023-09-24', students: [1, 2, 3] },
  { date: '2023-10-08', students: [1, 2, 3] },
  { date: '2023-10-15', students: [2, 3] }
];

function getRarelyPresent(threshold) {
  const rarelyPresentStudents = [];

  students.forEach(student => {
    const totalPresence = presence.filter(p => p.students.includes(student.id)).length;
    const attendancePercentage = totalPresence / presence.length;

    if (attendancePercentage < threshold) {
      rarelyPresentStudents.push(`${student.firstName} ${student.lastName}`);
    }
  });

  return rarelyPresentStudents;
}


