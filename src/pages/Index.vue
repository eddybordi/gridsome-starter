<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Hello, world!</h1>

    <h2>Count: {{ count }}</h2>

    <a class="button is-primary" @click="addOne">+1</a>
   
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
import store from '~/store/'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data: () => {
    return {}
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    addOne () {
      store.commit('addOne')
    }
  },
  mounted () {}
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
