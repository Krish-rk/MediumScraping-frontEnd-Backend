# Medium Scraper Frontend

This is the front-end application for the Medium scraper project. It provides a user interface for users to input topics and scrape related articles from Medium.

## Technologies Used

- React
- Axios
- react-loader-spinner

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. Enter a topic in the input field.
2. Click the "Scrape" button to fetch articles related to the topic from Medium.
3. The scraped articles will be displayed below the input field.

## Folder Structure

- `/src` contains the source code for the React application.
  - `/Components` contains reusable React components such as TopicInput, ArticlesDisplay, and Loader.
  - `/axiosInstance.js` contains the Axios instance configuration for API calls.
  - `/App.js` is the main component that orchestrates the application.
  - `/App.css` contains styles specific to the main application.
  - `/index.js` is the entry point for the React application.
- `/public` contains public assets and the HTML file for the application.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/my-feature`).
6. Create a new Pull Request.

# Medium Scraper Backend

This is the backend server for the Medium scraper project. It provides API endpoints for scraping articles from Medium based on a given topic.

## Technologies Used

- Node.js
- Express
- Axios
- Cheerio
- Cors
- Dotenv

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Create a `.env` file in the root directory and define the `PORT` variable (e.g., `PORT=4999`).
5. Start the server using `npm start` or `node index.js`.
6. The server will be running at [http://localhost:4999](http://localhost:4999).

## Endpoints

- `POST /scrape`: Accepts a JSON object with the `topic` key and returns scraped articles related to the topic.

Example request body:
```json
{
  "topic": "technology"
}



{
  "articles": [
    {
      "title": "Article Title",
      "author": "Author Name",
      "publicationDate": "2024-06-10",
      "url": "https://medium.com/article-url",
      "cardImage1Url": "https://example.com/image.jpg"
    },
    ...
  ]
}.

## Response:

Example
{
  "articles": [
    {
      "title": "Article Title",
      "author": "Author Name",
      "publicationDate": "2024-06-10",
      "url": "https://medium.com/article-url",
      "cardImage1Url": "https://example.com/image.jpg"
    },
    ...
  ]
}


