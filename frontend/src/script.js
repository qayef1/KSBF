const articles = [
    {
        id: 1,
        title: "how i hacked bernadya's x account",
        image: "/images/x-logo.png",
        link: "/article-detail.html"
    }
];

function countArticles() {
    return articles.length;
}

function showArticles() {
    const list = document.getElementById("article-list");

    if (list == null) {
        return;
    }

    list.innerHTML = "";

    for (let i = 0; i < articles.length; i++) {
        const item = document.createElement("li");
        const link = document.createElement("a");
        const image = document.createElement("img");

        item.className = "py-5";
        link.className = "flex items-center gap-3";
        link.href = articles[i].link;

        image.src = articles[i].image;
        image.alt = "";
        image.className = "h-5 w-5";

        link.appendChild(image);
        link.appendChild(document.createTextNode(articles[i].title));
        item.appendChild(link);
        list.appendChild(item);
    }

    document.getElementById("article-count").textContent =
        countArticles() + " article";
}

export { showArticles };