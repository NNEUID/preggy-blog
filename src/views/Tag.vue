<template>
  <div class="tag">
    <h1>#{{ tag }}</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="filteredPosts.length">
      <PostList :posts="filteredPosts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import Spinner from '@/components/Spinner.vue';
import getPosts from '@/composables/getPosts';
import { useRoute } from 'vue-router';
import { computed } from '@vue/runtime-core';
export default {
  components: { PostList, Spinner },
  setup() {
    const route = useRoute()
    const tag = route.params.tag

    const { posts, error, load } = getPosts()

    load()

    const filteredPosts = computed(() => {
      return posts.value.filter(post => post.tags.includes(tag))
    })

    return { filteredPosts, error, tag }
  }
}
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>