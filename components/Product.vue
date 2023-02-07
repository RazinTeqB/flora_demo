<template>
  <div class="col-md-4" v-for="item in filteredData" :key="item.id">
    <div class="card">
      <img :src="item.url_image_sm" class="card-img-top" alt="..." />
      <div
        class="card-body d-flex align-content-center justify-content-between"
      >
        <div>
          <h5 class="card-title text-dark">{{ item.name_prefix }}</h5>
          <p class="card-text text-dark">{{ item.name_suffix }}</p>
          <button class="stretched-link btn btn-dark">View Details</button>
        </div>
        <div class="text-dark">{{ item.price }}$</div>
      </div>
    </div>
  </div>
</template>
   
<script>
export default {
  props: ["filteredData"],
};
</script>
   