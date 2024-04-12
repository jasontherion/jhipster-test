import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 4392,
  departmentName: 'salty',
};

export const sampleWithPartialData: IDepartment = {
  id: 25176,
  departmentName: 'fat sternly wet-bar',
};

export const sampleWithFullData: IDepartment = {
  id: 21737,
  departmentName: 'beneath',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'shakily staff',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
