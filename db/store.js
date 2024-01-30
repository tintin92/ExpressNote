const fs = require("fs");
const util = require("util");
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
    async addNote(note) {
        const data = await this.read();
        const notes = JSON.parse(data);
        const newNotes = [...notes, note];
        return await this.write(newNotes);
    }
    async getNotes() {
        const notes = await this.read();
        return JSON.parse(notes);
    }
    async del(id) {
        const notes = await this.getNotes();
        const exNotes = notes.filter((note) => note.id !== id);
        this.write(exNotes);
    }
}

module.exports = new Store();

