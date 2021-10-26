
### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/events-output.gif" alt="events output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Active Event](https://assets.ccbp.in/frontend/content/react-js/events-no-active-event-view-output.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - Yet To Register](https://assets.ccbp.in/frontend/content/react-js/events-yet-to-register-view-output.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - Registered](https://assets.ccbp.in/frontend/content/react-js/events-registered-view-output.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - Registrations Closed](https://assets.ccbp.in/frontend/content/react-js/events-registrations-closed-view-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the page should have the [No Active Event View](https://assets.ccbp.in/frontend/content/react-js/events-no-active-event-view-output.png)
- When the image of an event item with `registrationStatus` as `YET_TO_REGISTER` is clicked, then the [Yet To Register View](https://assets.ccbp.in/frontend/content/react-js/events-yet-to-register-view-output.png) should be displayed
- When the image of an event item with `registrationStatus` as `REGISTERED` is clicked, then the [Registered View](https://assets.ccbp.in/frontend/content/react-js/events-registered-view-output.png) should be displayed
- When the image of an event item with `registrationStatus` as `REGISTRATIONS_CLOSED` is clicked, then the [Registrations Closed View](https://assets.ccbp.in/frontend/content/react-js/events-registrations-closed-view-output.png) should be displayed

- The `Events` component is provided with `eventsList`. It consists of a list of event objects with the following properties in each event object

  |        Key         | Data Type |
  | :----------------: | :-------: |
  |         id         |  String   |
  |      imageUrl      |  String   |
  |        name        |  String   |
  |      location      |  String   |
  | registrationStatus |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/events-compoment-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/Events/index.js`
- `src/components/Events/index.css`
- `src/components/EventItem/index.js`
- `src/components/EventItem/index.css`
- `src/components/ActiveEventRegistrationDetails/index.js`
- `src/components/ActiveEventRegistrationDetails/index.css`
</details>

