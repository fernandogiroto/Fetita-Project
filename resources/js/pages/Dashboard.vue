<template>
  <!-- Banner -->
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
  </section>
  <!-- Users Active -->
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
                    <router-link :to="{name: 'user', params: {id: user.id}}"> 
                      <div class="p-2 rounded shadow-osahan bg-white card border-0">
                          <img src="@/img/perfil.jpeg" class="card-img-top rounded-lg" alt="..." />
                          <div class="onlinetick"><i class="bi bi-check-circle-fill text-success border border-white rounded-circle bg-white"></i></div>
                          <div class="card-body text-center py-1">
                            <h6 class="card-title mb-1 text-dark fw-bold mt-2">{{user.name + ' ' + user.lastname}}</h6>
                            <p class="card-text text-muted small mb-2">Submisso</p>
                          </div>
                      </div>
                    </router-link>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
  <!-- Call to Action -->
  <CallAction title="Apareça em destaque no maior portal de Fetish" subtitle="Planos Fetita" btn_color="btn-light" btn_link="#" btn_text="Ver Planos" />
  <!-- Categories -->
  <section >
    <div class="container my-4 py-5">
      <div class="h4 m-0 fw-bold title-section">Categorias</div>
      <p class="pb-2">teste</p>
      <div class="row">
        <div class="col-3">
          <CardCategory title="Sugar" subtitle="Some quick example text to build on the card title and make up the bulk of the card's content." card_image="http://[::1]:5173/resources/js/img/sugar_daddy.jpeg" link="/comunidades/bdsm" />
        </div>
        <div class="col-3">
          <CardCategory title="BDSM" subtitle="Some quick example text to build on the card title and make up the bulk of the card's content." card_image="http://[::1]:5173/resources/js/img/bondage-banner.jpeg" link="/comunidades/bdsm" />
        </div>
        <div class="col-3">
          <CardCategory title="Monogamia" subtitle="Se está numa numa relação sólida mas pensa na possibilidade de incluir uma nova pessoa na sua vida sexual, essa comunidade pode ser para você." card_image="http://[::1]:5173/resources/js/img/fantasia_cuckold.jpeg" link="/comunidades/bdsm" />
        </div>
        <div class="col-3">
          <CardCategory title="Podolatria" subtitle="Some quick example text to build on the card title and make up the bulk of the card's content." card_image="http://[::1]:5173/resources/js/img/foot_fetish.jpeg" link="/comunidades/bdsm" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import CallAction from '@/components/CallAction.vue'
  import CardCategory from '@/components/CardCategory.vue'
  export default {
    name:"dashboard",
    components: {CallAction,CardCategory},
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