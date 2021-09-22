import { createUserAPI } from "../api/user.api";

export default {
    state: () => ({
        user: null,
        attempts: 0,
        scores: []
    }),
    getters: {

    },
    mutations: {

    },
    actions: {
        async registerUser({userName, commit}) {
            console.log('userName ', userName);
            console.log('commit ', commit);
            if(userName && userName.length) {
                const result = await createUserAPI(userName);
                console.log('result ', result);  
            }
        }
    }
}