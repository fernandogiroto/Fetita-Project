<template>
    <div>
              <!-- Footer -->
      <footer class="footer bg-white py-5">
         <div class="container py-4">
         <div class="row">
            <div class="col-md-12 col-lg-2 col-12">
               <p>FETITA</p>
               <div class="text-muted mt-4">
               <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
               <div class="d-flex gap-3 fs-6">
                  <a href="#" class="text-decoration-none link-dark"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="text-decoration-none link-dark"><i class="bi bi-facebook"></i></a>
                  <a href="#" class="text-decoration-none link-dark"><i class="bi bi-youtube"></i></a>
               </div>
               </div>
            </div>
            <div class="col-md-6 col-lg-2 col-4">
               <h6 class="fw-bold text-body mb-3">NAVEGUE</h6>
               <ul class="nav flex-column">
               <li><a class="nav-link" href="create.html">Create</a></li>
               <li><a class="nav-link" href="create-multiple.html">Create Multiple</a></li>
               <li><a class="nav-link" href="create-single.html">Create Single</a></li>
               <li><a class="nav-link" href="connect-wallet.html">Connect wallet</a></li>
               <li><a class="nav-link" href="authors.html">Authors</a></li>
               <li><a class="nav-link" href="author.html">Author</a></li>
               </ul>
            </div>
            <div class="col-md-6 col-lg-2 col-4">
               <h6 class="fw-bold text-body mb-3">COMUNIDADES</h6>
               <ul class="nav flex-column">
               <li><a class="nav-link" href="blog.html">BDSM</a></li>
               <li><a class="nav-link" href="blog-author.html">Sugar</a></li>
               <li><a class="nav-link" href="blog-category.html">Cuckold</a></li>
               <li><a class="nav-link" href="blog-single.html">Podolatria</a></li>
               </ul>
            </div>
            <div class="col-md-6 col-lg-2 col-4">
               <h6 class="fw-bold text-body mb-3">NOSSO PORTAL</h6>
               <ul class="nav flex-column">
               <li><a class="nav-link" href="sign-in.html">Como Funciona</a></li>
               <li><a class="nav-link" href="sign-up.html">Artigos</a></li>
               <li><a class="nav-link" href="reset-password.html">Planos</a></li>
               <li><a class="nav-link" href="collections.html">Eventos</a></li>
               </ul>
            </div>
            <div class="col-md-12 col-lg-4 col-12">
               <form>
               <h6 class="fw-bold text-body mb-2">NEWSLETTER</h6>
               <div class="mb-4 text-muted">Subscribe for the latest news, drops & collectibles</div>
               <div class="input-group">
                  <input type="text" class="form-control" placeholder="Enter Your Email" />
                  <button class="btn btn-primary-fetita" type="button"><i class="bi bi-envelope me-2"></i> Subscrever</button>
               </div>
               </form>
            </div>
         </div>
         </div>
      </footer>
      <footer class="footer-mid py-4">
         <div class="container">
            <div class="row align-items-center justify-content-between">
               <div class="col-auto">
                  <div class="mb-4 mb-md-0">
                  <a href="explore.html" class="text-decoration-none link-dark fw-bold px-2">Suporte</a>
                  <a href="terms.html" class="text-decoration-none link-dark fw-bold px-2">Termos e Condições</a>
                  <router-link to="/politica_de_privacidade" class="text-decoration-none link-dark fw-bold px-2">Política de Privacidade</router-link>
                  </div>
               </div>
               <div class="col-auto">
                  <div class="d-flex align-items-center gap-3">
                  <span class="text-decoration-none link-dark">Download app</span>
                  <a href="#"><img src="@/img/app-store.png" alt="#" class="img-fluid" /></a>
                  <a href="#"><img src="@/img/google-store.png" alt="#" class="img-fluid" /></a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <footer class="footer-end bg-white py-4">
         <div class="container">
            <div class="row align-items-center justify-content-center">
               <div class="col-12 text-center">
                  <span class="small">© 2023 Fetita - Todos os direitos reservados.</span>
               </div>
            </div>
         </div>
      </footer>
    </div>
</template>