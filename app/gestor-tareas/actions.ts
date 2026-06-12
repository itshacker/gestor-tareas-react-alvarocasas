"use server"

import { revalidatePath } from "next/cache"
import { borrarTarea, insertarTarea } from "@/lib/tareas"

export async function crearTarea(formData: FormData) {
  const titulo = formData.get("titulo")
  const descripcion = formData.get("descripcion")

  if (typeof titulo !== "string" || typeof descripcion !== "string") return
  if (titulo.trim() === "") return

  await insertarTarea(titulo.trim(), descripcion.trim())
  revalidatePath("/gestor-tareas")
}

export async function eliminarTarea(formData: FormData) {
  const id = formData.get("id")

  if (typeof id !== "string") return

  await borrarTarea(Number(id))
  revalidatePath("/gestor-tareas")
}