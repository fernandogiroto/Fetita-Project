<template>
  <div>
    <section class="pt-5 bg-dark">
         <div class="container py-4 px-5 text-center">
            <div class="row gx-5 justify-content-center">
               <div class="col-lg-8">
                  <h1 class="text-white display-5 mb-2 fw-bold">Usuários</h1>
                  <p class="lead text-white-50 m-0">Lorem ipsum dolor sit amet.</p>
               </div>
            </div>
         </div>
         <div class="svg-border-rounded text-light">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="#f0f2f5">
               <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
            </svg>
         </div>
      </section>
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
                     <!-- 1st card -->
                     <div class="col">
                        <div class="card osahan-item-list p-3 rounded h-100 shadow-osahan bg-white border-0">
                           <img src="https://picsum.photos/seed/picsum/200/300" class="card-img-top rounded-lg" alt="...">
                           <div class="card-body fw-bold px-0 pb-0">
                              <div class="d-flex justify-content-between">
                                 <div class="d-flex gap-2 align-items-center">
                                    <h5 class="card-title mb-1">Metaverse Gamesmall</h5>
                                 </div>
                                 <div class="like-btn"><a href="#" class="text-decoration-none link-dark"><i class="bi bi-heart-fill"></i></a></div>
                              </div>
                              <div class="card-text mb-1"><small class="text-muted">Highest bid</small>
                              </div>
                              <div class="text-danger">Bid 2.079 ETH</div>
                           </div>
                           <a href="single-artwork.html" class="stretched-link"></a>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-12">
                        <!-- Load more button -->
                        <div class="d-flex justify-content-center mt-5">
                           <a href="#" class="btn btn-outline-primary btn-lg">Lord more artwork</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="bg-primary py-4">
         <div class="container py-4">
            <div class="row justify-content-center">
               <div class="col-xl-6 col-lg-7 col-md-8 col-12">
                  <div class="text-center py-4">
                     <small class="text-white-50">ACTIVITY</small>
                     <h1 class="fw-bold text-white py-3">We make sure that everyone is able to use a Gonft</h1>
                     <a href="activity.html" class="btn btn-light btn-lg"> More Info </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
  </div>
</template>