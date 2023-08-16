import { useRef } from 'react';
import '../../App.css';
import './signUp.css';

const SignUp = () => {
    const email = useRef();
    const password = useRef();
    
    const handleSubmit=()=> {
        if(email.current.value == 'abc@gmail.com' && password.current.value =='12345') {
            localStorage.setItem('emailData','abc@gmail.com');
            localStorage.setItem('passwordData','12345');
        }
    }

    return (
        <>
        <div className="sign-up">
            <h4>SIGN UP</h4>
        </div>
        <div>
            {
                <form onSubmit={handleSubmit}>
                <div>
                    <input type="text"  ref={email} className='first spx' />
                </div>
                <div>
                    <input className='spx'type="password" ref={password} />
                </div>
                <button className='submitx'>Sign Up</button>
            </form>
            }
        </div>
        </>
    );
}
 
export default SignUp;