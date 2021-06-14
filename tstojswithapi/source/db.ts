
const Pool=require('pg').Pool;

const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'traklabs',
    password: '1225',
    port:5432
})

module.exports=pool;