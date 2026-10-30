import { useState, useEffect } from "react";

function Breaches() {
    const [breaches, setBreaches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [retry, setRetry] = useState(0);

    useEffect(() => {
        async function ambilBreaches() {
            setLoading(true);
            setError("");

            try {
                const response = await fetch("https://haveibeenpwned.com/api/v3/breaches");

                if (!response.ok) {
                    throw new Error("HTTP " + response.status);
                }

                const data = await response.json();
                setBreaches(data);
            } catch (err) {
                setError("Gagal mengambil data breaches. " + err.message);
            } finally {
                setLoading(false);
            }
        }

        ambilBreaches();
    }, [retry]);

    return (
        <main className="mt-16 mb-20">
            <h1 className="mb-8 text-center text-2xl font-semibold">platforms that have been breached (source: HIBP)</h1>

            {loading && <p>loading...</p>}

            {error && (
                <div>
                    <p>{error}</p>
                    <button
                        type="button"
                        onClick={() => setRetry(retry + 1)}
                        className="mt-4 rounded border border-neutral-700 px-4 py-2"
                    >
                        try again
                    </button>
                </div>
            )}

            {!loading && !error && (
                <ul className="divide-y divide-neutral-800">
                    {breaches.map((breach) => (
                        <li key={breach.Name} className="py-4">
                            <h2 className="font-semibold">{breach.Title}</h2>
                            <p className="text-sm text-gray-400">
                                Tanggal: {breach.BreachDate}
                            </p>
                            <p className="text-sm text-gray-400">
                                Akun terdampak: {breach.PwnCount}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}

export default Breaches;