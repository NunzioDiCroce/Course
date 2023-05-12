
// - - - - - - - - - - - - - - - definizione variabile in base ad prodotto selezionato (id)
const selectedId = new URLSearchParams(window.location.search).get("id");
console.log('id prodotto selezionato:',selectedId);

window.onload = async () => {
    if (selectedId) {
        // - - - - - - - - - - - - - - - provenienza da tasto "Modifica" - manipolazione del DOM
        document.getElementById('backofficeModify').innerText = 'Modifica prodotto';
        document.getElementById('insert-btn').innerText = 'Modifica';
        document.getElementById('delete-btn').classList.remove("d-none");

        // - - - - - - - - - - - - - - - provenienza da tasto "Modifica" - prepopolamento campi form
        try {
            

        }
        catch (error) {
            alert(error)
        }


    } else {

    }
}




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
