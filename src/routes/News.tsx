import { useEffect, useState } from "react";

interface NewsData {
  author: string;
  content: string;
  description: string;
  publishedAt: string | Date;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

const key = import.meta.env.VITE_NEWS_API_KEY;

const fetchNewsData = async (key: string) =>
  await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
  ).then((res) => res.json());

function News() {
  const [data, setData] = useState<NewsData[]>([]);
  useEffect(() => {
    fetchNewsData(key)
      .then((res) => setData(res.articles))
      .catch((err) => console.log(err));
  }, [setData]);

  return (
    <div>
      news
      <ul>
        {data.map((obj) => (
          <li key={obj.title}>{obj.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default News;
