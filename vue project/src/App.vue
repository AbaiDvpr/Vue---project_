<template>
  <Header>

  </Header>

  <main >
    <router-view>
    </router-view>
  </main>
  <Footer>
  </Footer>

</template>


<script>

import Header from './layout/header/header.vue';
import Footer from './layout/footer/footer.vue';

export default{
    components:{
      Header,
      Footer
    }
}
</script>