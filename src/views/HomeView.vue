<template>
  <h1>Home</h1>
  <PostList :posts="posts" />
</template>
<script>
import PostList from '../components/PostList.vue'
import { ref } from '@vue/reactivity';
export default {
  name: 'HomeView',
  components: {
    PostList
  },
  setup() {

    const posts = ref([])

    return { posts }
  }
}
</script>
