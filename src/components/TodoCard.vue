<template>
  <v-card
      elevation="2"
      dark
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-subtitle v-if="this.finished" class="text-h6 mb-1">
          <del>   <span style="color:white">{{this.title}}</span></del>
        </v-list-item-subtitle>
        <v-list-item-subtitle v-else class="text-h6 mb-1" >
            <span style="color:white">{{this.title}}</span>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-icon
          v-if="this.finished"
          dark
          right
          size="40"
          color="green"
          @click="cambiarfalse()"
      >
        mdi-checkbox-marked-circle
      </v-icon>
      <v-checkbox
          v-else
          size="80"
          v-on:change="cambiar()"
      ></v-checkbox>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      finished:null
    }
  },
  props: {
    title:String,
    completed:Boolean,
  },
  methods:{
    cambiar(){
      this.finished = true
    },
    cambiarfalse(){
      this.finished = false
    }
  },
  mounted() {
      this.finished = this.completed
  }
}
</script>