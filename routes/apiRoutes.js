const uuid = require("uuid");
const notes = require("../db/db.json");
const store = require("../db/store");


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        store
            .read()
            .then((data) => JSON.parse(data))
            .then(notes => res.json(notes))
            .catch(err => res.statue(500).json(err));
    });

    app.post("/api/notes", function (req, res) {
        req.body.id = uuid.v1();
        store
            .addNote(req.body)
            .then((note) => res.json(note))
            .catch((err) => res.status(500).json(err));
        res.send(req.body);
    });
    
    app.delete("/api/notes/:id", function (req, res) {
        store
            .del(req.params.id)
            .then(() => res.json(notes))
            .catch((err) => res.status(500).json(err));
    });
};



