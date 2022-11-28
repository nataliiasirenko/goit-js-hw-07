import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(`.gallery`);
const galleryListCards = createGalleyItems;
galleryEl.insertAdjacentHTML(`afterbegin`, galleryListCards);

function createGalleyItems(item) {
  item
    .map(({ preview, original, description }) => {
      `
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
}

console.log(galleryEl);

const instance = basicLightbox.create(
  `
    <div class="modal">
        <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
        <input placeholder="Type something">
        <a>Close</a>
    </div>
`,
  {
    onShow: instance => {
      instance.element().querySelector('a').onclick = instance.close;
    },
  }
);

instance.show();
