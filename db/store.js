const uuid = require("uuid");
const fs = require("fs");
const util = require("util");
const { stringify } = require("querystring");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
//Store and retrieve notes using our very own API   

class Store {

    read() {
        return readFileAsync("db/db.json", "utf-8");
    }
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    addNote(note) {
        return this.read()
            .then((data) => JSON.parse(data))
            .then((notes) => [...notes, note])
            .then((newNotes) => this.write(newNotes));
    }

    getNotes() {
        return this.read().then((notes) => JSON.parse(notes));
    }

    del(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((exNotes) => {
            this.write(exNotes);
            });
    }
}
module.exports = new Store();

