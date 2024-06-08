import React, { useState } from 'react';
import TopicInput from './Components/TopicInput/TopicInput';
import ArticlesDisplay from './Components/ArticleDIsplay/ArticleDisplay';
import Loader from './Components/Loader/Loader';
import axiosInstance from './Components/Axios/axios';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleScrape = async (topic) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/scrape', { topic });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error scraping articles:', error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Medium Scraper</h1>
      <TopicInput onScrape={handleScrape} />
      {loading ? <Loader /> : <ArticlesDisplay articles={articles} />}
    </div>
  );
};

export default App;
