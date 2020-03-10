<template>
  <div class="modal" @click="closeModal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  
}
</script>

<style>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.3);
}
</style>