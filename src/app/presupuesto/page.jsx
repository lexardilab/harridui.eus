export default function page() {
  return (
    <div className="h-screen bg-[#eae9b9]">
      <div className="grid grid-cols-2 pt-12">
        <div className="pl-8">
          <h1 className="text-4xl font-semibold">Contáctanos</h1>
          <p className="pt-12 text-4xl font-semibold">kaixo@harridui.com</p>
          <p className="pt-2 text-4xl font-semibold">688 84 32 13</p>
        </div>
        <div className="pr-12 ">
          <h1 className="text-2xl font-semibold">
            Pide tu presupuesto sin compromiso
          </h1>
          <h1 className="font-semibold pt-14 text-2xl/10 ">
            Te recomendamos echar un vistazo a la página de Servicios, para
            poder visualizar todas las posibilidades de personalización y sus
            características. Si nuestra metodología te encaja y quieres darle
            caña a tu proyecto, nos escribes con toda la información (lo más
            detallado posible, por favor) y te enviamos el presupuesto para que
            lo puedas aceptar y poner todo en marcha.
          </h1>
        </div>
      </div>
    </div>
  );
}
