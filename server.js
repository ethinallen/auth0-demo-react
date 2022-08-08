const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
  })
);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started listening for connections on port ${PORT}...`);
});
