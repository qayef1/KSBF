import ArticleCount from "../components/ArticleCount";
import ArticleList from "../components/ArticleList";

function Works(props) {
    return (
        <section className="mt-16 mb-16">
            <h1 className="mb-8 text-2xl font-semibold">
                works
            </h1>

            <ArticleCount jumlah={props.articles.length} />
            <ArticleList articles={props.articles} onNavigate={props.onNavigate} />
        </section>
    );
}

export default Works;