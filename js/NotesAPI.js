//  STOPPED AT 13:59


export default class NotesAPI {
  //  method for retrieving all notes
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]")

    //  this sorts the notes by the most recently updated
    return notes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  //  method for saving notes
  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes()

    noteToSave.id = Math.floor(Math.random() * 1000000)
    noteToSave.updated = new Date().toISOString();
    notes.push(noteToSave);
    localStorage.setItem("notesapp-notes", JSON.stringify(notes))
  }
  //  method for deleting notes
  static deleteNote() {

  }
}

