export const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

export const testIsValid = (value?: string, pattern?: RegExp) => {
  if (!value || value === "") {
    return false;
  }
  if (pattern && value) {
    const regExp = new RegExp(pattern);
    return regExp.test(value);
  }
  return true;
};
