import ArticleItem from "./ArticleItem";

function ArticleList(props) {
    return (
        <ul className="divide-y divide-neutral-800">
            {props.articles.length === 0 ? (
                <li>Belum ada data artikel</li>
            ) : (
                props.articles.map((article) => (
                    <ArticleItem
                        key={article.id}
                        article={article}
                        onNavigate={props.onNavigate}
                    />
                ))
            )}
        </ul>
    );
}

export default ArticleList;