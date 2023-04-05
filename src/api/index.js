
import axios from 'axios'

const url = 'https://mica-backend.herokuapp.com'


// export async function makeOrder(order) {
//     try {

//         console.log('ordering success!')
//         return await axios.post(`${url}/orders/make-order`, order)
//     } catch (error) {
//         console.log('fail')
//     }
// }

export async function getProduct() {
    try {
        return await axios.get(`${url}/product/`)
    } catch (error) {
        console.log('fail')

    }
}
export async function getperProduct(id) {
    try {
        return await axios.get(`${url}/product/${id}`)

    } catch (error) {
        console.log('fail')

    }

}
export async function makeOrder(order) {
    try {

        console.log('ordering success!')
        return await axios.post(`${url}/order/`, order)
    } catch (error) {
        console.log('fail')
    }
}

export async function getMainProduct() {
    try {

        return await axios.get(`${url}/product/main-product`)
    } catch (error) {

        console.log('fail')

    }
}