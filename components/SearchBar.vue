
<template>
     <div class="search-bar py-5">
          <div class="container">
               <h3 class="title mb-3">International flower delivery: anytime, anywhere </h3>
               <form class="row g-3 justify-content-center">
                    <div class="col-auto w-25">
                         <input type="text" v-model="filter.name" @input="event => name = event.target.value" class="form-control" id="searchName" placeholder="Name">
                    </div>

                    <div class="col-auto w-25">
                         <input type="text" v-model="filter.price" class="form-control" id="searchPrice" placeholder="Price ">
                         <small class="form-text text-muted">Filter products by price great than this.</small>
                    </div>

                    <div class="col-auto w-25">
                         <select v-model="filter.orderBy" class="form-select form-control"  aria-label="Default select example">
                              <option value="" selected disabled>Order By </option>
                              <option value="price">Price (Asc)</option>
                              <option value="name">Name (Asc)</option>
                         </select>
                    </div>

                    <div class="col-auto w-25">
                         <button type="submit" @click.prevent="onSubmit" class="btn btn-dark w-100 py-2 form-contoll">View Flowers</button>
                    </div>
               </form>
          </div>
     </div>
   </template>
   
<script>
import {ref} from 'vue';

export default {
     setup() {
          const { $bus } = useNuxtApp();
          const filter = ref({
               orderBy: '',
               price: '',
               name: ''
          });

          function onSubmit(){
               $bus.$emit('filterData', filter.value)
          }

          return {
               filter,
               onSubmit
          }
     }
}
</script>