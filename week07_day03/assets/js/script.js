
// - - - - - - - - - - recupero e scrittura liberia nel DOM al window.onload
window.onload = () => {
    fetch('https://striveschool-api.herokuapp.com/books')
        .then((result) => { return result.json() })
        .then((books) => {
            let booksContainer = document.getElementById('booksContainer');
            for (i = 0; i < books.length; i++) {
                let book = books[i];
                booksContainer.innerHTML += `
                <div class="col-3 mb-4">
                    <div class="card">
                        <img src="${book.img}" class="card-img-top img-fluid" alt="...">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><b>Titolo:</b> <span id="title">${book.title}</span></li>
                            <li class="list-group-item"><b>Categoria:</b> <span id="category">${book.category}</span></li>
                        </ul>
                        <div class="card-body">
                            <button class="btn btn-success w-100 mb-3" id="buyBtn" value="${book.title}" onclick="buy(event)">${book.price} €</button>
                            <button class="btn btn-danger w-100" id="discardBtn" onclick="discard(event)">Scarta</button>
                        </div>
                    </div>
                </div>`
            }
        })
}


// - - - - - - - - - - definizione variabili DOM
let cart = document.getElementById('cart');


//definizione array libri in carrello
const shoppingBooks = [];


// - - - - - - - - - - definizione funzioni
// - - - - - - - - - - definizione funzioni: aggiungi libro al carrello (compra)
function buy (event) {
    let bookTitle = event.target.value;
    let bookPrice = event.target.innerText;
    let shoppingBook = {
        shoppingBookTitle: bookTitle,
        shoppingBookPrice: bookPrice
    }
    console.log(shoppingBook);
    shoppingBooks.push(shoppingBook);
    console.log(shoppingBooks);
    cart.innerHTML += `
    <li><button class="btn btn-danger py-0 mb-2" id="removeBtn" onclick="remove(event)" value="${shoppingBook.shoppingBookTitle}">x</button> ${shoppingBook.shoppingBookTitle} | ${shoppingBook.shoppingBookPrice}</li>
    `
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingBooks))
};


// - - - - - - - - - - definizione funzioni: scarta libro
function discard (event) {
    event.target.closest('.col-3').remove()
}


// - - - - - - - - - - definizione funzioni: rimuovi libro dal carrello
function remove (event) {
    event.target.closest('li').remove();
    let retrivedShoppingCard = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(retrivedShoppingCard);
    let key = event.target.value;
    console.log(key);
    console.log(typeof key)
    
}










