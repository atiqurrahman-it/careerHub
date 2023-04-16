// add Data to localStore
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () => toast("Already applied for your job!!");

const addToDB=id=>{
    let jobAddToDB={}

    let previousJob=getToDB()
    if(previousJob){
        jobAddToDB={...previousJob}
    }

    const quantity=jobAddToDB[id]
    if(quantity){
        notify()
       
    }else{
        // jodi quantity set na  thake 
        // shopping-cart={'id_number': 1 }
        // ei vabe crate hoiteche 
        jobAddToDB[id]=1
    }
    
    localStorage.setItem('Apply-jobs',JSON.stringify(jobAddToDB))
}

const getToDB=()=>{
    let job=JSON.parse(localStorage.getItem('Apply-jobs'))
    return job
}

export  {addToDB,getToDB}