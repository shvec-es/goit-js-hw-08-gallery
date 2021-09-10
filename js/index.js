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

const galleryMarkup = createGalleryItems(galleryItems);

const galleryContainer = document.querySelector('.js-gallery');

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(ev) {
    ev.preventDefault();
    if (!ev.target.classList.contains('gallery__image')) {
        return;
    }

    const modalOpenEl = ev.target.dataset.source;
    getModalOpenOnClick(modalOpenEl);
}

const lightboxDiv = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');

function getModalOpenOnClick(elem) {
    lightboxDiv.classList.add('is-open');
    lightboxImg.setAttribute('src', elem);
}

const modalCloseBtn = document.querySelector('button[data-action="close-lightbox"]');

modalCloseBtn.addEventListener('click', onCloseModalWindow);
lightboxDiv.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('lightbox__overlay')) {
        onCloseModalWindow()
    }
});

window.addEventListener('keydown', (ev) => {
    if (ev.code === 'Escape') {
        onCloseModalWindow()
    }
})

function onCloseModalWindow() {
    lightboxDiv.classList.remove('is-open');
    lightboxImg.src = "";
}


