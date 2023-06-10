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

  return (
    <>  
      <Header/>
      <main>
        { filterTagsList.length>0 && <FilterTagList filterTagsList={filterTagsList}/>}
        <div className="job-listings-container">
          {isLoading ? <div>Loading...</div> : (
            jobListings.map((jobListing) => <JobListing key={jobListing.id} jobListing={jobListing} addFilterTag={addFilterTag}/>)
          )}
        </div>
      </main>
    </>
  )
}

export default App
