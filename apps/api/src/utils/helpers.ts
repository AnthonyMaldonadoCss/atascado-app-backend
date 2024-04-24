import { Types } from 'mongoose';

const generateUniqueID = () => {
  return new Types.ObjectId();
};

export default generateUniqueID;
