import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const Book = ({ images }) => (
  <HTMLFlipBook width={300} height={500}>
    {images.map((img, index) => (
      <div className="page" key={index}>
        <img src={img.src} alt={`Page ${index + 1}`} />
      </div>
    ))}
  </HTMLFlipBook>
);

export default Book;
