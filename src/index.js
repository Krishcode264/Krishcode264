import App from './App';

const { render } = require("@testing-library/react");


let arr=[1,2,3,4,5];
let arr2=[11,22,33,44,55];



let body={
    info:{
        name:'krish',
        surname:'zade',
        course:'bca',
        year:'first year',
        semister:'2nd semister',
        grade_points:[8,7,6,9.4,6.5]
    },
    subjects:{
        subjects:['php','rdbms','python','project','cs']
    },
    specialization:{
        spe:'cloude_computing'
    },
    status:true,
    new_student:true,
    status:'active'

}






render(
    <App/>, 
    document.getElementById('root')
);
