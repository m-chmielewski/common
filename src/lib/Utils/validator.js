import validationCriteria from "./validationCriteria";

const validator = (formData, criteria) => {
 let formInvalid = false;

 Object.keys(criteria).forEach(key => {
  if (criteria[key] === validationCriteria.REQUIRED) {
   formInvalid = Object.keys(formData[key]).length === 0 || formInvalid; //Allows to check for empty strings, objects and arrays
  }
 });

 return formInvalid;
};

export default validator;
