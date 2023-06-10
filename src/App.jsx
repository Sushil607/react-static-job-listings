import {useState,useEffect} from "react"

// Importing Data
import JobListingsData from "./data/data.json"

// Importing Components
import Header from "./components/Header"
import JobListing from "./components/JobListing"

function App() {
  const [isLoading,setIsLoading] = useState(false)
  const [jobListings,setJobListings] = useState([])
  
  useEffect(()=> {
    setIsLoading(true)
    setTimeout(()=> {
      setJobListings(JobListingsData)
      setIsLoading(false)
    },1000)
  },[])

  return (
    <>  
      <Header/>
      <main>
        <div className="job-listings-container">
          {isLoading ? <div>Loading...</div> : (
            jobListings.map((jobListing) => <JobListing key={jobListing.id} jobListing={jobListing}/>)
          )}
        </div>
      </main>
    </>
  )
}

export default App
