<template>
  <div class="">
    <Popup ref="Popup" v-on:changeQuotes="changeQuotes" />
    <div v-if="isItem">
      <section class="empty-cart">
        <div class="empty-cart-container">
          <div class="empty-cart-heading">
            <h2>GIỎ HÀNG</h2>
          </div>
        </div>
        <!-- popup loader -->
        <div v-if="loadingState">
          <Spinner />
        </div>
      </section>
      <section class="cart">
        <div class="cart-container">
          <div class="cart-left">
            <div class="cart-heading">Cart Summary</div>
            <div class="cart-table">
              <table style="width: 100%">
                <tr class="cart-tr">
                  <th style="width: 50%" class="cart-th">Sản Phẩm</th>
                  <th class="cart-th">Giá</th>
                  <th class="cart-th">Số Lượng</th>
                  <th class="cart-th">Tổng Tiền</th>
                </tr>
                <tr v-for="(item, idx) in cartItems" :key="idx" :item="item">
                  <!-- <span><ion-icon name="close-outline"></ion-icon></span> -->
                  <td class="cart-td cart-icon-delete">
                    <!-- <span><ion-icon name="close-outl ine"></ion-icon></span> -->
                    <a @click="deleteItemFromCart(item)"><ion-icon name="close-outline"></ion-icon></a>
                    <router-link :to="'/product/' + item._id"><img :src="item.image" alt="" /></router-link>
                    
                    <span>{{ item.name }}</span>
                  </td>
                  <td class="cart-td">{{ item.price.toLocaleString() }}<span>&#8363;</span></td>
                  <td class="cart-td">{{ item.quantity }}</td>
                  <td class="cart-td">{{ totalPerProduct(item).toLocaleString() }}<span>&#8363;</span></td>
                </tr>
                <tr class="">
                  <td colspan="1" class="cart-td cart-coupon cart-secure_url">
                    <!-- Alfreds Futterkiste -->
                    <!-- <a @click="deleteItemFromCart(item)"><ion-icon name="close-outline"></ion-icon></a> -->
                    <img v-if="secure_url" :src="secure_url" alt="" />
                    <!-- {{ popup_text }} -->
                  </td>

                  <td colspan="3" update-button class="update-button cart-secure_url cart-secure_url_btn">
                    <a class="btn" @click="openUploadWidget()">Tải hình ảnh</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="cart-right">
            <div class="cart-heading">Cart Totals</div>
            <div class="cart-table">
              <table style="width: 100%">
                <tr>
                  <th>Tạm Tính</th>
                  <th>{{ subTotal.toLocaleString() }}<span>&#8363;</span></th>
                </tr>
                <tr class="cart-total-tr">
                  <td>Tổng Tiền</td>
                  <td>{{ subTotal.toLocaleString() }}<span>&#8363;</span></td>
                </tr>
                <tr>
                  <td colspan="1">
                    <a @click="gotoPayment()" :class="{ Disabled: chechkSecureUrl }"
                      class="btn cart-total-btn">Tiến Hành Thanh Toán</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
    <EmptyCartVue v-else />

  </div>
</template>

<script>
import Popup from './Popup.vue'
import EmptyCartVue from './EmptyCart.vue'
import Spinner from './Spinner.vue'
import { mapGetters, mapAction, mapMutations, mapState } from "vuex";

// import $ from "jquery";
export default {
  name: "IndexCart",
  data() {
    return {
      popup_text: '',
      loading: false,
      isDisabled: false

    }
  },
  components: {
    EmptyCartVue,
    Spinner,

    Popup,
  },
  computed: {
    ...mapState(['secure_url']),
    ...mapGetters(["cartItems", "subTotal", "isItem",,"totalPerProduct"]),
    // testPopup(){
    //   return this.$refs.Popup.text_popup

    // }
    chechkSecureUrl() {

      return this.secure_url ? false : true
    },
    loadingState() {
      return this.loading
    }
  },
  methods: {




    openUploadWidget() {
      this.loading = true
      // this.isDisabled = true
      const widget = window.cloudinary.createUploadWidget({
        cloud_name: 'dzo1tqhjz', upload_preset: 'l3gmhpji'
      }, (err, result) => {
        this.loading = false

        //   $(document).ready(function () {
        //   $(".cart-total-btn").show()
        // });
        if (!err && result && result.event === "success") {
          // this.isDisabled = false
          console.log(result.info.secure_url)
          this.$store.commit('uploadImg', result.info.secure_url)
          this.$store.commit('updateSecure_Url',result.info.secure_url)

          console.log("done upload ... ", result.info)
        }
      }

      )

      widget.open()
    },
    deleteItemFromCart(item) {

      this.$store.commit('deleteItemFromCart', item)
    },
    gotoPayment() {
      this.$store.commit('getQuotes', this.popup_text)
      this.$router.push({ path: "/payment" });
    },
    turnonPopup() {
      console.log(this.$refs.Popup.text_popup)
      return this.$refs.Popup.isShow = true
    },
    changeQuotes(data) {
      return this.popup_text = data
    }
  },
};
</script>

<style></style>