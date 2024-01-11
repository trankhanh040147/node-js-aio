import fs from 'fs'

const note = {
    title: 'Note 01',
    body: 'Go buy some milk'
}

// < WRITE JSON FILE

// const noteJSON = JSON.stringify(note);
// console.log(noteJSON);

// const parsedData = JSON.parse(noteJSON)
// console.log(parsedData.body);

// fs.writeFileSync('1-json.json', noteJSON)

// >

// <READ JSON FILE  
const dataBuffer = fs.readFileSync('1-json.json')
let dataJSON = dataBuffer.toString()  
let data = JSON.parse(dataJSON)
// console.log(data);
data.title = 'Note 01 modified'
data.body = 'Go juggling'
dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON)
// >




