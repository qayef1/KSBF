function Works() {
    const articles = [
        {
            id: 1,
            title: "how i hacked bernadya's x account",
            image: "/images/x-logo.png"
        }
    ];

    return (
        <section className="mt-16 mb-16">
            <h1 className="mb-8 text-2xl font-semibold">
                // works //
            </h1>

            <ul className="divide-y divide-neutral-800">
                {articles.map((article) => (
                    <li key={article.id} className="py-5">
                        <a
                            href="/article-detail.html"
                            className="flex items-center gap-3"
                        >
                            <img
                                src={article.image}
                                alt=""
                                className="h-5 w-5"
                            />
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Works;