import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

import ShowFaq from '../../components/showFaq';

function Index() {
  const faqs = useSelector(state => state.faqreducer.faqs);

  return (
    <div className="display-faq">
      <div className="display-content">
        <div className="display-content-title">
          <h1>questions & answers</h1>
        </div>
        {
          faqs.map(data =>
            <ShowFaq
              key={data.id}
              question={data.question}
              answer={data.answer}
            />
          )
        }
      </div>
    </div>
  )

}

export default Index;

