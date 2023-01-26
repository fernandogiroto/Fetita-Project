<template>
    <section class="pt-5 bg-dark">
         <div class="container py-4 px-5 text-center">
            <div class="row gx-5 justify-content-center">
               <div class="col-lg-8">
                  <h1 class="text-white display-5 mb-2 fw-bold">Anuncios</h1>
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
            <div class="row justify-content-center">
               <div class="col-lg-9 col-12">
                  <div class="row">
                     <div class="col-lg-8 pe-lg-5">
                        <div>
                           <div class="rounded bg-white p-3 mb-3 shadow-sm">
                              <div class="mb-3">
                                 <h6 class="fw-bold mb-1">Upload file</h6>
                                 <p class="text-muted">Drag or choose your file to upload.</p>
                              </div>
                              <div class="border border-2 rounded py-5">
                                 <div class="text-center">
                                    <div class="small text-muted mb-2">PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</div>
                                    <button type="button" class="btn btn-white border rounded-lg fw-bold"><i class="bi bi-cloud-upload"></i>&nbsp;upload artwork</button>
                                 </div>
                              </div>
                           </div>
                           <div class="rounded bg-white p-3 mb-3 shadow-sm">
                              <div class="mb-3">
                                 <h6 class="fw-bold mb-1">Item details</h6>
                                 <p class="text-muted">Drag or choose your file to upload.</p>
                              </div>
                              <div class="mb-3">
                                 <label class="form-label">Title</label>
                                 <input type="text" class="form-control" value="e.g.Fluffy Pank">
                              </div>
                              <div class="mb-3">
                                 <label class="form-label">Description</label>
                                 <input type="text" class="form-control" value="e.g. 'After purchasing you will able to recived the artwork..'">
                              </div>
                              <div class="row">
                                 <div class="col">
                                    <label class="form-label">Royalties</label>
                                    <select class="form-select rounded-lg" aria-label="Default select example">
                                       <option selected>10%</option>
                                       <option value="1">15%</option>
                                       <option value="2">20%</option>
                                    </select>
                                 </div>
                                 <div class="col">
                                    <label class="form-label">Size</label>
                                    <input type="text" class="form-control" placeholder="e.g.size" aria-label="Last name">
                                 </div>
                                 <div class="col">
                                    <label class="form-label">Propertie</label>
                                    <input type="text" class="form-control" placeholder="e.g.propertie" aria-label="Last name">
                                 </div>
                              </div>
                           </div>
                           <div class="rounded bg-white p-3 mb-3 shadow-sm">
                              <div class="mb-3">
                                 <h6 class="fw-bold mb-1">Timed auction</h6>
                                 <p class="text-muted">Set a period of time for which buyers can place bids</p>
                              </div>
                              <div class="row mb-3">
                                 <div class="col">
                                    <label for="exampleFormControlInput1ss" class="form-label">Starting Date</label>
                                    <input type="datetime-local" value="2023-09-12T19:30" min="2022-06-07T00:00" max="2022-06-14T00:00" class="form-control" id="exampleFormControlInput1ss">
                                 </div>
                                 <div class="col">
                                    <label for="exampleFormControlInput1e" class="form-label">Expiration Date</label>
                                    <input type="datetime-local" value="2024-03-12T11:55" min="2022-06-07T00:00" max="2022-06-14T00:00"  class="form-control" id="exampleFormControlInput1e">
                                 </div>
                              </div>
                              <div class="small text-danger mt-2">Any bid placed in the last 10 minutes
                                 extends the auction by 10 minutes.
                              </div>
                           </div>
                           <div class="rounded bg-white mb-3 shadow-sm">
                              <div class="d-flex justify-content-between align-items-center form-check form-switch p-3 border-bottom">
                                 <div>
                                    <label class="form-check-label d-flex flex-column" for="flexSwitchCheckChecked1">
                                       <span class="fw-bold mb-1 h6">Put on sale</span>
                                       <span class="text-muted small">You'll receive bids on this item.</span>
                                    </label>
                                 </div>
                                 <div class="h5 m-0"><input class="form-check-input m-0" type="checkbox" role="switch" id="flexSwitchCheckChecked1" checked></div>
                              </div>
                              <div class="d-flex justify-content-between align-items-center form-check form-switch p-3 border-bottom">
                                 <div>
                                    <label class="form-check-label d-flex flex-column" for="flexSwitchCheckChecked2">
                                       <span class="fw-bold mb-1 h6">Instant sale price</span>
                                       <span class="text-muted small">Enter the price for which the item will be instantly sold.</span>
                                    </label>
                                 </div>
                                 <div class="h5 m-0"><input class="form-check-input m-0" type="checkbox" role="switch" id="flexSwitchCheckChecked2" checked></div>
                              </div>
                              <div class="d-flex justify-content-between align-items-center form-check form-switch p-3">
                                 <div>
                                    <label class="form-check-label d-flex flex-column" for="flexSwitchCheckChecked3">
                                       <span class="fw-bold mb-1 h6 text-danger">Unlock once purchased</span>
                                       <span class="text-muted small">Content will be unlocked after successful transaction.</span>
                                    </label>
                                 </div>
                                 <div class="h5 m-0"><input class="form-check-input m-0" type="checkbox" role="switch" id="flexSwitchCheckChecked3"></div>
                              </div>
                           </div>
                           <div class="rounded bg-white p-3 mb-3 shadow-sm">
                              <div class="mb-3">
                                 <h6 class="fw-bold mb-1">Choose collection</h6>
                                 <p class="text-muted">Choose an exiting collection or create a new one.</p>
                              </div>
                              <div class="collection-btn d-flex gap-3">
                                 <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked>
                                 <label class="btn btn-outline-primary" for="btnradio1">
                                    <span class="text-start pt-4 pe-4 d-flex flex-column">
                                       <span><i class="bi bi-plus-circle-fill fs-4"></i></span>
                                       <span class="small fw-bold">Add new</span>
                                    </span>
                                 </label>
                                 <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
                                 <label class="btn btn-outline-primary" for="btnradio2">
                                    <span class="text-start pt-4 pe-4 d-flex flex-column">
                                       <span><img src="assets/img/profile-small-1.gif" alt="#" class="img-fluid rounded-circle bg-white p-1 border shadow-sm mb-1"></span>
                                       <span class="small fw-bold">Caterry</span>
                                    </span>
                                 </label>
                                 <input type="radio" class="btn-check" name="btnradio" id="btnradio3">
                                 <label class="btn btn-outline-primary" for="btnradio3">
                                    <span class="text-start pt-4 pe-4 d-flex flex-column">
                                       <span><img src="assets/img/profile-04.gif" alt="#" class="img-fluid rounded-circle bg-white p-1 border shadow-sm mb-1"></span>
                                       <span class="small fw-bold">TheSeries</span>
                                    </span>
                                 </label>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-4 d-none d-md-block">
                        <div class="sidebar-fix">
                           <h6 class="fw-bold">Preview</h6>
                           <div class="card osahan-item-list p-3 rounded h-100 shadow-osahan bg-white border-0">
                              <div class="card-header border-0 bg-white p-0 mb-3">
                                 <div class="d-flex justify-content-between">
                                    <div class="d-flex align-items-center gap-2">
                                       <div><img src="assets/img/profile-06.gif" alt="#"
                                          class="img-fluid rounded-circle"></div>
                                       <div class="fw-bold">CryptoX</div>
                                    </div>
                                    <div class="like-btn"><a href="#" class="text-decoration-none link-dark"><i class="bi bi-heart-fill"></i></a></div>
                                 </div>
                              </div>
                              <img src="assets/img/profile-07.jpg" alt="#" class="card-img-top rounded-lg">
                              <div class="card-body fw-bold px-0 pb-0">
                                 <h5 class="card-title fw-bold mb-0">Saphyre&nbsp;<span class="text-muted fs-6">
                                    1 / 10</span>
                                 </h5>
                                 <p class="card-text mb-0"><small class="text-muted">Highest bid</small></p>
                                 <div class="text-danger">Bid 0.0063 ETH</div>
                              </div>
                           </div>
                           <div class="mt-4">
                              <div><a href="connect-wallet.html" class="btn btn-danger btn-lg rounded w-100">Create items</a></div>
                              <div class="small text-center mt-3 text-muted"><span class="text-success"><i class="bi bi-check-circle-fill"></i></span>&nbsp;Saved just now</div>
                           </div>
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
</template>