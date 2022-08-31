const getMostInformKeeper = (keepersArray) => {
  return keepersArray
    .sort((first, second) => Number(second.form) - Number(first.form))
    .slice(0, 5)
}

export default getMostInformKeeper
