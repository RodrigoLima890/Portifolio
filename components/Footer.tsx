export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center py-6 mt-12" id="contato">
      <h2 className="text-2xl font-bold text-cyan-400 mb-1.5">Contato</h2>
      <p className="text-gray-500">© {new Date().getFullYear()} Rodrigo Lima. Todos os direitos reservados.</p>
      <p className="text-gray-500 mt-2">
        <a href="mailto:rodrigolimacontact.towork@gmail.com" className="hover:text-cyan-400">Contato por e-mail</a> | 
        <a href="https://www.linkedin.com/in/rodrigolima-developer" className="hover:text-cyan-400 ml-2" target="blank">LinkedIn</a>
      </p>
    </footer>
  )
}
