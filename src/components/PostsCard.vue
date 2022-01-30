  <template>
    <v-card
        class="mx-auto"
        color="blank"
        dark
        @click="goToComments()"
    >
      <v-card-title>
        <v-icon
            large
            left
        >
          mdi-message
        </v-icon>
        <span class="text-h6 font-weight-light">UT Salamanca</span>
      </v-card-title>
      <v-card-subtitle class="titlePost font-weight-light">
        {{this.title}}
      </v-card-subtitle>

      <v-card-text class="text-h6">
        {{this.content}}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-avatar
              color="primary"
              size="35"
              style="margin-left: 0px; margin-right:10px"

          >
            {{this.Name[0]}}{{this.Name[1].toUpperCase()}}
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title>
              Por <span style="color:#00b2ff">{{this.Name}}</span></v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-card-actions>
    </v-card>
  </template>

<script>
export default {
  props:{
    content:String,
    title:String,
    Name:String,
    id:Number
  },
  methods:{
    goToComments(){
      if(this.$route.path.includes("comments")){
        console.log('listo')
      }else{
        window.location =  '/comments/'+this.id+'/'+ this.Name
      }
    },

  }
}
</script>

  <style scoped>
  .titlePost {
    font-size:20px;
    padding-top:5px;
  }
  </style>