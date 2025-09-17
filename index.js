const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Merhaba, Private EC2!</h1>');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
