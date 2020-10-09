const uuid = require("uuid");
const fs = require("fs");
const { stringify } = require("querystring");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisfy(fs.writeFile);
//Store and retrieve notes used to store and retrieve notes using fs module.   
class Store {

    read() {
        return readFileAsync("./db/db.json", "utf-8");
    };

    write(note) {
        return writeFileAsync("./db/db.json", JSON.stringify(notes));
    };
    
    del(id) {
        return this.getNotes().then(notes => {
            notes.filter(note => {
                note.id !== id;

            }).then(notesLeft => {
                this.write(notesLeft);
            })
        })
    };

    // Unique id
    uuid();
}

module.exports = new Store();

