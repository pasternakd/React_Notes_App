const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'react-notes',
})

app.get("/note/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM notes WHERE id = ?", id, (err, result) => {
       if (err) {
        console.log(err);
       } else {
        res.send(result);
       }
     });
  });

app.get("/", (req, res) => {
    db.query("SELECT * FROM notes ORDER BY id desc", (err, result) => {
       if (err) {
        console.log(err);
       } else {
        res.send(result);
       }
     });
  });

app.post('/create', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    db.query("INSERT INTO notes(title, description) VALUES(?, ?)",
    [title, description],
    (err,results) => {
        if (err) {
            console.log(err);
        } else {
            res.send('Created');
        }
    })
});

app.put("/update", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;

    db.query(
      "UPDATE notes SET title = ?, description = ? WHERE id = ?",
      [title, description, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM notes WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


app.listen(3001, () => {
    console.log('Working...');
});