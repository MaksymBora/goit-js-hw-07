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
                <img class="gallery__image" src="${preview}"  alt="${description}" />
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
}

let modalImg = new SimpleLightbox('.gallery a', {
  doubleTapZoom: '1.5',
  captionsData: 'alt',
  captionDelay: 250,
});
