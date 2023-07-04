import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Live: NextPage = () => {
  return (
    // container
    <Layout title="라이브" hasToBar>
      <div className="py-10 px-4 divide-y-[1px]">
        {[1, 2, 3, 4, 5].map((_, i) => (
          // live streamings
          <div key={i} className="pt-4">
            <div className="w-full bg-slate-300 aspect-video rounded-md shadow-md" />
            <h3 className="text-gray-700 text-lg my-2">Galaxy s40</h3>
          </div>
        ))}

        {/* floating button */}
        <button
          className="fixed bottom-24 right-5 bg-orange-400 rounded-full p-3 text-white shadow-xl
      hover:bg-orange-500 hover:cursor-pointer"
        >
          <svg
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            ></path>
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Live;
