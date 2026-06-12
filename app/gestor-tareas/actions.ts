"use server"

import { revalidatePath } from "next/cache"
import { insertarTarea, eliminarTareaPorId } from "@/lib/tareas-prisma"

export async function crearTarea(titulo: string, descripcion: string) {
  if (typeof titulo !== "string" || typeof descripcion !== "string") return
  if (titulo.trim() === "") return

  await insertarTarea(titulo.trim(), descripcion.trim())
  revalidatePath("/gestor-tareas")
}

export async function borrarTarea(id: number) {
  if (typeof id !== "number") return

  await eliminarTareaPorId(id)
  revalidatePath("/gestor-tareas")
}