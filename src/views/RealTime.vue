<template>
  <h1>Real-time Data</h1>
  <PostList :posts="posts" />
</template>

<script>
import PostList from '@/components/PostList.vue';
import { ref } from '@vue/reactivity'
import { db } from '@/firebase/config';
import { onSnapshot, query, collection, orderBy } from '@firebase/firestore';
export default {
  components: {
    PostList
  },
  setup() {
    const posts = ref([])

    const postsRef = collection(db, 'posts')
    const postsQuery = query(postsRef, orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(postsQuery, (querySnapshot) => {
      let docs = []
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() })
      });
      posts.value = docs
    })


    return { posts }
  }
}
</script>

<style>

</style>