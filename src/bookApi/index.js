import {api} from '../../package.json';

export const getAllSubjects = () => {
    return new Promise((resolve, reject) => {
        fetch(api+'/subjects').then((res) => {
            if (res.ok) resolve(res.json());
            reject(res.statusText);
        });
    })
} 

export const getBooksBySubject = (subject) => {
    return new Promise((resolve, reject) => {
        fetch(api+'/books?subjects_like='+subject).then((res) => {
            if (res.ok) resolve(res.json());
            reject(res.statusText);
        });
    })
} 