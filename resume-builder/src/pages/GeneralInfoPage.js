import React from 'react'
import { useNavigate } from 'react-router-dom'

function GeneralInfoPage() {
  const navigate = useNavigate()
  return (
    <div>
      GeneralInfoPage
      <button onClick={() => navigate("/experience")}>
        შემდეგი
      </button>
    </div>
  )
}

export default GeneralInfoPage