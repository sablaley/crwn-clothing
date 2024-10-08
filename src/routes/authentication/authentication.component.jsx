import './authentication.styles.scss';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {
    signInWithGooglePopup, createUserDocumentFromAuth
} from '../../firebase/utils/firebase.utils';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {

    const logGoogleUser = async () => {
        //    const response = await signInWithGooglePopup()
        //    console.log(response);
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm />
        </div>
    )
}

export default Authentication