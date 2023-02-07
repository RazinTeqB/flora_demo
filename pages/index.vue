<template>
  <div class="index text-danger">


    <SliderComponent/>
    <SearchBar />

    <div class="py-3">
      <ProductBox  />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

// useHead({
//     script: 'bootstrap/dist/js/bootstrap.bundle.min.js'
// })

onMounted(() => {
  console.log("%cMounted", "color:#00ff00;font-size:20px;font-weight:bold;");
});
</script>
