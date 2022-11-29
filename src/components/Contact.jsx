import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 rounded-sm border-gray-500">
            Contact
          </p>
          <p
            className="py-6
                "
          >
            Submit the form below to get in touch
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <form
            action="https://getform.io/f/79f09a89-16a3-442f-bc4e-b273f1b4647f"
            className="flex flex-col w-full mx-auto md:w-1/2"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 duration-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 duration-500"
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Enter your phone no"
              className=" my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 duration-500"
              required
            />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message "
              className=" my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  focus:border-cyan-500 duration-500"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
