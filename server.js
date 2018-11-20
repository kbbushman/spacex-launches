const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const PORT = process.env.PORT || 5000;
const path = require('path');

// Initialize App
const app = express();

// Allow Cross-Origin Requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.use(express.static('public'));

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
