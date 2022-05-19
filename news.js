
const api_key = undefined
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(api_key);
var prompt = require('prompt-sync')();



const api_key_setter = () => {
    console.log('The Account must be a Paid Account')
    key_prompt = prompt('NewsAPI Key: ')
    api_key = key_prompt
}

const topHeadLines = (cat) => {
    newsapi.v2.everything({
        q: cat,
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com', 
        from: '2020-02-01',
        to: '2022-03-01',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
      }).then(response => {
        console.log(response);
      });
}


const prompt_headline = () => {
    if (api_key === undefined) {
        api_key_setter()
    }
    user_news_prompt = prompt('Topic: ')
        topHeadLines(user_news_prompt)
    
}

