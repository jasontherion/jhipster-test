import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 2261,
};

export const sampleWithPartialData: IEmployee = {
  id: 19115,
  lastName: 'White',
  email: 'Alfred84@hotmail.com',
  hireDate: dayjs('2024-04-04T15:30'),
  salary: 16641,
  commissionPct: 29663,
};

export const sampleWithFullData: IEmployee = {
  id: 20425,
  firstName: 'Kristopher',
  lastName: 'Ankunding',
  email: 'Gaston.Beer82@hotmail.com',
  phoneNumber: 'along',
  hireDate: dayjs('2024-04-05T07:14'),
  salary: 24569,
  commissionPct: 27482,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
