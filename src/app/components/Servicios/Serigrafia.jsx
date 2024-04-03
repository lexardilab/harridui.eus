import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Add } from "@mui/icons-material";

export default function Serigrafia() {
  return (
    <>
      <div className=" bg-[#eae9b9] justify-left px-12 pb-12 h-screen">
        <h1 className="text-4xl font-semibold text-left">Serigrafía Textil</h1>
        <Accordion style={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<Add sx={{ color: "black" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="bg-[#eae9b9] pt-12"
          >
            <p className="text-xl font-semibold ">Pedido Mínimo</p>
          </AccordionSummary>
          <AccordionDetails className="bg-[#eae9b9]">
            <p className="text-lg font-normal leading-8">
              En el caso de la serigrafía textil, el pedido mínimo es de 10
              unidades por diseño. En este caso, se pueden combinar tallas o
              diferentes productos para llegar a 10 unidades, pero siempre que
              el diseño, color y tamaño a estampar sea el mismo en todos los
              productos.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<Add sx={{ color: "black" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="bg-[#eae9b9]"
          >
            <p className="text-xl font-semibold ">Personalización</p>
          </AccordionSummary>
          <AccordionDetails className="bg-[#eae9b9]">
            <p className="text-lg font-normal leading-8">
              Disponemos de un pulpo de serigrafía que nos permite estampar 4
              colores. Tenemos un catálogo de colores ya estandarizado y además,
              podemos producir tu color Pantone.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<Add sx={{ color: "black" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="bg-[#eae9b9]"
          >
            <p className="text-xl font-semibold ">Plazos de entrega</p>
          </AccordionSummary>
          <AccordionDetails className="bg-[#eae9b9]">
            <p className="text-lg font-normal leading-8">
              Desde la confirmación del pedido de venta a la entrega de la
              prenda personalizada suelen pasar entre 2-3 semanas. Dependiendo
              del momento del año (navidad, verano, etc.) estos plazos pueden
              ser diferentes, pero se informa en todo momento al cliente antes
              de confirmar el pedido de venta.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
