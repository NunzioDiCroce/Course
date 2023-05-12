
// - - - - - - - - - - - - - - - fetch GET al window.onload
window.onload = async () => {
    try {
        const promise = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTA2ZTg4Zjc0MDAwMTQyODc1NDMiLCJpYXQiOjE2ODM4ODYxOTAsImV4cCI6MTY4NTA5NTc5MH0.SONJVTCh6D-4h1tQmGvDBURkzhteVbnm5cQqR7lb0kw"
                }
            })
            if (promise.ok) {
                const postedProducts = await promise.json();
                console.log(postedProducts)
            } else {
                throw new Error("Richiesta non a buon fine")
            }
    }
    catch (error) {
        alert(error)
    }
}
