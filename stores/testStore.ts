import { defineStore } from 'pinia';
import api from '~/api';

export const useTestStore = defineStore('test', {
  state: () => ({
    goods: []
  }),
  actions: {
    async getGoods() {
      const resp = await api.api.getGoods()
      if(resp.data && resp) this.goods = resp.data
    }
  },
});