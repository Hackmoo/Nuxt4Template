import axios from "./axios";

export default {
    async getGoods() {
        const resp = await axios.get('/products')
        return {
            data: resp.data,
            status: resp.status
        }
    }
}