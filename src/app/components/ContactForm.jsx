"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Enviando datos:", form);

      const { nombre, email, mensaje } = form;

      const { error } = await supabase.from("contacto").insert([
        {
          nombre,
          email,
          mensaje,
        },
      ]);

      if (error) throw error;

      setEnviado(true);
      setForm({ nombre: "", email: "", mensaje: "" });
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      alert("Hubo un error al enviar el mensaje: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 mx-auto space-y-6">
      

      {enviado && <p className="text-black">¡Gracias! Tu mensaje ha sido enviado.</p>}

      <div>
        <label className="block mb-1 font-medium">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className="w-full p-2 border border-black"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-black"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Mensaje</label>
        <textarea
          name="mensaje"
          rows="5"
          value={form.mensaje}
          onChange={handleChange}
          required
          className="w-full p-2 border border-black"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-white transition bg-black rounded hover:bg-gray-800"
      >
        Enviar
      </button>
    </form>
  );
}
