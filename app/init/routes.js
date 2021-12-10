import {create,remove,update,list,one} from '../controlers/Todo'

export default (server)=>{
    server.route({
        method: 'GET',
        path: '/todos',
        handler:list
    })
    server.route({
        method: 'GET',
        path: '/todos/{id}',
        handler:one
    })
    server.route({
        method: 'POST',
        path: '/todos',
        handler:create
    })
      
      
     server.route({
        method: 'PUT',
        path: '/todos/{todoId}',
        handler:update
    })
      
      
      
    server.route({
        method: 'DELETE',
        path: '/todos/{todoId}',
        handler: remove
    })

}
  
  