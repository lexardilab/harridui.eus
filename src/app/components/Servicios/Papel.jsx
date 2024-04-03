import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Add } from "@mui/icons-material";
import Link from "next/link";

export default function Papel() {
  return (
    <>
      <div className=" bg-[#eae9b9] justify-left px-12 pb-12 h-screen">
        <h1 className="text-4xl font-semibold text-left">
          Serigrafía sobre papel
        </h1>
        <Accordion style={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<Add sx={{ color: "black" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="bg-[#eae9b9] pt-12"
          >
            <p className="text-xl font-semibold ">Materiales</p>
          </AccordionSummary>
          <AccordionDetails className="bg-[#eae9b9]">
            <p className="text-lg font-normal leading-8">
              Para realizar las impresiones en papel usamos el papel
              <strong> G.F Smith Colorplan</strong> en gramaje de 270 GSM. Vea
              los colores de papel disponibles
              <Link href="/ColoresPapel">
                <strong> aqui</strong>
              </Link>
              .
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
            <p className="text-xl font-semibold ">Pedido Mínimo</p>
          </AccordionSummary>
          <AccordionDetails className="bg-[#eae9b9]">
            <p className="text-lg font-normal leading-8">
              El pedido mínimo es de <strong>25 unidades</strong> por
              referencia.
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
              El papel puede ser personalizado con los{" "}
              <strong> colores necesarios por el cliente</strong>, como si son
              10 ;). Tenemos un catálogo de colores ya estandarizado y además,
              <strong> podemos producir tu color Pantone.</strong>
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
              prenda personalizada suelen pasar <nbsp />{" "}
              <strong> entre 2-3 semanas</strong>. Dependiendo del momento del
              año (navidad, verano, etc.) estos plazos pueden ser diferentes,
              pero se informa en todo momento al cliente antes de confirmar el
              pedido de venta.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
