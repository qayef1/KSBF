function ArticleDetail(props) {
    if (props.article) {
        return (
            <main className="mt-16 mb-20 grid grid-cols-1 gap-10 md:grid-cols-4">
                <article className="min-w-0 md:col-span-3 md:col-start-2">
                    <a
                        href="/works"
                        onClick={(event) => props.onNavigate(event, "/works")}
                        className="text-sm text-gray-400"
                    >
                        ← Back to works
                    </a>

                    <h1 className="mb-5 mt-12 text-3xl font-semibold md:text-5xl">
                        {props.article.title}
                    </h1>

                    {props.article.image && (
                        <img
                            src={props.article.image}
                            alt=""
                            className="mt-4 h-auto w-full max-w-sm md:w-2/5"
                        />
                    )}

                    {props.article.summary && (
                        <p className="mt-6 mb-12 text-xl text-gray-400 italic">
                            {props.article.summary}
                        </p>
                    )}

                    <p className="mt-10 whitespace-pre-line leading-relaxed">
                        {props.article.content}
                    </p>
                </article>
            </main>
        );
    }

    return (
        <main className="mt-16 mb-20 grid grid-cols-1 gap-10 md:grid-cols-4">

            <aside className="md:col-span-1">
                <h3 className="mb-4 border-b border-neutral-800 pb-4 text-xs tracking-widest text-gray-400">
                    CONTENTS
                </h3>
                <ul className="border-l border-neutral-700 text-sm text-gray-400">
                    <li className="py-3 pl-4">
                        <a href="#introduction">Introduction</a>
                    </li>

                    <li className="py-3 pl-4">
                        <a href="#story">The Story</a>
                    </li>

                    <li className="py-3 pl-4">
                        <a href="#conclusion">Conclusion</a>
                    </li>
                </ul>
            </aside>

            <article className="min-w-0 md:col-span-3">

                <a href="/works" onClick={(event) => props.onNavigate(event, "/works")} className="text-sm text-gray-400">
                    ← Back to works
                </a>

                <p className="mt-12 mb-6 text-xs tracking-widest text-gray-400">
                    04 OCTOBER 2026 · katyusha
                </p>
                <h1 className="mb-5 text-3xl font-semibold md:text-5xl">
                    How I hacked bernadya's X account
                </h1>

                <img
                    src="/images/proof-lol.png"
                    alt="yea this is the proof"
                    className="mt-4 h-auto w-full max-w-sm md:w-2/5"
                />
                <p className="mt-6 mb-12 text-xl text-gray-400 italic">
                    cuma sekitar 2 bulanan, terus dia sadar dan ganti password LOL
                </p>

                <section id="introduction" className="mb-12">
                    <h2 className="mb-5 text-2xl font-semibold">
                        Introduction
                    </h2>
                    <p className="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>

                <section id="story" className="mb-12">
                    <h2 className="mb-5 text-2xl font-semibold">
                        The Story
                    </h2>
                    <p className="leading-relaxed">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </section>

                <section id="conclusion" className="mb-12">
                    <h2 className="mb-5 text-2xl font-semibold">
                        Conclusion
                    </h2>
                    <p className="leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </p>
                </section>

            </article>

        </main>
    );
}

export default ArticleDetail;