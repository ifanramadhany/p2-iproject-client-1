<template>
  <div v-if="userData.id !== comment.UserId" class="message-left">
    <h6 style="font-size: 12px;">
      <img
        :src="comment.profileUrl"
        alt=""
        width="25px"
        style="border-radius: 5px; margin: 2px"
      />{{comment.username}}
    </h6>
    <h6 style="font-family: arial; font-weight: bold;">{{comment.comment}}</h6>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: 'CommentLeftComp',
  computed: {
    ...mapState(["userData"])
  }
};
</script>

<style>
</style>
