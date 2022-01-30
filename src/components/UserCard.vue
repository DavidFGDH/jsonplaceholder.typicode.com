<template>
  <v-card
      dark
      style="margin:5px"
  >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4" >
            {{ this.Name }}
          </div>
          <v-list-item-title class="text-h5 mb-1" style="color:#00b2ff; padding-top: 0">
            {{this.UserName}}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{this.Email}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{this.City}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{this.Phone}}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-avatar
            color="primary"
            size="60"
        >
          {{this.Name[0]}}{{this.Name[1].toUpperCase()}}
        </v-avatar>
      </v-list-item>
      <div class="d-flex flex-row">

      <v-card-actions>
        <v-btn
            outlined
            rounded
            text
            @click="goToRoute('/posts/')"
        >
          posts
        </v-btn>
      </v-card-actions>
    <v-card-actions>
      <v-btn
          outlined
          rounded
          text
          @click="goToRoutes('/albums/')"
      >
        albums
      </v-btn>
    </v-card-actions>
        <v-card-actions>
          <v-btn
              outlined
              rounded
              text
              @click="goToRoutes('/todo/')"
          >
            Todo
          </v-btn>
        </v-card-actions>
      </div>

  </v-card>
</template>

<script>
export default{
  name:"UserCard",
  props:{
    Name:String,
    UserName:String,
    Email:String,
    City:String,
    Phone:String,
    id:Number
  },
  methods:{
    goToRoute(route){
      window.location = route+ this.id+'/'+this.UserName
    },
    goToRoutes(route){
      window.location = route+ this.id
    }
  },

}
</script>

<style scoped>
</style>