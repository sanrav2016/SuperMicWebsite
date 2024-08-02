import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import GDS from './GDS'

import micBkgPng from './assets/mic_bkg.png'
import asicJpg from './assets/asic.jpg'
import blockDiagramPng from './assets/block_diagram.png'
import armaanWebp from './assets/armaan.webp'
import vikWebp from './assets/vik.webp'
import morganWebp from './assets/morgan.webp'
import asmiWebp from './assets/asmi.webp'
import riaJpg from './assets/ria.jpg'
import sanjayJpg from './assets/sanjay.jpg'

import { FaGithub } from "react-icons/fa";

function App() {
  const [showAsic, setShowAsic] = useState(false);

  return (
    <>
      <div className="section relative !bg-transparent h-[75vh]">
        <div className="absolute top-0 left-0 bg-no-repeat bg-cover w-full h-full brightness-[0.3] z-[-10] bg-fixed" style={{ backgroundImage: `url(${micBkgPng})` }} />
        <div className="p-16 flex flex-col gap-5 justify-center items-center text-white">
          <div className="heading-font text-6xl font-bold tracking-tighter">SuperMic</div>
          <div className="text-center">Open Source 8 Microphone Beamforming with the SKY130 PDK</div>
          <a href="https://github.com/arghunter/SuperMic" target="_blank">
            <button className="button">
              <FaGithub className="text-2xl" />
              <span>View Project</span>
            </button>
          </a>
        </div>
      </div>
      <div className="section p-16">
        <div className="p-4">
          <iframe width="560" height="315" className="max-w-full" src="https://www.youtube.com/embed/JSHVKgkWnAE?si=mskF1VW23FnAvv3d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
        </div>
        <div className="flex flex-col gap-3 text-center max-w-[600px]">
          <div>Beamforming equipment is bulky, expensive and hard to get by.</div>
          <div>How can we create a low power and low cost solution to implement directional high Signal to Noise Ratio (SNR) Microphone beamforming?</div>
          <div>We present <b>SuperMic</b>, a VLSI beamforming implementation using the Skywater 130 PDK and OpenLane 2. This project was created as part of the MIT BeaverWorks Summer Institute 2024 bASICs course, who is sponsoring us to submit to <a href="https://tinytapeout.com" target="_blank">Tiny Tapeout 8</a> for synthesis.</div>
        </div>
      </div>
      {
        !showAsic ? <div className="section h-96">
          <div className="bg-black p-4 flex items-center justify-center h-full w-full bg-fit bg-no-repeat bg-center" style={{ backgroundImage: `url(${asicJpg})` }}>
            <button className="button" onClick={() => setShowAsic(!showAsic)}>
              <span>View ASIC</span>
            </button>
          </div></div>
          :
          <div className="bg-black h-96 relative">
            <GDS />
          </div>
      }
      <div className="section p-16">
        <div className="p-8 flex flex-col gap-3 text-center">
          <div className="heading-font text-5xl font-bold tracking-tighter">How it works</div>
          <div>The IC takes in eight PDM microphone inputs through four DDR lines. Each mic is fed through a CIC filter pipeline to convert to PCM, followed by a delay stage to implement delay-sum beamforming with I2S output.</div>
        </div>
        <div>
          <img src={blockDiagramPng} />
        </div>
      </div>
      <div className="section p-12 !flex-col">
        <div className="heading-font text-5xl font-bold tracking-tighter p-4">Our team</div>
        <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
          <div className="tile">
            <img src={armaanWebp} />
            <div>
              <div className="tile-header">Armaan</div>
              <div className="tile-info"></div>
            </div>
          </div>
          <div className="tile">
            <img src={morganWebp} className="object-top bg-gradient-to-r from-purple-200 to-blue-200 " />
            <div>
              <div className="tile-header">Morgan</div>
              <div className="tile-info"></div>
            </div>
          </div>
          <div className="tile">
            <img src={vikWebp} />
            <div>
              <div className="tile-header">Vik</div>
              <div className="tile-info"></div>
            </div>
          </div>
          <div className="tile">
            <img src={asmiWebp} />
            <div>
              <div className="tile-header">Asmi</div>
              <div className="tile-info"></div>
            </div>
          </div>
          <div className="tile">
            <img src={riaJpg} />
            <div>
              <div className="tile-header">Ria</div>
              <div className="tile-info"></div>
            </div>
          </div>
          <div className="tile">
            <img src={sanjayJpg} />
            <div>
              <div className="tile-header">Sanjay</div>
              <div className="tile-info"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
