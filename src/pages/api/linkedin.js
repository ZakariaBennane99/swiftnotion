require('dotenv').config()
const axios = require('axios')
const qs = require('qs')

export default function handler(req, res) {

    const oauthCode = req.body.auth_code

    if (oauthCode) {
        console.log(oauthCode)
        res.status(200).json('got it!')
    } else {
        res.status(404).json('not found')
    }

    let data = qs.stringify({
        'code': oauthCode,
        'grant_type': 'authorization_code',
        'redirect_uri': 'https://localhost:3001/dashboard/linkedin',
        'client_id': process.env.LINKEDIN_CLIENT_ID,
        'client_secret': process.env.LINKEDIN_CLIENT_SECRET
    })
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://www.linkedin.com/oauth/v2/accessToken',
        headers: {
            //'Authorization': `Basic ${Buffer.from(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`).toString("base64")}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data : data
    }

    axios(config)
    .then((response) => {
        const res = response.data
        // this access_token expires in 2 months, after that you can ask the user to
        // re-connect to his/her LinkedIn profile.
        const accessToken = res.access_token
    })
    .catch((error) => {
        console.log(error)
    })

}


// to send requests for posting and creating, go to LinkedIn page and see how to do it with Postman
// that way it would be faster to implement.
