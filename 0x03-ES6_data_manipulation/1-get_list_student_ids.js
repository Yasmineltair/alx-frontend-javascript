export default function getListStudentIds(ListStudents) {
  if (Array.isArray(ListStudents) === false) {
    return [];
  }
  return ListStudents.map(({ id }) => id);
}
