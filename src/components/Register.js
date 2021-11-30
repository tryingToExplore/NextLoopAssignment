import react, {useState} from 'react';
import axios from 'axios';
import { Button, Form, Input, p, Grid,Image, Header } from 'semantic-ui-react'


// updateInputValue(){
//     console.log("hello")
// }

function Register() {

    const [nameInputValue, setnameInputValue]= useState("");
    const [lastNameInputValue, setlastNameInputValue] = useState("");
    const [phoneNumberInputValue, setphoneNumberINputValue] = useState("");
    const [emailInputValue, setemailInputValue] = useState("");
    const [PasswordInputValue, setPasswordInputValue] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, seterrorMessage] = useState("");
    const [nameErrorMessage, setnameError] = useState("");
    const [lastNameErrorMessage, setlastNameErrorMessage] = useState("");
    const [phoneNumberErrorMessage, setphoneNumberErrorMessage] = useState("");
    const [emailErrorMessage, setemailError] = useState("");
    const [passwordErrorMessage, setpasswordErrorMessage] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");
    // const [isDisabled , setisDisabled] = useState("");
    
// console.log(nameInputValue,"Value");
// console.log(lastNameInputValue,"lastNameInputValue");
 let isDisabled = nameInputValue.length > 0 && lastNameInputValue.length > 0  && phoneNumberInputValue.length > 0 && emailInputValue.length > 0 && PasswordInputValue.length > 0 && ConfirmPassword.length > 0  && confirmPasswordError.length == 0 && passwordErrorMessage.length == 0 && emailErrorMessage.length == 0 && phoneNumberErrorMessage.length == 0 &&  nameErrorMessage.length == 0 && lastNameErrorMessage.length == 0 ;




function confirmpasswordError(e){
    console.log(e.target.value,"ConfirmPassword");
    if(e.target.value?.length > 0 ){
    if (PasswordInputValue !== e.target.value){
        setconfirmPasswordError("password and confirmpassword are not same")
    }
    else {
        setconfirmPasswordError("")  
    }
}
}

function passwordError(e){
    const strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
if (PasswordInputValue.length > 0 ){
    if (strongPassword.test(e.target.value)) {
        setpasswordErrorMessage("")
    }
    else {
        setpasswordErrorMessage("Password must have 8 character, a uppercase and a special character")
    }
}
}

function nameError(e){
    if (e.target.value.length){
        if (e.target.value.length > 0 && e.target.value.length < 10){
            setnameError("")
        }
        else{
            setnameError("Please enter a short name")
        }
    }
}

function lastNameError(e){
    if (e.target.value.length){
        if (e.target.value.length > 0 && e.target.value.length < 10){
            setlastNameErrorMessage("")
        }
        else{
            setlastNameErrorMessage("Please enter a short name")
        }
    }
}

function phoneNumberError(e){
    if (e.target.value.length){
        if( e.target.value && e.target.value.length == 10 ){
            setphoneNumberErrorMessage("")
        }
        else{
            setphoneNumberErrorMessage("please enter a vaild number")
        }
    }
}

function emailError(e){
    const isVaildMail = "@gmail.com"
    if(e.target.value.length) {
        if(e.target.value.includes(isVaildMail)){
            setemailError("")
        }
        else{
            setemailError("Please enter a vaild mail.")
        }
    }
}

        function onSubmit(){
            axios.post("https://reqres.in/api/articles", {name:nameInputValue,lastName:lastNameInputValue,PhoneNumber:phoneNumberInputValue,email:emailInputValue,Password:PasswordInputValue,ConfirmPassword:ConfirmPassword }).then((res) => {
                console.log(res,"res");
            })
        }

        return(  

                <div className="NextLoop-register-container">
                    <div className="NextLoop-reg-card">
                        <Grid>
                            <Grid.Row style={{padding:"0px"}} columns={2}>
                                <Grid.Column width={6}>
                                    <Image style={{width:"100%",height:"640px"}} src="/registerimage.png"/>
                                </Grid.Column>
                                <Grid.Column width={10} style={{padding:"4rem"}}>
                                    <Header>Register</Header>
                                    <br/>
                                    <h4 style={{textAlign:"left"}}>Manage all your lottery efficiently</h4>
                                    <p style={{textAlign:"left" , color:"#333"}}>Lets get you all set up so we can verify your personal account</p>
                                    <Form>
                                        {confirmPasswordError || passwordErrorMessage || emailErrorMessage || phoneNumberErrorMessage || nameErrorMessage || lastNameErrorMessage ? ( <p style={{color:"red"}}>{confirmPasswordError || passwordErrorMessage || emailErrorMessage || phoneNumberErrorMessage || nameErrorMessage || lastNameErrorMessage}</p>) : null }

                                        <Grid>
                                            <Grid.Row columns={2}>
                                                <Grid.Column>
                                                    <div className="Block-container">
                                                        <p>Name</p>
                                                        <Input onChange={(e) =>{ setnameInputValue(e.target.value) ; nameError(e)}}/>
                                                    </div>
                                                </Grid.Column>
                                            <Grid.Column>
                                                    <div className="Block-container" >
                                                        <p>Last Name</p>
                                                        <Input onChange={(e) => {setlastNameInputValue(e.target.value) ; lastNameError(e)}} />
                                                    </div>
                                            </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row columns={2}>
                                                <Grid.Column>
                                                    <div className="Block-container">
                                                        <p>Phone Number</p>
                                                        <Input type="number" onChange={(e) => {setphoneNumberINputValue(e.target.value) ; phoneNumberError(e)}} />
                                                    </div>
                                                </Grid.Column>
                                                <Grid.Column>
                                                    <div className="Block-container">
                                                        <p>Email</p>
                                                        <Input onChange={(e) =>{ setemailInputValue(e.target.value) ; emailError(e)}} />
                                                    </div>
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row columns={2}>
                                                <Grid.Column>
                                                    <div className="Block-container">
                                                        <p>Password</p>
                                                        <Input type="password" onChange={(e) => {setPasswordInputValue(e.target.value) ; passwordError(e) }} />
                                                    </div>
                                            </Grid.Column>
                                                <Grid.Column>
                                                    <div className="Block-container">
                                                        <p>Confirm Password</p>
                                                        <Input type="password" onChange={(e) =>{ setConfirmPassword(e.target.value) ; confirmpasswordError(e)} }/>
                                                    </div>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    <Button onClick={() => onSubmit()} disabled={!isDisabled} value="submit">Create Account</Button>
                                    <p style={{textAlign:"left", marginBottom:"10px"}}>Already have an account? <a href="/login">Click Here</a></p>
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </div>
)}

 export default Register