import { peliculas } from '@/lib/data';
import Link from 'next/link';

export default function Peliculas() {
	return (
		<main className="flex flex-col mx-4 my-6 gap-4">
			<h2 className="text-[20px]">Peliculas</h2>
			<section className="flex flex-wrap justify-between w-full">
				{peliculas.map((pelicula) => (
					<Link href={`/peliculas/${pelicula.id}`} key={pelicula.id} className="anim flex flex-col gap-2 sm:w-[200px] w-[48%] py-3 cursor-pointer transition-transform duration-200 ease-out">
						<img className="rounded-2xl" src={pelicula.image} />
						<h2 className="text-[15px]">{pelicula.name}</h2>
					</Link>
				))}
			</section>
		</main>
	);
}
