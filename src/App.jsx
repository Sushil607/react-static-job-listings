import {useState,useEffect} from "react"

// Importing Data
import JobListingsData from "./data/data.json"

// Importing Components
import Header from "./components/Header"
import FilterTagList from "./components/FilterTagList"
import JobListing from "./components/JobListing"

function App() {
  const [isLoading,setIsLoading] = useState(false)
  const [jobListings,setJobListings] = useState([])
  const [filterTagsList,setFilterTagsList] = useState([])
  
  useEffect(()=> {
    setIsLoading(true)
    setTimeout(()=> {
      setJobListings(JobListingsData)
      setIsLoading(false)
    },1000)
  },[])

  const addFilterTag = (tag) => {
    // if tag is not present in filter tag list
    if(!filterTagsList.includes(tag)){
      setFilterTagsList([...filterTagsList,tag])
    }
  }

  const removeFilterTag = (tag) => {
    // return only those filterTags those are not equal to tag
    setFilterTagsList(filterTagsList.filter((filterTag) => filterTag !== tag))
  }

  const clearFilterTags = () => {
    setFilterTagsList([])
  }

  const filteredJobListings = jobListings.filter((jobListing) => {
    let skills = [jobListing.role,jobListing.level,...jobListing.languages,...jobListing.tools]
    let result =  filterTagsList.every(tag => skills.includes(tag));
    if(result){
      return jobListing
    }
  })

  return (
    <>  
      <Header/>
      <main>
        { filterTagsList.length>0 && <FilterTagList filterTagsList={filterTagsList} removeFilterTag={removeFilterTag} clearFilterTags={clearFilterTags}/>}
        <div className="job-listings-container">
          {isLoading ? <div>Loading...</div> : (
            filteredJobListings.map((jobListing) => <JobListing key={jobListing.id} jobListing={jobListing} addFilterTag={addFilterTag}/>)
          )}
        </div>
      </main>
    </>
  )
}

export default App
