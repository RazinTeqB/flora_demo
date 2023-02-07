<template>
  <div class="hero-slider">
    <div
      id="headerSlider"
      class="carousel slide"
      data-bs-ride="carousel"
      data-interval="50"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100" alt="Slider image 1" />
        </div>
        <div class="carousel-item">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="Slider image 2" />
        </div>
        <div class="carousel-item">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100" alt="Slider image 3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  onMounted(() => {
    const { $bootstrap } = useNuxtApp();
    const carousel = new $bootstrap.Carousel("#headerSlider");
    carousel.wrap = true;
  });
</script>
