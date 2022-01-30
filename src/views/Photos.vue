<template>
  <v-container>
    <div class="text-h5 text-center">
      {{this.AlbumsName.toUpperCase()}}
    </div>
    <div class="text-h5">
      Fotos de <span style="color:#00b2ff" >{{this.Name}}  ({{this.userName}})</span>
    </div>
    <v-card
        class="mx-auto"
    >

        <v-row dense>
          <v-col
              v-for="card in cards"
              :key="card.title"
              :cols="card.flex"
          >
          <PhotoCard :title="card.title" :src="card.src"/>
          </v-col>
        </v-row>
    </v-card>
      </v-container>
</template>

<script>
import PhotoCard from "@/components/PhotoCard";
import axios from "axios";
export default {
  components: {PhotoCard},
  methods:{
    getPhotoData(){
      axios.get('https://jsonplaceholder.typicode.com/photos/?albumId='+this.$route.params.id)
      .then((photos) => {
        for(let i in photos.data) {
          let flexdata = 8
          if(i%2===0){
            flexdata = 4
          }

          let foto = {
            title: photos.data[i].title,
            src: photos.data[i].url,
            flex: flexdata
          }
          this.cards.push(foto);
        }
      })
    },
    getUserId(){
      axios.get('https://jsonplaceholder.typicode.com/albums/'+this.$route.params.id)
      .then((res)=>{
        this.getUserData(res.data.userId)
        this.AlbumsName = res.data.title
      })
    },
    getUserData(id){
      axios.get('https://jsonplaceholder.typicode.com/users/'+id)
      .then((Userdata)=>{
          this.userName = Userdata.data.username
          this.Name = Userdata.data.name
      })
    }
  },
  mounted() {
    this.getPhotoData()
    this.getUserId()
  },
  data: () => ({
    cards: [],
    userName:"",
    Name:"",
    AlbumsName:"",
  }),
}
</script>