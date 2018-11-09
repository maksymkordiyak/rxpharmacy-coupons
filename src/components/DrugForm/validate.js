export const validate = values => {
  const errors = {};
  if (!values.zipCode) {
    errors.zipCode = "Required";
  }
  if (!values.drugsList || !values.drugsList.length) {
    errors.drugsList = {_error: "At least one drug must be entered"};
  } else {
    const drugsArrayErrors = [];
    values.drugsList.forEach((drug, drugIndex) => {
      const drugsErrors = {};
      if (!drug) {
        drugsErrors[`drug_${drugIndex + 1}`] = "Required";
        drugsArrayErrors[drugIndex] = drugsErrors;
      }
      if (drugsArrayErrors.length) {
        errors.drugsList = drugsArrayErrors;
      }
    });
  }

  return errors;
};

export default validate;
