import './filter-bar.css'
import jobs from '../../data.json'

const FilterBar = ({filters,setFilters, setData}) => {

  const removeFilter = (item) => {
    const appliedFilters = [...filters]
    appliedFilters.splice(filters.indexOf(item),1)
    setFilters(appliedFilters)
  }

  return (
    <div className="filter-bar">
      <div className="filters">
        {filters.map((item) => {
          return (
            <div key={item[1]}>
              <span>{item[1]}</span>
              <button onClick={()=>{ 
                removeFilter(item)
                }}>
                <img src="./images/icon-remove.svg" alt="remove button icon" />
              </button>
            </div>
          )
        })}
      </div>
      <div>
        <button onClick={()=> {
            setData(jobs)
            setFilters([])
          }
          } className="clear">
          clear
        </button>
      </div>
    </div>
  )
}
export default FilterBar