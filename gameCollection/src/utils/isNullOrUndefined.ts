export const isNullOrUndefined = (value: any): value is null | undefined => {
  return !value || value === undefined || value === "null";
};
