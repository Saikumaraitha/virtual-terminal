import axios, { AxiosError, AxiosResponse } from "axios";


class PaymentService {
  public async getPaymentMethods(data:any): Promise<AxiosResponse> {
    return axios.post("https://switch.np-orlando.payresults.ai/transactions", data);
  }
}

export default PaymentService;
