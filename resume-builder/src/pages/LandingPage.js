import React from 'react'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/general-information')}>რეზიუმეს დამატება</button>
    </div>
  )
}

export default LandingPage