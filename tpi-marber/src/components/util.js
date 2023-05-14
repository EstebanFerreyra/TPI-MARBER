export const sendRequest = (path, method, beers) => {
    fetch(path,{
      method: {method},
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(beers);
}