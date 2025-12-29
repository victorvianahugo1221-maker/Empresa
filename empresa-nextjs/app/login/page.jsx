'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const ok = login(email, password)
    if (ok) router.push('/dashboard')
    else setError('Credenciais inválidas')
  }

  return (
    <main className="auth">
      <form onSubmit={handleSubmit}>
        <h2>Login Administrativo</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
        <button className="btn">Entrar</button>
      </form>
    </main>
  )
}
