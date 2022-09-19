
import axios from 'axios';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const data = req.body
        // console.log("data: ", data)
        try {
            const response = await axios({
                method: 'post',
                // 'url' : 'http://localhost:4000/eligibility',
                'url' : 'https://mm23tf5iwh.execute-api.us-west-1.amazonaws.com/Prod/eligibility',
                headers: {
                    // Authorization: authorization,
                    "Content-Type": "application/json"
                },
                data: data
            });
            // console.log("response=> ", res.statusCode)
            // console.log("response=> ", res.json())
            // res.status = res.status
            const responseData = await response.data
            console.log("responseData: ", responseData)
            res.status(res.statusCode).json({...responseData})
        } catch (error) {
            console.log("res: ", res)
            res.json()
        }
    }
    
  }