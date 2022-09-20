
  const addContact = (object) => ({
    type: "ADD_CONTACT",
    payload: object
 
  });
  const removeContact = (object) => ({
    type: "REMOVE_CONTACT",
    payload: object
 
  });
  const filter = (object) => ({
    type: "FILTER",
    payload: object
 
  });
  export  {addContact,removeContact,filter};
