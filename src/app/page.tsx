"use client";
import Image from "next/image";
import Logo from "./logo/jjj-certo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <div className="flex h-[100vh] flex-col justify-center items-center ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/vdfundo.mp4" type="video/mp4" />
                
        </video>
        <div className=" bg-[#000000] h-5/6		z-10 w-96 rounded-3xl flex justify-center items-center ">
          <div>
            <div className="flex justify-center ">
              <Image
                className="h-24 w-28 flex justify-center "
                src={Logo}
                alt="logo"
                height={100}
                width={200}
              />
            </div>

            <div>
              <h1 id="nome" className="text-white ">
                Nome
              </h1>
            </div>
            <div>
              <input
                type="nome "
                className=" border border-black w-56	 rounded-xl p-1	"
              />

              <h1 id="nome" className="text-white	">
                Número
              </h1>
            </div>
            <div>
              <input type="tel" className="border	rounded-xl w-56  p-1	" />
              <h1 id="nome" className="text-white	">
                E-mail
              </h1>
            </div>
            <div>
              <input
                type="e-mail"
                className="border-none rounded-xl w-56	 p-1	"
              />
              <h1 id="nome" className="text-white	">
                senha
              </h1>
            </div>
            <input
              type="password"
              className="border border-black rounded-xl	 p-1 w-56	"
            />

            <div className="flex justify-center items-center">
              <button
                id="nome"
                className="bg-white  rounded-xl h-11 w-32 mt-6 "
              >
                {" "}
                Cadastre-se
              </button>
            </div>
            <div id="nome" className="flex justify-center m-2.5">
              <p className="text-white text-xl ">ou</p>
            </div>
            <div className="flex  ">
              <button
                id="nome"
                className="bg-white rounded-xl  flex justify-center items-center m-2 h-9 w-28	"
              >
                <FaFacebookF />
                Facebook
              </button>
              <button
                id="nome"
                className="bg-white rounded-xl w-28  flex justify-center items-center m-2	"
              >
                {" "}
                <FaGoogle />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="flex h-[100vh] flex-col justify-center items-center ">

          <source src="/public/video/vdfundo.mp4" type="video/mp4"/>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
                  
          </video>
          <div className=" bg-[#000] h-4/6		z-10 w-96 rounded-3xl flex justify-center items-center ">
            <div>
              <div className="flex justify-center ">
                <Image
                  className="h-24 w-28 flex justify-center "
                  src={Logo}
                  alt="logo"
                  height={100}
                  width={200}
                />
              </div>

              <div>
                <h1 id="nome" className="text-white	">
                  E-mail
                </h1>
              </div>
              <div>
                <input
                  type="e-mail"
                  className="border-none rounded-xl w-56	 p-1	"
                />
                <h1 id="nome" className="text-white	">
                  senha
                </h1>
              </div>
              <input
                type="password"
                className="border border-black rounded-xl	 p-1 w-56	"
              />

              <div className="flex justify-center items-center">
                <button
                  id="nome"
                  className="bg-white  rounded-xl h-11 w-32 mt-6 "
                >
                  {" "}
                  Login
                </button>
              </div>
              <div id="nome" className="flex justify-center m-2.5">
                <p className="text-white text-xl ">ou</p>
              </div>
              <div className="flex  ">
                <button
                  id="nome"
                  className="bg-white rounded-xl  flex justify-center items-center m-2 h-9 w-28	"
                >
                  <FaFacebookF />
                  Facebook
                </button>
                <button
                  id="nome"
                  className="bg-white rounded-xl w-28  flex justify-center items-center m-2	"
                >
                  {" "}
                  <FaGoogle />
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
