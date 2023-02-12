<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-0 osahan-nav">
        <div class="container">
            <a href="#" class="navbar-brand">FETITA </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup16"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup16">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Como Funciona
                        </a>
                    </li>
                                        <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Comunidades
                        </a>
                    </li>
                                        <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Artigos
                        </a>
                    </li>
                </ul>
            </div>
            <div class="navbar-nav ms-auto gap-3">
<a class="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Cadastrar</a>
<a class="btn btn-primary-fetita btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Fazer Login</a>
</div>
        </div>
    </nav>
    <section class="background-image-login bg-primary py-5">
          <div class="container py-5">
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-body">
                       <form action="javascript:void(0)" class="row" method="post">
                            <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                                <div class="alert alert-danger">
                                    <ul class="mb-0">
                                        <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="form-group col-12">
                                <label for="email" class="font-weight-bold">Email</label>
                                <input type="text" v-model="auth.email" name="email" id="email" class="form-control">
                            </div>
                            <div class="form-group col-12 my-2">
                                <label for="password" class="font-weight-bold">Password</label>
                                <input type="password" v-model="auth.password" name="password" id="password" class="form-control">
                            </div>
                            <div class="col-12 mb-2">
                                <button type="submit" :disabled="processing" @click="login" class="btn btn-primary btn-block" data-bs-dismiss="modal" aria-label="Close">
                                    {{ processing ? "Please wait" : "Login" }}
                                </button>
                            </div>
                            <div class="col-12 text-center">
                                <label>Don't have an account? <router-link :to="{name:'register'}">Register Now!</router-link></label>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
              <div class="row">
                <div class="col-lg-7 col-12">
                    <div class="mb-4">
                      <div class="display-5 fw-bold text-white mb-3">Explore e conheça o mundo das fantasias</div>
                      <div class="fs-5 text-white-50">Comunidade para os aventureiros de mente aberta e amantes de fetish</div>
                    </div>
                    <div>
                      <a href="explore.html" class="btn btn-primary-fetita btn-lg me-3">Fantasias</a>
                      <a href="create.html" class="btn btn-light btn-lg">Comunidades</a>
                    </div>
                </div>
              </div>

          </div>
    </section>

    <section class="mt-5"> 
        <div class="container py-4">
            <section>
                <div class="row">
                    <div class="col-6">
                        <img class="img-fluid rounded w-100" src="@/img/fantasias.jpeg" alt="">
                    </div>
                    <div class="col-6 ps-4">
                        <div class="display-5 fw-bold  mb-3">Portal do Fetish</div>
                        <p>Falar sobre fetish não precisa ser algo negativo e desconfortável. Ter com quem conversar, partilhar e trocar ideias, com respeito e sem julgamentos, pode ser uma forma de conhecer melhor esse mundo. E no Fetita você encontrará esse espaço seguro para se aventurar.</p>
                        <div class="pt-3">
                      <a href="explore.html" class="btn btn-primary-fetita btn-lg me-3">Fantasias</a>
                      <a href="create.html" class="btn btn-dark btn-lg">Comunidades</a>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
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
            <CardCategory title="Cuckold" subtitle="Se está numa numa relação sólida mas pensa na possibilidade de incluir uma nova pessoa na sua vida sexual, essa comunidade pode ser para você." card_image="http://[::1]:5173/resources/js/img/fantasia_cuckold.jpeg" link="/comunidades/bdsm" />
            </div>
            <div class="col-3">
            <CardCategory title="Podolatria" subtitle="Some quick example text to build on the card title and make up the bulk of the card's content." card_image="http://[::1]:5173/resources/js/img/foot_fetish.jpeg" link="/comunidades/bdsm" />
            </div>
        </div>
        </div>
    </section>
    <section class="py-5 bg-white"> 
        <div class="container">
    
    <div class="row">

	<div class="four col-md-3">
		<div class="counter-box colored rounded">
			<i class="bi bi-arrow-through-heart-fill"></i>
			<span class="counter">2147</span>
			<p>Happy Customers</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box colored rounded">
			<i class="bi bi-arrow-through-heart-fill"></i>
			<span class="counter">3275</span>
			<p>Registered Members</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box rounded">
			<i class="bi bi-arrow-through-heart-fill"></i>
			<span class="counter">289</span>
			<p>Available Products</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box rounded">
			<i class="bi bi-arrow-through-heart-fill"></i>
			<span class="counter">1563</span>
			<p>Saved Trees</p>
		</div>
	</div>
  </div>	
