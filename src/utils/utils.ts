/* eslint-disable prettier/prettier */
import { User } from '../Redux/types';

export const isEnglishName = (name: string): boolean => {
  try {
    name.split('').forEach(char => {
      if (char.charCodeAt(0) > 127) throw new Error('Non-English character');
    });
    return true;
  } catch {
    return false;
  }
};

export const customSortKey = (a: User, b: User): number => {
  const aIsEnglish = isEnglishName(a.name);
  const bIsEnglish = isEnglishName(b.name);
  if (aIsEnglish && bIsEnglish) {
    return a.name.localeCompare(b.name);
  }
  if (!aIsEnglish && !bIsEnglish) {
    return a.name.localeCompare(b.name);
  }
  return aIsEnglish ? -1 : 1;
};
