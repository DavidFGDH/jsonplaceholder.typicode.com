<template>
  <v-card>
    <v-img
        :src="this.src"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
    >
      <v-card-title >{{this.title}}</v-card-title>
    </v-img>
  </v-card>

</template>
<script>
export default {
  props:{
    title:String,
    src:String
  }
}
</script>