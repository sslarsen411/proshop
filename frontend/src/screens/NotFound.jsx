import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
const NotFound = () => {
  return (
    <Container className='w-75 mx-auto'>
      <h1>Page Not Found</h1>
      <p>
        <Link to='/'>Go to our home page</Link>
      </p>
      <img src='/images/page_not_found.svg' alt='404 not found error'/>
    </Container>
  )
}

export default NotFound
