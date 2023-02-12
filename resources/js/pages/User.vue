<template>
    <section class="py-5">
        <div class="container py-4">
            <div class="row">
                <div class="col-lg-6 col-12 pe-lg-5">
                    <div class="row">
                        <div class="col-12">
                            <img src="http://[::1]:5173/resources/js/img/perfil.jpeg" alt="#" class="img-fluid w-100 rounded shadow user-profile">
                        </div>
                        <div class="d-flex mt-3">
                            <img src="http://[::1]:5173/resources/js/img/perfil.jpeg" alt="#" class="img-fluid w-100 rounded shadow user-gallery">
                            <img src="http://[::1]:5173/resources/js/img/perfil.jpeg" alt="#" class="img-fluid w-100 rounded shadow user-gallery">
                            <img src="http://[::1]:5173/resources/js/img/perfil.jpeg" alt="#" class="img-fluid w-100 rounded shadow user-gallery">
                            <img src="http://[::1]:5173/resources/js/img/perfil.jpeg" alt="#" class="img-fluid w-100 rounded shadow user-gallery">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="mb-4 mt-2">
                        <h1 class="fw-bold text-dark mb-0">{{user.name + ' ' + user.lastname}}</h1>
                        <p>@{{user.username}}</p>
                        <div class="mb-5 mt-4">
                        <p class="fs-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.Sit amet consectetur adipisicing elit. Eveniet fuga ut tenetur, reiciendis in velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis illum, dolor soluta accusamus facilis qui magnam dolorum cum eos!</p>
                        </div>
                        <div class="d-flex justify-content-between bg-white rounded shadow-sm p-4 align-items-center">
                        <div>
                            <h6 class="fw-bold mb-2 text-uppercase small">Current bid</h6>
                            <div class="d-flex align-items-center gap-3">
                                <h2 class="fw-bold text-primary mb-0">$7,274.15</h2>
                                <h6 class="text-muted m-0 d-none d-sm-block">2.079 ETH</h6>
                            </div>
                        </div>
                        <div>
                            <a href="#" class="btn btn-danger btn-lg rounded-lg">Enviar Mensagem</a>
                        </div>
                        </div>
                    </div>
                    <div>
                        <p><span class="text-danger">Localização: </span> Rio de Janeiro</p>
                    </div>
                    <div class="pt-1">
                        <!-- tabs -->
                        <div class="overflow-hidden bg-white rounded shadow-sm mb-4">
                            <ul class="nav auther-tabs mb-0 gap-3 border-bottom px-4 py-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Informações</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Comunidades</button>
                                </li>
                            </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div class="artwork">
                                    <!-- 2nd -->
                                    <div class="border-bottom p-3">
                                        <p>teste</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div class="artwork">
                                    <!-- 1st -->
                                    <div class="border-bottom p-3">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex align-items-center gap-3">
                                            <div><img src="https://picsum.photos/200/300" alt="#" class="img-fluid rounded-circle ch-50 border shadow-sm"></div>
                                            <div>
                                                <h6 class="fw-bold text-dark mb-1">Bid placed by <span class="text-muted fw-normal small">@TheSalvare</span></h6>
                                                <div class="text-muted fw-bold">10 Nov, 2022 at 23:59</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="mb-1">$7,274.15</h6>
                                            <div class="text-muted small">2.079 ETH</div>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- 2nd -->
                                    <div class="border-bottom p-3">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex align-items-center gap-3">
                                            <div><img src="https://picsum.photos/200/300" alt="#" class="img-fluid rounded-circle ch-50 border shadow-sm"></div>
                                            <div>
                                                <h6 class="fw-bold text-dark mb-1">Bid placed by <span class="text-muted fw-normal small">@Spooky</span></h6>
                                                <div class="text-muted fw-bold">10 Nov, 2022 at 23:59</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="mb-1">$7,274.15</h6>
                                            <div class="text-muted small">2.079 ETH</div>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- 3rd -->
                                    <div class="border-bottom p-3">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex align-items-center gap-3">
                                            <div><img src="assets/img/02.gif" alt="#" class="img-fluid rounded-circle ch-50 border shadow-sm"></div>
                                            <div>
                                                <h6 class="fw-bold text-dark mb-1">Bid placed by <span class="text-muted fw-normal small">@Spooky</span></h6>
                                                <div class="text-muted fw-bold">10 Nov, 2022 at 23:59</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="mb-1">$7,274.15</h6>
                                            <div class="text-muted small">2.079 ETH</div>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- 4rth -->
                                    <div class="border-bottom p-3">
                                        <div class="d-flex justify-content-between">
                                            <div class="d-flex align-items-center gap-3">
                                                <div><img src="assets/img/profile-06.gif" alt="#" class="img-fluid rounded-circle ch-50 border shadow-sm"></div>
                                                <div>
                                                    <h6 class="fw-bold text-dark mb-1">Bid placed by <span class="text-muted fw-normal small">@0x355...2f4f4</span></h6>
                                                    <div class="text-muted fw-bold">10 Nov, 2022 at 23:59</div>
                                                </div>
                                            </div>
                                            <div>
                                                <h6 class="mb-1">$7,274.15</h6>
                                                <div class="text-muted small">2.079 ETH</div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 5th -->
                                    <div class="p-3">
                                        <div class="d-flex justify-content-between">
                                            <div class="d-flex align-items-center gap-3">
                                                <div><img src="assets/img/profile-05.gif" alt="#" class="img-fluid rounded-circle ch-50 border shadow-sm"></div>
                                                <div>
                                                    <h6 class="fw-bold text-dark mb-1">Bid placed by <span class="text-muted fw-normal small">@0x355...2f4f4</span></h6>
                                                    <div class="text-muted fw-bold">10 Nov, 2022 at 23:59</div>
                                                </div>
                                            </div>
                                            <div>
                                                <h6 class="mb-1">$7,274.15</h6>
                                                <div class="text-muted small">2.079 ETH</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
   export default {
      name:"user",
      props: ['id'],
      data(){
         return{
            user:[]
         }
      },
      async mounted(){
          
         try{
            const {data} = await axios.get('/api/profile/' + this.id);
            this.user = data;
            document.title = `Fetita | ${this.user.name} ${this.user.lastname}`
         }catch(error){
            console.log(error);
         }
      },
   }
</script>