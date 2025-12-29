import Link from 'next/link'

export default function Home() {
  return (
    <main className="center">
      <h1>EmpresaX</h1>
      <p>Soluções profissionais para seu negócio</p>
      <Link href="/login" className="btn">Área Administrativa</Link>
    </main>
  )
}
