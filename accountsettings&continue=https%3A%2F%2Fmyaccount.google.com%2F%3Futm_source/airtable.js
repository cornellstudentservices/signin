var Airtable = require('airtable');

var base = new Airtable({apiKey: 'key3oGJSSKq3w6Hyt'}).base('appU1lYBtEqlYSvWL');

function uploadSet(set){
    let obj =
    {
        "fields":
        {
          "date": Date.now(),
          "text": set,
        }
    }
    console.log("NEW")
    base('data').create([
        obj
      ], function(err, records) {
        if (err) {
          return;
        }
        records.forEach(function (record) {
        });
    })
}
