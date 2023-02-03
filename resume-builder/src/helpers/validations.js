import * as Yup from "yup";



export const validationSchemas = {
    "generalInformation": Yup.object().shape({
        name: Yup.string().required("სახელი სავალდებულო ველია").min(2, "მინიმუმ 2 სიმბოლო"),
        surname: Yup.string().required("გვარი სავალდებულო ველია").min(2, "მინიმუმ 2 სიმბოლო"),
        image: Yup.mixed().nullable().required("სურათის ატვირთვა სავალდებულოა"),
        aboutMe: Yup.string().notRequired(),
        email: Yup.string().email().required("ელექტრონული ფოსტა სავალდებულო ველია"),
        phone: Yup.string().required("ტელეფონი სალადებულო ველია.").min(9, 'ტელეფონი უნდა იყოს 9 ნიშნა.').max(9, 'ტელეფონი უნდა იყოს 9 ნიშნა.'),
    }),
    "experienceInformation": Yup.object().shape({
        position: Yup.string().required("თანამდებობა სავალდებულო ველია").min(2, "მინიმუმ 2 სიმბოლო"),
        employer: Yup.string().required("დამსაქმებელი სავალდებულო ველია").min(2, "მინიმუმ 2 სიმბოლო"),
        startDate: Yup.date().required("დაწყების თარიღი სავალდებულო ველია"),
        endDate: Yup.date().required("დამთავრების თარიღი სავალდებულო ველია"),
        description: Yup.string().required("აღწერა სავალდებულო ველია")
    }),
    "educationInformation": Yup.object().shape({
        "school": Yup.string().required("სასწავლებელი სავალდებულო ველია").min(2, "მინიმუმ 2 სიმბოლო"),
        "degree": Yup.object().required("ხარისხი სავალდებულო ველია"),
        "endDate": Yup.date().required("დამთავრების თარიღი სავალდებულო ველია"),
        "description": Yup.string().required("აღწერა სავალდებულო ველია")
    })
}