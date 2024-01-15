import Resizer from "react-image-file-resizer";

export async function FileResizer(file: any) {

  const image = await resizeFile(file);
  
  return image;
}

const resizeFile = (file: any) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        400,
        400,
        "jpg",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });
