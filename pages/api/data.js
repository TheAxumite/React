// pages/api/insertData.js
import { executeQuery } from '../utils/db'; // Adjust the path as needed

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName } = req.body;

    const sqlQuery = {
        text: 'INSERT INTO Address(First_Name, Last_Name) VALUES($1, $2) ',
        values: [firstName, lastName],
      };

    try {
      const data = await executeQuery(sqlQuery);
      res.status(200).json(data.rows[0]); // Send the inserted data back as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error inserting data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
