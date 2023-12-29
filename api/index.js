import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express();

app.listen(3000, ()=>{
    console.log('Server is running port 3000');
})

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client","dist", "index.html"));
});