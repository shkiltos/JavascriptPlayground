const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'WnrhKTNg7CybSv1saCBHbTAlML7EA_9EC49AEwVaW1U';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for photos, add to DOM
function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create <a> to link unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Put <img> inside <a>, then both inside image-container
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

//  Get photos from unsplash api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log(error);
    }
}

// On load
getPhotos();
