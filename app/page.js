/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="h-screen flex">
      <Head>
        <title>Tailwind Page</title>
      </Head>
      {/* Left Half (Video Background) */}
      <div className="flex-1 relative">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="bg-coconutv2.mp4" type="video/mp4" />
        </video>

        {/* Floating Logo */}
        <div className="absolute top-4 left-4 z-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
          />
        </div>
      </div>

      {/* Right Half */}
      <div className="flex-1 relative bg-blur-xs bg-opacity-50 flex items-center justify-center bg-lime-900	">
        <div className="text-slate-300 text-xl p-2 sm:p-10">
          <div className="backdrop-blur-xl bg-white  bg-opacity-20 rounded-xl sm:rounded-2xl z-10 text-center sm:text-base text-xs p-8">
            The age-old Ayurvedic proverb holds timeless wisdom: "When Diet Is Wrong, Medicine Is Of No Use. When Diet Is Correct, Medicine Is Of No Need." <br></br> <br></br> 
            <p className="hidden sm:block">
              To unlock our true potential and be our best selves, adopting a healthy diet is essential. 
              Rich in electrolytes, vitamins, and minerals, coconut water replenishes hydration levels, it is quite literally the balanced solution most of us need on a daily basis.
              <br></br><br></br>
            </p>
            <p className="font-bold">
              Our mission is to make the benefits of coconuts accessible to households across Delhi. 
              From the Chitradurga and Davangere districts of Karnataka right to your doorstep, this is as good as it gets!
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-lg py-2 px-10 sm:py-4 sm:px-24 rounded-xl sm:rounded-2xl">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
