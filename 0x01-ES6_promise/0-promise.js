export default function getResponseFromAPI() {
  const empolyee = true;
  return new promise((resolve, reject) => {
    if (empolyee) {
      resolve();
    } else {
        reject();
    }
  });
}
