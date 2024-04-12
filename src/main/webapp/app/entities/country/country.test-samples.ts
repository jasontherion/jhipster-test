import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 23592,
};

export const sampleWithPartialData: ICountry = {
  id: 5787,
};

export const sampleWithFullData: ICountry = {
  id: 10507,
  countryName: 'ornery likewise',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
