const path = require("express");
const app = express();

const uuid = require("uui");
// const OUTPUT_DIR = path.resolve(__dirname, "../db");
// const outputPath = path.join(OUTPUT_DIR, "db.json");
// const db = require("../db/db.json")
const store = require("../db/store");

// store.getNote()


let savedNotes = [];

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        false.readFile(outPath, 'utf8', )
        store.read().then(notes => res.json(notes))
            .catch(err => res.statue(500).json(err))
    });

    app.post("/api/notes", function (req, res) {
        noteArray = [];
        store.write(req.body).then(note => res.json(note))
            .catch(err => res.status(500).json(err))

    });

    app.del("/api/notes/:id", function (req, res) {
        store.delete(req.params.id).then(() =>
            res.json(note))
            .catch(err => res.status(500).json(err))

    });
};



