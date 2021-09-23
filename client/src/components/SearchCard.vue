<template>
  <tr v-if="dataMusic">
      <td>{{dataMusic.title}}</td>
      <td>{{dataMusic.artist}}</td>
      <td>
        <button @click="addToLeft(dataMusic)" type="button" class="btn btn-secondary">
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
    addToLeft(dataMusic) {
      console.log(dataMusic);
      this.FILL_DATA_ADD_POST(dataMusic)
    }
  }

}
</script>

<style>

</style>