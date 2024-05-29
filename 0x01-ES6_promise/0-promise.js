export default function getResponseFromAPI() {
  const connect = true;
  return new Promise((resolve, reject) => {
    if (connect) {
      resolve();
    } else {
      reject();
    }
  });
}
