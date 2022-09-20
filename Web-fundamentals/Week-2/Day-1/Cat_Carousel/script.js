
function selectImage( element ){
    let currentImage = element.querySelector( "img" );
    let imageSrc = currentImage.src;
    let imageAlt = currentImage.getAttribute("alt");
    let bigImage = document.querySelector( ".mainImage > img" ); 
    bigImage.src = imageSrc;
    bigImage.alt = imageAlt;
}