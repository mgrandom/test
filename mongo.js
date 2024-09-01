const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give name and number as argument')
  process.exit(1)
}


const name=process.argv[2]
const number=process.argv[3]

const url =
  `mongodb+srv://meritongigollaj:superkonzum@cluster0.vwxsl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is easy',
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})