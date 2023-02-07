
<template>
     <div class="products-box col">
          <div class="container">
               <h3 class="title mb-3">Our Absolute Favorites</h3>
               <div v-if="filteredData.length" class="row g-4">
                    <Product :filteredData="filteredData" />
               </div>
               <div v-else class="row g-4">
                    <div class="text-info">No Result Found</div>
               </div>
               <nav v-if="filteredData.length" aria-label="Page navigation example" class="pt-4">
                    <ul class="pagination justify-content-center">
                         <li class="page-item" :class="{'disabled':filteredValue.page == 1}">
                              <button class="btn btn-primary page-link" @click="filteredValue.page--">
                                   Previous ({{filteredValue.page == 1 ? filteredValue.page : filteredValue.page - 1}})
                              </button>
                         </li>
                         <li class="page-item" :class="{'disabled':filteredValue.page == filteredValue.pageLength}">
                              <button class="btn btn-primary page-link" @click="filteredValue.page++">Next ({{filteredValue.page == filteredValue.pageLength ? filteredValue.page : filteredValue.page+1}})</button>
                         </li>
                    </ul>
               </nav>
          </div>
     </div>
</template>
   
<script>
import { ref,computed, onMounted } from "vue";
export default {
     async setup() {
          const { $bus } = useNuxtApp();
          
          const filteredValue = ref({
               "search":"",
               "page":1,
               "pageLength":0,
               "name": '',
               "price":'',
               "orderBy":"",
          });

          onMounted(() => {
               $bus.$on('filterData', (filter) => {
                    filteredValue.value.name = filter.name
                    filteredValue.value.price = filter.price
                    filteredValue.value.orderBy = filter.orderBy
               })  
          })

          const {data} = await useFetch('http://122.170.110.131:9111/') 
          const filteredData = computed(()=>{
               let temp = Object.values(data.value);
               const pagePerItem = 6;

               if(filteredValue.value.name || filteredValue.value.price){
                    temp = temp.filter((i)=>{
                         let isMatchName = false;
                         let isMatchPrice = false;
                         if(filteredValue.value.name){
                              // console.log(i.name.toLowerCase().includes(filteredValue.value.name));
                              if(i.name.toLowerCase().trim().includes(filteredValue.value.name.toLowerCase().trim()))isMatchName = true;
                         }else{
                              isMatchName = true; 
                         }
                         if(filteredValue.value.price){
                              if(Math.floor(i.price) >= Math.floor(filteredValue.value.price))isMatchPrice = true;
                         }else{
                              isMatchPrice = true;
                         }
                         return isMatchName && isMatchPrice;
                    });
               }
               if(filteredValue.value.orderBy){
                    temp.sort((a,b)=> {
                         return a[filteredValue.value.orderBy].toString().localeCompare(b[filteredValue.value.orderBy].toString())
                    });
               }

               filteredValue.value.pageLength = Math.ceil(temp.length/pagePerItem);
               return (temp).slice((filteredValue.value.page-1)*pagePerItem,((filteredValue.value.page-1)*pagePerItem)+pagePerItem);
          });
          return {filteredData,filteredValue};
     }
}
</script>
   