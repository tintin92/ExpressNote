const fs = require("fs");
const uuid = require("uuid");
const util = require("util");
const { stringify } = require("querystring");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
//Store and retrieve notes used to store and retrieve notes using fs module.   

class Store {

    read() {
        return readFileAsync("db/db.json", "utf-8");
    }
    write(note) {
        return writeFileAsync("/db/db.json", JSON.stringify(note));
        // }
        // addNote(note) {
        //     return this.read()
        //         .then((data) => JSON.parse(data))
        //         .then((notes) => [...notes, note])
        //         .then((newNotes) => this.write(newNotes));
        // }

        // del(id) {
        //     return this.getNotes().then(note => {
        //         note.filter(note => {
        //             note.id !== id;

        //         }).then(notes => {
        //             this.write(notes);
        // });

    }
}
module.exports = new Store();

