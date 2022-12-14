import { useState, useCallback } from "react";

const useFormData = initialState => {
 const [formData, setFormData] = useState(initialState);

 const handleSimpleInputChange = (inputName, value) => {
  setFormData(current => {
   return {
    ...current,
    [inputName]: value,
   };
  });
 };

 const handleNestedInputChange = useCallback(
  (value, index, groupName, fieldName) => {
   if (groupName && !fieldName) {
    setFormData(current => {
     const mutableArray = [...current[groupName]];
     mutableArray[index] = value;
     return {
      ...current,
      [groupName]: mutableArray,
     };
    });
   }

   if (groupName && fieldName) {
    setFormData(current => {
     const mutableArray = [...current[groupName]];
     mutableArray[index] = {
      ...current[groupName][index],
      [fieldName]: value,
     };
     return {
      ...current,
      [groupName]: mutableArray,
     };
    });
   }
  },
  []
 );

 const handleArrayChange = (arrayName, value) => {
  setFormData(current => {
   let mutableArray = [...current[arrayName]];
   if (!mutableArray.includes(value)) {
    mutableArray.push(value);
   } else {
    mutableArray = mutableArray.filter(item => item !== value);
   }
   return {
    ...current,
    [arrayName]: mutableArray,
   };
  });
 };

 const handleAddRow = (groupName, data) => {
  setFormData(current => {
   return {
    ...current,
    [groupName]: [...current[groupName], data],
   };
  });
 };

 const handleRemoveRow = (index, groupName) => {
  setFormData(current => {
   const mutableArray = [...current[groupName]];
   mutableArray.splice(index, 1);
   return {
    ...current,
    [groupName]: mutableArray,
   };
  });
 };

 const revertToInitialState = () => {
  setFormData(initialState);
 };

 return {
  formData: formData,
  handleSimpleInputChange: handleSimpleInputChange,
  handleArrayChange: handleArrayChange,
  handleNestedInputChange: handleNestedInputChange,
  handleAddRow: handleAddRow,
  handleRemoveRow: handleRemoveRow,
  revertToInitialState: revertToInitialState,
 };
};

export default useFormData;
