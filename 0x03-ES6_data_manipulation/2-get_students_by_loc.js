export default function getStudentsByLocatio(ListOfStudents, city) {
  return ListOfStudents.filter(({ location }) => location === city);
}
