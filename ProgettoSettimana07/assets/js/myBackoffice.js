
// - - - - - - - - - - - - - - - definizione variabile in base ad prodotto selezionato (id)
const selectedId = new URLSearchParams(window.location.search).get("id");
console.log('id prodotto selezionato:',selectedId);

window.onload = async () => {
    if (selectedId) {
        // - - - - - - - - - - - - - - - provenienza da tasto "Modifica" - manipolazione del DOM
        document.getElementById('backofficeModify').innerText = 'Modifica prodotto';
        document.getElementById('insert-btn').innerText = 'Modifica';
        document.getElementById('delete-btn').classList.remove("d-none");

        // - - - - - - - - - - - - - - - provenienza da tasto "Modifica" - parametrizzazione Url & method
        const fetchUrl = 'https://striveschool-api.herokuapp.com/api/product/'+selectedId;
        const fetchMethod = 'GET';

        // - - - - - - - - - - - - - - - fetch parametrizzata
        try {
            const promise = await fetch(fetchUrl, {
                method: fetchMethod,
                //body:,
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTA2ZTg4Zjc0MDAwMTQyODc1NDMiLCJpYXQiOjE2ODM4ODYxOTAsImV4cCI6MTY4NTA5NTc5MH0.SONJVTCh6D-4h1tQmGvDBURkzhteVbnm5cQqR7lb0kw'
                    }
            })
            if (promise.ok) {
                const selectedProduct = await promise.json();
                console.log('prodotto selezionato:',selectedProduct);
                // - - - - - - - - - - - - - - - prepopolamento campi form
                const { _id, name, description, brand, imageUrl, price, userId, createdAt, updatedAt, __v } = selectedProduct;
                document.getElementById('name').value = name;
                document.getElementById('description').value = description;
                document.getElementById('brand').value = brand;
                document.getElementById('imageUrl').value = imageUrl;
                document.getElementById('price').value = price;
            } else {
                throw new Error('Richiesta non a buon fine')
            }
        }
        catch (error) {
            alert(error)
        }
    }
}


// - - - - - - - - - - - - - - - creazione/modifica prodotto da backoffice
const submitFunction = async (event) => {
    event.preventDefault();

    // - - - - - - - - - - - - - - - creazione prodotto
    const newProduct = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        brand: document.getElementById('brand').value,
        imageUrl: document.getElementById('imageUrl').value,
        price: document.getElementById('price').value
    }
    console.log('nuovo prodotto', newProduct)

    // - - - - - - - - - - - - - - - "if" per fetch PUT/POST
    if (selectedId) {
        try {
            const promise = await fetch('https://striveschool-api.herokuapp.com/api/product/'+selectedId, {
                method: 'PUT',
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

    } else {
        try {
            const promise = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
                method: 'POST',
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
}


// - - - - - - - - - - - - - - - elimina prodotto da backoffice
