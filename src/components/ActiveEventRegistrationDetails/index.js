import './index.css'

const eventStateConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {getRegistrationStatus} = props

  const renderYetToRegister = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="view-img"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance,Seeing
        dance live can often make you totally in love with the dance form.
      </p>
      <button type="button" className="reg-btn">
        Register Here
      </button>
    </div>
  )

  const renderNoActiveEvent = () => (
    <div className="view-container">
      <p className="no-active-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderRegistered = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (getRegistrationStatus) {
      case eventStateConstants.yetToRegister:
        return renderYetToRegister()
      case eventStateConstants.registered:
        return renderRegistered()
      case eventStateConstants.registrationClosed:
        return renderRegistrationClosed()
      default:
        return renderNoActiveEvent()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
