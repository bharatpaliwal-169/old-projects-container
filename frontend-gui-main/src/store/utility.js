export const updateObject = (oldObject, updatedProperties) => {
  return {
      ...oldObject,
      ...updatedProperties
  }
}

//aim of this function is to just update the old state infos with new state infos of Auth.