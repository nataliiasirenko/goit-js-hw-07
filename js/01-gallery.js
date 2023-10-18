import { galleryItems } from './gallery-items.js';

const makeGalerryItemsMarkup = ({ preview, original, description }) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"

    />
  </a>
</div>`;
};

const makeGalerryitems = galleryItems.map(makeGalerryItemsMarkup).join('');
const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', makeGalerryitems);
galleryEl.addEventListener('click', handleImageClick);

function handleImageClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`
  <div class="modal">
  <img src="${e.target.dataset.source}" width -"800" height-"600">
  </div>
`);
  instance.show();

  galleryEl.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()
