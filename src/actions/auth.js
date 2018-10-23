import axios from 'axios';

import { ROOT_URL } from '../config';

export function signUp(fields, success) {
    console.log(fields);
    return function(dispatch) {
        axios.post(`${ root_url }/signup`)
        .then(response => {

        })
        .catch(err => {
            if(err) {console.log(oops);}
        })
    }
    
}