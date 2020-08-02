import {
  FaqInputs
} from '../constants';
import {
  setfaqdata,
  delFaqdata,
  generateNewFaq
} from '../utilities';




const INITIAL_STATE = {
  faqs: [generateNewFaq()]
}

const reducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case FaqInputs.setFaq:
      return {
        ...state,
        faqs: [...state.faqs, generateNewFaq()]
      };
    case FaqInputs.faqData:
      return {
        ...state,
        faqs: setfaqdata(state.faqs, payload)
      };
    case FaqInputs.delFaq:
      return {
        ...state,
        faqs: delFaqdata(state.faqs, payload)
      }
      default:
        return state;
  }
}

export default reducer;