import {
  v4 as uuidv4
} from "uuid";

export const setfaqdata = (faqs, data) => {
  const index = faqs.findIndex(el => el.id === data.id);
  faqs[index] = data;
  return faqs;
}

export const delFaqdata = (faqs, id) => {
  const newFaqs = faqs.filter(data => data.id !== id);
  return newFaqs;
}

export const generateNewFaq = () => {
  const newFAQ = {
    id: uuidv4(),
    question: "Write your question here",
    answer: "Write your answer here?"
  }
  return newFAQ;
}