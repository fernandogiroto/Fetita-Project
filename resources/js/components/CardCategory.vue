<template>
    <router-link :to="link" class="router-card-link">
        <div class="card">
            <img class="card-img-top" :src="card_image" :alt="title">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text" style="text-align: justify;">{{subtitle}}</p>
            </div>
        </div>
    </router-link>
</template>
<script>
    export default {
        name:"banner",
        props:{
            title:'',
            subtitle:'',
            card_image:'',
            link:''
        }
    }
</script>