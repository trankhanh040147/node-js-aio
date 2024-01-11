import fs from 'fs'

let note = 'today is Jan 10'

const getNotes = function(){
    return 'Your notes... ' + note
}

const addNote = function(title, body){
    const notes = loadNotes()
    
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
}

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    } catch (error) {
        console.log(error);
        return []
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// module.exports = getNotes
export default {
    getNotes: getNotes,
    addNote: addNote
}