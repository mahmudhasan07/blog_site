import { CognitoUserPool } from "amazon-cognito-identity-js"


const authData = {
    UserPoolId : "us-east-1_XkU6MHRiM",
    ClientId : "3tidmbuitqh027a61iidcbqseg",
}

export default new CognitoUserPool(authData)