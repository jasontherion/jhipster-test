import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 282,
};

export const sampleWithPartialData: IJobHistory = {
  id: 4164,
  endDate: dayjs('2024-04-05T09:39'),
  language: 'FRENCH',
};

export const sampleWithFullData: IJobHistory = {
  id: 15077,
  startDate: dayjs('2024-04-04T17:55'),
  endDate: dayjs('2024-04-05T02:16'),
  language: 'FRENCH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
