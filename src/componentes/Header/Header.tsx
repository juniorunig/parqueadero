
const links = [
  {
    name: 'Inicio',
    path: '#home'
  },
  {
    name: 'prueba',
    path: '#vehiculos'
  },
  {
    name: 'acerca de',
    path: '#acerca'
  },
  
]


export const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row text-center w-full px-4 py-2 min-h-[60px] max-w-[1220px]  justify-around">
       <h1 className="text-purple-950 bg-white rounded-3xl p-2 uppercase font-semibold">parqueadero</h1>
      <ul className="flex gap-2 justify-center mt-2">
        {
          links.map((link) => (
            <li key={link.name} className="text-white uppercase font-semibold ml-4">
              <a href={link.path}>{link.name}</a>
            </li>
          ))
        }
      </ul>
    
    </header>
  )
}