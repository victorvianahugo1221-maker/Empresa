'use client'
import ProtectedRoute from '@/components/ProtectedRoute'
import { useAuth } from '@/context/AuthContext'

export default function DashboardPage() {
  const { user, logout } = useAuth()

  return (
    <ProtectedRoute>
      <main className="dashboard">
        <h1>Painel Administrativo</h1>
        <p>Bem-vindo, {user?.name}</p>

        <div className="cards">
          <div className="card">Gerenciar Conteúdo</div>
          <div className="card">Usuários</div>
          <div className="card">Configurações</div>
        </div>

        <button onClick={logout} className="btn">Sair</button>
      </main>
    </ProtectedRoute>
  )
}
