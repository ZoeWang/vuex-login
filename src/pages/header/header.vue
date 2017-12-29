<template>
  <div class="hello">
    头部信息
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@custom-selector :--heading h1, h2, h3, h4, h5, h6;
:root {
  --text-color: black;
}
:--heading {
 font-weight: 400;
}
body {
  color: var(--text-color);
}

</style>
