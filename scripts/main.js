async function apiCall(url) {


    //add api call logic here
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data
    }catch(err){
        console.log(err);
    }


}


let appendArticles = (articles, main) =>{
    main.innerHTML = "";
    //add append logic here
    articles.forEach((el)=>{

        let div = document.createElement("div");
        div.id="news"
        div.addEventListener("click",()=>{
            localStorage.setItem("article",JSON.stringify(el));
            window.location.href="news.html";
        })
        
        let{urlToImage,title,description} = el;

        let image = document.createElement("img");
        image.src = urlToImage;

        let title1 = document.createElement("h4");
        title1.textContent = title;

        let desc = document.createElement("p");
        desc.textContent = description;
        
        div.append(image,title1,desc);
        main.append(div);


    })

}

export {apiCall,appendArticles}


/*
author: null
content: "Life Insurance Corporation of India's initial public offering (IPO) is expected to file its Draft Red Herring Prospectus (DRHP) on February 11, sources told CNBC-TV18.\r\nIt has learned that the Insura… [+914 chars]"
description: "LIC IPO: The quantum of divestment and EV numbers will be mentioned in the DRHP."
publishedAt: "2022-02-11T01:27:00Z"
source: {id: null, name: 'Moneycontrol'}
title: "LIC Public Issue | Filing with SEBI likely today, IRDAI clears draft papers - Moneycontrol.com"
url: "https://www.moneycontrol.com/news/business/ipo/lic-ipo-filing-with-sebi-likely-on-february-11-irdai-clears-draft-papers-8070891.html"
urlToImage: "https://images.moneycontrol.com/static-mcnews/2022/02/LIC-BUilding-770x433.jpg"
*/