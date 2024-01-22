import { Pool } from 'pg';

// Database connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '2@Batman1969',
  port: 5432,
});

// Function to execute a SQL query
 async function executeQuery(queryString) {
  const client = await pool.connect();
  try {
    const result = await client.query(queryString);
    return result.rows;
  } catch (err) {
    console.error(err);
    return [];
  } finally {
    client.release(); // always release the client
  }
}

// Example usage
const sqlQuery = 'SELECT * FROM Address';
executeQuery(sqlQuery)
  .then(data => console.log(data))
  .catch(error => console.error(error));


export{executeQuery}





// // utils/db.js
// import { Pool } from 'pg';

// const pool = new Pool({
//   user: process.env.REDSHIFT_USER,
//   host: process.env.REDSHIFT_HOST,
//   database: process.env.REDSHIFT_DATABASE,
//   password: process.env.REDSHIFT_PASSWORD,
//   port: process.env.REDSHIFT_PORT,
// });

// export async function queryRedshift(text, params) {
//   const client = await pool.connect();
//   try {
//     const res = await client.query(text, params);
//     return res.rows;
//   } finally {
//     client.release();
//   }
// }
