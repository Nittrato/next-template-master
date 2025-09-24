import { categorias } from '@/lib/data';

export default function Categorias() {
   return (
      <main className="flex flex-col mx-4 my-6 gap-4">
         <h2 className="text-[20px]">Categorias</h2>
         <section className="flex flex-row gap-5 overflow-x-auto overflow-hidden">
            {categorias.map((categoria) => (
               <div className="categoria" key={categoria.slug}>
                  <h1 className="text-[14px]">{categoria.name}</h1>
               </div>
            ))}
         </section>
      </main>
   );
}
