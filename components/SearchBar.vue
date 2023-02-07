
<template>
     <div class="search-bar py-5">
          <div class="container">
               <h3 class="title mb-3">International flower delivery: anytime, anywhere </h3>
               <form class="row g-3 justify-content-center">
                    <div class="col-auto w-25">
                         <input type="text" class="form-control" id="searchName" placeholder="Name">
                    </div>

                    <div class="col-auto w-25">
                         <input type="text" class="form-control" id="searchPrice" placeholder="Price ">
                    </div>

                    <div class="col-auto w-25">
                         <select class="form-select form-control" aria-label="Default select example">
                              <option selected>Order By </option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                         </select>
                    </div>

                    <div class="col-auto w-25">
                         <button type="submit" class="btn btn-dark w-100 py-2 form-contoll">View Flowers</button>
                    </div>
               </form>
          </div>
     </div>
   </template>
   
   <script setup>
    
   </script>
   