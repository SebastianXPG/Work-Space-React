// Emoji.js
import React from 'react';

function Emoji({ name, emoji, description }) {
  return (
    <div className="emoji">
      <span className='logo-emoji' role="img" aria-label={name}>
        {emoji}
      </span>
      <p className='title-emoji'>{name}</p>
      <div className='content-description'>
      <p className='description-emoji'>{description}</p>
      </div>
    </div>
  );
}

export default Emoji;
