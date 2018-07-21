<template>


  <section>

    <h1>New Song</h1>

    <b-field lable ="Name">
      <b-input v-model="song.name"></b-input>
    </b-field>

    <button  v-on:click="saveSong">
      Save Song
    </button>

  </section>


</template>

<script >
  import Song from '../api/songs'

  export default {
    name: 'NewSong',
    data () {
      return {
        song: {
          name: ''
        }
      }
    },
    methods: {
      async saveSong () {
        this.song = await Song.create(this.song)
        this.$emit('onSaveSong', {...this.song})
      }
    }
  }
</script>