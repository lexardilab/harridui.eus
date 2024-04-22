"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Add } from "@mui/icons-material";
import Image from "next/image";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `opx solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<Add sx={{ color: "black" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconAdd.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="bg-[#eae9b9]"
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="bg-[#eae9b9] pt-12 border-b-2"
        >
          <Typography className="text-xl font-semibold ">Materiales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="text-lg font-normal leading-8 bg-[#eae9b9]">
              Para realizar las impresiones en papel usamos el papel
              <strong> G.F Smith Colorplan</strong> en gramaje de 270 GSM. Vea
              los colores de papel disponibles
              <Link href="/ColoresPapel">
                <strong> aqui</strong>
              </Link>
              .
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="bg-[#eae9b9]"
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className="bg-[#eae9b9] text-xl font-semibold">
            Pedido Mínimo
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="text-lg font-normal leading-8">
              El pedido mínimo es de <strong>25 unidades</strong> por
              referencia.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="bg-[#eae9b9]"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="bg-[#eae9b9] text-xl font-semibold">
            Personalización
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="text-lg font-normal leading-8">
              El papel puede ser personalizado con los{" "}
              <strong> colores necesarios por el cliente</strong>, como si son
              10 ;). Tenemos un catálogo de colores ya estandarizado y además,
              <strong> podemos producir tu color Pantone.</strong>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="bg-[#eae9b9]"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="bg-[#eae9b9] text-xl font-semibold">
            Plazos de entrega
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="text-lg font-normal leading-8">
              Desde la confirmación del pedido de venta a la entrega de la
              prenda personalizada suelen pasar <nbsp />{" "}
              <strong> entre 2-3 semanas</strong>. Dependiendo del momento del
              año (navidad, verano, etc.) estos plazos pueden ser diferentes,
              pero se informa en todo momento al cliente antes de confirmar el
              pedido de venta.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
