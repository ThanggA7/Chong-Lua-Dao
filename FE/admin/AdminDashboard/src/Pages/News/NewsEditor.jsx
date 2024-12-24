import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Dialog, Transition } from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import ReactQuill from "react-quill";
import axios from "axios";

const NewsEditor = () => {
  const [title, setTitle] = useState("");
  const [thumbnai, setThumbnai] = useState("");
  const [content, setContent] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const POSTNEWS = async (title , thumbnai ,content) => {
    try {
      const res = await axios.post(
        "https://api.nhuthangluu.id.vn/api/admin/post",
        {
          title: title,
          thumbnai: thumbnai,
          content: content,
        }
      );
    } catch (error) {}
  };

  const handleSubmit = () => {
    POSTNEWS(title, thumbnai, content);
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Write a News Article
      </h1>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter the article title"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Thumbnail
        </label>
        <input
          type="text"
          id="title"
          value={thumbnai}
          onChange={(e) => setThumbnai(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter the article thumbnai"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Content
        </label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="mt-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex items-center justify-end gap-4">
        <button
          type="button"
          onClick={() => setIsPreviewOpen(true)}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          <PencilSquareIcon className="h-5 w-5 mr-2" />
          Preview
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
        >
          Publish
        </button>
      </div>

      {/* Preview Modal */}
      <Transition show={isPreviewOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsPreviewOpen(false)}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Preview
                    </h3>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <div
                      className="mt-4 text-gray-700"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setIsPreviewOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default NewsEditor;
