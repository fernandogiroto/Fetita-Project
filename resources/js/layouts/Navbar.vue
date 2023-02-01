<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-0 osahan-nav">
        <div class="container">
            <router-link to="/" class="navbar-brand">FETITA</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Comunidades</router-link >
                        <ul class="dropdown-menu border-0 shadow-sm">
                            <li><router-link to="/comunidades/bdsm" class="dropdown-item">BDSM</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item"><router-link to="/usuarios" class="nav-link">Usuários</router-link></li>
                    <li class="nav-item"><router-link to="/anuncios" class="nav-link">Eventos</router-link></li>
                    <li class="nav-item"><router-link to="/anuncios" class="nav-link">Artigos</router-link></li>
                </ul>
                <div class="navbar-nav ms-auto gap-3">
                    <a class="btn btn-primary-fetita btn-sm">Assinatura</a>
                    <form class="d-flex align-items-center bg-white overflow-hidden border-radius-five">
                        <input type="text" placeholder="Pequisar..." class="border-0 form-control form-control-sm">
                        <a href="#" class="btn text-primary btn-sm px-3"><i class="icofont-search-1"></i></a>
                    </form>
                    <div class="nav-item dropdown">
                        <a class="nav-link position-relative p-0 messages-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="top-icon border-radius-five"><i class="bi bi-chat fs-5"></i></span>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white">5<span class="visually-hidden">unread messages</span></span>
                        </a>
                    </div>
                    <div class="nav-item dropdown">
                        <a class="nav-link position-relative p-0 messages-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="top-icon border-radius-five"><i class="bi bi-bell fs-5"></i></span>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white">5<span class="visually-hidden">unread messages</span></span>
                        </a>
                        <div class="dropdown-menu border-0 shadow-sm dropdown-menu-start dropdown-menu-lg-end mt-3 notification-drop">
                            <div class="d-flex justify-content-between align-items-center fw-bold p-2">
                                <div>Notification</div>
                            </div>
                            <div>
                                <a class="dropdown-item" href="activity.html">
                                    <div class="d-block">
                                        <div class="d-flex align-items-center gap-2 small">
                                            <div><img src="assets/img/profile.jpg" alt="#" class="img-fluid rounded-circle"></div>
                                            <div class="text-muted">
                                                <div>New item listed by <span class="text-dark fw-bold">@Thesalvare</span></div>
                                                <div>Just now</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a class="dropdown-item" href="activity.html">
                                    <div class="d-block">
                                        <div class="d-flex align-items-center gap-2 small">
                                            <div><img src="assets/img/profile-06.gif" alt="#" class="img-fluid rounded-circle"></div>
                                            <div class="text-muted">
                                                <div>Started following<span class="text-dark fw-bold"> @0x355..2f4f4</span></div>
                                                <div>1 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a class="dropdown-item" href="activity.html">
                                    <div class="d-block">
                                        <div class="d-flex align-items-center gap-2 small">
                                            <div><img src="assets/img/profile-small-1.gif" alt="#" class="img-fluid rounded-circle"></div>
                                            <div class="text-muted">
                                                <div>Placed bid by<span class="text-dark fw-bold">Africarare</span></div>
                                                <div>2 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a class="dropdown-item" href="activity.html">
                                    <div class="d-block">
                                        <div class="d-flex align-items-center gap-2 small">
                                            <div><img src="assets/img/profile-05.gif" alt="#" class="img-fluid rounded-circle"></div>
                                            <div class="text-muted">
                                                <div>New item listed by<span class="text-dark fw-bold"> @Spocky</span></div>
                                                <div>3 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a class="dropdown-item" href="activity.html">
                                    <div class="d-block">
                                        <div class="d-flex align-items-center gap-2 small">
                                            <div><img src="assets/img/card-picture-2.jpg" alt="#" class="img-fluid rounded-circle"></div>
                                            <div class="text-muted">
                                                <div>Like given by<span class="text-dark fw-bold"> @0x355..2f4f4</span></div>
                                                <div>4 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <div class="d-grid p-2 mt-2"><a href="#" class="btn btn-outline-primary  rounded-lg">See all</a></div>
                            </div>
                        </div>
                    </div>   
                    <div class="nav-item dropdown">
                        <a class="nav-link p-0 d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="@/img/perfil.jpeg" alt="#" class="img-fluid border-radius-five top-icon"/>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end border-0 shadow-sm mt-3">
                            <div>
                                <a class="dropdown-item" href="activity.html">
                                    <div class="fw-bold"> {{user.name}}</div>
                                    <div class="text-muted small">Balance:<span class="text-danger">9.209 ETH</span></div>
                                </a>
                            </div>
                            <div>
                                <a class="dropdown-item" href="author.html">
                                    <i class="bi bi-list-ul me-2"></i> My Items
                                </a>
                            </div>
                            <div>
                                <a class="dropdown-item" href="author.html">
                                    <i class="bi bi-save me-2"></i>Collectibles
                                </a>
                            </div>
                            <div>
                                <a class="dropdown-item" href="author.html">
                                    <i class="bi bi-person-plus me-2"></i>Followers
                                </a>
                            </div>
                            <div>
                                <a class="dropdown-item" href="author.html">
                                    <i class="bi bi-pen me-2"></i> Editar Perfil
                                </a>
                            </div>
                            <div>
                                <a class="dropdown-item text-danger pointer" @click="logout" role="button">
                                    <i class="bi bi-box-arrow-right me-2"></i>Deslogar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Notifications from "@/utils/Notifications.vue";
import {mapActions} from 'vuex'
export default {
    components: { Notifications },
        data(){
            return {
                user:this.$store.state.auth.user
            }
        },
        methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        }
    }
};
</script>



