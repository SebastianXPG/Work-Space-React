// EmojiLibrary.js
import React from 'react';
import Emoji from './Emoji'; 
import emojisData from './emojis'; 

function EmojiLibrary() {
  return (
    <div className="emoji-library">
      {emojisData.map((emoji) => (
        <Emoji key={emoji.id} name={emoji.name} emoji={emoji.emoji} description={emoji.description} />
      ))}
    </div>
  );
}

export default EmojiLibrary;
