<template>
    <!-- Navbar -->
    <nav
        class="
            navbar navbar-expand-lg navbar-dark
            bg-dark
            shadow-sm
            p-0
            osahan-nav
        "
    >
        <div class="container">
            <router-link to="/" class="navbar-brand">FETITA </router-link>
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
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Fantasias
                        </a>
                        <ul class="dropdown-menu border-0 shadow-sm">
                            <li>
                                <router-link
                                    to="/fantasias/bdsm"
                                    class="dropdown-item"
                                    >BDSM</router-link
                                >
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/usuarios" class="nav-link"
                            >Usuários</router-link
                        >
                    </li>

                    <li class="nav-item">
                       <router-link to="/anuncios" class="nav-link"
                            >Comunidades</router-link
                        >
                    </li>
                                        <li class="nav-item">
                       <router-link to="/anuncios" class="nav-link"
                            >Novidades</router-link
                        >
                    </li>
                </ul>
                <div class="navbar-nav ms-auto gap-3">
                
                    <div class="nav-item dropdown">
                        <a
                            class="nav-link p-0 d-flex align-items-center"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                        <div class="me-2">
                            {{user.name}}
                        </div>
                            <img
                                src="@/img/perfil.jpeg"
                                alt="#"
                                class="img-fluid border-radius-five top-icon"
                            />
                        </a>
                        <div
                            class="
                                dropdown-menu dropdown-menu-end
                                border-0
                                shadow-sm
                                mt-3
                            "
                        >
                            <div>
                                <a class="dropdown-item" href="activity.html">
                                    <div class="fw-bold">@iamosahan</div>
                                    <div class="text-muted small">
                                        Balance:<span class="text-danger"
                                            >9.209 ETH</span
                                        >
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a class="dropdown-item" href="author.html"
                                    ><i class="bi bi-list-ul me-2"></i> My
                                    Items</a
                                >
                            </div>
                            <div>
                                <a class="dropdown-item" href="author.html"
                                    ><i class="bi bi-save me-2"></i>
                                    Collectibles</a
                                >
                            </div>
                            <div>
                                <a class="dropdown-item" href="author.html"
                                    ><i class="bi bi-person-plus me-2"></i>
                                    Followers</a
                                >
                            </div>
                            <div>
                                <a class="dropdown-item" href="author.html"
                                    ><i class="bi bi-pen me-2"></i> Edit
                                    Profile</a
                                >
                            </div>
                            <div>
                                <a
                                    class="dropdown-item text-danger pointer"
                                    @click="logout" role="button"
                                    ><i class="bi bi-box-arrow-right me-2"></i>
                                    Log out</a
                                >
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



