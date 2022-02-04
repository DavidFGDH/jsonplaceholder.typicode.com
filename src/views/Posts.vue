<template>
  <v-container>
    <UserHeader v-for="data in User"
                :Name="data.name"
                :Correo="data.email"
                :UserName="data.username"
                :Total="Total"
                :key="data.id"/>
    <v-row>
      <v-col
          cols="12"
          sm="6"
          v-for="Posts in UserPost"
          :key="Posts.id"
      >
        <PostsCard :content="Posts.body"
                   :title="Posts.title"
                   :Name="$route.params.name"
                   :id="Posts.id"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import UserHeader from "@/components/UserHeader";
import PostsCard from "@/components/PostsCard";

export default {
  name: 'Posts',
  components: {PostsCard, UserHeader},
  data(){
    return{
      UserPost:[],
      User:[],
      Total:null
    }
  },
  methods:{
    getUserPost(){
      axios.get('https://jsonplaceholder.typicode.com/posts/?userId='+this.$route.params.id)
          .then((respuesta)=>{
            this.Total = respuesta.data.length
            for(let i in respuesta.data){
              this.UserPost.push(respuesta.data[i])
            }
          })
    },
    getUserData(){
      axios.get('https://jsonplaceholder.typicode.com/users/'+this.$route.params.id).then((user)=>{
        this.User.push(user.data)
      }).catch((e)=>{
        console.log(e)
      })
    },

  },

  mounted() {
    this.getUserData()
    this.getUserPost()
  }
}
</script>