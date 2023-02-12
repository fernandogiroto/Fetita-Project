<template>
   <div>
      <Navbar/>
        <router-view></router-view>
      <Footer />
   </div>
</template>
<script>
    import Navbar from '@/layouts/Navbar.vue'
    import Footer from '@/layouts/Footer.vue'

    export default {
        name:"default-layout",
        components: { Navbar,Footer},
        data(){
            return {
                user:this.$store.state.auth.user
            }
        }
    }
</script>
