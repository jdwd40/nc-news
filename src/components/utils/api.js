import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'http://localhost:9090/api',
});

export const getArticles = () => {
  return newsApi.get('/topics').then(({ data }) => {
    return data.topics;
  });
};
