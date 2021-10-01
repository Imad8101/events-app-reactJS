import './index.css'

const EventItem = props => {
  const {eventDetails, setEventState, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const buttonClassName = isActive ? 'event-image active' : 'event-image'
  const onClickEvent = () => {
    setEventState(id)
  }
  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={buttonClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
