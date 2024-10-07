import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth,signInWithGoogleRedirect
} from '../../firebase/utils/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        //    const response = await signInWithGooglePopup()
        //    console.log(response);
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    const logGoogleRedirectUser = async () => {
        const response = await signInWithGoogleRedirect()
        // console.log({ user });
        console.log(response);
        
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>
        </div>
    )
}

export default SignIn