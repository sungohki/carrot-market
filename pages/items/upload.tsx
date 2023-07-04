import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Upload: NextPage = () => {
  return (
    // container
    <Layout hasToBar>
      <div className="px-4 py-16">
        {/* First Section */}
        <div>
          {/* file uploader */}
          <label
            className="w-full cursor-pointer h-48 rounded-md flex items-center justify-center border-2 border-dashed border-gray-400 py-6 text-gray-600
          hover:text-orange-500 hover:border-orange-400
          "
          >
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Price Decider */}
        <div className="my-5">
          <label
            htmlFor="description"
            className="text-xl font-medium text-gray-700"
          >
            Price
          </label>
          <div className="flex items-center rounded-md relative shadow-md">
            <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
              <span className="text-gray-500 text-bold">$</span>
            </div>
            <input
              id="description"
              type="text"
              placeholder="0.00"
              className="appearance-none pl-7 px-3 py-2 w-full border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-orange-400 focus:border-orange-500"
            />
            <div className="absolute right-0 pr-3 flex items-center justify-center pointer-events-none">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="text-xl font-medium text-gray-700">
            Description
          </label>
          <textarea
            rows={4}
            className="mt-1 shadow-lg w-full focus:ring focus-within:ring-orange-500 rounded-md border-gray-300 hover:border-orange-300"
          />
        </div>
        <button className="mt-4 w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 border border-transparent rounded-md shadow-lg font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Upload item
        </button>
      </div>
    </Layout>
  );
};

export default Upload;