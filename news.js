
const api_key = 'dbf3d5894a304a3b8c2861d160f1a63c'
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(api_key);


const topHeadLines = (cat) => {
    newsapi.v2.everything({
        q: cat,
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com', 
        from: '2017-12-01',
        to: '2021-01-01',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
      }).then(response => {
        console.log(response);
      });
}