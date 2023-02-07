<template>
  <div class="layout">
    <!-- HEADER HERE -->
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            
            <a class="navbar-brand" href="#">
              <img src="/images/floraqueen-logo.svg" alt="floraqueen logo" width="200">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse align-items-center" id="navbarTogglerDemo01">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link active" href="#"> Valentine's Day </a> </li>
                <li class="nav-item"><a class="nav-link" href="#">Flowers </a> </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Plants
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">sub menu 1</a></li>
                    <li><a class="dropdown-item" href="#">sub menu 2</a></li>
                    <li><a class="dropdown-item" href="#">sub menu 3</a></li>
                  </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="#"> Gourmet </a> </li>
                <li class="nav-item"><a class="nav-link" href="#">Chocolate </a> </li>
                <li class="nav-item"> <a class="nav-link" href="#"> Wine & Joy</a> </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    
    <slot />
  </div>
</template>

<script setup>
const data = "";
</script>
