import TodoModel from '../models/Todo'


export const one = async request => {
    try {
        const { id } = request.params
        // `doc` is the document _before_ `update` was applied
        const doc = await TodoModel.findOne({_id:id});
        return doc
        
    } catch (error) {
        return h.response({ error: 'Invalid todo id' }).code(400)
    }
}

export const list = async request => {
  
    // console.info("INCOMING CREATE TODO REQUEST: ", JSON.stringify(request.payload))
   
    // const { text } = request.payload
    // // const collection = await TodoCollection.findOnlyCollection()
    // // const todo = collection.todos.create({
    // //   text,
    // //   isCompleted: false,
    // //   createdAt: new Date()
    // // })


    // // collection.todos.push(todo)
    // // await collection.save()
    // return outputTodo(todo)
    return 'list'
}
export const create = async request => {
  
    // console.info("INCOMING CREATE TODO REQUEST: ", JSON.stringify(request.payload))
   
    const todo=new TodoModel()
    if(request.payload.text){
        todo.text=text
    }
     const createdTodo = await todo.save()
    // // const collection = await TodoCollection.findOnlyCollection()
    // // const todo = collection.todos.create({
    // //   text,
    // //   isCompleted: false,
    // //   createdAt: new Date()
    // // })


    // // collection.todos.push(todo)
    // // await collection.save()
     return createdTodo
}

export const update = async (request, h) => {
    try {
        const { todoId } = request.params
        const { updates } = request.payload

        // `doc` is the document _before_ `update` was applied
       let doc = await TodoModel.findOneAndUpdate({_id:todoId}, updates,);
       doc = await TodoModel.findOne({_id:todoId});
       return doc
    } catch (e) {
        console.log(e)
      return h.response({ error: 'Invalid todo id' }).code(400)
    }
    return {}
  }
export const remove = async (request, h) => {
    try {
        const { todoId } = request.params
        const todo=new TodoModel()
        todo.deleteOne({ _id:todoId }, function (err) {
            if (err) return handleError(err);
            // deleted at most one tank document
            console.log('deleted')
            return true 
          });
    } catch (e) {
      console.error(e)
      return h.response({ error: 'Invalid todo id' }).code(400)
    }
    return true
  }