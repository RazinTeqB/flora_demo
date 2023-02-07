<template>
  <div class="index">


    <SliderComponent/>
    <SearchBar />

    <div class="pb-5">
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
