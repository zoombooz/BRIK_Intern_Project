<script>
import { useRoute } from 'vue-router'
const route = useRoute()
export default {
    // props: ['id'],
    // data() {
    //     return {
    //         product : null
    //     }
    // },
    mounted() {
        console.log(route.params.id);
        // fetch('http://localhost:3000/products/' + $route.params.id)
        //     .then(res => res.json())
        //     .then(data => {console.log(data);this.product = data})
        //     .catch(error => console.log(error.message))
    }
}
</script>

<template>
    <h1>{{ $route.params.id }}</h1>
</template>