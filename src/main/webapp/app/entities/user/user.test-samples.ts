import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 6737,
  login: "C6IVvl@tEP\\^OOVbx\\'PnY6aJ\\CXA\\8bqlh\\mSQhZ",
};

export const sampleWithPartialData: IUser = {
  id: 23647,
  login: 'Gq',
};

export const sampleWithFullData: IUser = {
  id: 24627,
  login: '2`W@pXD\\$FVS\\tKMQcx\\)Hm',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
