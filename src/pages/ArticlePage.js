import { useParams } from "react-router-dom";
import articles from "./article-content";

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name == articleId);
  return (
    <>
      <h1>{article.title}</h1>

      {article.content.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </>
  );
};

export default ArticlePage;
