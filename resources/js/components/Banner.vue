<template>
    <section class="pt-5 bg-dark">
      <div class="container py-4 px-5 text-center">
         <div class="row gx-5 justify-content-center">
            <div class="col-lg-8">
               <h1 class="text-white display-5 mb-2 fw-bold">{{title}}</h1>
               <p class="lead text-white-50 m-0">{{subtitle}}</p>
            </div>
         </div>
      </div>
      <div class="svg-border-rounded text-light">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="#f0f2f5">
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
         </svg>
      </div>
   </section>
</template>
<script>
export default {
   name:"banner",
   props:{
       title:'',
       subtitle:'',
   }
}
</script>