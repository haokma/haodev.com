<template>
  <div>
    <Header/>
    <Footer/>
    <h1>{{JSON.stringify(posts)}}</h1>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  name: 'IndexPage',
  components:{
    Header,
    Footer
  },
  async asyncData({ $fetcher }) {
    try {
      const { data } = await $fetcher.getManual('/articles', { page: 1 });

      return { posts: data };
    } catch (err) {
      // alert(err);
    }
  },
}
</script>
