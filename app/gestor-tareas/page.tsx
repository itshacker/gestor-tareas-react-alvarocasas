import { crearTarea, eliminarTarea } from "./actions"
import { obtenerTareas } from "@/lib/tareas"

export default async function Home() {
  const tareas = await obtenerTareas()

  return (
    <main className="pagina">
      <section className="tarjeta">
        <h1 className="titulo">Gestor de tareas - AlvaroCasas React</h1>

        <form action={crearTarea}>
          <input
            className="input"
            type="text"
            name="titulo"
            placeholder="Titulo"
          />

          <textarea
            className="textarea"
            name="descripcion"
            placeholder="Descripción de la tarea"
          />

          <button className="boton" type="submit">
            Añadir tarea
          </button>
        </form>

        <div className="lista">
          {tareas.length === 0 ? (
            <p className="sin-tareas">No hay tareas todavía.</p>
          ) : (
            tareas.map((tarea) => (
              <div key={tarea.id} className="tarea">
                <div>
                  <h3>{tarea.titulo}</h3>
                  <p>{tarea.descripcion}</p>
                </div>

                <form action={eliminarTarea}>
                  <input type="hidden" name="id" value={tarea.id} />
                  <button className="boton-borrar" type="submit">
                    Eliminar
                  </button>
                </form>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  )
}