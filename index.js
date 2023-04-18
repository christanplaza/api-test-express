const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, () => console.log(`Hosted at: ${PORT}`))

app.use(express.json());

app.post('/users/:id', (req, res) => {
    const { id } = req.params;
    const { uid } = req.body;

    if (!uid) {
        res.status(418).send({ message: 'UID is required' })
    }

    res.status(200).send({
        message: `ok`
    })
});