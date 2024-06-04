export default function getStudentIdsSum(ListStudents) {
  return ListStudents.reduce((sum, { id }) => sum + id, 0);
}
