import axios from 'axios';

export const useProductService = () => {
  const baseUrl = 'http://catalog.wlrapps.com/Api_app';
  const getAllProduct = async () => await axios.get(`${baseUrl}/product/all`);
  const getDetailProduct = async (id: any) =>
    await axios.get(`${baseUrl}/product/${id}`);
  const filterProductBrand = async (brand: {brand: string[]}) =>
    await axios.post(`${baseUrl}/product/all`, brand);
  const filterProductCategory = async (category: {category: string[]}) =>
    await axios.post(`${baseUrl}/product/all`, category);
  const getBanner = async () => axios.get(`${baseUrl}/banner`);

  return {
    getAllProduct,
    getDetailProduct,
    filterProductBrand,
    filterProductCategory,
    getBanner,
  } as const;
};

export const useBrandService = () => {
  const baseUrl = 'http://catalog.wlrapps.com/Api_app';
  const getAllBrand = async () => await axios.get(`${baseUrl}/master/brand`);
  const brandProduct = async (brand: {brand: string[]}) =>
    await axios.post(`${baseUrl}/product/all`);
  return {
    getAllBrand,
    brandProduct,
  } as const;
};

export const useAuthService = () => {
  const baseUrl = 'http://catalog.wlrapps.com/Api_app';

  const loginUser = async (username: string, password: string) => {
    const body = new URLSearchParams();
    body.append('username', username);
    body.append('password', password);
    return await axios.post(
      `${baseUrl}/login`,
      body,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )};
  const logoutUser = async () => await axios.post(`${baseUrl}/logout`);
  const getUserInfo = async (username: string) =>
    axios.get(`${baseUrl}/get_user/${username}`);

  return {
    loginUser,
    logoutUser,
    getUserInfo,
  } as const;
};