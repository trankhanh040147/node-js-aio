// const http = require('http')
import express from 'express'
const app = express()

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

const generateId = () => {
  const maxId = notes.length > 0 
    ? Math.max(...notes.map(n=>n.id))
    : 1
  return maxId + 1
}

// setting up 
app.use(express.json()) // parse incoming JSON data to `request.body` property


// use `http` module
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' })
//   response.end(JSON.stringify(notes))
// })

app.get('/', (request, response) => {
  response.send('<h1>Express server</h1>')
})

app.get('/api/note', (request, response) => {
  response.json(notes) // set response header to `application/json` and convert `notes` to JSON, then send it
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log(id);
  // const note = notes.find(note => {
  //   console.log(note.id, typeof note.id, id, typeof id, note.id === id);
  //   return note.id === id
  // })
  const note = notes.find(note => note.id === id)
  if(note) {
    response.json(note)
  } else {
    response.status(404).send("The note with id " + id + " is not found.")
  }
})

app.post('/api/notes', (request, response) => {
  const body = request.body

  if(!body.content){
    return response.status(400).json({
      error: "content missing"
    })
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId()
  }

  notes = notes.concat(note)

  response.json(note)
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)
