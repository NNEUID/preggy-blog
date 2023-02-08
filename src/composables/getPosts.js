import { ref } from '@vue/reactivity';
import { db } from '@/firebase/config';
import { collection, getDocs } from 'firebase/firestore'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'posts'))
      querySnapshot.forEach((doc) => {
        posts.value.push({ id: doc.id, ...doc.data() })
      })
    } catch (err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts