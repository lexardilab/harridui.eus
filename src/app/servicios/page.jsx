import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div className=" bg-[#eae9b9] justify-center pt-48 px-12 pb-12">
        <h1 className="text-6xl font-black text-center">
          Ofrecemos la posibilidad de personalizar muuuchas cosas :)
        </h1>
        <div className="grid grid-cols-2 pt-52">
          <div>
            <Image src="/servicios_01.webp" width="600" height="400" alt="" />
          </div>
          <div className="px-6 ">
            <h1 className="text-4xl font-semibold text-center">
              Serigrafía Textil
            </h1>
            <p className="pt-12 text-xl font-semibold">Materiales</p>
            <p className="px-12 pt-6 text-lg font-normal leading-8">
              En Harridui trabajamos con las principales marcas de prendas
              textiles del mercado (
              <strong>
                Native Spirit, Stanley Stella, B&C, Roly, Gildan, Westford Mill,
                Atlantis, etc.
              </strong>
              ).
              <br /> La serigrafía manual es una técnica artesanal y durante el
              proceso pueden producirse pequeñas erratas, debido a esto, los
              textiles siempre los proveemos nosotros.
            </p>
            <p className="pt-12 text-xl font-semibold">Pedido Mínimo</p>
            <p className="px-12 pt-6 text-lg font-normal leading-8">
              En el caso de la serigrafía textil, el pedido mínimo es de 10
              unidades por diseño. En este caso, se pueden combinar tallas o
              diferentes productos para llegar a 10 unidades, pero siempre que
              el diseño, color y tamaño a estampar sea el mismo en todos los
              productos.
            </p>
            <p className="pt-12 text-xl font-semibold">Personalización</p>
            <p className="px-12 pt-6 text-lg font-normal leading-8">
              Disponemos de un pulpo de serigrafía que nos permite estampar como
              máximo 4 colores. Tenemos un catálogo de colores ya estandarizado
              y además, podemos producir tu color Pantone.
            </p>
            <p className="pt-12 text-xl font-semibold">Plazos de entrega</p>
            <p className="px-12 pt-6 text-lg font-normal leading-8">
              Desde la confirmación del pedido de venta a la entrega de la
              prenda personalizada suelen pasar entre 2-3 semanas. Dependiendo
              del momento del año (navidad, verano, etc.) estos plazos pueden
              ser diferentes, pero se informa en todo momento al cliente antes
              de confirmar el pedido de venta.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
