interface ProjetoCardProps {
  titulo: string
  descricao: string
  link: string
  imagem: string
}

export default function ProjetoCard({ titulo, descricao, link, imagem }: ProjetoCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
      <img src={imagem} alt={titulo} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-cyan-400">{titulo}</h3>
        <p className="text-gray-300 mt-2">{descricao}</p>
        <a href={link} target="_blank" className="inline-block mt-4 text-cyan-300 hover:underline">
          Ver no GitHub →
        </a>
      </div>
    </div>
  )
}
