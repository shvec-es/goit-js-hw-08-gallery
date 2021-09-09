import galleryItems from './app.js';

function createGalleryItems(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
    <a
        class="gallery__link"
        href="${original}"
    >
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`;
    }).join('');
}

const galleryContainer = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);
