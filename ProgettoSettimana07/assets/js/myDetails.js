
// - - - - - - - - - - - - - - - definizione variabile in base ad prodotto selezionato (id)
const selectedId = new URLSearchParams(window.location.search).get("id");
console.log('id prodotto selezionato:',selectedId);

// - - - - - - - - - - - - - - - fetch GET al window.onload
window.onload = async () => {
    try {
        const promise = await fetch('https://striveschool-api.herokuapp.com/api/product/'+selectedId, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTA2ZTg4Zjc0MDAwMTQyODc1NDMiLCJpYXQiOjE2ODM4ODYxOTAsImV4cCI6MTY4NTA5NTc5MH0.SONJVTCh6D-4h1tQmGvDBURkzhteVbnm5cQqR7lb0kw"
                }
            })
            if (promise.ok) {
                const selectedProduct = await promise.json();
                console.log(selectedProduct);

                // - - - - - - - - - - - - - - - manipolazione DOM per inserimento product cards
                const detailsContainer = document.getElementById('detailsContainer');
                
                detailsContainer.innerHTML += `
                    <div class="col-4 mb-4">
                        <div class="card">
                            <img src="${imageUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">${description}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Marca: ${brand}</li>
                                <li class="list-group-item">Prezzo: ${price}</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="btn btn-secondary w-100">Modifica</a>
                            </div>
                        </div>
                    </div>
                    `
            }
            
            else {
                throw new Error("Richiesta non a buon fine")
            }
    }
    catch (error) {
        alert(error)
    }
}



