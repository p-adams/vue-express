const app = new Vue({
    el:"#app",
    delimiters: ['${','}'],
    created(){
        this.loadTodos()
    },
     data: {
        todos: [],
        todo: '',
        todoId: ''
    },
    methods :{
        loadTodos(){
            this.$http.get('api/').then((response) => {
                this.todos = response.data
            }).catch((err) => {
                console.log(`load: ${err}`)
            })
        },
        newTodo(e){
            e.preventDefault()
            let new_todo = {todo: this.todo, completed: false}
            this.$http.post('api/', new_todo).then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(`new: ${err}`)
            })
            this.loadTodos()
            this.todo = ''
        },
        deleteTodo(id){
            this.$http.delete('api/' + id).then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })
            this.loadTodos()
        }
    },
    computed :{
        todoCount(){
            return this.todos.length
        }
    }
})