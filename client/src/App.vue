<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <Error v-if="error" :msg="error"/>
      <router-view/>
    </div>

  </div>
</template>
<script>
import { mapGetters} from 'vuex'
import Navbar from "@/components/Navbar";
import Error from "@/components/Error";

export default {
  components: {
    Navbar,
    Error
  },
  computed:{
    ...mapGetters([
        'error'
    ])
  }
};
</script>

<style lang="scss">

</style>
