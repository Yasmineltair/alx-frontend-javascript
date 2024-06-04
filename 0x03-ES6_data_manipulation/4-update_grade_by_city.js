export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents
    .filter(({ location }) => location === city)
    .map((obj) => {
      const newGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = newGrade.length > 0 ? newGrade[0] : {};
      return { ...obj, grade };
    });
}
