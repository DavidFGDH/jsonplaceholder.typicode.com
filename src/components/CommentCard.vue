<template>
  <v-card
      class="mx-auto"
      outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{this.name}}
        </v-list-item-title>
        <v-list-item-subtitle class="text-h6 mb-1">{{this.body}}</v-list-item-subtitle>
        <p>{{this.email}}</p>
      </v-list-item-content>

        <v-avatar
            color="#DD1495"
            size="50"
        >
          <span style="color:#ffffff">{{this.email[0].toUpperCase()}}{{this.email[1].toUpperCase()}}</span>
        </v-avatar>
    </v-list-item>
  </v-card>
</template>


<script>
export default {
  props:{
    body:String,
    email:String,
    name:String
  }
}
</script>