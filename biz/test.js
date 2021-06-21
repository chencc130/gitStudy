const moment = require('moment');
const start_time = moment().subtract(7, 'days').startOf('isoweeks').format('YYYY-MM-DD HH:mm:ss');
const end_time = moment().subtract(7, 'days').endOf('isoweeks').format('YYYY-MM-DD HH:mm:ss');


async function test() {
    console.log(start_time);
    console.log(end_time);
}

test();
exports.test;