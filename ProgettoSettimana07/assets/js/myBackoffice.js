
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

// - - - - - - - - - - - - - - - validazione campi form
const validateFunction = () => {
    document.getElementById('myForm').classList.add("validated")
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
                    console.log(newProductPosted);
                    // - - - - - - - - - - - - - - - destrutturazione prodotto selezionato (selectedProduct)
                    const { _id, name, description, brand, imageUrl, price, userId, createdAt, updatedAt, __v } = newProductPosted;
                    // - - - - - - - - - - - - - - - alert
                    alert('Il prodotto '+newProductPosted.name+' è stato modificato.');
                    // - - - - - - - - - - - - - - - reindirizzamento ad homepage
                    window.location.assign('./myIndex.html') 
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
                    console.log(newProductPosted);
                    // - - - - - - - - - - - - - - - destrutturazione prodotto selezionato (selectedProduct)
                    const { _id, name, description, brand, imageUrl, price, userId, createdAt, updatedAt, __v } = newProductPosted;
                    // - - - - - - - - - - - - - - - alert
                    alert('Il prodotto '+newProductPosted.name+' è stato inserito.');
                    // - - - - - - - - - - - - - - - reindirizzamento ad homepage
                    window.location.assign('./myIndex.html')                    
                } else {
                    throw new Error("Richiesta non a buon fine")
                }
        } catch (error) {
            alert(error)
        } 
    }
}


// - - - - - - - - - - - - - - - elimina prodotto da backoffice
const deleteFunction = async () => {
    // - - - - - - - - - - - - - - - confirm funzione "elimina"
    const confirmMessage = confirm('Eliminare il prodotto selezionato?')

    if (confirmMessage) {
        try {
            const promise = await fetch('https://striveschool-api.herokuapp.com/api/product/'+selectedId, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTA2ZTg4Zjc0MDAwMTQyODc1NDMiLCJpYXQiOjE2ODM4ODYxOTAsImV4cCI6MTY4NTA5NTc5MH0.SONJVTCh6D-4h1tQmGvDBURkzhteVbnm5cQqR7lb0kw',
                    'Content-Type': 'application/json'
                    }
                })
                if (promise.ok) {
                    const deletedProduct = await promise.json();
                    console.log(deletedProduct);
                    // - - - - - - - - - - - - - - - destrutturazione prodotto selezionato (selectedProduct)
                    const { _id, name, description, brand, imageUrl, price, userId, createdAt, updatedAt, __v } = deletedProduct;
                    // - - - - - - - - - - - - - - - alert
                    alert('Il prodotto '+deletedProduct.name+' è stato eliminato.');
                    // - - - - - - - - - - - - - - - reindirizzamento ad homepage
                    window.location.assign('./myIndex.html')
                } else {
                    throw new Error("Richiesta non a buon fine")
                }
        } catch (error) {
            console.log(error)
        }
    }

}


// - - - - - - - - - - - - - - - form reset
const resetFunction = () => {
    // - - - - - - - - - - - - - - - confirm funzione "elimina"
    const confirmMessage = confirm('Cancellare i dati del prodotto?');
    if (confirmMessage) {
        document.getElementById('name').value='';
        document.getElementById('description').value='';
        document.getElementById('brand').value='';
        document.getElementById('imageUrl').value='';
        document.getElementById('price').value=''
    }
}