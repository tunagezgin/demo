const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Merhaba, Private EC2!-değişiklik-</h1>');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
