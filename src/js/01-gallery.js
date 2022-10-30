// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createsGalleryLayout(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryRef.addEventListener("click", onClickImg);



let lightbox = new SimpleLightbox('.gallery a',{
  captionsData: "alt",
  captionDelay: 250,
    
});

function onClickImg(event) {
  event.preventDefault();  

  if (event.target.nodeName !== "IMG") {
  console.log(event.target.nodeName)
    return;
  }
  lightbox.open();
}


function createsGalleryLayout(galleryItems) {
  return galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}
console.log(galleryRef)
