import mongoose from "mongoose"

const OpinionSchema = new mongoose.Schema({
  nombre: String,
  mensaje: String,
  estrellas: Number
})

export default mongoose.model("Opinion", OpinionSchema)