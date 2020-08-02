import {
  FaqInputs
} from '../constants';

export const setFaq = () => ({
  type: FaqInputs.setFaq
});

export const setFaqData = (data) => ({
  type: FaqInputs.faqData,
  payload: data
});

export const delFaq = (uuid) => ({
  type: FaqInputs.delFaq,
  payload: uuid
})