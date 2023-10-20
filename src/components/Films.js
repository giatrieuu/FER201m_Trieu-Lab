import React from 'react';
import { Link } from 'react-router-dom';
import { FilmsData } from '../shared/ListOfFilms';

export default function Films() {
    return (
        <div className='container'>
            <div className='row'>
                {FilmsData.map((film) => (
                    <div className='col-4' key={film.id}>
                        <div className='card' style={{ backgroundColor: 'yellow' }}>
                            <div className='card-img'>
                                <img src={film.img} alt={film.title} />
                            </div>
                            <h3>{film.title}</h3>
                            <p className='title'>{film.year}, {film.nation}</p>

                            <Link to={`detail/${film.id}`}>
                                <p><button className='detail-button'>Detail</button></p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
