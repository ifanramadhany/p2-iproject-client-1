<template>
  <tr >
      <td>{{data.title}}</td>
      <td>{{data.artist.name}}</td>
      <td>
        <button @click="addToLeft({
          artist: data.artist.name,
          title: data.title,
          embed: `https://widget.deezer.com/widget/dark/track/${data.id}`
        })" type="button" class="btn btn-secondary">
            <span class="las la-play-circle"></span>
          </button>
      </td>
    </tr>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  name: 'SearchCard',
  computed: {
    ...mapState(["dataMusic"])
  },
  methods: {
    ...mapMutations(["FILL_DATA_ADD_POST"]),
    addToLeft(payload) {
      // console.log(payload);
      this.FILL_DATA_ADD_POST(payload)
    }
  },
  props: ["data"]

}
</script>

<style>

</style>