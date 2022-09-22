
async function fetchDogImage(){
    let response = await fetch( "https://dog.ceo/api/breeds/image/random" );
    console.log( 2, response );
    let dogData = await response.json();
    console.log( dogData );
    let imageURL = dogData.message;
    let resultSection = document.querySelector( ".result" );
    resultSection.innerHTML = `<img src="${imageURL}" alt="Dog image" />`;
}

function retrieveDog( element ){
    console.log( 1, "You clicked the button" );
    fetchDogImage();
    console.log( 3, "This will come up first!" );
}

