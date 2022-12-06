import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = createGalleyMarkup(galleryItems);
gallery.insertAdjacentHTML(`beforeend`, galleryMarkup);

function createGalleyMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item"
href="${original}">
  <img class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery__item', {
  captionData: `alt`,
  captionDelay: 250,
});
