import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 32559,
};

export const sampleWithPartialData: ITask = {
  id: 11129,
  title: 'and nor',
  description: 'pipe router debate',
};

export const sampleWithFullData: ITask = {
  id: 9327,
  title: 'meager pursue',
  description: 'polarise reorient',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
