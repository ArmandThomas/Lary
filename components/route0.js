
function Connection() {
  const express = require('express');
  const bodyParser = require('body-parser');
  const mysql = require('mysql');

  const connection = mysql.createPool({
    host     : 'armandthvxbdd.mysql.db',
    user     : 'armandthvxbdd',
    password : 'cM3AfWnqDHxSWkf',
    database : 'armandthvxbdd'
  });
}
export default Connection;
