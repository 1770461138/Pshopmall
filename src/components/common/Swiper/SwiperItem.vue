<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
}
</script>
<style>
  .slide {
    width:100%;
    flex-shrink: 0;
    height: 195px;
  }
  .slide img {
    width: 100%;
  }
</style>