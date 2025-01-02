import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import axios from 'axios';
import Modal from '../components/Modal';
import notFound from '../assets/not-found.jpg'



const BitcoinPage = ({ searchedNews }) => {
    const [bitCoinNews, setbitCoinNews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedNews, setSelectedNews] = useState('');
    const [isLoading, setIsLoading] = useState(false)


    const openModal = (news) => {
        setSelectedNews(news);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`)
            .then((res) => {
                setbitCoinNews(res.data.articles);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err.message)
                setIsLoading(false)
            }
            );

    }, []);

    const searching = bitCoinNews.filter(searchedOnes =>
        searchedOnes.title.toLowerCase().includes(searchedNews.toLowerCase())
    )

    return (
        <>

            <div className="mb-3">


                <h1 className='text-light text-center'>News related BitCoin</h1><hr />
                {isLoading && (
                    <div className="d-flex justify-content-center align-items-center min-vh-100">
                        <div className="spinner-border text-warning fs-2"></div>
                    </div>
                )}


            </div>
            <div className="mb-3">

                <div className="container">


                    <div className="row">
                        {searching.length > 0 ? (



                            searching.map((news, index) => (

                                <div key={index} className="col-12 col-md-3 mb-4">

                                    <Card
                                        imgSrc={news.urlToImage || notFound}
                                        title={news.title}
                                        author={news.author || 'Anonymus'}
                                        description={news.description}
                                        onClick={() => openModal(news)}
                                    />
                                </div>
                            )))
                        :(
                        <div className="mb-3 text-warning fs-1 text-center ">No Result Found</div>
                        )}

                    </div>
                </div>
            </div>

            {selectedNews && (
                <Modal
                    showModal={showModal}
                    closeModal={closeModal}
                    imgSrc={(selectedNews.urlToImage) ? selectedNews.urlToImage : notFound}
                    title={selectedNews.title}
                    author={selectedNews.author}
                    description={selectedNews.description}
                    content={selectedNews.content}
                />
            )}
        </>
    );
};

export default BitcoinPage;
