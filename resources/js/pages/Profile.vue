<template>
    <section>
        <div class="container-xl px-4 mt-4 mb-3">
            <div class="overflow-hidden bg-white rounded shadow-sm mb-4">
                <ul class="nav auther-tabs mb-0 gap-3 border-bottom px-4 py-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-informations-tab" data-bs-toggle="pill" data-bs-target="#pills-informations" type="button" role="tab" aria-controls="pills-informations" aria-selected="true">Informações</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Comunidades</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Minha Assinatura</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Notificações</button>
                    </li>
                </ul>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-informations" role="tabpanel" aria-labelledby="pills-informations-tab">
                    <div class="row">
                        <div class="col-xl-4">
                            <!-- Profile picture card-->
                            <div class="card mb-4 mb-xl-0">
                                <div class="card-header">Foto de Perfil</div>
                                <div class="card-body text-center">
                                    <!-- Profile picture image-->
                                    <img class="img-account-profile img-fluid rounded-circle mb-2" :src="user.profile_img">
                                    <!-- Profile picture help block-->
                                    <div class="small font-italic text-muted mb-4">JPG ou PNG até 1MB</div>
                                    <!-- Profile picture upload button-->
                                    <button class="btn btn-primary-fetita" type="button">Upload nova imagem</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <!-- Account details card-->
                            <div class="card mb-4">
                                <div class="card-header">Detalhes da Conta</div>
                                <div class="card-body">
                                    <form>
                                        <!-- Form Group (username)-->
                                        <div class="mb-3">
                                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" :value="user.username">
                                        </div>
                                        <!-- Form Row-->
                                        <div class="row gx-3 mb-3">
                                            <!-- Form Group (first name)-->
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputFirstName">Nome</label>
                                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" :value="user.name">
                                            </div>
                                            <!-- Form Group (last name)-->
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputLastName">Sobrenome</label>
                                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" :value="user.lastname">
                                            </div>
                                        </div>
                                        <!-- Form Row -->
                                        <div class="row gx-3 mb-3">
                                            <!-- Form Group (organization name)-->
                                            <div class="col-md-12">
                                                <label class="small mb-1" for="inputOrgName">Descrição</label>
                                                <textarea class="form-control" id="inputOrgName" rows="4" placeholder="Enter your organization name" :value="user.description"></textarea>
                                            </div>
                                        </div>
                                        <div class="row gx-3 mb-3">
                                            <!-- Form Group (organization name)-->
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputOrgName">Email</label>
                                                <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" :value="user.email">
                                            </div>
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputBirthday">Aniversário</label>
                                                <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" :value="user.birthday">
                                            </div>

                                        </div>
                                        <!-- Form Row-->
                                        <div class="row gx-3 mb-3">
                                            <!-- Form Group (phone number)-->
                                            <div class="col-md-12">
                                                <label class="small mb-1" for="inputPhone">Localização</label>
                                                <input class="form-control" id="inputPhone" type="text" placeholder="Enter your phone number" :value="user.locale">
                                            </div>
                                            <!-- Form Group (birthday)-->

                                        </div>
                                        <!-- Save changes button-->
                                        <button class="btn btn-primary-fetita" type="button">Atualizar</button>
                                    </form>
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
    data(){
        return {
            user:this.$store.state.auth.user
        }
    }
}
</script>
