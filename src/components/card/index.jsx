import './card.css'

const Card = ({
  id,
  company,
  new: isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
  languages,
  role,
  level,
  tools,
  logo,
  filters,setFilters
}) =>{

  const filterData = (x, y) => {
    const newFilter = [...filters, [x, y]]
    const noDupsArr = Array.from(new Set(newFilter.map(JSON.stringify)), JSON.parse)
    setFilters(noDupsArr)
  }

  return (
    <>
      <div className={featured ? 'card-container border' : 'card-container'}>
        <div className="image-container">
          <img src={logo} alt={`${company} logo`} />
        </div>

        <div className="job-description">
          <div className="company-name-container">
            <h3 className="company-name">{company}</h3>
            <div className="tags">
              {isNew && <span className="new">NEW!</span>}
              {featured && <span className="featured">FEATURED</span>}
            </div>
          </div>
          <h2 className="job-title">{position}</h2>
          <div className="extra-details">
            <span>{postedAt}</span>
            <span className="bullet"></span>
            <span>{contract}</span>
            <span className="bullet"></span>
            <span>{location}</span>
          </div>
        </div>

        <div className="filter-tabs">
          <button
            onClick={(e) => filterData("role",role)}
            className="btn">
            {role}
          </button>
          <button
            onClick={() => filterData("level",level)}
            className="btn">
            {level}
          </button>
          {tools.map((tool) => {
            return (
              <button
                key={tool}
                onClick={() => filterData("tools",tool)}
                className="btn">
                {tool}
              </button>
            )
          })}
          {languages.map((language) => {
            return (
              <button
                key={language}
                onClick={() => filterData("languages",language)}
                className="btn">
                {language}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Card