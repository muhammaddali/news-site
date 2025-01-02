import React, { useEffect } from 'react';

const Modal = ({ showModal, closeModal, imgSrc, title, author, description, content }) => {
    useEffect(() => {
        if (showModal) {
            document.body.classList.add('modal-open');
            document.body.style.overflow = 'hidden';
        } else {
            document.body.classList.remove('modal-open');
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.classList.remove('modal-open');
            document.body.style.overflow = 'auto';
        };
    }, [showModal]);

    return (
        <div
            className={`modal fade ${showModal ? 'show' : ''}`}
            tabIndex="-1"
            aria-labelledby="modalLabel"
            aria-hidden="true"
            style={{
                display: showModal ? 'block' : 'none',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                overflowY: 'auto',
            }}
        >
            <div className="modal-dialog modal-lg">
                <div
                    className="modal-content border-0 shadow-lg rounded"
                    style={{
                        backgroundColor: '#f8f9fa',
                        animation: showModal ? 'zoomIn 0.5s' : 'zoomOut 0.5s',
                    }}
                >
            
                    <div
                        className="modal-header border-bottom-0 pb-2"
                        style={{
                            backgroundColor: '#007bff',
                            color: '#fff',
                            borderRadius: '0.3rem 0.3rem 0 0',
                        }}
                    >
                        <h5 className="modal-title fw-bold" id="modalLabel">
                            {title || 'Untitled'}
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            aria-label="Close"
                            onClick={closeModal}
                        ></button>
                    </div>

        
                    <div className="modal-body p-4">
            
                        <div
                            className="rounded overflow-hidden mb-3"
                            style={{
                                height: '300px',
                                backgroundColor: '#eaeaea',
                                position: 'relative',
                            }}
                        >
                            <img
                                src={imgSrc}
                                alt="Modal Visual"
                                className="w-100 h-10"
                               
                            />
                        </div>

                     
                        <h6 className="text-secondary mb-3">
                            <i className="fas fa-user me-2"></i>
                            {author || 'Anonymous'}
                        </h6>

           
                        <p className="text-dark fw-normal mb-4">
                            {description || 'No description available.'}
                        </p>

                   
                        <div
                            className="bg-light p-3 rounded shadow-sm"
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 'lighter',
                                borderLeft: '4px solid #007bff',
                            }}
                        >
                            {content || 'No additional content provided.'}
                        </div>
                    </div>

          
                    <div
                        className="modal-footer border-top-0 pt-2"
                        style={{
                            backgroundColor: '#f1f1f1',
                            borderRadius: '0 0 0.3rem 0.3rem',
                        }}
                    >
                        <button
                            type="button"
                            className="btn btn-danger "
                            onClick={closeModal}
                            style={{
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#dc3545';
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(220, 53, 69, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#e3342f';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Close
                        </button>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
