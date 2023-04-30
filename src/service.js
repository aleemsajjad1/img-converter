let base_url = "http://localhost:8000/api/convert-to-"
export function ConvrtFunction(endPoint, values) {

    return new Promise((resolve, reject) => {
      fetch(base_url + endPoint, {
        method: 'POST',
        body:values,
      })
        .then((response) => {
            resolve(response.json());
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }