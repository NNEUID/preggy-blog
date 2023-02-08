import { ref } from '@vue/reactivity';
import { db } from '@/firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const postsRef = collection(db, 'posts')
      const postsQuery = query(postsRef, orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(postsQuery)
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