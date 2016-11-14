class App {
    constructor(notepad, formSelector, notesSelector) {
        this._notepad = notepad;
        this._formSelector = formSelector;
        this._notesSelector = notesSelector;
    }

    run() {
        this._bindEvents();
    }


    _bindEvents() {
        $(this._formSelector).on('submit', function (event) {
            event.preventDefault();
        });

        $(this._formSelector).find('#submit-note').on('click', () => {
            this._addNote();
        });

        $(this._notesSelector).parent().find('#reverse-notes').on('click', () => {
            this._reverseNotes();
            this._printNotes();
        });
    }

    _addNote() {
        let noteTitle = $(this._formSelector).find('#title').val().trim();
        let noteText = $(this._formSelector).find('#text').val().trim();

        if (noteTitle != '' && noteText != '') {
            $(this._formSelector).find('#title').val('');
            $(this._formSelector).find('#text').val('');
            let note = this._notepad.addNote(noteTitle, noteText);
            this._attachNote(note);
        }
    }

    _attachNote(noteObj) {
        let note = $('<div>')
            .addClass('panel panel-primary')
            .append($('<div>')
                .addClass('panel-heading')
                .text(noteObj.title))
            .append($('<div>')
                .addClass('panel-body')
                .append($('<p>')
                    .text(noteObj.text))
                .append($('<span>')
                    .text('Posted on: ' + noteObj.date + ' | ID:' + noteObj.id)))
            .hide();


        $(this._notesSelector)
            .append(note);

        note.slideDown();
    }

    _printNotes() {
        $(this._notesSelector).empty();
        for (let note of this._notepad.notes) {
            this._attachNote(note);
        }
    }

    _reverseNotes() {
        this._notepad.reverseNotes();
    }
}

module.exports = App;