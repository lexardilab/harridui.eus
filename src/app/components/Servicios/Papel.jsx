import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import Link from 'next/link';

export default function AccordionUsage() {
    return (
        <div className='bg-[#eae9b9]'>
            <div className='grid gap-4 px-4 pt-16 pb-12 lg:grid-cols-2 sm:grid-cols-1'>

                <div className='flex justify-center'>
                                    <Image
                                        src="/servicios_1.webp"
                                        width="800"
                                        height="800"
                                        alt="Harridui Serigrafía | "
                                    />
                                </div>
                <div>
                    <h1 className='pb-12 text-4xl font-semibold underline'>Serigrafía sobre Papel</h1>
                    <div>
                        <Accordion
                            sx={{
                                backgroundColor: "#eae9b9",
                                boxShadow: 0,
                                border: 0,
                                borderBottom: 0

                            }}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <h1 className='pt-4 text-3xl font-medium'>Materiales</h1>
                            </AccordionSummary>
                            <AccordionDetails
                            >
                                <h1 className='pl-12 text-lg'>Para realizar las impresiones en papel usamos el papel <strong>G.F Smith Colorplan</strong> en gramaje
                                    igual o superior a <strong>270 GSM</strong>. <strong><Link href="/Papel"> Aquí</Link></strong> puedes encontrar los colores de los que disponemos. </h1>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            backgroundColor: "#eae9b9",
                            boxShadow: 0,
                            border: 0,
                            borderBottom: 0

                        }}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                sx={{
                                    backgroundColor: "#eae9b9",

                                }}
                            >
                                <h1 className='pt-4 text-3xl font-medium'>Pedido Minimo</h1>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    backgroundColor: "#eae9b9",

                                }}>
                                <h1 className='pl-12 text-lg'>En el caso de la serigrafía sobre papel o cartón, el pedido mínimo es
                                    de <strong>25 unidades por diseño</strong>.
                                    En este caso, se pueden combinar papeles para llegar a 25 unidades,
                                    pero siempre que el diseño, color y tamaño a estampar sea el mismo en todos los productos.</h1>
                            </AccordionDetails>
                        </Accordion
                        >
                        <Accordion
                            sx={{
                                backgroundColor: "#eae9b9",
                                boxShadow: 0,
                                border: 0,
                                borderBottom: 0

                            }}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                                sx={{
                                    backgroundColor: "#eae9b9",

                                }}
                            >
                                <h1 className='pt-4 text-3xl font-medium'>Personalización</h1>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    backgroundColor: "#eae9b9",

                                }}>
                                <h1 className='pl-12 text-lg'>El papel puede ser personalizado con los <strong>colores necesarios por el cliente</strong>,
                                    como si son 10. Tenemos un catálogo de colores ya estandarizado y además, <strong>podemos producir tu color Pantone</strong>.</h1>
                            </AccordionDetails>

                        </Accordion>
                        <Accordion sx={{
                            backgroundColor: "#eae9b9",
                            boxShadow: 0,
                            border: 0,
                            borderBottom: 0

                        }}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                                sx={{
                                    backgroundColor: "#eae9b9",

                                }}
                            >
                                <h1 className='pt-4 text-3xl font-medium'>Plazos de entrega</h1>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    backgroundColor: "#eae9b9",

                                }}>
                                <h1 className='pl-12 text-lg'>Desde la confirmación del pedido de venta a la entrega de la prenda personalizada
                                    suelen pasar <strong> entre 2-3 semanas</strong>. Dependiendo del momento del año (navidad, verano, etc.) estos
                                    plazos pueden ser diferentes, pero se informa en todo momento al cliente antes de confirmar el
                                    pedido de venta.</h1>
                            </AccordionDetails>

                        </Accordion>
                    </div></div>
            </div >
        </div>

    );
}