<template>
    <!-- Banner -->
    <section>
        <div class="banner-fetita text-center">
            <h2 class="text-white">BDSM</h2>
        </div>
    </section>
    <!-- Fantasy Description -->
    <section>    
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-3">
                    <div class="rounded shadow-osahan bg-white card border-0 author-sidebar card-fantasy-description">
                        <div class="p-4 text-center">
                            <img src="@/img/bdsm_icon.jpg" alt="#" class="img-fluid comunity-avatar mb-2">
                            <div class="card-footer border-0 bg-transparent text-center">
                                <button v-if="isFollow" @click="bdsm_remove" class="btn btn-dark btn-lg px-5 rounded-lg shadow-sm">Deixar</button>
                                <button v-if="!isFollow" @click="bdsm_add" class="btn btn-danger btn-lg px-5 rounded-lg shadow-sm">Seguir</button>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center border-top border-bottom">
                            <div class="text-center p-4">
                                <h5 class="fw-bold mb-0">160</h5>
                                <div class="text-muted small">Seguidores</div>
                            </div>
                            <div class="border-start"></div>
                            <div class="text-center p-4">
                                <h5 class="fw-bold mb-0">59</h5>
                                <div class="text-muted small">Grupos</div>
                            </div>
                            <div class="border-end"></div>
                            <div class="text-center p-4">
                                <h5 class="fw-bold mb-0">23k</h5>
                                <div class="text-muted small">Artigos</div>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            I make art with the simple goal of giving you something pleasing to look at for a few seconds.
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-9 ps-lg-5 py-3 mt-4">
                    <p style="text-align: justify;">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries.
                    </p>
                    <div class="row g-4 mt-4">
                        <div class="col-lg-4 col-4">
                            <div class="rounded shadow-sm p-4 bg-white d-flex align-items-center gap-3 steps-item">
                            <span class="bg-primary rounded-circle steps-item-icon"><i class="bi bi-megaphone text-white"></i></span>
                            <div>
                                <div class="fw-bold fs-6 mb-1">Divulgar um anúncio</div>
                                <p class="text-muted m-0 d-none d-md-block">Use Trust Wallet, Metamask or any wallet to connect to the app.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-4">
                            <div class="rounded shadow-sm p-4 bg-white d-flex align-items-center gap-3 steps-item">
                            <span class="bg-primary rounded-circle steps-item-icon"><i class="bi bi-patch-plus text-white"></i></span>
                            <div>
                                <div class="fw-bold fs-6 mb-1">Comunidades</div>
                                <div class="text-muted m-0 d-none d-md-block">Upload your NFTs and set a title, description and price.</div>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-4">
                            <div class="rounded shadow-sm p-4 bg-white d-flex align-items-center gap-3 steps-item">
                            <span class="bg-primary rounded-circle steps-item-icon"><i class="bi bi-people-fill text-white"></i></span>
                            <div>
                                <div class="fw-bold fs-6 mb-1">Lista de Amizades</div>
                                <div class="text-muted m-0 d-none d-md-block">Earn ETH and BIT for all your NFTs that you sell on our marketplace.</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Fantasy Users -->
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 mt-5">
                    <div class="h4 m-0 fw-bold title-section">Usuários</div>
                    <p class="pb-1">Usuários nesta comunidade</p>
                    <div class="row">
                        <div class="col-3">
                            <div class="card osahan-item-list p-3 rounded h-100 shadow-osahan bg-white border-0">
                                <img src="https://picsum.photos/seed/picsum/200/300" class="card-img-top rounded-lg" alt="..." />
                                <div class="card-body fw-bold px-0 pb-0">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex gap-2 align-items-center">
                                            <h5 class="card-title mb-1">Metaverse Gamesmall</h5>
                                        </div>
                                        <div class="like-btn">
                                            <a href="#" class="text-decoration-none link-dark"><i class="bi bi-heart-fill"></i></a>
                                        </div>
                                    </div>
                                    <div class="card-text mb-1">
                                        <small class="text-muted">Highest bid</small>
                                    </div>
                                </div>
                                <a href="single-artwork.html" class="stretched-link"></a>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card osahan-item-list p-3 rounded h-100 shadow-osahan bg-white border-0">
                                <img src="https://picsum.photos/seed/picsum/200/300" class="card-img-top rounded-lg" alt="..." />
                                <div class="card-body fw-bold px-0 pb-0">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex gap-2 align-items-center">
                                            <h5 class="card-title mb-1">Metaverse Gamesmall</h5>
                                        </div>
                                        <div class="like-btn">
                                            <a href="#" class="text-decoration-none link-dark"><i class="bi bi-heart-fill"></i></a>
                                        </div>
                                    </div>
                                    <div class="card-text mb-1">
                                        <small class="text-muted">Highest bid</small>
                                    </div>
                                </div>
                                <a href="single-artwork.html" class="stretched-link"></a>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card osahan-item-list p-3 rounded h-100 shadow-osahan bg-white border-0">
                                <img src="https://picsum.photos/seed/picsum/200/300" class="card-img-top rounded-lg" alt="..." />
                                <div class="card-body fw-bold px-0 pb-0">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex gap-2 align-items-center">
                                            <h5 class="card-title mb-1">Metaverse Gamesmall</h5>
                                        </div>
                                        <div class="like-btn">
                                            <a href="#" class="text-decoration-none link-dark"><i class="bi bi-heart-fill"></i></a>
                                        </div>
                                    </div>
                                    <div class="card-text mb-1">
                                        <small class="text-muted">Highest bid</small>
                                    </div>
                                </div>
                                <a href="single-artwork.html" class="stretched-link"></a>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card osahan-item-list p-3 rounded h-100 shadow-osahan bg-white border-0">
                                <img src="https://picsum.photos/seed/picsum/200/300" class="card-img-top rounded-lg" alt="..." />
                                <div class="card-body fw-bold px-0 pb-0">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex gap-2 align-items-center">
                                            <h5 class="card-title mb-1">Metaverse Gamesmall</h5>
                                        </div>
                                        <div class="like-btn">
                                            <a href="#" class="text-decoration-none link-dark"><i class="bi bi-heart-fill"></i></a>
                                        </div>
                                    </div>
                                    <div class="card-text mb-1">
                                        <small class="text-muted">Highest bid</small>
                                    </div>
                                </div>
                                <a href="single-artwork.html" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-5">
                    <div class="h4 m-0 fw-bold title-section">Categorias</div>
                        <p class="pb-2">teste</p>
                    <div class="row">
                        <div class="col-3">
                            <div class="card">
                                <img class="card-img-top" src="@/img/sugar_daddy.jpeg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Sugar</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <router-link to="/comunidades/bdsm" class="router-card-link">
                                        <div class="card" >
                                <img class="card-img-top" src="@/img/bondage-banner.jpeg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">BDSM</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </router-link>

                        </div>
                        <div class="col-3">
                            <div class="card">
                                <img class="card-img-top" src="@/img/fantasia_cuckold.jpeg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Cuckold</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card">
                                <img class="card-img-top" src="@/img/foot_fetish.jpeg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Podolatria</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Call to Action-->
    <section class="bg-banner py-4 mt-5 mb-3">
        <div class="container py-4">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-8 col-12">
                    <div class="text-center py-4">
                        <small class="text-white-50">ACTIVITY</small>
                        <h1 class="fw-bold text-white py-3">We make sure that everyone is able to use a Gonft</h1>
                        <a href="activity.html" class="btn btn-light btn-lg">More Info</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Events -->
    <section class="pb-5">
        <div class="container">
            <div class="row">
                <div class="col-12 mt-5">
                    <div class="h4 m-0 fw-bold title-section pb-2">Eventos</div>
                    <p class="pb-1">teste</p>
                    <div class="row">
                        <div class="col-6">
                            <div class="card">
                                <div class="card-body">This is some text within a card body.</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card">
                                <div class="card-body">This is some text within a card body.</div>
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
   name:"bdsm",
    data(){
        return {
            user:this.$store.state.auth.user,
            isFollow: this.$store.state.auth.user.bdsm,
        }
    },
    methods:{
        async bdsm_add(){
            await axios.put('/api/user/community/bdsm_add/' + this.user.id).then(({data})=>{
                console.log(data);
            this.isFollow = false;
            })
        },
        async bdsm_remove(){
            await axios.put('/api/user/community/bdsm_remove/' + this.user.id).then(({data})=>{
                this.$store.state.auth.user.bdsm = data.bdsm;
                console.log(this.$store.state.auth.user.bdsm);
                this.isFollow = true;
            })
        }
    }

}
</script>