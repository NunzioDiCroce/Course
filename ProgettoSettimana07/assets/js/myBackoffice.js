
// - - - - - - - - - - - - - - - FETCH
/*const myFunction = async () => {
    const promise = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTA2ZTg4Zjc0MDAwMTQyODc1NDMiLCJpYXQiOjE2ODM4ODYxOTAsImV4cCI6MTY4NTA5NTc5MH0.SONJVTCh6D-4h1tQmGvDBURkzhteVbnm5cQqR7lb0kw"
        }
    })
    if (promise.ok) {
        const response = await promise.json()
        console.log(response)
    } else {
        throw new Error("Richiesta non a buon fine")
    }

}*/

// - - - - - - - - - - - - - - - creazione nuovo prodotto da form e fetch POST
const submitFunction = async (event) => {
    event.preventDefault();

    const newProduct = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        brand: document.getElementById('brand').value,
        imageUrl: document.getElementById('imageUrl').value,
        price: document.getElementById('price').value
    }
    console.log('nuovo prodotto inserito', newProduct)

    try {
        const promise = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTA2ZTg4Zjc0MDAwMTQyODc1NDMiLCJpYXQiOjE2ODM4ODYxOTAsImV4cCI6MTY4NTA5NTc5MH0.SONJVTCh6D-4h1tQmGvDBURkzhteVbnm5cQqR7lb0kw",
                "Content-Type": "application/json"
                }
            })
            if (promise.ok) {
                const newProductPosted = await promise.json();
                console.log(newProductPosted)
            } else {
                throw new Error("Richiesta non a buon fine")
            }
    } catch (error) {
        alert(error)
    } 
}
