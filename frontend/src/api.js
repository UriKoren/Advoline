import Axios from 'axios'

const $axios = Axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})

//Example of a cross-cutting concern - client api error-handling
$axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("got error")
        console.error(error)

        throw error;
    });


class userStoryService {

    static sendUserStory(userStory) {
        return $axios
            .get('userstoryservice/senduserstory/', {params: {userStory: userStory}})
            .then(response => response.data)
    }
}
class phoneNumberService {

    static sendPhoneNumber(phoneNumber) {
        return $axios
            .get('phonenumberservice/sendphonenumber/', {params: {phoneNumber: phoneNumber}})
            .then(response => response.data)
    }
}
class mainLegalService {

    static sendMainLegalField(mainLegalField) {
        return $axios
            .get('mainlegalfieldservice/sendmainlegal/', {params: {mainLegalField: mainLegalField}})
            .then(response => response.data)
    }
}
class nameService {

    static sendName(name, email) {
        return $axios
            .get('nameservice/sendname/', {params: {name: name, email: email}})
            .then(response => response.data)
    }
}
// class emailService {
//
//     static sendEmail(email) {
//         return $axios
//             .get('emailservice/sendemail/', {params: {email: email}})
//             .then(response => response.data)
//     }
// }
class fileService {

    static sendImage(form_data) {
        return $axios
            .post('posts/', form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }})
            .then(response => response.data)
    }
    static sendImage2(form_data) {
        return $axios
            .post('posts2/', form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }})
            .then(response => response.data)
    }
    static sendImage3(form_data) {
        return $axios
            .post('posts3/', form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }})
            .then(response => response.data)
    }
}




const service = {
    userStoryService,
    nameService,
    fileService,
    phoneNumberService,
    mainLegalService,
}

export default service