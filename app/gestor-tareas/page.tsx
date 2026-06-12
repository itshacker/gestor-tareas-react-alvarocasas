import { obtenerTareas } from "@/lib/tareas-prisma"
import { TareaForm } from "./TareaForm"

export default async function Page() {
  const tareas = await obtenerTareas()

  return (
    <main style={{ padding: "24px", display: "grid", gap: "24px" }}>
      <h1>Gestor de tareas con Prisma</h1>
      <TareaForm />
      <section>
        <h2>Tareas guardadas</h2>
        {tareas.length === 0 ? (
          <p>Todavia no hay tareas.</p>
        ) : (
          <ul>
            {tareas.map((tarea) => (
              <li key={tarea.id}>
                <strong>{tarea.titulo}</strong>
                <p>{tarea.descripcion}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}