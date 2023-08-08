import api from "../axios/axiosWrapper";

class BalancesServices {
  async getBalance(userId) {
    try {
      const response = await api.get(`/balances?userId=${userId}`);
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }

  async createBalance(balance) {
    try {
      const response = await api.post(`/balances`, { ...balance });
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }

  async deleteBalance(id) {
    try {
      const response = await api.delete(`/balances/${id}`);
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }
}

export default new BalancesServices();
