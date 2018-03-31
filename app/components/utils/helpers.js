const axios = require('axios');

const articleQuery = function(topic, beginYear, endYear){
  const authKey = "8de821b85cc346e1ab43f64a033f2b3d";
  let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" +
                  topic + "&begin_date=" + beginYear + "0101" + "&end_date=" + endYear + "1231";

  return new Promise(function (fulfill, reject){
    axios.get(queryURL).then(function(response) {
      let result = [];
      if (response.data.response.docs[0]) {
        for(let i=0; i<response.data.response.docs.length; i++){
          
          if(i==5){
            break;
          }
          else {
            result.push(response.data.response.docs[i]);
          }
        }
        fulfill(result);
      }
      else{
        reject("");
      }
    });
  });
}

const apiSave = function(articleObj){
  let apiURL = window.location.origin + '/api/saved';
  return new Promise(function (fulfill, reject){
    let params = new URLSearchParams();
    params.append("title", articleObj.title);
    params.append("date", articleObj.date);
    params.append("url", articleObj.url);
    axios.post(apiURL, params).then(function(response){
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }
    })
  }); 
}

const apiGet = function(){
  let apiURL = window.location.origin + '/api/saved';
  return new Promise(function (fulfill, reject){
    axios.get(apiURL).then(function(response) {
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }
    });
  });
}

const apiDelete = function(deleteArticleId){
  let apiURL = window.location.origin + '/api/delete/' + deleteArticleId;
  return new Promise(function (fulfill, reject){
    axios.post(apiURL).then(function(response) {
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }
    });
  });
}

module.exports = {
 articleQuery,
 apiSave,
 apiGet,
 apiDelete
}
