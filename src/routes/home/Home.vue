<template>
  <div>
      <p>Hello: {{ message }} wewefdd</p>
  </div>

</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const { mapActions, mapState, mapMutations } = createNamespacedHelpers('home')

  export default {
    async mounted () {
      await this.getMessage()
    },

    computed: {
      ...mapState([
        'message'
      ])
    },

    methods: {
      ...mapActions([
        'getMessage'
      ]),

      ...mapMutations([
        'setMessage'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .home {
  }
</style>
