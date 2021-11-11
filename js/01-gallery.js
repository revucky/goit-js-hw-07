import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galeryRef = document.querySelector(".gallery");
const markUp = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
  })
  .join("");

galeryRef.insertAdjacentHTML("beforeend", markUp);
let instance = null;
galeryRef.addEventListener("click", onGallery);
function onGallery(e) {
  e.preventDefault();
  if (e.target.tagName !== "IMG") {
    return;
  }
  const preview = e.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${preview}" width="800" height="600">
`);
  instance.show();
  // console.log(e.target.dataset.source);
}
window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    instance?.close();
  }
});

console.log(galleryItems);
