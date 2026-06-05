"use client"

import { useState } from "react"

type Tarea = {
  titulo: string
  descripcion: string
}

export default function Home() {
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [tareas, setTareas] = useState<Tarea[]>([])

  const agregarTarea = () => {
    if (titulo.trim() === "") return

    const nuevaTarea = {
      titulo: titulo,
      descripcion: descripcion,
    }

    setTareas([...tareas, nuevaTarea])
    setTitulo("")
    setDescripcion("")
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "14px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            marginBottom: "25px",
            color: "#222",
            fontSize: "38px",
          }}
        >
          Gestor de tareas
        </h1>

        <input
          type="text"
          placeholder="Título de la tarea"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        />

        <textarea
          placeholder="Descripción de la tarea"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={{
            width: "100%",
            minHeight: "100px",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
            resize: "vertical",
          }}
        />

        <button
          onClick={agregarTarea}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "15px",
            marginBottom: "25px",
          }}
        >
          Añadir tarea
        </button>

        {tareas.length === 0 ? (
          <p style={{ color: "#666", fontSize: "16px" }}>
            No hay tareas todavía
          </p>
        ) : (
          <div>
            {tareas.map((tarea, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  padding: "15px",
                  marginBottom: "12px",
                }}
              >
                <h3 style={{ margin: "0 0 8px 0", color: "#111" }}>
                  {tarea.titulo}
                </h3>
                <p style={{ margin: 0, color: "#444" }}>
                  {tarea.descripcion}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}