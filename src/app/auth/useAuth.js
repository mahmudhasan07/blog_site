import { CognitoUserPool } from "amazon-cognito-identity-js"


const authData = {
    UserPoolId: process.env.poolID,
    ClientId: process.env.client,
}

console.log(process.env.NEXT_CLIENT, process.env.NEXT_ID);

export default new CognitoUserPool(authData)