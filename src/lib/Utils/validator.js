import validationCriteria from "./validationCriteria";

const validator = (formData, criteria) => {
 let formInvalid = false;

 Object.keys(criteria).forEach(key => {
  if (criteria[key] === validationCriteria.REQUIRED) {
   formInvalid = !formData[key] || formInvalid;
  }
 });

 return formInvalid;
};

export default validator;
