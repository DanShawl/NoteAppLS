import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNote({
  title: "new Note",
  body: "i am a note",
  
})

console.log(NotesAPI.getAllNotes());