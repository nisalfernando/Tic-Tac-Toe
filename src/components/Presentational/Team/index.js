import React from 'react';

import './index.css';

export default function Team({ toggle, player, computer }) {

  if (toggle) {
    return (
      <div className='team-area' id='team-area'>
        <p className='team'>Player:
        <span className={'. ' + player}> {player} </span></p>
        <p className='team'>Computer:<span className={'. ' + computer}> {computer} </span></p>
      </div>
    )
  } else {
    return null;
  }
}