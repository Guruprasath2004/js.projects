const apicallkey = "aRdT_YDKdos7GZ0eBcIrV7Y_heePaeEU2Mfmv8LtNhg"


const formelement = document.querySelector("form");
const searchInput = document.getElementById("search-input");
const serachResultsEl = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apicallkey}`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1){
        serachResultsEl.innerHTML = "";
    }
    const results = data.results;
    results.map((result)=>{
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html
    imageLink_target = "_blank"
    imageLink.textContent = result.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    serachResultsEl.appendChild(imageWrapper);
})

    page++;


    if(page > 1){
        showMore.style.display = block;
    }

    console.log(results);
    
}

formelement.addEventListener("submit",(event)=>{
    event.preventDefault();
    searchImages();
});
showMore.addEventListener("click", ()=>{
    searchImages();
})