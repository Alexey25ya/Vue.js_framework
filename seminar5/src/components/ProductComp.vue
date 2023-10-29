<template>
    <div>
        <input @change="changeQuantity" type="number" name="" id="" :value="product.quantity">
        <p>Название: {{ product.name }}</p>
        <p>Цена: {{ product.price }}</p>
        <p>Стоимость: {{ product.quantity * product.price }}</p>
    </div>
</template>
    
<script>
export default {
    name: 'ProductComp',
    props: ['product'],

    data() {
        return {

        }
    },

    mounted() {

    },

    methods: {
        changeQuantity(event) {
            const quantityData = {
                quantity: +event.target.value,
                product: this.product
            }
            this.$emit('quantity', quantityData)
        }
    }
}
</script>
    
<style ></style>