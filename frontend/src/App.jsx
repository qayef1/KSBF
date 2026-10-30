import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Works from "./pages/Works";
import Login from "./pages/Login";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";
import Breaches from "./pages/Breaches";

function Home(props) {
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
                    <a href="/works" onClick={(event) => props.onNavigate(event, "/works")}>works</a>
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <article>
                        <a
                            href="/article-detail.html"
                            onClick={(event) => props.onNavigate(event, "/article-detail.html")}
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
    const [path, setPath] = useState(window.location.pathname);
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: "how i hacked bernadya's x account",
            image: "/images/x-logo.png",
            link: "/article-detail.html"
        }
    ]);
    const [judulBaru, setJudulBaru] = useState("");
    const [ringkasanBaru, setRingkasanBaru] = useState("");
    const [isiBaru, setIsiBaru] = useState("");
    const [gambarBaru, setGambarBaru] = useState("");
    const [pesan, setPesan] = useState("");

    function navigate(event, halaman) {
        event.preventDefault();
        window.history.pushState({}, "", halaman);
        setPath(halaman);
    }

    useEffect(() => {
        function handleBack() {
            setPath(window.location.pathname);
        }

        window.addEventListener("popstate", handleBack);
        return () => window.removeEventListener("popstate", handleBack);
    }, []);

    function tambahArtikel(event) {
        event.preventDefault();

        if (judulBaru.trim() === "" || isiBaru.trim() === "") {
            return;
        }

        const id = Date.now();
        const artikelBaru = {
            id: id,
            title: judulBaru,
            summary: ringkasanBaru,
            content: isiBaru,
            image: gambarBaru,
            link: "/article/" + id
        };

        setArticles([...articles, artikelBaru]);
        setJudulBaru("");
        setRingkasanBaru("");
        setIsiBaru("");
        setGambarBaru("");
        setPesan("Artikel berhasil ditambahkan.");
    }

    let artikelDipilih = null;
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].link === path && articles[i].id !== 1) {
            artikelDipilih = articles[i];
        }
    }

    return (
        <div className="min-h-screen bg-black text-gray-200">
            <div className="mx-auto w-11/12 max-w-6xl">
                <Navbar onNavigate={navigate} />

                {path === "/" && <Home onNavigate={navigate} />}
                {path === "/works" && <Works articles={articles} onNavigate={navigate} />}
                {path === "/article-detail.html" && <ArticleDetail onNavigate={navigate} />}
                {path === "/contact" && <Contact />}
                {path === "/breaches" && <Breaches />}
                {path === "/admin" && (
                    <Login
                        judulBaru={judulBaru}
                        setJudulBaru={setJudulBaru}
                        ringkasanBaru={ringkasanBaru}
                        setRingkasanBaru={setRingkasanBaru}
                        isiBaru={isiBaru}
                        setIsiBaru={setIsiBaru}
                        gambarBaru={gambarBaru}
                        setGambarBaru={setGambarBaru}
                        tambahArtikel={tambahArtikel}
                        pesan={pesan}
                        setPesan={setPesan}
                        onNavigate={navigate}
                    />
                )}
                {artikelDipilih && <ArticleDetail article={artikelDipilih} onNavigate={navigate} />}
            </div>
        </div>
    );
}

export default App;