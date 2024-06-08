import React, { useState } from 'react';
import './TopicInput.css';

const TopicInput = ({ onScrape }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    onScrape(topic);
  };

  return (
    <div className="topic-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button type="submit">Scrape</button>
      </form>
    </div>
  );
};

export default TopicInput;
