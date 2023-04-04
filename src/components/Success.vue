<template>
    <main>
        <section class="success-payment">
            <div class="success-payment-container">
                <div class="success-payment-content">
                    <div class="success-payment-img">
                        <p><img src="../assets/success-1.png" alt="" /></p>
                    </div>
                    <h3>THANH TOÁN THÀNH CÔNG !</h3>
                    <div class="success-payment-button">
                        <a href="" @click="goToHome()">TRỞ VỀ TRANG CHỦ</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
      
<script>
export default {
    name: "Success",
    props: {
        msg: String,
    },
    // computed: {
    //     getQuantity() {
    //         return this.$store.getters["cart/totalQuantity"];
    //     },
    // },
    methods: {
        goToHome() {
            
            this.$router.push("/");
        },
    },
    // mounted() {
    //     return this.$store.commit("cart/removeAllFromCart");
    // },
};
</script>
<style scoped></style>