

import express from 'express'

const app = express()
app.get('/', (req,res) => {
    res.send('hlo bennat raj. ')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
    if(err) console.error('Listen failure', err);
    console.log('Listen successfully.');
})
