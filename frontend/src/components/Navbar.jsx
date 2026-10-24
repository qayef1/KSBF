function Navbar(props) {
    return (
        <header>
            <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 py-4">
                <a href="/" onClick={(event) => props.onNavigate(event, "/")} className="text-lg font-semibold">
                    ksbf
                </a>
                <ul className="flex list-none flex-wrap gap-5 sm:gap-7">
                    <li><a href="/works" onClick={(event) => props.onNavigate(event, "/works")}>works</a></li>
                    <li><a href="/about" onClick={(event) => props.onNavigate(event, "/about")}>about</a></li>
                    <li><a href="/contact" onClick={(event) => props.onNavigate(event, "/contact")}>contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;