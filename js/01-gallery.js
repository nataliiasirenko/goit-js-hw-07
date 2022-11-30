import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(`.gallery`);
const items = galleryItems
  .map(({ preview, original, description }) => {
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
  })
  .join('');

gallery.insertAdjacentHTML(`afterbegin`, items);

gallery.addEventListener(`click`, onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (!event.target.classList.includes('gallery__item')) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.src}" width="800" height="600">
`);
  instance.show();
  galerry.addEventListener(`keydown`, e => {
    if (e.key === `Escape`) {
      instance.close();
    }
  });
}

// function onModalEscapeClick(evt) {
//   if (evt.key === `Escape`) {
//     instance.close();
//   }
// }

// const basicLightBox = document.querySelector(`.gallery`)
// gallery.addEventListener(`click`, e => {
//   instance = basicLightBox.create(
//     `<img src ="${e.target.src}` >
//       {
//         onShow: () => document.addEventListener('keydown', onModalEscapeClick),
//         onClose: () => document.removeEventListener('keydown', onModalEscapeClick),
//       }
//   );
//   instance.show();
// });

// const instance = basicLightbox.create(
//   `
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `,
//   {
//     onShow: instance => {
//       instance.element().querySelector('a').onclick = instance.close;
//     },
//   }
// );

// instance.show();
