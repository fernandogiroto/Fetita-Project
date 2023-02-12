<template>
    <section class="bg-banner py-4">
        <div class="container py-4">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-8 col-12">
                    <div class="text-center py-4">
                        <small class="text-white">{{subtitle}}</small>
                        <h1 class="fw-bold text-white py-3">{{title}}</h1>
                        <a :href="btn_link" class="btn btn-lg" :class="btn_color">{{btn_text}}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
   name:"callaction",
   props:{
       title:'',
       subtitle:'',
       btn_text:'',
       btn_color:'',
       btn_link:''
   }
}
</script>