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
        'redirect_uri': 'http://localhost:3000/dashboard/pinterest',
        'client_id': process.env.PINTEREST_CLIENT_ID,
        'client_secret': process.env.PINTEREST_CLIENT_SECRET
    })
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.pinterest.com/v5/oauth/token',
        headers: {
            //'Authorization': `Basic ${Buffer.from(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`).toString("base64")}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data : data
    }

    axios(config)
    .then((response) => {
        const res = response.data
        // this refresh_code expires in 1 year.
        const refreshToken = res.refresh_token
        console.log(refreshToken)
    })
    .catch((error) => {
        //console.log(error)
    })

}



/* this is to get new access token using the refresh token
let data = qs.stringify({
    'grant_type': 'refresh_token',
    'refresh_token': '1068627860744-hiwTJ2uFSu7LMSk8V822w-gfFMkN8A'
})
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://www.reddit.com/api/v1/access_token',
  headers: {
    'Authorization': `Basic ${Buffer.from(`${process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID}:${process.env.NEXT_PUBLIC_REDDIT_CLIENT_SECRET}`).toString("base64")}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
}

axios(config)
.then((response) => {
  const res = response.data
  const accessToken = res.access_token
  // here you get the access token which you can use to add posts to the
  // the user's Reddit posts
})
.catch((error) => {
  console.log(error)
})
*/
