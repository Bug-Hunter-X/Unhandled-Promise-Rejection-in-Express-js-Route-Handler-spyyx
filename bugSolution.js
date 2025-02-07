const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello');
    })
    .catch(err => {
      console.error('Error in route handler:', err);
      res.status(500).send('Internal Server Error'); // Send a proper error response
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.5; // 50% chance of success
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
} 