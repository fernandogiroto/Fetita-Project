<template>
   <!-- Banner -->
   <Banner title="Usuários" subtitle="Lorem ipsum dolor sit amet." />
   <!-- Users -->
   <section class="py-5">
         <div class="container py-4">
            <div class="row">
               <div class="col-lg-3 d-none d-sm-block">
                  <div class="sidebar-fix">
                     <div class="p-4 rounded shadow-osahan bg-white">
                        <div class="mb-4">
                           <label class="form-label">Price Range</label>
                           <input type="range" class="form-range" min="0" max="5" id="customRange2">
                           <div class="d-flex justify-content-between">
                              <div>0.01 ETH</div>
                              <div>10 ETH</div>
                           </div>
                        </div>
                        <div class="mb-3">
                           <label class="form-label">Status</label>
                           <select class="form-select rounded-lg" aria-label="Default select example">
                              <option selected>All</option>
                              <option value="1">Hort Bird</option>
                              <option value="2">Buy Now</option>
                              <option value="3">Has Offers</option>
                              <option value="4">Open for birds</option>
                           </select>
                        </div>
                        <div class="mb-3">
                           <label class="form-label">Category</label>
                           <select class="form-select rounded-lg" aria-label="Default select example">
                              <option selected>All</option>
                              <option value="1">Art</option>
                              <option value="2">Game</option>
                              <option value="3">Photography</option>
                              <option value="4">Music</option>
                              <option value="4">Video</option>
                           </select>
                        </div>
                        <div class="mb-4">
                           <label class="form-label">Creator</label>
                           <select class="form-select rounded-lg" aria-label="Default select example">
                              <option selected>All</option>
                              <option value="1">Verfied only</option>
                              <option value="2">Most liked</option>
                           </select>
                        </div>
                        <div class="d-grid">
                           <button type="button" class="btn btn-danger rounded-lg"><span><i class="bi bi-x-lg"></i></span>&nbsp;Reset Filter</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-9 col-12">
                  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                     <!-- Users List -->
                     <div class="col" v-for="user in users" :key="user.id">
                        <div class="card osahan-item-list p-3 rounded h-100 shadow-osahan bg-white border-0">
                           <img src="https://picsum.photos/seed/picsum/200/300" class="card-img-top rounded-lg" alt="...">
                           <div class="card-body fw-bold px-0 pb-0">
                              <div class="d-flex justify-content-between">
                                 <div class="d-flex gap-2 align-items-center">
                                    <h5 class="card-title mb-1">{{user.name + ' ' + user.lastname}}</h5>
                                 </div>
                                 <div class="like-btn"><a href="#" class="text-decoration-none link-dark"><i class="bi bi-heart-fill"></i></a></div>
                              </div>
                              <div class="card-text mb-1"><small class="text-muted">{{user.username}}</small>
                              </div>
                              <div class="text-danger">Bid 2.079 ETH</div>
                           </div>
                           <a href="single-artwork.html" class="stretched-link"></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
   </section>
  <!-- Call to Action -->
  <CallAction title="Apareça em destaque no maior portal de Fetish" subtitle="Planos Fetita" btn_color="btn-light" btn_link="#" btn_text="Ver Planos" />
</template>
<script>
   import CallAction from '@/components/CallAction.vue'
   import Banner from '@/components/Banner.vue'
   export default {
      
      name:"users",
      components: {CallAction,Banner},
      data(){
         return{
            users:[]
         }
      },
      async mounted(){
         try{
            const {data} = await axios.get('api/users')
            this.users = data;
         }catch(error){
            console.log(error);
         }
      },
   }
</script>