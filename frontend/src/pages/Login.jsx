import { useState } from "react";
import ArticleForm from "../components/ArticleForm";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [menu, setMenu] = useState("welcome");

    function handleLogin(event) {
        event.preventDefault();
        setLoggedIn(true);
    }

    if (!loggedIn) {
        return (
            <section className="mx-auto mt-20 max-w-md">
                <h1 className="mb-8 text-2xl font-semibold">Admin Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label htmlFor="username" className="mb-2 block">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full rounded border border-neutral-700 bg-black p-3 text-white"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="mb-2 block">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded border border-neutral-700 bg-black p-3 text-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded bg-white p-3 font-semibold text-black"
                    >
                        Login
                    </button>
                </form>
            </section>
        );
    }

    return (
        <div className="mb-20 mt-16 grid grid-cols-1 gap-10 md:grid-cols-4">
            <aside className="border-b border-neutral-800 pb-6 md:col-span-1 md:border-b-0 md:border-r md:pr-6">
                <h2 className="mb-6 text-lg font-semibold">Admin</h2>
                <button
                    type="button"
                    onClick={() => setMenu("tambah")}
                    className="w-full rounded border border-neutral-700 px-4 py-3 text-left hover:bg-neutral-900"
                >
                    Tambah Artikel
                </button>
            </aside>

            <main className="min-w-0 md:col-span-3">
                {menu === "welcome" && (
                    <h1 className="text-3xl font-semibold">Welcome!</h1>
                )}
                {menu === "tambah" && (
                    <section>
                        <h1 className="mb-6 text-2xl font-semibold">Tambah Artikel</h1>
                        <ArticleForm
                            judulBaru={props.judulBaru}
                            setJudulBaru={props.setJudulBaru}
                            ringkasanBaru={props.ringkasanBaru}
                            setRingkasanBaru={props.setRingkasanBaru}
                            isiBaru={props.isiBaru}
                            setIsiBaru={props.setIsiBaru}
                            gambarBaru={props.gambarBaru}
                            setGambarBaru={props.setGambarBaru}
                            tambahArtikel={props.tambahArtikel}
                            pesan={props.pesan}
                            setPesan={props.setPesan}
                            onNavigate={props.onNavigate}
                        />
                    </section>
                )}
            </main>
        </div>
    );
}

export default Login;