import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: replace with real sign-up logic
    console.log('Signing up with', { name, email, password })
  }

  return (
    <main className="auth-container">
      <section className="auth-card">
        <h1>Create Account</h1>
        <p>Join us by filling in the information below</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-field">
            <span>Full Name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Jane Doe"
              required
            />
          </label>
          <label className="auth-field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="auth-field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
              required
            />
          </label>
          <button type="submit" className="auth-submit">
            Sign Up
          </button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </section>
    </main>
  )
}

export default Signup

