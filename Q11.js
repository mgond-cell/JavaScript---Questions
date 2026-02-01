// Calculation of average using and Array and objects method:
const students = [
  {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  }
];

const output = students.map(studentObj => {
  const key = Object.keys(studentObj)[0];
  const marks = Object.values(studentObj[key]);

  const total = marks.reduce((sum, m) => sum + m, 0);
  const average = total / marks.length;

  return {
    [key]: { average: average }
  };
});

console.log(output);
