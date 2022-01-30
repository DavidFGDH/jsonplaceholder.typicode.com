<template>
  <v-card
      color="#385F73"
      dark
      style="margin:5px"
  >
    <v-card-title class="text-h5">
      Posts realizados por {{this.Name}}  &nbsp <span style="color:#07b5ff">{{this.UserName}}</span>
    </v-card-title>
    <v-card-text class="UserCardText">
      {{this.Correo}}
    </v-card-text>
    <v-card-text class="UserCardText">
      Total de Posts: {{this.Total}}
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props:{
    Name:String,
    UserName:String,
    Correo:String,
    Total:Number
  },
  mounted() {
    console.log(this.Correo,this.UserName);
  }
}
</script>

<style scoped>
.UserCardText{
  padding: 0 0 4px 15px;
  font-size:20px;
}
</style>