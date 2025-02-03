
import { createUploadthing, type FileRouter } from "uploadthing/next";

 
const f = createUploadthing(); 


export const ourFileRouter = {
    
    Image: f({ image: {maxFileSize:"4MB", maxFileCount: 1}})
        .onUploadComplete(() => {})

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;