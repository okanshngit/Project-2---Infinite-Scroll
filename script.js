const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "BJySxs9b2UNbz9kEjFfGXDGYX7XFnaOjOauzTWAwqX0"
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Create Elements for Links and Images
function displayPhotos(){
  photosArray.forEach(photo => {
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html)
    item.setAttribute('target', '_blank');

    const image = document.createElement('img');
    image.setAttribute('src', photo.urls.regular);
    image.setAttribute('alt', photo.alt_description);
    image.setAttribute('title', photo.description);

    item.appendChild(image);
    imageContainer.appendChild(item)
  })
}

// Get photos from Unsplash API
async function getPhotos(){
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    
  }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
    getPhotos();
  }
});

getPhotos();