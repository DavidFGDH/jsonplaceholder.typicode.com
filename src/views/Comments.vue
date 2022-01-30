<template>
  <v-container>
    <PostsCard
        v-for="data in Post"
        :content="data.body"
        :title="data.title"
        :Name="$route.params.name"
        :key="data.id"/>
    <CommentCard v-for="comment in Comments"
                 :body="comment.body"
                 :email="comment.email"
                 :name="comment.name"
                 :key="comment.id"/>
  </v-container>
</template>
<script>
import axios from "axios";
import PostsCard from "@/components/PostsCard";
import CommentCard from "@/components/CommentCard";
export default {
  name: 'Posts',
  components: {CommentCard, PostsCard},
  data(){
    return{
      Comments:[],
      Post:[]
    }
  },
  methods:{
    getComments()
    {
      axios.get('https://jsonplaceholder.typicode.com/comments/?postId='+this.$route.params.id)
      .then((comments)=>{
        for(let i in comments.data){
          this.Comments.push(comments.data[i])
        }
      }).catch((e)=>{
        console.log(e)
      })
    },
    getPost(){
      axios.get('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.id)
      .then((post)=>{
        this.Post.push(post.data)
      }).catch((e)=>{
        console.log(e)
      })
    }
  },
  mounted() {
    this.getComments()
    this.getPost()
  }
}
</script>