<template lang="html">
  <div class="counter">
    <div class="col-md-8 offset-md-2 card">
      <div class="card-block">
        <h3 class="text-center">Vuejs - Vuex - Socket.io</h3>
        <hr />
        <button type="btn btn-block btn-info" @click='increment'>
          Incrementar
        </button>
        <h4 class="text-center">
          {{count}}
        </h4>
        <button type="btn btn-block btn-info" @click='decrement'>
          Decrementar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'counter',
    methods: {
      increment () {
        this.$store.dispatch('socket_increment');
      },
      decrement () {
        this.$store.dispatch('socket_decrement');
      }
    },
    computed: {
      ...mapGetters(['count'])
    }
  }
</script>
