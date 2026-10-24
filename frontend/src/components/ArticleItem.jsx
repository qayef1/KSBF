function ArticleItem(props) {
    return (
        <li className="py-5">
            <a
                href={props.article.link}
                onClick={(event) => props.onNavigate(event, props.article.link)}
                className="flex items-center gap-3"
            >
                {props.article.image && (
                    <img
                        src={props.article.image}
                        alt=""
                        className="h-5 w-5"
                    />
                )}
                {props.article.title}
            </a>
        </li>
    );
}

export default ArticleItem;