<template>
  <div class="profile">
    <div class="card">
      <button class="btn" @click="showUser">ko</button>
      <ul class="list-group" >
        <li class="list-group__item" >Email: {{user.name}}</li>
        <li class="list-group__item">Username: {{ user.username}}</li>
        <li class="list-group__item">Name: {{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
export default{
  computed:{
    ...mapGetters([
        'user'
    ])
  },
  methods:{
    ...mapActions([
        'getProfile'
    ]),
    showUser(){
      console.log(this.user)
    }
  },
  created() {
    this.getProfile()
  }
};
</script>
<style>
</style>