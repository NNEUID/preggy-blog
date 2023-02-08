<template>
  <h1>Real-time Data</h1>
  <p v-if="posts.length">{{ posts[0].title }}</p>
</template>

<script>
import { ref } from '@vue/reactivity'
import { db } from '@/firebase/config';
import { onSnapshot, query, collection, orderBy } from '@firebase/firestore';
export default {
  setup() {
    const posts = ref([])

    const postsRef = collection(db, 'posts')
    const postsQuery = query(postsRef, orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(postsQuery, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        posts.value.push({ id: doc.id, ...doc.data() })
      });
    })


    return { posts }
  }
}
</script>

<style>

</style>