import React from 'react';
import './Pagination.css';


const Pagination = ({pokemonsAmount, pokemonsOnPageLimit, 
                    currentPokemonPage, previousPage,
                    nextPage, setCurrentPage}) => {

    const displayPagination = () => {
        let pagesAmount = Math.floor(pokemonsAmount / pokemonsOnPageLimit);
        let pagesContainer = [], maxPaginationToShow = 3;
        for (let i = 1; i <= pagesAmount; i++) {
            pagesContainer.push(i);
        }
    
        let pages = pagesContainer.filter(page => {
            if (Math.abs(page - currentPokemonPage) < maxPaginationToShow) {
                return page;
            }
        }).map((page, index) => {
            return <li key={index} 
                       className={currentPokemonPage === page ? 'pageItem active' : 'pageItem'}
                       onClick={() => setCurrentPage(page)}>{page}</li>
        });

        return pages;
    }

    return (
        <ul className='pagination'>
            <li className="pagination__arrow pageItem" onClick={previousPage}>➤</li>
            {displayPagination()}
            <li className="pagination__arrow pageItem" onClick={nextPage}>➤</li>
        </ul>
    );
}

export default Pagination;

