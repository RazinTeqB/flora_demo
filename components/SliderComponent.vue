<template>
  <div class="hero-slider">
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/hero-img-1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/images/hero-img-2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/images/hero-img-3.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  onMounted(() => {
    const { $bootstrap } = useNuxtApp();
    const carousel = new $bootstrap.Carousel("#carouselExampleSlidesOnly");
    carousel.wrap = true;
  });
</script>
