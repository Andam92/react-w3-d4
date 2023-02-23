import { useEffect, useState } from "react";
import MyArticles from "./Article";

interface Articles {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  launches: any[];
  events: any[];
}

const MyHome = () => {
  const mainAPI = "https://api.spaceflightnewsapi.net/v3/articles";
  const [articles, setArticles] = useState<Articles[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(mainAPI);
      if (response.ok) {
        let data = await response.json();
        setArticles(data);
        console.log(data);
      }
    } catch (error) {
      console.log("ERRORE", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      {articles &&
        articles.map((article) => (
          <MyArticles
            key={article.id}
            imageURL={article.imageUrl}
            publishedAt={article.publishedAt}
            summary={article.summary}
            title={article.title}
            url={article.url}
            id={article.id}
          />
        ))}
    </>
  );
};

export default MyHome;
