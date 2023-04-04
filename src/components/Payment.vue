<template>
  <div class="">
    <section class="empty-cart">
      <div class="empty-cart-container">
        <div class="empty-cart-heading">
          <h2>THANH TOÁN</h2>
        </div>
      </div>
    </section>
    <!-- <Modal v-model:visible="isVisible"> -->
    <!-- <div>your content...</div> -->
    <!-- </Modal> -->
    <div class="payment">
      <div class="payment-container">
        <div class="payment-left">
          <div class="payment-wrapper">
            <div class="payment-contact">
              <h3 class="payment-heading">Thông Tin Nhân Hàng</h3>
              <!-- <div class="payment-email payment-field">
                <label class="field__label field__label--visible" for="checkout_email">Email</label>
                <input v-model="email" placeholder="Email" autocapitalize="off" spellcheck="false"
                  autocomplete="shipping email" data-shopify-pay-handle="true" data-autofocus="true"
                  data-backup="customer_email" aria-describedby="checkout-context-step-one" aria-required="true"
                  class="field__input" size="30" type="email" name="checkout[email]" id="checkout_email" />
                <p v-if="errors.length">entering email ...</p>
              </div> -->

              <!-- customer_name -->
              <div class="payment-email payment-field">
                <label class="field__label field__label--visible" for="checkout_email">Name</label>
                <input v-model="name" type="text" 
                placeholder="Họ và Tên" class="field__input" size="30"  >
               <!-- show error -->
                <p v-if="errors.length">Vui Lòng Nhập Đầy Đủ Thông Tin ...</p>
              </div>
              <div class="payment-email payment-field">
                <label class="field__label field__label--visible" for="checkout_email">Phone</label>
                <input v-model="phone" type="text" 
                placeholder="Số Điện Thoại" @input="acceptNumber" class="field__input" size="30"  >
               <!-- show error -->
                <p v-if="errors.length">Vui Lòng Nhập Đầy Đủ Thông Tin ...</p>
              </div>
            </div>
            <div class="payment-address">
              <h3 class="payment-heading">Địa Chỉ Giao Hàng</h3>
              <div class="payment-email payment-field">
                <label class="field__label field__label--visible" for="checkout_email">Full Address</label>
                <input v-model="full_address" placeholder="Địa Chỉ Cụ Thể (tên đường/hẻm)" autocapitalize="off" spellcheck="false"
                  autocomplete="shipping email" data-shopify-pay-handle="true" data-autofocus="true"
                  data-backup="customer_email" aria-describedby="checkout-context-step-one" aria-required="true"
                  class="field__input" size="30" type="email" name="checkout[email]" id="checkout_email" />
              </div>
              <div class="payment-fullname">
                <div class="payment-firstname payment-field">
                  <label class="field__label field__label--visible" for="checkout_email">City</label>
                  <input v-model="city" placeholder="Thành phố / Tỉnh" autocapitalize="off" spellcheck="false"
                    autocomplete="shipping email" data-shopify-pay-handle="true" data-autofocus="true"
                    data-backup="customer_email" aria-describedby="checkout-context-step-one" aria-required="true"
                    class="field__input" size="30" type="email" name="checkout[email]" id="checkout_email" />
                </div>
                <div class="payment-lastname payment-field">
                  <label class="field__label field__label--visible" for="checkout_email">Street</label>
                  <input v-model="street" placeholder="Quận / Huyện" autocapitalize="off" spellcheck="false"
                    autocomplete="shipping email" data-shopify-pay-handle="true" data-autofocus="true"
                    data-backup="customer_email" aria-describedby="checkout-context-step-one" aria-required="true"
                    class="field__input" size="30" type="email" name="checkout[email]" id="checkout_email" />
                  <!-- <p v-if="errors.length">entering phone ...</p> -->
                </div>
              </div>
              <div class="payment-button">
                <a href="">
                  <span>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                  </span>
                  <router-link to="/cart"> <span> Quay về giỏ hàng</span></router-link>
                </a>
                <button @click="makeOrderAndremoveAllFromCart()">
                  TIẾN HÀNH ĐẶT HÀNG  
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="payment-right">
          <div class="payment-wrapper">
            <!-- <table class="product-table" 

            >
              <tr>
                <td>
                  <div class="product-image">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0078/9502/3675/products/Gaggia_Classic_Pro_-_Main_small.png?v=1628541831"
                      alt=""
                    />
                  </div>
                </td>
                <th class="product-desc">
                  <span
                    >Gaggia Classic Pro Semi-Automatic Espresso Machine
                  </span>
                </th>
                <td class="product-quantity"></td>
                <td class="product-price">1,317.00</td>
              </tr>
            </table> -->
            <product-table v-for="(item, idx) in cartItems" :key="idx" :item="item" />
            <table>
              <tr>
                <th>Tạm tính</th>
                <td>{{ subTotal }}</td>
              </tr>
              <tr>
                <th>Phí vận chuyển</th>
                <td>Calculated at next step</td>
              </tr>
              <tr>
                <th>Tổng cộng</th>
                <td class="payment-total-price">${{ subTotal }}</td>
              </tr>
            </table>
          </div>
          <div class="payment-shipping">
            <span><ion-icon name="checkmark-circle-outline"></ion-icon> </span>
            <p> Shipping Code</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTable from "./ProductTable.vue";

