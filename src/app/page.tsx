import Categorias from '@/components/Categorias';
import Peliculas from '@/components/Peliculas';
import Buscador from '@/components/Buscador';
import { perfil } from '@/lib/data';
// separacion de componentes

import Link from 'next/link';

export default function Home() {
	const { nombre, image } = perfil;
	return (
		<main>
			{/* esta es la bienvenida */}
			<section className="flex justify-between mx-4 my-8 items-center">
				<div>
					<h2 className="text-[14px] text-gray-400">Bienvenido {nombre} 👋</h2>
					<h3 className="text-[20px]">Listo para ver algo?</h3>
				</div>
				<Link href="/Perfil">
					<img src={image} alt="foto de perfil" className="anim rounded-full h-13 transition-transform duration-200 ease-out" />
				</Link>
			</section>

			{/* esta es la busqueda */}
			<Buscador/>
			

			{/* esta son las categorias */}
			<Categorias />

			{/* esto ya es todos los productos */}
			<Peliculas/>


		</main>
	);
}
