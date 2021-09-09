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
    // console.log(modalOpenEl);
    getModalOpenOnClick(modalOpenEl);
}

const lightboxDiv = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');

function getModalOpenOnClick(elem) {
    lightboxDiv.classList.add('is-open');

    console.log(lightboxImg.src);

    if (lightboxImg.src === "http://127.0.0.1:5500/index.html") {
        lightboxImg.src = elem;
        console.log(lightboxImg.src);
    } else {
        lightboxImg.src = "''";
        console.log(lightboxImg.src);
    }
}

// const currentActiveImg = document.querySelector('.lightbox.is-open');
// console.log(currentActiveImg);
const modalCloseBtn = document.querySelector('button[data-action="close-lightbox"]');

modalCloseBtn.addEventListener('click', onCloseModalWindow);

function onCloseModalWindow() {
    lightboxDiv.classList.remove('is-open');
    // lightboxImg.setAttribute('src', "http://127.0.0.1:5500/index.html");
    // lightboxImg.src = "'";

    // lightboxImg.removeAttribute('src');
}


