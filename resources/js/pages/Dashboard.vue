<template>
  <div>
    <section class="background-image bg-primary py-5">
          <div class="container py-4 teste">
              <div class="row">
                <div class="col-lg-7 col-12">
                    <div class="mb-4">
                      <div class="display-5 fw-bold text-white mb-3">Explore e conheça o mundo das fantasias</div>
                      <div class="fs-5 text-white-50">Comunidade para os aventureiros de mente aberta e amantes de fetish</div>
                    </div>
                    <div>
                      <a href="explore.html" class="btn btn-primary-fetita btn-lg me-3">Fantasias</a>
                      <a href="create.html" class="btn btn-light btn-lg">Regras</a>
                    </div>
                </div>
              </div>
              <div class="row g-4 mt-5">
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
                          <div class="fw-bold fs-6 mb-1">Minhas Comunidades</div>
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
    </section>
    <!-- Últimas Atividades -->
    <section class="py-5">
        <div class="container my-4">
          <div class="mb-3">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="h4 m-0 fw-bold title-section">Últimas Atividades</div>
                <div><a href="#" class="btn btn-outline-dark btn-sm px-3">Ver Todos</a></div>
              </div>
              <div class="row g-3">
                <div class="col-6 col-md-4 col-lg-2" v-for="user in users" :key="user.id">
                    <div class="top-artistss">
                      <div class="p-2 rounded shadow-osahan bg-white card border-0">
                          <img src="@/img/perfil.jpeg" class="card-img-top rounded-lg" alt="..." />
                          <div class="onlinetick"><i class="bi bi-check-circle-fill text-success border border-white rounded-circle bg-white"></i></div>
                          <div class="card-body text-center py-1">
                          <h6 class="card-title mb-1 text-dark fw-bold mt-2">{{user.name}}</h6>
                          <p class="card-text text-muted small mb-2">Submisso</p>
                          </div>
                      </div>
                      <a href="single-artwork.html" class="stretched-link"></a>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>
    <!-- Banner -->
    <section class="bg-dark py-4">
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
    <!-- Categorias -->
    <section >
      <div class="container my-4">
                    <div class="h4 m-0 fw-bold title-section">Categorias</div>
            <p class="pb-2">teste</p>
        <div class="row">
          <div class="col-3">
              <div class="card">
                  <img class="card-img-top" src="@/img/sugar_daddy.jpeg" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title">Sugar Daddy/Mommy</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
          </div>
            <div class="col-3">
              <div class="card">
                  <img class="card-img-top" src="@/img/bondage-banner.jpeg" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title">BDSM</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name:"dashboard",
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
         console.log(error)
      }
   },
}
</script>