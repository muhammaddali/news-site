import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
import notFound from '../assets/not-found.jpg';
import Modal from '../components/Modal';

const TopNews = ({ searchedArticle }) => {
  const [articles, setArticles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const openModal = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const searching = articles.filter((searchedONes) =>
    searchedONes.title.toLowerCase().includes(searchedArticle.toLowerCase())
  );

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${API_KEY}`)
      .then((res) => {
        setArticles(res.data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoading(false);
      });
  }, []);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  return (
    <>
      <h1 className="text-center text-light">Top Updated News</h1>
      <hr />
      <div className="mb-3">
        <div className="container">
          <div className="row">
            {isLoading && (
              <div className="mb-3 justify-content-center d-flex min-vh-100 align-items-center">
                <div className="mb-3 spinner-border text-warning fs-3"></div>
              </div>
            )}

            {searching.map((article, index) => (
              <div key={index} className="col-12 col-md-3 mb-4">
                <Card
                  imgSrc={`https://picsum.photos/200?random=${index}`}
                  title={(article.title === '[Removed]') ? 'It has been Removed' : article.title}
                  author={article.author || 'Mr. Ali'}
                  description={article.description}
                  onClick={() => openModal(article)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedArticle && (
        <Modal
          showModal={showModal}
          closeModal={closeModal}
          imgSrc={`https://picsum.photos/200?random=${generateRandomNumber(1, 20)}`}
          title={selectedArticle.title}
          author={selectedArticle.author || 'Mr. Ali'}
          description={selectedArticle.description || 'Not Found'}
          content={selectedArticle.publishedAt}
        />
      )}
    </>
  );
};

export default TopNews;
