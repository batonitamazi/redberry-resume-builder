import React from 'react'
import { useNavigate } from 'react-router-dom'


function ExperiencesPage() {
  const navigate = useNavigate()
  return (
    <div>ExperiencesPage
      <button onClick={() => navigate('/general-information')}>
        უკან
      </button>
      <button onClick={() => navigate('/education')}>
        შემდეგი
      </button>
    </div>
  )
}

export default ExperiencesPage