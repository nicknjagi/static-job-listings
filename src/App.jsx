import { useState, useEffect} from 'react'
import Header from './components/header'
import Card from './components/card'
import FilterBar from './components/filter bar'
import jobs from './data.json'

function App() {
  const [data, setData] = useState(jobs)
  const [filters, setFilters] = useState([])
  
  const updateJobs = () => {
    let updatedJobs =[...jobs]
    for(let filter of filters){
      updatedJobs = updatedJobs.filter(job => {
        if(job[filter[0]] == filter[1] || job[filter[0]].includes(filter[1])) {
          return true
        }
      })
    }
    setData(updatedJobs);
  }

  useEffect(() => {
    updateJobs()
  }, [filters])


  return (
    <>
      <Header />
      <main className="container">
        {filters.length > 0 ? <FilterBar
          filters={filters} setFilters={setFilters} setData={setData}
        /> : ''}
        {data.map((job) => {
          return (
            <Card key={job.id} {...job} filters={filters} setFilters={setFilters} />
          )
        })}
      </main>
    </>
  )
}

export default App
