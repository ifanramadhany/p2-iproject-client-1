<template>
  <div class="card-post">
        <div class="main-post">
          <div class="album">
            <iframe title="deezer-widget" :src="post.embedUrl" width="410" height="230" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div class="title">{{post.title}}</div>
          <div class="artist">{{post.artist}}</div>
          <div class="embed">
            <div style="margin-left: 6px;">
              <img
              :src="post.User.profileUrl"
              alt=""
              width="25px"
              style="border-radius: 5px"
            />
            <p>{{post.User.username}}</p>
            </div>
            <p>{{post.caption}}</p>
            <button
                @click="deletePostHandler(post.id)"
                class="btn btn-secondary"
                style="margin-right: 6px;"
              >
                <i class="fas fa-times"></i>
              </button>
          </div>
        </div>

        <div class="like-comment">
          <a href="" style="text-decoration: none">
            <img
              style="margin-right: 5px"
              src="https://img.icons8.com/ios-filled/40/000000/filled-like.png"
            />
            <span>{{post.like}}</span>
          </a>
          <a @click.prevent="toCommentPage()" href="">
            <img
              src="https://img.icons8.com/material-outlined/40/000000/comments--v1.png"
            />
          </a>
        </div>
      </div>
      
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: 'CardPostComp',
  methods: {
    ...mapActions(["deletePost"]),
    toCommentPage() {
      this.$router.push("/comment")
    },
    deletePostHandler(id) {
      console.log(id);
      swal({
        title: "Are you sure?",
        text: "to delete your post",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.deletePost(id)
        } else {
          swal("You canceled to delete your post!");
        }
      });
    }
  },
  props: ['post'],
  computed: {
    ...mapState("userData"),
    
  },
}
</script>

<style scoped>
* {
  text-decoration: none;
}
</style>
