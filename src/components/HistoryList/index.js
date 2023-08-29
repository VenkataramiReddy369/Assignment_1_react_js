import './index.css'

const HistoryList = props => {
  const {historyDetails, updateDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    updateDeleteItem(id)
  }
  return (
    <li className="history-container">
      <div className="details-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button type="button" data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryList
