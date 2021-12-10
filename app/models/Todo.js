import { Schema,model } from 'mongoose'

 const TodoSchema = new Schema({
  text: { type: String, default: 'todo',required:true },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: new Date() }
})

export default model('Todo', TodoSchema)