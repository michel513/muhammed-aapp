import { UTApi } from "uploadthing/server";

export const utapi = new UTApi();

/**
 * Fonction pour uploader un fichier vers UploadThing
 * @param file Fichier à uploader
 * @param endpoint Nom de l'endpoint à utiliser pour le type de fichier
 * @returns URL du fichier uploadé ou null en cas d'erreur
 */
export async function uploadSingleFile(
  file: File,
  endpoint: string
): Promise<{ url: string } | null> {
  try {
    "use server";

    // Validation du fichier
    if (!file) {
      throw new Error("Aucun fichier fourni pour l'upload");
    }

    // Uploader le fichier en utilizing UploadThing avec le endpoint spécifié
    const response = await utapi.uploadFiles([file]);

    // Vérifier si la réponse est un tableau et contient une URL
    if (Array.isArray(response) && response[0]?.data?.url) {
      return { url: response[0]?.data?.url };
    } else {
      throw new Error("Échec de l'upload - aucune URL retournée");
    }
  } catch (error: any) {
    console.error("[UPLOADTHING_ERROR]", {
      message: error.message || "Error lors de l'upload du fichier",
      filename: file.name,
      error,
    });
    return null;
  }
}