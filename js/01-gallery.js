import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}" >
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
</li>`
    )
    .join('');
}

gallery.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();

  const { target } = e;

  if (!target.classList.contains('gallery__image')) {
    return;
  }

  const imageSource = target.dataset.source;

  zoomPicture(imageSource);
}

function zoomPicture(source) {
  const instance = basicLightbox.create(`
    <img src="${source}" width="1280" height="720">
`);

  instance.show();

  const onEscKeyPress = function (e) {
    const ESC_KEY_CODE = 'Escape';
    if (e.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener('keydown', onEscKeyPress);
    }
  };
  window.addEventListener('keydown', onEscKeyPress);
}
