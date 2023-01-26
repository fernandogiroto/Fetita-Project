<template>
                    <div class="nav-item dropdown">
                    <a class="nav-link position-relative p-0 messages-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="top-icon border-radius-five"><i class="bi bi-bell fs-5"></i></span>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white">
                    {{ $store.state.numberNotifications }}
                    <span class="visually-hidden">Mensagem não lidas</span>
                    </span>
                    </a>
                    <div class="dropdown-menu border-0 shadow-sm dropdown-menu-start dropdown-menu-lg-end mt-3 notification-drop">
                    <div class="d-flex justify-content-between align-items-center fw-bold p-2">
                        <div>{{notificationAlert}}teste</div>
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
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{ 
            notificationNumber : 0
      }
   },
    mounted(){
        this.emitter.on('EventoGlobal',(p)=>{
            this.notificationNumber += p
        })
    },
    computed: 
    {
        ...mapState({
            notificationAlert: state => state.notificationAlert.title
        })
    }

    
}
</script>
