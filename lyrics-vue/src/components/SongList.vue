<template>
  <table class="table is-bordered">
    <tr>
      <th>Artist</th>
      <th>Song Name</th>
      <th>Actions</th>
    </tr>
    <tr 
      v-for="song in songs" 
      v-on:click="selectSong(song)" 
    >
      <td>{{ song.artistName}}</td>
      <td>{{song.name}}</td>
      <td>
        <button class="button is-danger">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script >
  import Song from './api/songs'
  export default {
    props: ['songs'],
    methods: {
      selectSong (song) {
        this.$emit('onSelectSong', song.name)
      },
      async deleteSong (song) {
        await Song.deleteSong(song.id)
        this.$emit('onDeleteSong',song)
      }
    }
  }
</script>

