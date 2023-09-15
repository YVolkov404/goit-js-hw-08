export function insertGalleryMarkup(galleryItems) {
  const galleryContainer = document.querySelector('ul.gallery');

  const galleryMarkup = galleryItems.map(
    ({ preview, original, description }) => {
      const image = `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `;
      return image;
    }
  );

  galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup.join(''));
}
