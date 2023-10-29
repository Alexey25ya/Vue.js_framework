<template>
    <div>
        <h1>Задание3</h1>
        <product-comp @quantity="changeQuantity" v-for="product in products" :key="product.id"
            :product="product"></product-comp>
        ИТОГО: {{ totalPrice }}
    </div>
</template>
    
<script>
import ProductComp from './ProductComp.vue'
export default {
    components: { ProductComp },
    name: 'ShoppingCart',

    data() {
        return {
            products: [
                {
                    id: 1,
                    quantity: 5,
                    price: 5000,
                    name: 'Бегемот'
                },
                {
                    id: 2,
                    quantity: 38,
                    price: 2000,
                    name: 'Попугай'
                },
                {
                    id: 3,
                    quantity: 10,
                    price: 1000,
                    name: 'Кот'
                }
            ]
        }
    },

    computed: {
        totalPrice() {
            return this.products.reduce((sum, product) => sum + product.quantity * product.price, 0)
        }
    },

    mounted() {

    },

    methods: {
        changeQuantity(productData) {
            productData.product.quantity = productData.quantity
        }
    }
}
</script>
    
<style ></style>