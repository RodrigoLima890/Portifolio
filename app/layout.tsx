import './global.css';
export const metadata = {
  title: 'Rodrigo Lima | Desenvolvedor Full Stack',
  description: 'Portfólio de Rodrigo Lima com projetos e tecnologias.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-950 text-white font-sans h-screen">
        {children}
      </body>
    </html>
  )
}