import { mapGetters, mapAction, mapState } from "vuex";
export default {
  name: "Payment",
  components: {
    ProductTable,
  },
  data() {
    return {
      email: "",
      phone: "",
      name:"",
      errorMessage: "",
      street: "",
      city: "",
      full_address:'',
      errors: [],
      value: ''
      // quotes:""
    };
  },
  computed: {
    ...mapGetters(["cartItems", "subTotal",]),
    ...mapState(["quotes", "isPayment"]),
    
  },
  methods: {
    isRequired(value) {
      if (!value) {
        return "this field is required";
      }

      return true;
    },
    acceptNumber() {
        var x = this.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        this.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPhone: function (phone) {
      var re = /^[789]\d{9}$/;
      return re.test(phone);
    },
    checkForm() {
      if (!this.phone) {
        this.errors.push("Phone required.");
      }
      if (!this.name) {
        this.errors.push("Full Address required.");
      }
      if (!this.full_address) {
        this.errors.push("Full Address required.");
      }
      if (!this.street) {
        this.errors.push("Street required.");
      }
      //   if(!this.validPhone(this.phone)){
      //     this.errors.push("Valid phone required");
      //   }
      // if (!this.validPhone(this.phone)) {
      //   this.errors.push("Valid Phone required.");
      // }
      if (!this.errors.length) {
        return true;
      }
      // this.errors = []
      e.preventDefault();
    },
    async makeOrderAndremoveAllFromCart() {
      this.errors = [];
      let isOk = this.checkForm();
      console.log("capture 1");
      if (isOk) {
        await this.makeOrder();
        await this.removeAllFromCart();
        this.$store.commit('closePopup')
        this.$store.commit('isPayment')
        this.$router.push("/success");

        // this.$router.push("/success");
      }
    },
    // async makeOrderAndremoveAllFromCart() {
    //   await validatePhoneNumber();
    //   if (!this.errorMessage) {
    //     await this.makeOrder();
    //     await this.removeAllFromCart();
    //     this.$router.push("/");
    //   }
    //   // this.$router.push("/success");
    // },
    async makeOrder() {
      const isSuccess = await this.$store.dispatch("makeOrder", {
        phone: this.phone,
        city: this.city,
        name:this.name,
        street: this.street,
        full_address:this.full_address,
        cart: this.cartItems,
        quotes: this.quotes
      });
      return isSuccess;
      // this.$router.push("Success");
    },
    async removeAllFromCart() {
      return await this.$store.commit("removeAllFromCart");
    },
  },
  validatePhoneNumber() {
    console.log("validation active");
    const phoneNumber = this.phoneNumber;
    const Regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

    if (this.phoneNumber === "") {
      this.errorMessage = "Phone Number field cannot be empty";
    } else if (!Regex.test(phoneNumber)) {
      this.errorMessage = "Invalid phone number";
    } else {
      this.errorMessage = "";
    }
  },
};
</script>

<style></style>