import { ref } from "@vue/reactivity";
import { db } from "@/firebase/config";
import { doc, getDoc } from 'firebase/firestore'

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const postRef = doc(db, "posts", id);
      const postSnap = await getDoc(postRef);
      if (postSnap.exists) {
        post.value = { id: id, ...postSnap.data() }
      } else {
        throw Error('No such post!')
      }
    } catch (err) {
      error.value = err.message
    }
  }

  return { post, error, load }

}

export default getPost