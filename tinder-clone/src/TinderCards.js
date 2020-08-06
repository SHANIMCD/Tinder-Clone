import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import database from './firebase'

function TinderCards() {
  const [people, setPeople] = useState([]);
  //Piece of code that runs on a condition
  useEffect(() => {

    const unsubscribe = database.collection('people').onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ));

    return () => {
      unsubscribe();
    }
  }, []); // code will only run one time, when the people state changes. Swipe

  return (
    <div>
      <div className="tinder_card_container">
        {
          people.map(person => (
            <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
              <div style={{ backgroundImage: `url(${person.url})` }} className='card'>
                <h3 className="tinder_card_name">{person.name}</h3>
              </div>
            </TinderCard>
          ))
        }
      </div>
    </div>
  )
}
export default TinderCards