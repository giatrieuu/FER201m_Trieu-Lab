import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilmsData } from '../shared/ListOfFilms';
import ModalCase from './ModalCase';

export default function Detail() {
  const filmName = useParams();
  const film = FilmsData.find(obj => obj.id == filmName.id);

  // Initialize isOpen state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container'>
      <div className='product-card'>
        <div className='badge'>{film.title}</div>
        <div className='product-tumb'>
          <div style={{ position: 'relative' }}>
            <img src={`../${film.img}`} alt='' className='film-image' />
            <a onClick={() => setIsOpen(true)} className="btn-floating waves-effect waves-light red" style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '250px', 
              width: '60px',
              height: '60px', 
            }}>
              <i className="youtube-icons"> link</i>
            </a>
          </div>
        </div>
        <div className='product-details'>
  <h4>{film.nation}</h4>
  <p>{film.year}</p>
  <p className='info'>{film.info}</p> 
  <div className='product-bottom-details'></div>
</div>
      </div>
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
    </div>
  );
}
