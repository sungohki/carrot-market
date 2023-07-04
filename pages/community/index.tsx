import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Community: NextPage = () => {
  return (
    // container
    <Layout title="동네생활" hasToBar>
      <div className="px-4 py-16 space-y-8">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          // question article
          <div key={i} className="flex flex-col items-start">
            {/* question tag */}
            <span
              className="flex items-center px-2.5 py-0.5 rounded-full
        text-xs font-bold bg-gray-200 text-gray-700"
            >
              동네질문
            </span>
            {/* Question */}
            <div className="mt-2 text-gray-700">
              <span className="text-orange-400 font-bold">Q.</span> What is the
              best mandu restaurant?
            </div>
            {/* writer&time info */}
            <div className="mt-5 flex items-center justify-between w-full text-gray-600 font-semibold text-xs">
              <span>sungohki</span>
              <span>18시간 전</span>
            </div>
            {/* question status */}
            <div className="flex space-x-5 mt-3 text-gray-600 py-2.5 border-y-[1px] w-full">
              {/* subscribe */}
              <span className="flex space-x-2 items-center text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>궁금해요 1</span>
              </span>
              {/* answers */}
              <span className="flex space-x-2 items-center text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>답변 1</span>
              </span>
            </div>
          </div>
        ))}
        {/* Question Article */}
        <button
          className="fixed bottom-24 right-5 bg-orange-400 rounded-full p-3 text-white shadow-xl
      hover:bg-orange-500 hover:cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Community;
