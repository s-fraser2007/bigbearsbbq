<template>
  <div class="bbq">
    <BbqPage />
  </div>
</template>

<script>
// @ is an alias to /src
import BbqPage from '@/components/BbqPage.vue'

export default {
  name: 'BbqView',
  components: {
    BbqPage,
  },
}
</script>
