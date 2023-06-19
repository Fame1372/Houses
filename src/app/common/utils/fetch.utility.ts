import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { store } from '@common/store/index.store';

import configs from '@root/configs';
import Auth from '@common/types/Auth.type';
import Notification from './notification.utility';
import apis from '@common/constants/apis.constant'
import { verifySuccess } from '@modules/otp/store/actions.verify';

class Fetch {
  private baseUrl: string;
  private axiosInstance: AxiosInstance;
  private static clientInstance: Fetch | null = null;
  private needToken: Boolean = configs.requestsNeedToken;



  constructor() {
    if (typeof window === 'undefined') {
      throw new Error(
        "You can't use fetch class in server side environment! :)"
      );
    }
    const customWindow = window as unknown as any;
    this.baseUrl = customWindow._env_.API_BASE_URL;
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
    });

    this.axiosInstance.interceptors.response.use(
      (res) => {
        if (res.data) return res.data;
        return res;
      },

      async (error) => {
        const { response } = error;

        let orginalResponse;

        if (response.status >= 500) {
          Notification.error('سرور در حال حاضر قادر به پاسخگویی نمی باشد.');
        } else if (response.status === 400) {

          if (response.config.url === apis.get('REFRESH_TOKEN')?.path) {
            window.location.replace('/login')
            return
          }
          if (error && error.response && error.response.data && error.response.data.message)
            return Promise.reject(error.response.data.message)
        }

        else if (response.status === 401) {
          let RefreshTokeno: any = store.getState().tokenInfo
          // * If user get 401 we refresh his token and call again the original request
          const refreshToken = RefreshTokeno.data.refreshToken

          if (refreshToken) {
            const res = await this.post(apis.get('REFRESH_TOKEN')?.path, {
              RefreshToken: refreshToken
            });
            if (res && res.data) {
              // store.dispatch(verifySuccess({ result: VERIFYResponse.data }))
              store.dispatch(
                verifySuccess({
                  result: res.data
                })
              );
            }
            orginalResponse = await this.axiosInstance.request(error.config);
            return Promise.resolve(orginalResponse);
          }
        } else if (response.status === 403) {
          Notification.error(
            'شما دسترسی لازم برای انجام این عملیات را ندارید.'
          );
          return Promise.reject(error);
        } else return Promise.reject(error);
        return error;
      }
    );

    // * Set Authorization for all header requests
    this.axiosInstance.interceptors.request.use(
      (config: any) => {
        const newConfig = config;

        const { data }: { data: any } = store.getState().tokenInfo;

        if (this.needToken) {
          const token = data?.accessToken;
          const refreshToken = data?.refreshToken

          if (token && newConfig.headers) {
            newConfig.headers.Authorization = `Bearer ${token}`;
          }
        }
        return newConfig;
      }
    );
  }

  async get(url: string, configs?: AxiosRequestConfig) {
    try {
      const result = await this.axiosInstance.get(url, configs);
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async post(url: string, data: unknown, configs?: AxiosRequestConfig) {
    try {
      const result = await this.axiosInstance.post(url, data, configs);
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async put(url: string, data: unknown, configs?: AxiosRequestConfig) {
    try {
      const result = await this.axiosInstance.put(url, data, configs);
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async patch(url: string, data: unknown, configs?: AxiosRequestConfig) {
    try {
      const result = await this.axiosInstance.patch(url, data, configs);
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async delete(url: string, configs?: AxiosRequestConfig) {
    try {
      const result = await this.axiosInstance.delete(url, configs);
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static instance(): Fetch {
    if (this.clientInstance === null) {
      this.clientInstance = new Fetch();
    }
    return this.clientInstance;
  }
}

export default Fetch;
