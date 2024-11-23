const newman = require('newman');
require('dotenv').config();

newman.run({
    //collection: require('./collection/dmoney.json'),
    collection: `https://api.postman.com/collections/29824403-19f77f22-e76b-4cdd-8e1d-57b65c334254?access_key=${process.env.access_key}`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});