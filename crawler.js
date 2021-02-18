const request = require('request');
const cheerio = require('cheerio');

const main_url = 'https://electronicplastic.com/';
const size = 12;
const result = [];

function get(page = 0) {
    let url = `${main_url}list/?company=&skip=${page * size}&filter=&search=all`;
    console.log(url);

    request(url, (err, res, body) => {
        let $ = cheerio.load(body);
        let items = $('.splitlist a');

        if (items.length) {
            for (let item of items) {
                item = $(item);
                let name = item.find('.title_game').html().split('<br>');
                result.push({
                    company: name[0],
                    name: name[1],
                    year: item.find('.year_game').text(),
                    image: item.find('img').attr('src').split('../').join(main_url),
                    url: item.attr('href').split('../').join(main_url)
                });
            }

            page++;
            get(page);
        }
        else {
            if (!err) {
                require('fs').writeFile('result.js', 'export default ' + JSON.stringify(result, null, 4), err => {
                    console.log(err || `done, saved ${result.length} items`);
                });
            }
            else {
                console.log(err);
            }
        }
    })
}

get();