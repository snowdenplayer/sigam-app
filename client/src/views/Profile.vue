<template>
  <div class="profile">
    <h1>Profile</h1>
    <div class="card">
      <ul class="list-group">
        <li class="list-group-item">Name: {{ user.name }}</li>
        <li class="list-group-item">Username: {{ user.username }}</li>
        <li class="list-group-item">Email: {{ user.email }}</li>
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