</div>
    </section>
    <section>
        <div class="container py-5">
        <div class="row">
            <div class="col-6 border">teste</div>
            <div class="col-6 border">
                      <section class="py-5">
         <div class="container py-4">
            <div class="row justify-content-center g-4">
               <div class="col-lg-10 col-12">
                  <ul class="nav help-tabs mb-3 justify-content-center" id="pills-tab" role="tablist">
                     <li class="nav-item" role="presentation">
                        <button class="nav-link active shadow-sm" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                           <span class="text-center px-0 px-md-3 d-flex align-item-center flex-column">
                              <span class="mb-2"><i class="bi bi-book fs-3"></i></span>
                              <span class="h6 fw-bold">Getting Started</span>
                           </span>
                        </button>
                     </li>
                     <li class="nav-item" role="presentation">
                        <button class="nav-link shadow-sm" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                           <span class="text-center px-0 px-md-3 d-flex align-item-center flex-column">
                              <span class="mb-2"><i class="bi bi-bookmark-star fs-3"></i></span>
                              <span class="h6 fw-bold">Collecting</span>
                           </span>
                        </button>
                     </li>
                     <li class="nav-item" role="presentation">
                        <button class="nav-link shadow-sm" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                           <span class="text-center px-0 px-md-3 d-flex align-item-center flex-column">
                              <span class="mb-2"><i class="bi bi-credit-card fs-3"></i></span>
                              <span class="h6 fw-bold">Payment</span>
                           </span>
                        </button>
                     </li>
                     <li class="nav-item" role="presentation">
                        <button class="nav-link shadow-sm" id="pills-selling-tab" data-bs-toggle="pill" data-bs-target="#pills-selling" type="button" role="tab" aria-controls="pills-selling" aria-selected="false">
                           <span class="text-center px-0 px-md-3 d-flex align-item-center flex-column">
                              <span class="mb-2"><i class="bi bi-bag fs-3"></i></span>
                              <span class="h6 fw-bold">Selling</span>
                           </span>
                        </button>
                     </li>
                  </ul>
               </div>
               <div class="col-12 col-lg-6 mb-2">
                  <div class="tab-content" id="pills-tabContent">
                     <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div class="text-center fw-bold h2 mb-4">Getting Started</div>
                        <!-- Accordion -->
                        <div class="accordion accordion-flush rounded shadow-sm overflow-hidden" id="accordionFlushExample">
                           <!-- 1st item -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingOne">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                 What is a NFT?
                                 </button>
                              </h1>
                              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically. 

An NFT is “a type of cryptographic token,” Emerging Tech Brew writer Ryan Duffy explains, but NFTs are different from cryptocurrencies because they’re not interchangeable. Think of Pokémon cards: You can trade them, but a Gastly is not the same as a holographic Charizard. But a bitcoin is indistinguishable from another bitcoin.

