<template>
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
<a class="btn btn-primary-fetita btn-sm" href="create.html">Fazer Login</a>
</div>
        </div>
    </nav>
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

          </div>
    </section>

    <section> 
        <div class="container py-4">
            <section>
                <div class="row">
                    <div class="col-6">
                        <img class="img-fluid rounded" src="@/img/fantasias.jpeg" alt="">
                    </div>
                </div>
            </section>
        <div class="h4 m-0 fw-bold title-section">Categorias</div>
            <p class="pb-2">teste</p>

        </div>

    </section>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12 col-md-6 offset-md-3">
                <div class="card shadow sm">
                    <div class="card-body">
                        <h1 class="text-center">Login</h1>
                        <hr/>
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
                                <button type="submit" :disabled="processing" @click="login" class="btn btn-primary btn-block">
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
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"login",
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