import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin123!@#",
    database:"blog",
    connectionLimit : 100,
    waitForConnections : true,
    queueLimit :0,
    debug    :  true,
    wait_timeout : 28800,
    connect_timeout :10
})