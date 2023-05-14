
// - - - - - - - - - - - - - - - fetch GET al window.onload
window.onload = async () => {

    // - - - - - - - - - - - - - - - variabile spinner Bootstrap (indicatore di caricamento)
    var loading = true;
    //console.log(loading);
    //var spinner = document.getElementById('spinner');
    //console.log(spinner);
    document.getElementById('spinner').classList.remove('d-none')

    try {
        const promise = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTA2ZTg4Zjc0MDAwMTQyODc1NDMiLCJpYXQiOjE2ODM4ODYxOTAsImV4cCI6MTY4NTA5NTc5MH0.SONJVTCh6D-4h1tQmGvDBURkzhteVbnm5cQqR7lb0kw"
                }
            })
            if (promise.ok) {
                const postedProducts = await promise.json();
                console.log('elenco prodotti inseriti',postedProducts);

                // - - - - - - - - - - - - - - - manipolazione DOM per inserimento product cards
                const productsContainer = document.getElementById('productsContainer');
                postedProducts.forEach((product) => {
                    productsContainer.innerHTML += `
                    <div class="col-4 mb-4">
                        <div class="card">
                            <img src="${product.imageUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Marca: ${product.brand}</li>
                                <li class="list-group-item">Prezzo: ${product.price} €</li>
                            </ul>
                            <div class="card-body">
                                <a href="./myDetails.html?id=${product._id}" class="btn btn-info w-100 mb-2">Scopri di più</a>
                                <a href="./myBackoffice.html?id=${product._id}" class="btn btn-secondary w-100" onclick="modify()">Modifica</a>
                            </div>
                        </div>
                    </div>
                    `
                })

            } else {
                throw new Error("Richiesta non a buon fine")
            }
    }
    catch (error) {
        alert(error)
    }

    loading = false;
    //console.log(loading)
    document.getElementById('spinner').classList.add('d-none')
}
