import React, { useState } from 'react';

export const NavBar = ({ searched }) => {
    const [value, setValue] = useState('')

    const handleSearch = (e) => {
        setValue(e.target.value)
        searched(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searched(value)
    }

    return (
        <>
            <div className="mb-3 " style={{ position: 'sticky' }}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success gap-5 d-flex justify-content-between " >
                    <a className="navbar-brand ms-5" href="/">Read Updated News Here</a>
                    <a className='text-warning text-decoration-none hover' href="/topNews">Top News</a>
                    <a className='text-warning text-decoration-none hover' href="/trumpNews">Trump News</a>                  
                    <a className='text-warning text-decoration-none hover' href="/bitcoinNews">Bitcoin News</a>

                    

                    <form className="d-flex"
                        onClick={handleSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search by Title"
                            aria-label="Search"
                            onChange={handleSearch}
                            value={value}
                        />

                        <button
                            className="btn btn-warning"
                            type="submit"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </form>

                </nav>
            </div>
        </>
    );
};
