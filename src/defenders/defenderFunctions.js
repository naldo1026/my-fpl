const getMostInformDefender = (defendersArray) => {
  return defendersArray
    .sort((first, second) => Number(second.form) - Number(first.form))
    .slice(0, 5)
}

export default getMostInformDefender
