import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory, useLocation } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import firebaseConfig from './firebase.Config';
import { ServiceContext } from '../../Context/ServiceContext';

import axios from 'axios';


if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const Login = () => {
	const { user, setUser } = useContext(ServiceContext);
	console.log(user);
	const provider = new firebase.auth.GoogleAuthProvider();
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	const handleSignIn = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const { displayName, email } = result.user;
				const signedInUser = {
					isSignedIn: true,
					name: displayName,
					email: email,
					role: 'user'
				};

				axios.post('http://localhost:5000/addUser', signedInUser).then((res) => {
                    localStorage.setItem('user', JSON.stringify(res.data));
                    console.log(res.data);
                    setUser(res.data);
                    history.replace(from);
                })
				setUser(signedInUser);
				history.replace(from);
			})
			.catch((error) => {
				console.log(error);
				console.log(error.message);
			});
	};



	return (
		<div>
			
			<div className="d-flex flex-column align-items-center googleLogin mt-5">
				<h4>Press Button To Login</h4>
				<button className="btn googleLogin" onClick={handleSignIn}>

					<FcGoogle className="googleLogin" />
				</button>
			</div>
			
		</div>
	);
};

export default Login;