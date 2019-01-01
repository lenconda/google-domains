const superagent = require('superagent');
const cheerio = require('cheerio');

class GoogleDomains {

  constructor() {  }

  fetch () {
    return new Promise (function (resolve, reject) {
      superagent.get('https://infogalactic.com/info/List_of_Google_domains')
                .then(function (result) {
                  let $ = cheerio.load(result.text);
                  let table = $('table.wikitable.sortable')[0];
                  let trs = $(table).find('tbody > tr');
                  let items = [];
                  trs.each(function (index, tr) {
                    let td = $(tr).find('td');
                    let item = {};
                    item.region = $(td[0]).text();
                    item.tld = $(td[1]).text();
                    item.domain = $(td[2]).text();
                    item.url = `https://www.${item.domain}`;
                    if (item.tld !== '.cn') items.push(item);
                  });
                  return items;
                })
                .then(function (items) {
                  items.shift()
                  resolve(items);
                })
                .catch(function (error) {
                  reject(error);
                });
    });
  }

  random () {
    let _this = this
    return new Promise(function (resolve, reject) {
      _this.fetch()
            .then(function (results) {
              resolve(results[Math.floor(Math.random() * results.length)]);
            })
            .catch(function (error) {
              reject(error);
            });
    });
  }

  randomUrl () {
    let _this = this
    return new Promise(function (resolve, reject) {
      _this.fetch()
            .then(function (results) {
              resolve(results[Math.floor(Math.random() * results.length)].url);
            })
            .catch(function (error) {
              reject(error);
            });
    });
  }

}

module.exports = GoogleDomains;