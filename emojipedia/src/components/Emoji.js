// Emoji.js
import React from 'react';

function Emoji({ name, emoji, description }) {
  return (
    <div className="emoji">
      <span role="img" aria-label={name}>
        {emoji}
      </span>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

export default Emoji;
