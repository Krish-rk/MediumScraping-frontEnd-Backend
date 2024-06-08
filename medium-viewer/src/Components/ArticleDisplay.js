import React from 'react';
import './ArticleDisplay.css';

const ArticlesDisplay = ({ articles }) => {
  return (
    <div className="articles-display">
      <h2>Scraped Articles</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            {article.cardImage1Url && (
              <img src={article.cardImage1Url} alt="Article" className="article-image" />
            )}
            <h3>{article.title || 'No title available'}</h3>
            <p>Author: {article.author || 'Unknown author'}</p>
            <p>Publication Date: {article.publicationDate}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesDisplay;
