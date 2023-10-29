<template>
    <div>
        <h1>Задание4</h1>
        <p>Создайте компонент MortgageCalculator с соответствующим шаблоном и скриптом.
            В шаблоне компонента разместите поля ввода для суммы кредита, процентной ставки и срока кредита, а также
            элементы для отображения ежемесячного платежа и общей суммы выплаты.
            Используйте директиву v-model для связывания введенных пользователем значений с соответствующими свойствами в
            компоненте.
            Создайте вычисляемое свойство monthlyPayment, которое будет вычислять ежемесячный платеж на основе введенных
            значений суммы кредита, процентной ставки и срока кредита.
            Создайте вычисляемое свойство totalPayment, которое будет вычислять общую сумму выплаты по кредиту, учитывая
            ежемесячный платеж и срок кредита.
            Отобразите значения monthlyPayment и totalPayment в соответствующих элементах шаблона.</p>
        <input type="number" step="0.1" name="interestRate" id="" v-model="interestRate" placeholder="Процентная ставка">
        <input type="text" name="loanTerm" id="" v-model="loanTerm" placeholder="Срок кредита">
        <input type="text" name="loanAmount" id="" v-model="loanAmount" placeholder="Велечина займа">

        <p>Ежемесячный платёж: {{ monthlyPayment }}</p>

        <p>ИТОГО: {{ totalPayment }}</p>
    </div>
</template>
    
<script>
export default {
    name: 'MortgageCalculator',

    data() {
        return {
            interestRate: 6.5,
            loanTerm: 120,
            loanAmount: 1000000
        }
    },

    computed: {
        monthlyPayment: function () {
            const rate = this.interestRate / 100 / 12
            const term = this.loanTerm
            const principal = this.loanAmount
            const numerator = rate * Math.pow(1 + rate, term)
            const denominator = Math.pow(1 + rate, term) - 1
            const payment = principal * (numerator / denominator)
            return payment.toFixed(2)
        },
        totalPayment: function () {
            const term = this.loanTerm
            const payment = parseFloat(this.monthlyPayment)
            return (term * payment).toFixed(2)
        }
    },

    mounted() {

    },

    methods: {

    }
}
</script>
    
<style ></style>