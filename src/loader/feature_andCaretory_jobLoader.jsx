const categoryJob=async()=>{
    const loadedCategory=await fetch('/job_category.json')
    const categories=await loadedCategory.json()

    return categories
}


const JobFeature=async()=>{
    const loadedFeatures=await fetch('/job_features.json')
    const categories=await loadedFeatures.json()

    return categories
}
const dataLoader=()=>{
    return Promise.all([JobFeature(), categoryJob()]);
}


export default dataLoader