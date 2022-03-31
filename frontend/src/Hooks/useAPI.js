import axios from 'axios'
const useAPI = () => {
    const url = './products.json'
    /* Product API */
    const productsGet = async (setProducts) => {
        await axios.get(url).then(res => {
            if (res.data) {
                setProducts(res.data)
            }
        })
    }

    return { productsGet }
}
export default useAPI;