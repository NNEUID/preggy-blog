<template>
  <div class="create">
    <form @submit.prevent="addPost">

      <label for="title">Title:</label>
      <input v-model="title" name="title" type="text" required>

      <label for="content">Content:</label>
      <textarea v-model="body" name="content" id="content" cols="30" rows="10" required></textarea>

      <label for="tags">Tags (hit enter to add a tag)</label>
      <input v-model="tag" name="tags" type="text" @keydown.enter.prevent="handleKeyDown">

      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>


      <button>Add Post</button>

    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { db } from '@/firebase/config';
import { addDoc, collection, Timestamp } from '@firebase/firestore';

export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const router = useRouter()

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '') //removes all whitespace
        tags.value.push(tag.value)
      }
      tag.value = ''
    }

    const addPost = async () => {
      try {
        const post = {
          title: title.value,
          body: body.value,
          tags: tags.value,
          createdAt: Timestamp.fromDate(new Date())
        }
        await addDoc(collection(db, 'posts'), post)
        // console.log("Document written with ID: ", docRef.id);

        router.push({ name: 'home' })
      } catch (error) {
        console.log(error);
      }
    }

    return { title, body, tag, handleKeyDown, tags, addPost }
  }
}
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}

input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}

textarea {
  height: 160px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}

label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}

button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>