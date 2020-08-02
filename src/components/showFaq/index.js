import React, { useState } from 'react';

import './style.css';

export default function Index({ question, answer }) {
  const [displayQuestion, setDisplayQuestion] = useState(false);

  const displayHandler = () => {
    setDisplayQuestion(!displayQuestion);
  }
  return (
    <div className="show-faq">
      <div className="show-faq-question show-box">
        <p className="faq-title">Q.</p>
        <p className="question main-text">{question}</p>
        <div className="show-answer" onClick={displayHandler}>
          {!displayQuestion ?
            <i className="fas fa-chevron-down"></i>
            : <i className="fas fa-chevron-up"></i>
          }
        </div>
      </div>
      {displayQuestion && <div className="show-faq-answer show-box">
        <p className="faq-title">A.</p>
        <p className="answer main-text">{answer}</p>
      </div>}
    </div>
  )
}
