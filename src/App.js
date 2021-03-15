
import './App.css';
import firebase from 'firebase/app'
import "firebase/auth"
import firebaseConfig from "./firebase.config"
import Welcome from './Welcome';
import { useState } from 'react';
import SignUpForm from './SignUpForm';

firebase.initializeApp(firebaseConfig);

function App() {

  const provider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleClick = () => {
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        setUser(res.user)
        setisLoggedIn(true);
      }).catch((error) => {
        console.log(error);
      });
  }
  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      console.log('Sign out successfull');
      setisLoggedIn(false);
    }).catch((error) => {
      console.log(error);
    });
  }
  const handleOnchange = (event) => {
    console.log(event.target.name, event.target.value);
  }
  const handleSubmit = () => {

  }
  console.log(user);

  return (
    <div className="App">
      {
        isLoggedIn ? <button onClick={handleSignOut}>Sign Out</button>
          : <button onClick={handleClick}>Sign In</button>
      }
      {isLoggedIn && <Welcome user={user} />}
      <SignUpForm handleOnchange={handleOnchange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
