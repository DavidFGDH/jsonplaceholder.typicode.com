<template>
  <v-container>
    <div class="text-h5">
      Tareas pendiente de <span style="color:#00b2ff" >{{this.Name}}  ({{this.UserName}})</span>
    </div>
    <v-row >
      <v-col
          cols="12"
          sm="4"
          v-for="todo in Todo"
          :key="todo.id"
      >
        <TodoCard  :title="todo.title" :completed="todo.completed"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import TodoCard from "@/components/TodoCard";

export default {
  name: 'Todo',
  components: {TodoCard},
  methods:{
    getTodoData(){
      axios.get('https://jsonplaceholder.typicode.com/users/'+this.$route.params.id+'/todos')
      .then((response)=>{
        for(let i in response.data) {
          this.Todo.push(response.data[i])
        }
      })
    },
    getUserData() {
      axios.get('https://jsonplaceholder.typicode.com/users/'+this.$route.params.id)
          .then((respuesta)=>{
            this.Name = respuesta.data.name
            this.UserName = respuesta.data.username
          })
    }
  },
  mounted() {
    this.getTodoData()
    this.getUserData()
  },
  data(){
    return{
      Todo:[],
      Name:null,
      UserName:null
    }
  }
}
</script>