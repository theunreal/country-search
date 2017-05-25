export interface Country {
  name: string;
  region: string;
  languages: string[];
  borders: string[];
  population: number;
}

export const defaultCountry = {
  name: '',
  region: '',
  languages: [],
  borders: [],
  population: null
};
