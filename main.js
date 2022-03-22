const app = require('./server/index.js')
const PORT = 8888
const { default: mongoose } = require('mongoose')
require('dotenv').config();

async function letsRoll () {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.GOOSENAME}:${process.env.SECRETGOOSE}@cluster0.jz5ok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
    { useNewUrlParser: true }, 
    () => mongoose.connection.readyState ? console.log('The geese are in flight!') : console.log('Unable to get geese off the ground :('))
    app.listen(PORT, () => console.log(`Goin through it on PORT:${PORT}`));
  } catch (error) {
    console.log(error);
    app.listen(PORT, () => console.log(`Goin through it on PORT:${PORT}`));
  }
}

letsRoll();

