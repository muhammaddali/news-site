import React from 'react';

export const Card = ({ imgSrc, title, author, description, onClick }) => {
    return (
        <div
            className="mb-4 d-flex justify-content-center"
            style={{ cursor: 'pointer' }}
            onClick={onClick}
        >
            <div
                className="card shadow rounded border-0 bg-white position-relative"
                style={{
                    width: '22rem',
                    height: '450px',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                    overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
        
                <div
                    style={{
                        height: '45%',
                        position: 'relative',
                        backgroundColor: '#f7f7f7',
                    }}
                >
                    <img
                        src={imgSrc}
                        className="card-img-top w-100"
                        alt="Card"
                        style={{
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <span
                        className="position-absolute top-0 start-0 bg-warning text-dark fw-bold px-3 py-1 rounded-bottom"
                        style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}
                    >
                        FEATURED
                    </span>
                </div>

     
                <div className="card-body text-dark px-4 py-3 d-flex flex-column justify-content-between">
                    <h5 className="card-title text-truncate text-primary fw-bold">
                        {title || 'Untitled'}
                    </h5>
                    <h6 className="card-subtitle mb-3 text-muted fs-6">
                        <i className="fas fa-user me-2 text-danger"></i>
                        {author || 'Unknown Author'}
                    </h6>
                    <p
                        className="card-text text-secondary"
                        style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            marginBottom: '1rem',
                        }}
                    >
                        {description || 'No description available at the moment.'}
                    </p>
                </div>

         
                <div
                    className="card-footer bg-success text-warning text-center py-2"
                    style={{
                        borderTop: '1px solid #ffcc00',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        color: '#333',
                    }}
                >
                    <span
                        style={{
                            cursor: 'pointer',
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
                    >
                        Read More
                    </span>
                </div>
            </div>
        </div>
    );
};
