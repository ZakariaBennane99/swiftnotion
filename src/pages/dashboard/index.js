import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { useEffect } from 'react'


export default function Home() {


  // test Notion
  async function man () {
    const res = await fetch('http://localhost:3000/api/notion', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const content = await res.json()
    console.log(content)
  }

  man()

  /////// Reddit Token ///////

  const DURATION = "permanent"
  const REDDIT_SCOPE = "identity edit read vote wikiread wikiedit"
  const REDDIT_REDIRECT_URI = "https://localhost:3001/dashboard/reddit"
  const REDDIT_CLIENT_ID = '5QQ-bUumTKB5tkU9vznJxQ'
  const REDDIT_RANDOM_STRING = 'dasi234@/?~1897342]>d<ak<[123'

  function handleRedditLogin() {
    const authURL = `https://www.reddit.com/api/v1/authorize?client_id=${REDDIT_CLIENT_ID}&response_type=code&state=${REDDIT_RANDOM_STRING}&redirect_uri=${REDDIT_REDIRECT_URI}&duration=${DURATION}&scope=${REDDIT_SCOPE}`
    window.open(authURL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
  }


  /////// LinkedIn Token ///////

  const LINKEDIN_CLIENT_ID = '77xyjohlsd11sd'
  const LINKEDIN_REDIRECT_URI = 'https%3A%2F%2Flocalhost%3A3001%2Fdashboard%2Flinkedin'
  const LINKEDIN_RANDOM_STRING = 'manOdasi234@/?nFire'

  function handleLinkedInLogin() {
    const authURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${LINKEDIN_REDIRECT_URI}&state=${LINKEDIN_RANDOM_STRING}&scope=r_liteprofile%20r_emailaddress%20w_member_social`
    window.open(authURL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
  }


  /////// LinkedIn Token ///////

  const PINTEREST_CLIENT_ID = '1484362'
  const PINTEREST_REDIRECT_URI = 'http://localhost:3000/dashboard/pinterest'
  const PINTEREST_RANDOM_STRING = 'manOdasi234ds@/?nhdsfaFire'

  function handlePinterestLogin() {
    const authURL = `https://www.pinterest.com/oauth/?response_type=code&client_id=${PINTEREST_CLIENT_ID}&redirect_uri=${PINTEREST_REDIRECT_URI}&state=${PINTEREST_RANDOM_STRING}&scope=boards:write,boards:write_secret,pins:write,pins:write_secret`
    window.open(authURL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
  }


  /////// Facebook Token ///////

  function handleFbLogin() {
    FB.login(function(response) {
      if (response.status === 'connected') {
        console.log(response)
        // Logged into your webpage and Facebook.
      } else {
        // The person is not logged into your webpage or we are unable to tell.
      }
    })
  }

  // FB Root div
  useEffect(() => {
    const div = document.createElement('div')
    div.id = 'fb-roo'
    document.body.appendChild(div)
  }, [])

  return (<>
    <Script id="load-fb-sdk" strategy="afterInteractive">
      {`window.fbAsyncInit = function() {
            FB.init({
              appId            : '',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v16.0'
            });
      };`}
    </Script>
    <main>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/fb.svg' alt='facebook-logo' width={35} height={35} />
          <p>Facebook</p>
        </div>
        <div onClick={handleFbLogin}>
          what the fuck
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/tweet.svg' alt='twitter-logo' width={35} height={35} />
           <p>Twitter</p>
        </div>
        <div>
          What hfasdf
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/link.svg' alt='linkedIn-logo' width={35} height={35} />
          <p>LinkedIn</p>
        </div>
        <div onClick={handleLinkedInLogin}>
          What
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/insta.svg' alt='instagram-logo' width={35} height={35} />
          <p>Instagram</p>
        </div>
        <div>
          Maan I like You
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/pin.svg' alt='pinterst-logo' width={35} height={35} />
          <p>Pinterest</p>
        </div>
        <div onClick={handlePinterestLogin}>
           Wha
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/redd.svg' alt='reddit-logo' width={35} height={35} />
          <p>Reddit</p>
        </div>
        <div onClick={handleRedditLogin}>
          Woooow
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/tik.svg' alt='facebook-logo' width={35} height={35} />
          <p>TikTok</p>
        </div>
        <div>
          What the duck
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/ytb.svg' alt='youtube-logo' width={35} height={35} />
          <p>YouTube</p>
        </div>
        <div>
          Man
        </div>
      </div>
    </main>
    </>
  )
}
