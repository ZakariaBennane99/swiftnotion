import Image from "next/image"
import Head from "next/head"
import Script from "next/script"
import { useEffect, useState } from "react"


export default function Home() {

  const [email, setEmail] = useState('')
  const [isReady, setIsReady] = useState(false)

  const data = {
    service_id: 'service_ffvhts8',
    template_id: 'template_zl6z81n',
    user_id: 'lQxQmyvpeVVdQsOhB',
    template_params: {
        'user_email': email
    }
  }

  useEffect(() => {
    if(isReady) {
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        //if (response.ok) {
        //  alert('Thank you! We will email you once we have the product ready')
        //} else {
        //  throw new Error('Oops... ' + JSON.stringify(response))
        //}
        //const res = JSON.parse(response)
        //console.log(response)
        return response.text()
      })
      .then(data =>
        console.log(data))
      .catch(error => {
        alert(error.message)
      })
    }
  }, [isReady])

  function handleClick() {
    const isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase())
    if (isEmail) {
      setIsReady(!isReady)
    }
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }


  return (<>
    <Head>
      <link rel="shortcut icon" href="./favicon.svg" />
    </Head>
    <Script id="google-ads-get" strategy="afterInteractive">
      {`gtag('event', 'conversion', {'send_to': 'AW-11093131310/TAa2CL-1_4wYEK6Az6kp'});`}
    </Script>
    <div className="home-page">
      <Image src="./logo.svg" alt='SwiftNotion-logo' width={120} height={60} />
      <p>Are You A Content Creator Who
          Uses Notion to plan your social media and blog posts? We Are Working On Something
          That Will 2X Your Productivity</p>
      <div>
          <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmail} />
          <button onClick={handleClick}>Get Notified</button>
      </div>
    </div>
  </>
  )
}
