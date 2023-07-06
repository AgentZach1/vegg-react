import React from 'react';

function CardItemStatic(props) {
  return (
    <>
        <li className='cards__item'>
            <a className='cards__item__link' href={process.env.PUBLIC_URL + props.path} target="_blank" rel="noopener noreferrer">
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt="Travel" className='cards__item__img'>

                    </img>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                    <p className='cards__item__subtext'>{props.subtext}</p>
                </div>
            </a>
        </li>
    </>
  );
}

export default CardItemStatic;