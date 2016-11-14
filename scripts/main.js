let App = require('./models/App.js');
let Notepad = require('./models/Notepad.js');

let notepad = new Notepad();
let app = new App(notepad, '#notepad-form', '#notes-container');
app.run();