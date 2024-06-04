export default function hasValuesFromArray(seto, arrayo) {
  return arrayo.every((ele) => seto.has(ele));
}
