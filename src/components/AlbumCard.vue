<template>
  <v-card
      dark
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title
            class="text-h5">
          {{this.title}}
        </v-card-title>
        <v-card-actions>
          <v-btn
              class="mt-5 text-xs-center justify-center"
              outlined
              rounded
              width="100%"
              max-width="300"
              @click="goToPhoto()"
          >
            Ver Fotos
          </v-btn>
        </v-card-actions>
      </div>

      <v-avatar
          class="ma-3"
          size="125"
          tile
      >
        <v-img :src="this.thumbnailUrl"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    thumbnailUrl: String,
    title: String,
    albumId: Number
  },
  methods:{
    goToPhoto(){
      window.location = '/photos/' + this.albumId
    }
  }
}
</script>