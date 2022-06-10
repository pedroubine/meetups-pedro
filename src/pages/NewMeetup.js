import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom'



function NewMeetupsPage() {
  const history = useHistory();
  
  function AddMeetupHandler(meetupData){
    fetch('https://react-maximilian-pedro-default-rtdb.firebaseio.com/meetups.json',
          {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
              "Content-Type": 'application/json'
            }
          }
          ).then(() => {
            history.replace('/')
          });
  }
  return <section>
    <h1>Add new meetup</h1>
    <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
  </section>;

}

export default NewMeetupsPage;
