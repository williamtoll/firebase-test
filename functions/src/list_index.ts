// import axios from "axios";
import * as functions from "firebase-functions";


export const test = functions.runWith({timeoutSeconds:500}).https
.onRequest(async (request, res) => {
  
    console.log(`This is a test parameter: ${request.query.test_parameter as string}`)
    
    res.send(JSON.stringify(request.body));
  });

