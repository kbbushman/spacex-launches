const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const PORT = process.env.PORT || 5000;

// Initialize App
const app = express();

// Allow Cross-Origin Requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


// Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
