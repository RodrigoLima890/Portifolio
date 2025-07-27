import ProjetoCard from '@/components/ProjetoCard'

export default function Projetos() {
  const projetos = [
  {
    titulo: 'API E-commerce',
    descricao: 'API RESTful desenvolvida em Java com Spring Boot, Spring Security, JWT, JPA e banco em memória H2. O projeto simula funcionalidades de um e-commerce, com foco em segurança e boas práticas de autenticação e autorização. (Em desenvolvimento)',
    link: 'https://github.com/RodrigoLima890/mycommerce-api',
    imagem: 'https://th.bing.com/th/id/R.03879ac3bde053357a8cc45a78d0c33b?rik=e%2f0740bpTdO8KQ&pid=ImgRaw&r=0'
  },
  {
    titulo: 'Clone Udemy',
    descricao: 'Clone da plataforma Udemy desenvolvido com Next.js e Tailwind CSS. Conta com autenticação via GitHub e Google (sem uso de NextAuth), upload de vídeos e integração com APIs personalizadas. Projeto voltado para praticar rotas protegidas e upload de arquivos em produção.',
    link: 'https://github.com/RodrigoLima890/clone_udemy',
    imagem: 'https://miro.medium.com/v2/resize:fit:1000/1*PJ87QhnDB4G5r6GynPSEVw.png'
  },
  {
    titulo: 'Ranking Manager API',
    descricao: 'API RESTful construída com Node.js, NestJS e PostgreSQL para gerenciar rankings de partidas de tênis. Projeto organizado em arquitetura modular, utilizando boas práticas de injeção de dependência, DTOs e validações com Pipes e Class Validator.',
    link: 'https://github.com/RodrigoLima890/ranking-manager-api',
    imagem: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/fecece74182713.5c254609b1588.png'
  },
  {
    titulo: 'Ranking Manager com Microsserviços',
    descricao: 'Extensão do projeto Ranking Manager com arquitetura de microsserviços. Utiliza NestJS, RabbitMQ para filas de comunicação entre serviços, e uma API Gateway centralizada para controle de autenticação e roteamento. Ideal para entender mensageria e separação de domínios.',
    link: 'https://github.com/RodrigoLima890/api-rankingmanage/tree/master',
    imagem: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/fecece74182713.5c254609b1588.png'
  },
  {
    titulo: 'Ambiente Dev com Docker e Vagrant',
    descricao: 'Projeto focado em DevOps: criação de um ambiente de desenvolvimento automatizado utilizando Docker e Vagrant. Permite a replicação rápida de ambientes em diferentes máquinas, garantindo consistência para equipes de desenvolvimento.',
    link: 'https://github.com/RodrigoLima890/Desafio-lab-docker-dio/tree/main',
    imagem: 'https://tse4.mm.bing.net/th/id/OIP.KFiTjh9k6VrlPQ1oZkRmwgHaDA?rs=1&pid=ImgDetMain&o=7&rm=3'
  }
]


  return (
    
    <section className="p-8">
      <div className="mt-8 text-left pb-3 ">
        <a href="/" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full">
          Voltar para Início
        </a>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Meus Projetos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projetos.map((proj, idx) => (
          <ProjetoCard key={idx} {...proj} />
        ))}
      </div>
    
    </section>
  )
}
