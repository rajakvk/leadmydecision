import React, { useState } from 'react';
import Timer from '../Timer/Timer';
import './LeadMyDecision.css';

const LeadMyDecision = () => {
  const [ chosen, setChosen ] = useState(false);
  const [ thisSelected, setThisSelected ] = useState(false);
  const [ thatSelected, setThatSelected ] = useState(false);
  const choose = () => {
    let randomBox = Math.floor(Math.random() * 2) ? 'thisBox' : 'thatBox';
    if(chosen) {
      setChosen(false);
      setThisSelected(false);
      setThatSelected(false);
    } else {
      if(randomBox === 'thisBox') {
        setThisSelected(true);
        setThatSelected(false);
      } else {
        setThisSelected(false);
        setThatSelected(true);
      }
      setChosen(true);
    }
  };
  return (
    <div className="container1">
      <div className="decisions-container">
        <div className={ thisSelected ? 'this-box selected': 'this-box' }>This</div>
        <div className={ thatSelected ? 'that-box selected': 'that-box' }>That</div>
      </div>
      <Timer choose={choose} chosen={chosen} setChosen={setChosen} setThisSelected={setThisSelected} setThatSelected={setThatSelected} />
      <div className="button-container">
        <button onClick={choose} className="decision-button">{chosen ? 'Reset' : 'Choose Now'}</button>
      </div>
    </div>
  )
}

export default LeadMyDecision;