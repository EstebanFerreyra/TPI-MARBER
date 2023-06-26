export const DeleteBeer = (id, handleDeleteBeer3) => {
    console.log(id);
    console.log("delete");
    const url = `https://www.apimarber.somee.com/marber/BeerController/deletebeerbyid/${id}`;

    fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        refer: "*",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => handleDeleteBeer3(response))
        .catch((error) => console.log(error));
}