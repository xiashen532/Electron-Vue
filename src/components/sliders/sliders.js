import { ref } from 'vue'

const value = ref([4, 8])

export default {
    name:'Sliders',
    methods:{
        returnVal(){
            console.log(this.value)
        }
    }
}