import * as Yup from "yup";

export const validationSchemas = {
  generalInformation: Yup.object().shape({
    name: Yup.string()
      .required("სახელი სავალდებულო ველია")
      .min(2, "მინიმუმ 2 სიმბოლო"),
    surname: Yup.string()
      .required("გვარი სავალდებულო ველია")
      .min(2, "მინიმუმ 2 სიმბოლო"),
    image: Yup.mixed().nullable().required("სურათის ატვირთვა სავალდებულოა"),
    aboutMe: Yup.string().notRequired(),
    email: Yup.string()
      .email()
      .required("ელექტრონული ფოსტა სავალდებულო ველია")
      .matches(/^[a-zA-Z0-9.]+@redberry.ge$/),
    phone: Yup.string()
      .required("ტელეფონი სავალდებულოა ველია.")
      .matches(/^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/),
  }),
  // experiencesInformation: Yup.array.of(
  //   Yup.object.shape({
  //     position: Yup.string()
  //       .required("თანამდებობა სავალდებულო ველია")
  //       .min(2, "მინიმუმ 2 სიმბოლო"),
  //     employer: Yup.string()
  //       .required("დამსაქმებელი სავალდებულო ველია")
  //       .min(2, "მინიმუმ 2 სიმბოლო"),
  //     startDate: Yup.date().required("დაწყების თარიღი სავალდებულო ველია"),
  //     endDate: Yup.date().required("დამთავრების თარიღი სავალდებულო ველია"),
  //     description: Yup.string().required("აღწერა სავალდებულო ველია"),
  //   })
  // ),
  educationInformation: Yup.object().shape({
    school: Yup.string()
      .required("სასწავლებელი სავალდებულო ველია")
      .min(2, "მინიმუმ 2 სიმბოლო"),
    degree: Yup.string().required("ხარისხი სავალდებულო ველია"),
    endDate: Yup.date().required("დამთავრების თარიღი სავალდებულო ველია"),
    description: Yup.string().required("აღწერა სავალდებულო ველია"),
  }),
};
export const schema = Yup.object().shape({
  experiences: Yup.array().of(
    Yup.object().shape({
      position: Yup.string()
        .required("თანამდებობა სავალდებულო ველია")
        .min(2, "მინიმუმ 2 სიმბოლო"),
      employer: Yup.string()
        .required("დამსაქმებელი სავალდებულო ველია")
        .min(2, "მინიმუმ 2 სიმბოლო"),
      startDate: Yup.date().required("დაწყების თარიღი სავალდებულო ველია"),
      endDate: Yup.date().required("დამთავრების თარიღი სავალდებულო ველია"),
      description: Yup.string().required("აღწერა სავალდებულო ველია"),
    })
  ),
  // .required("Must have friends") // these constraints are shown if and only if inner constraints are satisfied
  // .min(3, "Minimum of 3 friends"),
});
