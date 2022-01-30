<template>
  <v-container>
    <div class="text-h5">
      Albums de <span style="color:#00b2ff" >{{this.Name}}  ({{this.UserName}})</span>
    </div>
    <v-row >
      <v-col
          cols="12"
          sm="6"
          v-for="album in Albums"
          :key="album.id"
      >
        <AlbumCard
            :title="album.title"
            :thumbnailUrl="album.thumbnailUrl"
            :albumId="album.id"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import AlbumCard from "@/components/AlbumCard";

export default {
  name: 'Albums',
  components: {AlbumCard},
  data(){
    return{
      Albums:[],
      UserName:"",
      Name:"",
      load:false
    }
  },
  methods:{
      getAlbums(){
        axios.get('https://jsonplaceholder.typicode.com/albums/?userId='+this.$route.params.id)
        .then((allAlbums) => {
          this.getUserData(allAlbums.data[0].userId)
          for( let  i in allAlbums.data){
            axios.get('https://jsonplaceholder.typicode.com/photos/?albumId='+allAlbums.data[i].id)
                .then((elemeto)=>{

                  let AlbumsData={
                      title:allAlbums.data[i].title,
                      id:allAlbums.data[i].id,
                      thumbnailUrl:elemeto.data[0].thumbnailUrl
                  }

                  this.Albums.push(AlbumsData)

                }).catch((e)=>{
              console.log(e)
            })
          }
        })
      },
    getUserData(id) {
      axios.get('https://jsonplaceholder.typicode.com/users/'+id)
      .then((respuesta)=>{
        this.Name = respuesta.data.name
        this.UserName = respuesta.data.username
      })
    }
  },
  mounted() {
    this.getAlbums()
  }
}
</script>