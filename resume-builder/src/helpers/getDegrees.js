import axios from "axios"

const getDegrees = (setDegrees) => {
    const url = "https://resume.redberryinternship.ge/api/degrees"
    axios.get(
        url, 
    ).then(function(resp) {
        setDegrees(resp.data)
    }).catch(err => console.log(err))
}
export default getDegrees