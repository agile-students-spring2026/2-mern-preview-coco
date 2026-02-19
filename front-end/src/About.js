import { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css' 

const About = props => {
  const [about, setAbout] = useState(null)
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        setAbout(response.data)
      })
      .catch(err => {
        setError(JSON.stringify(err, null, 2))
      })
      .finally(() => setLoaded(true))
  }, [])

  if (error) return <p>{error}</p>
  if (!loaded) return <p>Loading...</p>
  if (!about) return <p>Nothing to show.</p>

  return (
    <>
      <h1>{about.title}</h1>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <img
          src={about.imageUrl}
          alt={`${about.name}'s photo`}
          style={{
            width: '260px',
            height: '260px',
            objectFit: 'cover',
            borderRadius: '12px',
            border: '1px solid rgba(0,0,0,0.15)',
          }}
        />

        <div style={{ maxWidth: '600px' }}>
          <h2 style={{ marginTop: 0 }}>{about.name}</h2>
          <p style={{ opacity: 0.85 }}>{about.subtitle}</p>

          {about.paragraphs?.map((p, i) => (
            <p key={i} style={{ lineHeight: 1.7 }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default About
