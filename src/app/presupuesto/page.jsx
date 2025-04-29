import Link from "next/link";

export default function page() {
  return (
    <div className="h-screen bg-[#eae9b9] px-4">
      <div className="grid pt-12 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
        <div className="sm:pl-4 lg:pl-8">
          <h1 className="font-semibold sm:text-2xl lg:text-4xl sm:underline">Contáctanos</h1>
          <Link href="mailto:harridui.studio@gmail.com">
            <p className="font-semibold sm:pt-4 lg:pt-12 sm:text-2xl lg:text-4xl">harridui@harridui.eus </p>
          </Link>
          <p className="pt-2 font-semibold lg:text-4xl sm:text-2xl">688 84 32 13</p>
        </div>
        <div className="lg:pr-12 sm:px-4 sm:pt-6">
          <h1 className="font-semibold text-2xl/10 ">
            Te recomendamos echar un vistazo a la página de
            <Link href="/servicios">
              &nbsp;
              <strong className="hover:cursor-pointer hover:underline">
                Servicios
              </strong>
            </Link>
            , para poder visualizar todas las posibilidades de personalización y
            sus características. Si nuestra metodología te encaja y quieres
            darle caña a tu proyecto, nos escribes con toda la información (lo
            más detallado posible, por favor) y te enviamos el presupuesto para
            que lo puedas aceptar y poner todo en marcha.
          </h1>
        </div>
      </div>
    </div>
  );
}
