<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick">Delete Post</button>
    <!-- <div v-for="tag in post.tags" :key="tag" class="pill">#{{ tag }}</div> -->
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost';
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router';
import { db } from '@/firebase/config';
import { deleteDoc, doc } from '@firebase/firestore';
export default {
  props: ['id'],
  components: {
    Spinner
  },
  setup(props) {

    const route = useRoute()
    const router = useRouter()

    const { post, error, load } = getPost(route.params.id)
    load()

    const handleClick = async () => {
      try {
        await deleteDoc(doc(db, 'posts', props.id))
        router.push({ name: 'home' })
      } catch (error) {
        console.log(error);
      }
    }

    return { post, error, handleClick }
  }
}
</script>

<style>
.tags a {
  margin-right: 10px;
}

.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}
</style>