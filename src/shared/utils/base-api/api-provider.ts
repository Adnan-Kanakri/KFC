import { AUTH_TOKEN, Default_Language } from "./../../constant/index";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { notifier } from "../../functions/notifier";
import RequestConfig from "./request-config";
import MainUtils from "../main";

export interface IBaseApiResponse<T> {
  value: T;
}

export default class ApiProvider {
  api: AxiosInstance;

  getCookieValue(key: string): string | null {
    var equalities = document.cookie.split("; ");
    for (var i = 0; i < equalities.length; i++) {
      if (!equalities[i]) {
        continue;
      }

      var splitted = equalities[i].split("=");
      if (splitted.length !== 2) {
        continue;
      }

      if (decodeURIComponent(splitted[0]) === key) {
        return decodeURIComponent(splitted[1] || "");
      }
    }

    return null;
  }

  constructor(config: RequestConfig) {
    this.api = axios.create(config);
    this.api.interceptors.request.use((req: any) => {
      return {
        ...req,
        headers: {
          ...req.headers,
          Authorization: `Bearer ${this.getCookieValue(AUTH_TOKEN)}`,
          "Lang-Code": this.getCookieValue(Default_Language),
        },
      };
    });
    this.api.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.data === "") {
          return { ...res, data: null };
        }
        return res;
      },
      (error: any) => {
        if (!MainUtils.isEmptyValue(error?.response?.data?.errors)) {
          error?.response?.data?.errors?.map((error: any) => {
            return notifier(error?.errors.join("\n"), "error");
          });
        } else if (!MainUtils.isEmptyValue(error?.message))
          notifier(error?.message, "error");
      },
    );
  }

  async request<T>(config: RequestConfig): Promise<any> {
    const response = await this.api.request<IBaseApiResponse<T>>(config);
    return response?.data;
  }
}
