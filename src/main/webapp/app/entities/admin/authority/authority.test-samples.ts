import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'db5a5181-25c9-44bb-945b-21e265dd9e2c',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f4e2aeae-6577-4a51-aa79-446da0398d3d',
};

export const sampleWithFullData: IAuthority = {
  name: 'c6ebc801-8e00-4677-904b-0ecf94fa7496',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
