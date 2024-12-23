import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



export default function Contact() {
  return (
    <div>
    <div id="contact" className="pt-32 container min-h-screen flex justify-center items-center">
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
          <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Get In Touch</h2>
          <p className="text-gray-600 text-[18px] pt-2">
            Contact me by submitting the form
          </p>
          <div className="flex gap-3 items-center">
            <MdMailOutline size={30} /> Tarfeehahussain@gmail.com
          </div>
          <div className="flex gap-3 items center">
            <FaPhoneAlt size={30} /> 0316-2698192
          </div>
          <div className="flex gap-3 items-center">
            <FaLinkedin size={30} /> TarfeehaHussain01
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-white"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-white"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              className="bg-transparent border border-white"
              id="message"
              rows={8}
            ></textarea>
          </div>
          <button className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-500 transition duration-300">
            Send
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}


            
        
        