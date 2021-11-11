import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galeryRef = document.querySelector(".gallery");
const markUp = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      // data-source="${original}"
      alt="${description}"
    />
  </a>`;
  })
  .join("");
galeryRef.insertAdjacentHTML("beforeend", markUp);
// // const gallaryClick = document.querySelector(".gallery__image");
// galeryRef.addEventListener("click", onGallery);
// function onGallery(e) {
//   e.preventDefault();
//   if (e.target.tagName !== "IMG") {
//     return;
//   }
// }
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
console.log(galleryItems);
