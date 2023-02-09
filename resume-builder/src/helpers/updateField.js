
const updateField = (e, array, i, setState) =>{
    const index = array.experiences.findIndex((exp, index) => index === i)
    experiences = [...array.experiences]
    experiences[index] = experiences
    this.setState()
}



export default updateField