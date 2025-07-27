export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-4xl md:text-6xl font-bold text-cyan-400">Olá, eu sou o Rodrigo!</h2>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl">
        Desenvolvedor apaixonado por construir soluções modernas. Tenho experiência com Node.js, React, PHP, JAVA e AWS.
      </p>
      <a href="/projetos" className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full">
        Ver Projetos
      </a>
    </section>
  )
}
