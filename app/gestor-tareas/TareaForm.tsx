import { crearTarea } from "./actions"

export function TareaForm() {
  return (
    <form action={crearTarea}>
      <label>
        título
        <input name="titulo" />
      </label>

      <label>
        descripción
        <textarea name="descripcion" />
      </label>

      <button type="submit">guardar tarea</button>
    </form>
  )
}