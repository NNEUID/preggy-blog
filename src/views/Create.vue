<template>
  <div class="create">
    <form>

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
export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref(['html'])

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '') //removes all whitespace
        tags.value.push(tag.value)
      }
      tag.value = ''
    }

    return { title, body, tag, handleKeyDown, tags }
  }
}
</script>

<style>

</style>