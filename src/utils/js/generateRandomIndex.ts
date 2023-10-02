// import { assoc } from './assoc';

export const generateRandomIndex = () =>
  Math.random().toString(36).substring(2, 15);

// export const assignId = <O extends object>(obj: O) =>
//   assoc('id', generateRandomString(), obj);

// export const generateId = <O extends object>(obj: O) => assignId(obj);

// const generateRandomIndex = <O extends object>(obj: O) =>
//   generateId(assoc('index', generateRandomString(), obj));

export default generateRandomIndex;
