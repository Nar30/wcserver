const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const PORT = 3000;

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
