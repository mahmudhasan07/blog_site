import { CognitoUserPool } from "amazon-cognito-identity-js"


const authData = {
    UserPoolId : "us-east-1_0rEenUFUm",
    ClientId : "1fongup9uiicgujdk878aglq2h",
}

export default new CognitoUserPool(authData)