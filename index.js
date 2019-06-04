let url = "https://newsapi.org/v2/top-headlines?country=se&apiKey=817d5fbe187e4d62b2583783c996416f";


let recivedNews = newsData => {
    newsData.articles.forEach(article => {
        document.querySelector(".row").innerHTML += `<div class="flip-card">
    <div class="flip-card-inner">
        <h5>${article.title}</h2>
        <img src="${article.urlToImage}"/>
        <div class="flip-card-front">
        <div class="flip-card-back">
        <p>${article.content}</p>
        </div> </div> </div>
        </div> 
        </br>`;
    });
};

fetch(url)
.then(Response => Response.json())
.then(recivedNews);