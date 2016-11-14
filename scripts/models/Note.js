class Note {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.date = new Date();
    }

    set title(value) {
        // TODO - additional validations
        this._title = value;
    }

    get title() {
        return this._title;
    }

    set text(value) {
        // TODO - additional validations
        this._text = value;
    }

    get text() {
        return this._text;
    }
}

module.exports = Note;