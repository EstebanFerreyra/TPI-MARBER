// es custom hook? si es cambiar el name
export const DeleteBeer = (id, handleDeleteBeer3) => {
    console.log(id);
    console.log("delete");
    const url = `https://localhost:7160/marber/BeerController/deletebeerbyid/${id}`;

    fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => handleDeleteBeer3(response))
    .catch((error) => console.log(error));
}