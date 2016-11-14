let Note = require('./Note.js');

class Notepad {
    constructor() {
        this._notes = [];
        this._id = 0;
    }

    get notes() {
        return this._notes;
    }

    addNote(title, text) {
        let note = new Note(this._id++, title, text);
        this._notes.push(note);

        return note;
    }

    reverseNotes() {
        this._notes = this._notes.reverse();
    }
}

module.exports = Notepad;