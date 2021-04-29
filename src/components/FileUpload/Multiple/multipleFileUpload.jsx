import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {
    const [uploadedFiles, setUploadedFiles] = useState({
        incomingImage : []
    },
        [])
    
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles)
    const url = `https://api.cloudinary.com/v1_1/xperiacloud/upload`
    

    acceptedFiles.forEach( async(acceptedFiles)=>{
        const formData = new FormData();
        formData.append('file', acceptedFiles)
        formData.append('upload_preset', 'Xperia')
        
        const response = await fetch(url, {
            method : 'post',
            body: formData
        })
        const data = await response.json()
        console.log(data)
        // push the public_id of each image to the uploadedFiles.incomingImage 
    })
   


  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
      onDrop,
      accepts: "image/*",
      multiple: true
    })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}
export default MyDropzone;
