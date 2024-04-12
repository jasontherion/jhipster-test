import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 12885,
};

export const sampleWithPartialData: IRegion = {
  id: 10507,
  regionName: 'eek',
};

export const sampleWithFullData: IRegion = {
  id: 23085,
  regionName: 'ha perfectly',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