.</div>
                              </div>
                           </div>
                           <!-- 2nd items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingTwo">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                 How do I sign up for NFT Gateway?
                                 </button>
                              </h1>
                              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 3rd items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingThree">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                 How do I change my Password?
                                 </button>
                              </h1>
                              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 4rth items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingFour">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                 Drop Mechanics on NFT Gateway
                                 </button>
                              </h1>
                              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 5th items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingFive">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                 Tips for Participating in Drops
                                 </button>
                              </h1>
                              <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div class="text-center fw-bold h2 mb-4">Collecting</div>
                        <!-- Accordion -->
                        <div class="accordion accordion-flush rounded shadow-sm overflow-hidden" id="accordionFlushExample2">
                           <!-- 3rd items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingEight">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                 How do I change my Password?
                                 </button>
                              </h1>
                              <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample2">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 4rth items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingNine">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                 Drop Mechanics on NFT Gateway
                                 </button>
                              </h1>
                              <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample2">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 1st item -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingSix">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                 What is a NFT?
                                 </button>
                              </h1>
                              <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample2">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically. 

An NFT is “a type of cryptographic token,” Emerging Tech Brew writer Ryan Duffy explains, but NFTs are different from cryptocurrencies because they’re not interchangeable. Think of Pokémon cards: You can trade them, but a Gastly is not the same as a holographic Charizard. But a bitcoin is indistinguishable from another bitcoin.

.</div>
                              </div>
                           </div>
                           <!-- 2nd items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingSeven">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                 How do I sign up for NFT Gateway?
                                 </button>
                              </h1>
                              <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample2">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 5th items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingTen">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                 Tips for Participating in Drops
                                 </button>
                              </h1>
                              <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample2">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div class="text-center fw-bold h2 mb-4">Payment</div>
                        <!-- Accordion -->
                        <div class="accordion accordion-flush rounded shadow-sm overflow-hidden" id="accordionFlushExample3">
                           <!-- 1st item -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingElevan">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseElevan" aria-expanded="false" aria-controls="flush-collapseElevan">
                                 What is a NFT?
                                 </button>
                              </h1>
                              <div id="flush-collapseElevan" class="accordion-collapse collapse" aria-labelledby="flush-headingElevan" data-bs-parent="#accordionFlushExample3">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically. 

An NFT is “a type of cryptographic token,” Emerging Tech Brew writer Ryan Duffy explains, but NFTs are different from cryptocurrencies because they’re not interchangeable. Think of Pokémon cards: You can trade them, but a Gastly is not the same as a holographic Charizard. But a bitcoin is indistinguishable from another bitcoin.

.</div>
                              </div>
                           </div>
                           <!-- 2nd items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingTwelve">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
                                 How do I sign up for NFT Gateway?
                                 </button>
                              </h1>
                              <div id="flush-collapseTwelve" class="accordion-collapse collapse" aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExample3">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 3rd items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingThirteen">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
                                 How do I change my Password?
                                 </button>
                              </h1>
                              <div id="flush-collapseThirteen" class="accordion-collapse collapse" aria-labelledby="flush-headingThirteen" data-bs-parent="#accordionFlushExample3">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 4rth items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingFifteen">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifteen" aria-expanded="false" aria-controls="flush-collapseFifteen">
                                 Drop Mechanics on NFT Gateway
                                 </button>
                              </h1>
                              <div id="flush-collapseFifteen" class="accordion-collapse collapse" aria-labelledby="flush-headingFifteen" data-bs-parent="#accordionFlushExample3">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 5th items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingSixteen">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSixteen" aria-expanded="false" aria-controls="flush-collapseSixteen">
                                 Tips for Participating in Drops
                                 </button>
                              </h1>
                              <div id="flush-collapseSixteen" class="accordion-collapse collapse" aria-labelledby="flush-headingSixteen" data-bs-parent="#accordionFlushExample3">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="pills-selling" role="tabpanel" aria-labelledby="pills-selling-tab">
                        <div class="text-center fw-bold h2 mb-4">Selling</div>
                        <!-- Accordion -->
                        <div class="accordion accordion-flush rounded shadow-sm overflow-hidden" id="accordionFlushExample4">
                           <!-- 3rd items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingSeventeen">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeventeen" aria-expanded="false" aria-controls="flush-collapseSeventeen">
                                 How do I change my Password?
                                 </button>
                              </h1>
                              <div id="flush-collapseSeventeen" class="accordion-collapse collapse" aria-labelledby="flush-headingSeventeen" data-bs-parent="#accordionFlushExample4">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 4rth items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingEighteen">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEighteen" aria-expanded="false" aria-controls="flush-collapseEighteen">
                                 Drop Mechanics on NFT Gateway
                                 </button>
                              </h1>
                              <div id="flush-collapseEighteen" class="accordion-collapse collapse" aria-labelledby="flush-headingEighteen" data-bs-parent="#accordionFlushExample4">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 1st item -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingNineteen">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNineteen" aria-expanded="false" aria-controls="flush-collapseNineteen">
                                 What is a NFT?
                                 </button>
                              </h1>
                              <div id="flush-collapseNineteen" class="accordion-collapse collapse" aria-labelledby="flush-headingNineteen" data-bs-parent="#accordionFlushExample4">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically. 

