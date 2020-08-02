import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';
import Faq from '../../components/faqBox';
import AddFaqBtn from '../../components/addFaq';
import { setFaq } from '../../Redux/actions/faq';

function Index() {
  const faqs = useSelector(state => state.faqreducer.faqs);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(setFaq());
  }

  return (
    <div className="faq-inputs">
      <div className="content">
        <div className="content-text-info">
          <h1 className="content-title">Questions & Answers</h1>
          <p className="content-para">Write the questions and answers that came up</p>
        </div>
        {
          faqs.map((d, i) => (
            <div key={d.id}>
              <Faq id={d.id} p_question={d.question} p_answer={d.answer} />
              {faqs.length - 1 !== i && <div className="border" />}
            </div>
          ))
        }
        <AddFaqBtn onClickHandler={onClickHandler} />
      </div>
    </div>
  )
}

export default Index;
