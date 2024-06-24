import { CognitoUserPool } from "amazon-cognito-identity-js"


const authData = {
    UserPoolId: process.env.UserPoolId,
    ClientId: process.env.ClientId,
}

export default new CognitoUserPool(authData)