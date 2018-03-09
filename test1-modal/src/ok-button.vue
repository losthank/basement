<script>
import Button from './public'
export default{
    render(h){
        return h(
            Button,{
                class:['ok']
            },
            this.$slots.default
        )
    }
}
</script>
<style>
.button.ok{
    background-color: grey;
}
</style>