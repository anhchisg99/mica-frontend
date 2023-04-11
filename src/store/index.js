import { createStore } from 'vuex'
import { getMainProduct, getperProduct, getProduct, makeOrder } from '@/api/index.js'
function updateLocalStorage(cart) {
    localStorage.setItem('cart',
        JSON.stringify(cart))
}
function uploadSecureUrl(link_img) {
    localStorage.setItem('link_img', JSON.stringify(link_img));
}
export default createStore({
    state: {
        message: 'con ga be be',
        products: null,
        product: null,
        cart: [],
        order: null,
        isPopup: false,
        mainProduct: '',
        secure_url: '',
        quotes: '',
        isPayment: false,
    },
    getters: {
       
        productQuantity: state => product => {
            const item = state.cart.find(i => i._id === product._id)
            if (item) return item.quantity
            else return null
        },
        totalQuantity: state => {
            let sum = 0
            for (let i = 0; i < state.cart.length; i++) {
                sum = sum + state.cart[i].quantity
            }
            return sum
        },
        cartItems: state => {
            console.log(' có cart')
            return state.cart
        },
        checkIteminCart: state => (product) => {
            console.log(`this is product ${product._id}`)
            for (let i = 0; i < state.cart.length; i++) {
                if (product._id === i._id) {
                    count = count + 1
                }

            }
            if (count === 0) {
                return 0
            } else {
                return 1
            }
        },
        isItem: state => {
            if (state.cart.length === 0) {
                return 0
            } else {
                return 1
            }
        },
        Total: state => {
            let sum = 0;
            let shipping_fee = 19000;
            for (let i = 0; i < state.cart.length; i++) {
                sum = sum + (state.cart[i].quantity * state.cart[i].price)
            }
            return sum + shipping_fee;
        },
        subTotal:state=>{
            let sum = 0;
            for (let i = 0; i < state.cart.length; i++) {
                sum = sum + (state.cart[i].quantity * state.cart[i].price)
            }
            return sum;
        },
        totalPerProduct: state => product => {
            const item = state.cart.find(i => i._id === product._id)
            if (item) return item.quantity*item.price;
            else return null
        },
    },
    mutations: {
        getProduct(state, data) {
            state.products = data.data
        },
        getperProduct(state, data) {
            state.product = data.data

        },
        uploadImg(state, data) {

            state.secure_url = data
        },
        // secure_url
        updateSecure_Url(state,data){
            uploadSecureUrl(data)
        },
        removeSecureUrl(state) {
            state.secure_url = ''
            uploadSecureUrl(state.secure_url)
        },
        updateSecureUrlFromLocalStorage(state) {
            const link_img = localStorage.getItem('link_img')
            if (link_img) {
                state.secure_url = JSON.parse(link_img)
            }
        },
        releasedUploadImg(state, data) {
            state.secure_url = ''
        },

        isPayment(state, data) {

            state.isPayment = true
        },
        releasedPayment(state, data) {
            state.isPayment = false
        },

        // CART
        async addToCart(state, product) {
            let item = state.cart.find(i => i._id === product._id)

            if (item) {

                item.quantity++
            } else {
                state.cart.push({ ...product, quantity: 1 })
            }

            updateLocalStorage(state.cart)
        },
        closePopup(state) {
            state.isPopup = false
        },
        openPopup(state) {
            state.isPopup = true
        },
        getQuotes(state, data) {
            console.log(`this is ${data} commit`)
            state.quotes = data
        },
        async removeFromCart(state, product) {

            let item = state.cart.find(i => i._id === product._id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                }
                else {
                    state.cart = state.cart.filter(i => i._id !== product._id)
                }
            }
            updateLocalStorage(state.cart)
        },
        async deleteItemFromCart(state, product) {
            let item = state.cart.find(i => i._id === product._id)
            if (item) {
                state.cart = state.cart.filter(i => i._id !== product._id)
            }
            updateLocalStorage(state.cart)


        },
        removeAllFromCart(state) {
            state.cart = []
            updateLocalStorage(state.cart)
        },

        updateCartFromLocalStorage(state) {
            const cart = localStorage.getItem('cart')
            if (cart) {
                state.cart = JSON.parse(cart)
            }
        },
        makeOrder(state, order) {
            state.order = order.data
        },
        getMainProduct(state, data) {
            state.mainProduct = data.data
        }

    },
    actions: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        async getProduct({ commit }) {
            const data = await getProduct();
            commit('getProduct', data)
        },
        async getperProduct({ commit }, id) {
            console.log('active get per Product')
            const data = await getperProduct(id);
            // console.log(data)
            commit('getperProduct', data)
        },
        async makeOrder({ commit }, order) {
            const data = await makeOrder(order)
            commit('makeOrder', data)
        },
        async getMainProduct({ }) {
            const data = await getMainProduct()
            this.commit('getMainProduct', data)
        }
    },
})