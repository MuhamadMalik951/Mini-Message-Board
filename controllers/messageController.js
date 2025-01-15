import client, { connectClient, getData } from '../db/queries.js';
export const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleDateString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleDateString(),
  },
];

async function messageController(req, res) {
  await connectClient();
  console.log(await getData());

  res.render('index', {
    messages: await getData(),
    title: 'Mini Message Board',
  });
}

export default messageController;
