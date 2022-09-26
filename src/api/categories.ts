import axios from "axios";

export interface CategoryItem {
  name: string;
  img: string;
}

export interface Category {
  name: string;
  items: CategoryItem[];
}

const BASE_URL = "https://us-central1-prueba-front-280718.cloudfunctions.net";

export const fetchCategoriesBySection = (category?: string) => {
  return axios.get<Category[]>(`${BASE_URL}/${category?.toLowerCase()}`);
};
