import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import './style.css';
import { ReactComponent as DelBtn } from '../../img/del_btn.svg'
import Input from '../input';
import { setFaqData, delFaq } from '../../Redux/actions/faq';


function Index({ id, p_question , p_answer }) {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const onChnageHandler = (data) => {
    if (data.name === "answer") setAnswer(data.value);
    if (data.name === "question") setQuestion(data.value);
  }

  const deleteFaq = () => {
    dispatch(delFaq(id));
  }

  // applying debounce technique to limit the dispatch call
  const debouncedHandler = useCallback(_.debounce(q => onChnageHandler(q), 500));

  useEffect(() => {
    if (answer && question) {
      dispatch(setFaqData({ id, answer, question }));
    }
  })

  return (
    <div className="faq">
      <div className="question content">
        <p className="label">Q.</p>
        <Input
          placeholder={p_question}
          name="question"
          parentChangeHandler={onChnageHandler}
        />
      </div>
      <div className="answer content">
        <p className="label">A.</p>
        <Input
          placeholder={p_answer}
          name="answer"
          parentChangeHandler={debouncedHandler}
        />
      </div>
      <div className="del-btn" onClick={deleteFaq} >
        <DelBtn />
      </div>
    </div>
  )
}

export default Index;
