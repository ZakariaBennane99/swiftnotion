import { useRouter } from 'next/router'
import Image from 'next/image'



export default function External() {


  // get the URL params
  const router  = useRouter()
  const URLParam = router.query


  /////////////////////////////// Reddit ////////////////////////////

  if (URLParam.external === 'reddit') {
    (async () => {
      const rawResponse = await fetch('https://localhost:3001/api/reddit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ auth_code: URLParam.code})
      })
      const content = await rawResponse.json()
      if (content === 'got it!') {
        window.close()
      } else {
        alert('Please close the window, and try again!')
      }
    })()
  }


  /////////////////////////////// LinkedIn ////////////////////////////

  if (URLParam.external === 'linkedin') {
    (async () => {
      const rawResponse = await fetch('https://localhost:3001/api/linkedin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ auth_code: URLParam.code})
      })
      const content = await rawResponse.json()
      if (content === 'got it!') {
        window.close()
      } else {
        alert('Please close the window, and try again!')
      }
    })()
  }


  /////////////////////////////// Pinterest /////////////////////////////

  if (URLParam.external === 'pinterest') {
    (async () => {
      const rawResponse = await fetch('http://localhost:3000/api/pinterest', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ auth_code: URLParam.code})
      })
      const content = await rawResponse.json()
      if (content === 'got it!') {
        window.close()
      } else {
        alert('Please close the window, and try again!')
      }
    })()
  }


  return (
    <div className='external-page'>
      <Image src='/external/spinning-cat.svg' alt='spinning-cat' width={120} height={120}/>
    </div>
  )
}
