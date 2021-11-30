import react, {useState} from "react";
import { Button, Form, Input, Label , Grid , Image,Header} from 'semantic-ui-react'

const Login = () => {

    const [emailInputValue, setemailInputValue] = useState("");
    const [PasswordInputValue, setPasswordInputValue] = useState("");
    const [emailErrorMessage, setemailErrorMessage] = useState("");
    const [passwordErrorMessage, setpasswordErrorMessage] = useState("");
    const [isLogin, setisLogin]=useState(false);
    const [loginErrorMessage,setloginErrorMessage] = useState("");
    
    const loginDetails = [
            {
            email:"mannevivek21@gmail.com",
            password:"Vivek@12"
            },
            {
                email:"logintest@gmail.com",
                password:"loginSuccess"
            }
        ]
    
    
    function emailError(e){
        const isVaildMail = "@gmail.com"
        if(e.target.value.length) {
            if(e.target.value.includes(isVaildMail)){
                setemailErrorMessage("")
            }
            else{
                setemailErrorMessage("Please enter a vaild mail.")
            }
        }
    }

    function onsubmit(){
    loginDetails.map((item) => {
        if (emailInputValue === item.email && PasswordInputValue === item.password ){
            setisLogin(true)
        }
        else{
            setloginErrorMessage("Invaild Email Or Password");
        }
    })
    }
    

    return(
        <div className="login-container">
            <div className="login-card">
            {isLogin ? (
                <p>Login Successful</p>
            ): (
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Image src="/LoginImage.png"/>
                        </Grid.Column>
                        <Grid.Column style={{padding:"5rem"}}>
                            <Grid.Row style={{textAlign:"left"}}>
                                    <Header>Login</Header>
                                    <p>Thank you for get back to Lottery Display. Let us access our the best recommendation for you. </p>
                            </Grid.Row>
                             <Form className="login-form">
                                <p>{loginErrorMessage}</p>
                                <Label>
                                    Username
                                </Label>
                                <Input placeholder="Email or Phone Number" onChange={(e) => setemailInputValue(e.target.value)  }/>
                                <Label>
                                    Password
                                </Label>
                                <Input placeholder="Password" onChange={(e) =>setPasswordInputValue(e.target.value) }/>
                                <Button onClick={() =>onsubmit() }>Sign in</Button>
                            </Form>
                      </Grid.Column>
                 </Grid.Row>
            </Grid>
            ) }
        </div>
        </div>
    )

}


export default Login;