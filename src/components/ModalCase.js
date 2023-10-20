import React from 'react';

export default function ModalCase({ setIsOpen, film }) {
    return (
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{ display: 'block', top: '35%' }}>
                <div className="modal-content">
                    <h4>{film.title}</h4>
                    <p>
                    <iframe
    width="100%"
    height="400px"
    src={`https://www.youtube.com/embed/${film.clip}`}
    title={film.name}
    frameBorder="0"  // Đã chỉnh sửa thành frameBorder
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen  // Đã chỉnh sửa thành allowFullScreen
/>
                    </p>
                </div>
                <div className="modal-footer">
                    <a className="modal-close red-text">Close</a>
                </div>
            </div>
        </div>
    );
}
