import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

function ImageUploader({ onImageUpload }) {
   const [previewUrl, setPreviewUrl] = useState(null);
   const [error, setError] = useState('');

   const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         if (file.size > 5000000) { // 5MB limit
            setError('File size must be less than 5MB');
            return;
         }

         const reader = new FileReader();
         reader.onloadend = () => {
            setPreviewUrl(reader.result);
            onImageUpload(reader.result);
         };
         reader.readAsDataURL(file);
         setError('');
      }
   };

   const clearImage = () => {
      setPreviewUrl(null);
      onImageUpload(null);
   };

   return (
      <div className="w-full">
         <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            {previewUrl ? (
               <div className="relative">
                  <img src={previewUrl} alt="Preview" className="h-48 w-auto object-cover rounded" />
                  <button
                     onClick={clearImage}
                     className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                     <X className="w-4 h-4" />
                  </button>
               </div>
            ) : (
               <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-300" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                     <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input
                           type="file"
                           className="sr-only"
                           accept="image/*"
                           onChange={handleFileChange}
                        />
                     </label>
                     <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 5MB</p>
               </div>
            )}
         </div>
         {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
   );
}

export default ImageUploader;