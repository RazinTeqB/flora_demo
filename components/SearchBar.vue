
<template>
     <div class="search-bar py-3">
          <div class="container">
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

                    <div class="col-auto">
                         <button type="submit" class="btn btn-dark">View Flowers</button>
                    </div>
               </form>
          </div>
     </div>
   </template>
   
   <script setup>
    
   </script>
   