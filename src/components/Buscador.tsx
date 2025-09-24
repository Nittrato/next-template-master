import { SearchNormal1 } from 'iconsax-reactjs';

export default function Buscador() {
	return (
		<main className="buscador bg-trans hover:bg-[#303030] mx-4">
			<SearchNormal1 className="mx-4 text-gray-400" />
			<input type="text" placeholder="Buscar" />
		</main>
	);
}
