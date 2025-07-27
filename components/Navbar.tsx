export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 flex justify-between items-center">
      <h1 className="text-xl font-bold text-cyan-400">Portifolio</h1>
      <ul className="flex gap-4">
        <li><a href="/" className="hover:text-cyan-400">Início</a></li>
        <li><a href="/projetos" className="hover:text-cyan-400">Projetos</a></li>
        <li><a href="#contato" className="hover:text-cyan-400">Contato</a></li>
      </ul>
    </nav>
  )
}
