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

    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia architecto iste, nemo ipsam molestiae odio repudiandae doloribus cum voluptas culpa illum exercitationem harum! Perferendis a veritatis dolores dolorum earum nulla nesciunt repudiandae placeat voluptas quisquam, dolorem sunt aliquam in voluptatem harum obcaecati fugit, deserunt quae consequuntur quia. Consectetur saepe rerum, qui fugit repudiandae sunt distinctio labore tempora accusantium assumenda nesciunt reprehenderit ipsa vel fugiat dicta quidem maxime ipsum ea? Veniam, saepe odit facere, qui nam tempore perferendis quam obcaecati eveniet, distinctio dolorum incidunt optio corrupti tenetur neque quibusdam aliquid! Nihil illum corporis unde corrupti nam assumenda facilis. Perspiciatis, assumenda.', id: 1 },
      { title: 'top personalised antenatal care just for you', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia architecto iste, nemo ipsam molestiae odio repudiandae doloribus cum voluptas culpa illum exercitationem harum! Perferendis a veritatis dolores dolorum earum nulla nesciunt repudiandae placeat voluptas quisquam, dolorem sunt aliquam in voluptatem harum obcaecati fugit, deserunt quae consequuntur quia. Consectetur saepe rerum, qui fugit repudiandae sunt distinctio labore tempora accusantium assumenda nesciunt reprehenderit ipsa vel fugiat dicta quidem maxime ipsum ea? Veniam, saepe odit facere, qui nam tempore perferendis quam obcaecati eveniet, distinctio dolorum incidunt optio corrupti tenetur neque quibusdam aliquid! Nihil illum corporis unde corrupti nam assumenda facilis. Perspiciatis, assumenda.', id: 2 },
    ])

    return { posts }
  }
}
</script>
