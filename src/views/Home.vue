<template>
  <v-container>
    <div class="text-h4" style="text-align:center">Usuarios registrados</div>
    <v-row no-gutters>
      <v-col
          v-for="Usuario in Usuarios"
          :key="Usuario.id"
          cols="12"
          sm="4"
      >
        <UserCard :Name="Usuario.name"
                  :UserName="Usuario.username"
                  :Email="Usuario.email"
                  :City="Usuario.address.city"
                  :Phone="Usuario.phone"
                  :id="Usuario.id"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import UserCard from "@/components/UserCard";
export default {
  name: 'Home',
  components: {UserCard},
  data(){
    return{
      Usuarios:[]
    }
  },
  mounted() {
    this.GetUser()
  },
  methods:{
    GetUser(){
      axios.get('https://jsonplaceholder.typicode.com/users').then((resp)=>{
        for(let i in resp.data){
          this.Usuarios.push(resp.data[i])
        }
      })
    }
  }
}
</script>
