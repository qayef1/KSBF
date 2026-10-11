import Works from "./pages/Works";
import Login from "./pages/Login";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";

function Navbar() {
    return (
        <header>
            <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 py-4">
                <a href="/" className="text-lg font-semibold">
                    ksbf
                </a>

                <ul className="flex list-none flex-wrap gap-5 sm:gap-7">
                    <li><a href="/works">works</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

function Home() {
    return (
        <main>
            <section className="mb-16 mt-20">
                <p className="text-2xl leading-relaxed sm:text-3xl">
                    <span className="bg-white px-2 py-1 font-semibold text-black">
                        knowledge should be free
                    </span>
                    {" "}and there is no limitation to what you study.
                </p>
            </section>

            <section className="mb-16" id="intro">
                <h2 className="mb-5 font-semibold">
                    イントロ
                </h2>

                <p className="leading-relaxed">
                    i have been a neurodivergent since i was a kid.
                    even when i was still in elementary school, some people
                    called me a weirdo (not-in-a-bad-way). well on this website
                    of mine, there will be various work that this weirdo has
                    done (mostly about hacking stuff).
                </p>
            </section>

            <section className="mb-16" id="works">
                <h2 className="mb-5 text-xl font-semibold">
                    <a href="/works">works</a>
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <article>
                        <a
                            href="/article-detail.html"
                            className="flex items-center gap-3"
                        >
                            <img
                                src="/images/x-logo.png"
                                alt=""
                                className="h-5 w-5"
                            />
                            how i hacked bernadya's x account
                        </a>
                    </article>
                </div>
            </section>
        </main>
    );
}

function App() {
    const path = window.location.pathname;

    return (
        <div className="min-h-screen bg-black text-gray-200">
            <div className="mx-auto w-11/12 max-w-6xl">

                <Navbar />

                {path === "/" && <Home />}
                {path === "/works" && <Works />}
                {path === "/article-detail.html" && <ArticleDetail />}
                {path === "/contact" && <Contact />}
                {path === "/admin" && <Login />}

            </div>
        </div>
    );
}

export default App;