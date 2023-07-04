import Layout from '@/components/layout';
import type { NextPage } from 'next';

const ChatDetail: NextPage = () => {
  return (
    // container
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        {/* chat bubble 1 */}
        <div className="flex items-start space-x-2 rounded-md px-4 py-2 w-fit">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className=" text-sm text-gray-700 rounded-md p-2 border border-gray-300 max-w-[1/2]">
            <p>Hi how much are you selling them for?</p>
          </div>
        </div>

        {/* chat bubble 2 */}
        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse rounded-md px-4 py-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className=" text-sm text-gray-700 rounded-md p-2 border border-gray-300 max-w-[1/2]">
            <p>I want ￦20,000</p>
          </div>
        </div>

        {/* chat bubble 3 */}
        <div className="flex items-start space-x-2 rounded-md px-4 py-2 w-fit">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className=" text-sm text-gray-700 rounded-md p-2 border border-gray-300 max-w-[1/2]">
            <p>You Crazy?</p>
          </div>
        </div>

        {/* message input */}
        <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
          <div className="flex relative items-center">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 pr-12
          focus:ring-orange-500 focus:outline-none focus:border-orange-400"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr1.5 right-0">
              <button
                className="cursor-pointer flex items-center bg-orange-400 rounded-full px-3 mr-2 text-sm text-white border-orange-400
            hover:bg-orange-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;
