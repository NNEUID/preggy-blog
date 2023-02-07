<template>
  <header>
    <h1>The Preggy Blog</h1>
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'create' }">Create Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>