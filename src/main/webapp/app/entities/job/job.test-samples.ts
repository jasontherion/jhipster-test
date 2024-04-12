import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 13118,
};

export const sampleWithPartialData: IJob = {
  id: 25505,
  minSalary: 24729,
  maxSalary: 31746,
};

export const sampleWithFullData: IJob = {
  id: 29158,
  jobTitle: 'Corporate Communications Specialist',
  minSalary: 10703,
  maxSalary: 28960,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
