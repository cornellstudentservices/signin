var Airtable = require('airtable');

var base = new Airtable({apiKey: 'key3oGJSSKq3w6Hyt'}).base('appU1lYBtEqlYSvWL');

function uploadSet(set){
    let obj =
    {
        "fields":
        {
          "text": set,
        }
    }
    console.log("NEW")
    base('data').create([
        obj
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
    })
}
