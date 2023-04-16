import { getToDB } from "../utils/fakeDb"

const jobLoader=async()=>{
    const loadedJobs=await fetch('/job_features.json')
    const jobs=await loadedJobs.json()


    const saveJob=[]
    const jobFromDB=getToDB()
    for(const jobId in jobFromDB){
        let findingJob=jobs.find(j=>j.id==jobId)
        if(findingJob){
            saveJob.push(findingJob)
        }
    }
    return saveJob
}

export default jobLoader
