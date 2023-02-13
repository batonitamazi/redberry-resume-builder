import axios from "axios";
import imageToBlob from "./imageToBlob";
export const formSubmit = (values, navigate) => {
  localStorage.setItem("educationInformation", JSON.stringify(values));
  const name = JSON.parse(localStorage.getItem("generalInformation")).name;
  const surname = JSON.parse(
    localStorage.getItem("generalInformation")
  ).surname;
  const email = JSON.parse(localStorage.getItem("generalInformation")).email;
  const phone_number = JSON.parse(
    localStorage.getItem("generalInformation")
  ).phone;
  const img = JSON.parse(localStorage.getItem("generalInformation")).image;
  const aboutMe = JSON.parse(
    localStorage.getItem("generalInformation")
  ).aboutMe;
  const experiences = JSON.parse(
    localStorage.getItem("experienceInformation")
  ).experiences;
  const educations = JSON.parse(
    localStorage.getItem("educationInformation")
  ).educations;

  const image = imageToBlob(img);

  const url = "https://resume.redberryinternship.ge/api/cvs";
  const obieqti = {
    name,
    surname,
    email,
    phone_number,
    image,
    aboutMe,
    experiences,
    educations,
  };
  axios
    .post(url, obieqti, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((resp) => {
      if (resp.status === 201) {
        navigate("/resume");
      }
    })
    .catch((err) => console.log(err));
};
