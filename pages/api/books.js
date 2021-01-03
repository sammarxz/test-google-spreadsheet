import { GoogleSpreadsheet } from 'google-spreadsheet';

import credentials from '../../credentials/google-sheets-api.json';

export default async function(req, res) {
  const doc = new GoogleSpreadsheet(process.env.docId);

  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  const books = rows.map(({ name, author, cover, link }) => ({
    name,
    author,
    cover,
    link
  }));

  res.statusCode = 200;
  res.json({
    title: doc.title,
    books,
  })
};
