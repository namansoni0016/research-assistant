"use client";

import { useState } from "react";

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<string>("");
    const handleUpload = async () => {
        if(!file) return;
        setLoading(true);
        setStatus("Uploading & Processing...");
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData
        });
        const data = await res.json();
        setLoading(false);
        if(data.success) {
            setStatus("Upload Successful!");
        } else {
            setStatus("Error: " + data.error);
        }
    }
    return (
        <div className="max-w-lg mx-auto mt-20 p-4 text-center">
            <h1 className="text-3xl font-semibold mb-6">Upload Research Papers</h1>
            <input type="file" id="fileInput" accept="application/pdf" className="mb-4" hidden
                onChange={(e) => setFile(e.target.files?.[0] || null)}/>
            <label htmlFor="fileInput" className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Choose File</label>
            {file && <p className="mb-2 text-sm text-gray-600">{file.name}</p>}
            <button disabled={loading || !file} onClick={handleUpload}
                className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400">
                {loading ? "Processing..." : "Upload"}
            </button>
            {status && <p className="mt-4 text-gray-700">{status}</p>}
        </div>
    )
}