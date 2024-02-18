function calculateAge(birthDate) {
    let date = new Date(birthDate)
    const age = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return age
  }

module.exports = {
    calculateAge,
};