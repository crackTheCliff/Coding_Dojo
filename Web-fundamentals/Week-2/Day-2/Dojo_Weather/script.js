
function loadingCityInformation( element ){
    alert( "Loading weather report..." );
}

function removeCookie( element ){
    let policyContainer = document.querySelector( ".cookiePolicy" );
    policyContainer.remove(); // Completely deletes the element from the DOM 
    // policyContainer.classList.add( "hideElement" ); // Adds a class with CSS to the element
}

function changeTemperature( element ){
    let allDegrees = document.querySelectorAll( ".max, .min" );
    
    for( let i = 0; i < allDegrees.length; i ++ ){
        let currentNum;
        if( element.value === "far" ){
            currentNum = Math.round( Number(allDegrees[i].textContent) * 1.8 + 32 );
        }
        else{
            currentNum = Math.round( (Number(allDegrees[i].textContent) - 32) * .5556 );
        }
        allDegrees[i].textContent = currentNum;
    }
}