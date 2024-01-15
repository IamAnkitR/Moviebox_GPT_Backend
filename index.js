import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;


// MiddleWares -->

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Route Files -->

import routes from './routes/index.js';

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
});