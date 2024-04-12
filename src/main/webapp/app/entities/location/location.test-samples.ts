import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 3856,
};

export const sampleWithPartialData: ILocation = {
  id: 28492,
  postalCode: 'qua crick pish',
  city: 'Imanistead',
};

export const sampleWithFullData: ILocation = {
  id: 10330,
  streetAddress: 'when',
  postalCode: 'amid discount opulent',
  city: 'Jackelinefield',
  stateProvince: 'manufacturer',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
