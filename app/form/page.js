import Head from 'next/head';
import Image from 'next/image';

const OrderForm = () => {
  return (
    <div className="h-screen flex justify-center bg-lime-900 items-center">
      <Head>
        <title>Subscription Form</title>
      </Head>
      {/* Floating Logo */}
      <div className="absolute top-4 left-4 z-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={48}
          height={48}
        />
      </div>
      <div className="backdrop-blur-2xl bg-white  bg-opacity-50 rounded-xl sm:rounded-2xl z-10 text-center sm:text-base text-xs p-8">
        <h1 className="text-2xl text-black font-bold mb-4">Subscription Form</h1>
        <form>
          {/* Add your form fields here */}
          <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">First name</label>
                  <input type="text" id="first_name" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required></input>
              </div>
              <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Last name</label>
                  <input type="text" id="last_name" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Doe" required></input>
              </div>
              <div>
                  <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Company</label>
                  <input type="text" id="company" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Flowbite" required></input>
              </div>  
              <div>
                  <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Phone number</label>
                  <input type="tel" id="phone" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
              </div>
              <div>
                  <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Website URL</label>
                  <input type="url" id="website" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="flowbite.com" required></input>
              </div>
              <div>
                  <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Unique visitors (per month)</label>
                  <input type="number" id="visitors" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" required></input>
              </div>
          </div>
          <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Email address</label>
              <input type="email" id="email" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="john.doe@company.com" required></input>
          </div> 
          <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Password</label>
              <input type="password" id="password" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="•••••••••" required></input>
          </div> 
          <div class="mb-6">
              <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-800">Confirm password</label>
              <input type="password" id="confirm_password" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="•••••••••" required></input>
          </div> 
          <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-200 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
              </div>
              <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
          </div>
          <button type="submit" class="text-slate-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

          {/* Add other form fields similarly */}
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
