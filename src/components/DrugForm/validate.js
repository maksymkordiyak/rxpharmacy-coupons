import {has} from "underscore";
export const validate = values => {
  // console.log("VALUES", values);
  const errors = {};
  if (!values.zipCode) {
    errors.zipCode = "Required";
  }
  const drugsArrayErrors = [];
  for (let i = 0; i < 10; i++) {
    const drugsErrors = {};
    if (has(values, `drug_${i}`) && !values[`drug_${i}`]) {
      drugsErrors[`drug_${i}`] = "Required";
      drugsArrayErrors[i] = drugsErrors;
    }
    if (drugsArrayErrors.length) {
      errors.drugsList = drugsArrayErrors;
    }
  }
  // console.log("ERRORS", errors);

  return errors;
};

export default validate;
