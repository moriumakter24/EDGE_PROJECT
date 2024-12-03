
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const customerRoutes = require('./routes/customerRoutes');
app.use('/api/customer', customerRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
