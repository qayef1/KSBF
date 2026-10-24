function ArticleForm(props) {
    return (
        <form onSubmit={props.tambahArtikel}>
            <div className="mb-5">
                <label htmlFor="judul-artikel" className="mb-2 block">Judul Artikel</label>
                <input
                    type="text"
                    id="judul-artikel"
                    value={props.judulBaru}
                    onChange={(e) => {
                        props.setJudulBaru(e.target.value);
                        props.setPesan("");
                    }}
                    className="w-full rounded border border-neutral-700 bg-black p-3 text-white"
                    required
                />
            </div>

            <div className="mb-5">
                <label htmlFor="ringkasan-artikel" className="mb-2 block">Ringkasan</label>
                <textarea
                    id="ringkasan-artikel"
                    rows="3"
                    value={props.ringkasanBaru}
                    onChange={(e) => props.setRingkasanBaru(e.target.value)}
                    className="w-full rounded border border-neutral-700 bg-black p-3 text-white"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="isi-artikel" className="mb-2 block">Isi Artikel</label>
                <textarea
                    id="isi-artikel"
                    rows="12"
                    value={props.isiBaru}
                    onChange={(e) => {
                        props.setIsiBaru(e.target.value);
                        props.setPesan("");
                    }}
                    className="w-full rounded border border-neutral-700 bg-black p-3 text-white"
                    required
                />
            </div>

            <div className="mb-5">
                <label htmlFor="gambar-artikel" className="mb-2 block">URL Gambar (opsional)</label>
                <input
                    type="url"
                    id="gambar-artikel"
                    value={props.gambarBaru}
                    onChange={(e) => props.setGambarBaru(e.target.value)}
                    className="w-full rounded border border-neutral-700 bg-black p-3 text-white"
                />
            </div>

            <button
                type="submit"
                className="rounded bg-white px-4 py-2 font-semibold text-black"
            >
                Tambah Artikel
            </button>

            {props.pesan !== "" && (
                <div className="mt-5">
                    <p className="text-sm text-gray-400">{props.pesan}</p>
                    <a
                        href="/works"
                        onClick={(event) => props.onNavigate(event, "/works")}
                        className="mt-2 inline-block text-sm underline"
                    >
                        Lihat di Works
                    </a>
                </div>
            )}
        </form>
    );
}

export default ArticleForm;