<template>
  <div>
    <h1>Post Page</h1>
    <div class="posts">
      <div class="post-card" v-for="post in $store.state.posts" :key="post.id">
        <div class="post-card-body">
          <h3>{{post.title}}</h3>
          <p>{{post.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
      posts:[]
    }
  },
  // mounted() {
  //   this.$axios.$get("http://localhost:90/ERIC/admin-post/posts").then(res=>{
  //     this.posts=res
  //   })
  // }
  //todo:to render api in server-side (apply SSR) for seo (search engine)
  //todo:without store
  // asyncData({$axios}) {
  //   return $axios.$get("http://localhost:90/ERIC/admin-post/posts").then(res=>{
  //     return{
  //       posts:res
  //     }
  //   })
  // },
  //todo:like asyncData but related to store
  fetch({$axios,store}){
    return $axios.$get("http://localhost:90/ERIC/admin-post/posts").then(res=>{
      store.commit('updatePosts',res);
    })
  }
}
</script>

<style scoped>

</style>
