"use client"

import { useState } from "react"

type Tarea = {
  id: number
  titulo: string
  descripcion: string
}

export default function Home() {
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [tareas, setTareas] = useState<Tarea[]>([])

  const agregarTarea = () => {
    if (titulo.trim() === "") return
    setTareas([...tareas, { id: Date.now(), titulo, descripcion }])
    setTitulo("")
    setDescripcion("")
  }

  const eliminarTarea = (id: number) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  return (
    <main className="pagina">
      <section className="tarjeta">
        <h1 className="titulo">Gestor de tareas - AlvaroCasas React</h1>

        <input
          className="input"
          type="text"
          placeholder="Titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
          className="textarea"
          placeholder="Descripción de la tarea"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

      <button className="boton" onClick={agregarTarea}>
          Añadir tarea
        </button>
        <div className="lista">
        {tareas.length === 0 ? (
            <p className="sin-tareas"></p>
          ) : (
            tareas.map((tarea) => (
           <div key={tarea.id} className="tarea">
           <div>
            <h3>{tarea.titulo}</h3>
             <p>{tarea.descripcion}</p>
                </div>

             <button
               className="boton-borrar"
             onClick={() => eliminarTarea(tarea.id)}
               >
                          Eliminar
                 </button>
         </div>
            ))        )}
        </div>
      </section>
    </main>
  )
}