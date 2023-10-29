
<template>
    <div>
        <h1>Задание2</h1>
        <p>Разработать интерфейс корзины товаров, в котором пользователь может изменять количество товаров в корзине и
            видеть общую сумму покупки. Каждый товар представлен в виде блока, содержащего поле ввода для изменения
            количества товара и отображение его цены. При изменении количества товаров в поле ввода, необходимо
            автоматически пересчитывать стоимость каждого товара и обновлять общую сумму покупки.</p>
        <div v-for="product in products" :key="product.id">
            <input type="number" name="" id="" v-model.number="product.quantity">
            <p>Название: {{ product.name }}</p>
            <p>Цена: {{ product.price }}</p>
            <p>Стоимость: {{ product.quantity * product.price }}</p>
        </div>
        ИТОГО: {{ totalPrice }}
    </div>
</template>

<script>
export default {
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

    }
}
</script>

<style ></style>