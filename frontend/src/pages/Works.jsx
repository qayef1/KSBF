import { useEffect } from "react";
import { showArticles } from "../script";

function Works() {
    useEffect(() => {
        showArticles();
    }, []);

    return (
        <section className="mt-16 mb-16">
            <h1 className="mb-8 text-2xl font-semibold">
                works
            </h1>

            <p
                id="article-count"
                className="mb-4 text-sm text-gray-400"
            ></p>

            <ul
                id="article-list"
                className="divide-y divide-neutral-800"
            ></ul>
        </section>
    );
}

export default Works;