An NFT is “a type of cryptographic token,” Emerging Tech Brew writer Ryan Duffy explains, but NFTs are different from cryptocurrencies because they’re not interchangeable. Think of Pokémon cards: You can trade them, but a Gastly is not the same as a holographic Charizard. But a bitcoin is indistinguishable from another bitcoin.

.</div>
                              </div>
                           </div>
                           <!-- 2nd items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingTwenty">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwenty" aria-expanded="false" aria-controls="flush-collapseTwenty">
                                 How do I sign up for NFT Gateway?
                                 </button>
                              </h1>
                              <div id="flush-collapseTwenty" class="accordion-collapse collapse" aria-labelledby="flush-headingTwenty" data-bs-parent="#accordionFlushExample4">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.

</div>
                              </div>
                           </div>
                           <!-- 5th items -->
                           <div class="accordion-item">
                              <h1 class="accordion-header" id="flush-headingTwentyone">
                                 <button class="accordion-button collapsed fw-bold bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwentyone" aria-expanded="false" aria-controls="flush-collapseTwentyone">
                                 Tips for Participating in Drops
                                 </button>
                              </h1>
                              <div id="flush-collapseTwentyone" class="accordion-collapse collapse" aria-labelledby="flush-headingTwentyone" data-bs-parent="#accordionFlushExample4">
                                 <div class="accordion-body text-muted">Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
            </div>
        </div>
        </div>
    </section>
    <Footer />
</div>
</template>

<script>
import { mapActions } from 'vuex'
import CardCategory from '@/components/CardCategory.vue'
import Footer from '@/layouts/Footer.vue'

export default {
    name:"login",
    components: {CardCategory,Footer},
    data(){
        return {
            auth:{
                email:"",
                password:""
            },
            validationErrors:{},
            processing:false
        }
    },
    methods:{
        ...mapActions({
            signIn:'auth/login'
        }),
        async login(){
            this.processing = true
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/login',this.auth).then(({data})=>{
                this.signIn()
            }).catch(({response})=>{
                if(response.status===422){
                    this.validationErrors = response.data.errors
                }else{
                    this.validationErrors = {}
                    alert(response.data.message)
                }
            }).finally(()=>{
                this.processing = false
            })
        },
    }
}
</script>
<style scoped>


.counter-box {
	display: block;
	background: #000000;
	padding: 40px 20px 37px;
	text-align: center
}

.counter-box p {
	margin: 5px 0 0;
	padding: 0;
	color: #ffffff;
	font-size: 18px;
	font-weight: 500
}

.counter-box i {
	font-size: 60px;
	margin: 0 0 15px;
	color: #ffffff
}

.counter { 
	display: block;
	font-size: 32px;
	font-weight: 700;
	color: rgb(255, 255, 255);
	line-height: 28px
}

.counter-box.colored {
      background: #a4161a;
}

.counter-box.colored p,
.counter-box.colored i,
.counter-box.colored .counter {
	color: #fff
}
</style>