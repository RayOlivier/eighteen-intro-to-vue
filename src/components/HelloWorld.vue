<template>
  <div class="hello">
    <div :key="ind" v-for="(product, ind) in storeProducts">
      {{product.title}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      validator(prop){
        return typeof prop === 'string' || typeof prop === 'number'
      },
      // required: true,
      default: 'No string was provided, dummy!'
    }
  },
  data(){
    return {
      products: this.$store.state.products
    }
  },
  created(){
    this.$store.commit('addProducts', [{title: 'this is from created'}])
  },
  updated(){
  },
  computed:{
    storeProducts(){
      return this.$store.state.products
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
