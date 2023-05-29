
// prima fetch legata al primo button
loadImages = () => {
  photosContainer.innerHTML = '';
    let response = fetch('https://api.pexels.com/v1/search?query=images', {
        headers: {
            "Authorization": "I99gVWAtoK8zgtoWAPevksbF3HBAT0rfN4NjvKuI53cw20TAyco6lWIz"
        }
    })
    .then((result) => {return result.json()})
    //.then((result) => {return console.log(result.photos)})
    .then((photos) => {
        let photosContainer = document.getElementById('photosContainer');
        console.log(photosContainer);
        for (i = 0; i < photos.photos.length; i++) {
            let photo = photos.photos[i];
            photosContainer.innerHTML += `
            <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="${photo.src.medium}" class="card-img-top img-fluid"
              alt="...">
              <div class="card-body">
                <h5 class="card-title">${photo.alt}</h5>
                <p class="card-text">avg_color: ${photo.avg_color}</p>
                <p class="card-text">photographer: ${photo.photographer}</p>
                <p class="card-text">photographer_id: ${photo.photographer_id}</p>
                <p class="card-text">photographer_url: ${photo.photographer_url}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="view(event)">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hide(event)">
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">photo_id: ${photo.id}</small>
                </div>
              </div>
            </div>
          </div>
            `
        }
    })
}

// seconda fetch legata al secondo button
loadSecondaryImages = () => {
  photosContainer.innerHTML = '';
  let response = fetch('https://api.pexels.com/v1/search?query=images', {
      headers: {
          "Authorization": "I99gVWAtoK8zgtoWAPevksbF3HBAT0rfN4NjvKuI53cw20TAyco6lWIz"
      }
  })
  .then((result) => {return result.json()})
  //.then((result) => {return console.log(result.photos)})
  .then((photos) => {
      let photosContainer = document.getElementById('photosContainer');
      console.log(photosContainer);
      for (i = 0; i < photos.photos.length; i++) {
          let photo = photos.photos[i];
          photosContainer.innerHTML += `
          <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src="${photo.src.medium}" class="card-img-top img-fluid"
            alt="...">
            <div class="card-body">
              <h5 class="card-title">${photo.alt}</h5>
              <p class="card-text">avg_color: ${photo.avg_color}</p>
              <p class="card-text">photographer: ${photo.photographer}</p>
              <p class="card-text">photographer_id: ${photo.photographer_id}</p>
              <p class="card-text">photographer_url: ${photo.photographer_url}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hide(event)">
                    Hide
                  </button>
                </div>
                <small class="text-muted">photo_id: ${photo.id}</small>
              </div>
            </div>
          </div>
        </div>
          `
      }
  })
}

// definizione funzione hide card
function hide (event) {
  event.target.closest('.col-md-4').remove()
}

/*window.onload = () => {
    let response = fetch('https://api.pexels.com/v1/search?query=images', {
        headers: {
            "Authorization": "I99gVWAtoK8zgtoWAPevksbF3HBAT0rfN4NjvKuI53cw20TAyco6lWIz"
        }
    })
    .then((result) => {return result.json()})
    //.then((result) => {return console.log(result.photos)})
    .then((photos) => {
        let photosContainer = document.getElementById('photosContainer');
        console.log(photosContainer);
        for (i = 0; i < photos.photos.length; i++) {
            let photo = photos.photos[i];
            photosContainer.innerHTML += `
            <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="${photo.src.medium}" class="card-img-top img-fluid"
              alt="...">
              <div class="card-body">
                <h5 class="card-title">${photo.alt}</h5>
                <p class="card-text">avg_color: ${photo.avg_color}</p>
                <p class="card-text">photographer: ${photo.photographer}</p>
                <p class="card-text">photographer_id: ${photo.photographer_id}</p>
                <p class="card-text">photographer_url: ${photo.photographer_url}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="view(event)">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hide(event)">
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">photo_id: ${photo.id}</small>
                </div>
              </div>
            </div>
          </div>
            `
        }
    })
}*/