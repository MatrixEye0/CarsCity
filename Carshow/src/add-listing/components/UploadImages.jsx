import React from "react";

function UploadImages({ selectedFile, setSelectedFile }) {
  
  const onFileSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {selectedFile && (
          <div>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected"
              className="w-full h-[130px] object-cover rounded-xl"
            />
          </div>
        )}

        <label htmlFor="upload-images">
          <div className="border rounded border-dotted border-blue-600 bg-blue-100 p-10 cursor-pointer hover:shadow-md">
            <h2 className="text-lg text-center text-blue-500">+</h2>
          </div>
        </label>
        <input
          type="file"
          id="upload-images"
          name="img"
          onChange={onFileSelected}
          className="opacity-0 absolute -z-10"
        />
      </div>
    </div>
  );
}

export default UploadImages;
