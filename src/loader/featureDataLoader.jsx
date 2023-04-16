const featureDataLoader=async(id)=>{
    const Id=parseInt(id)
    // ei khan / ei ta na use korle error show hobe 
    const loadedFeature=await fetch('/job_features.json')
    const feature=await loadedFeature.json()

    const singleFeature=feature.find(fe=>fe.id===Id)

    return singleFeature
}

export default featureDataLoader