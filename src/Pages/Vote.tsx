import React from 'react'
import Footer from "../component/Fragments/Footer.tsx"; 
import Profil from "../assets/image/monkey.png"; 
import Navbar from '../component/Fragments/Navbar.tsx'
import ModalVoter from '../component/Fragments/ModalVoter.tsx'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { DataModalVoter } from '../data/index.ts' 
import Chart from '../component/Elements/Piechart/Piechart.tsx';

const Vote: React.FC = () => { 
  const [pilih, setPilih] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  const memilih = () => {
    setPilih(!pilih);
    setOpen(false);
  }
  return ( 
    <div> 
      <body className="bg-white"> 
        <Navbar 
          navText="PEMILU PRESIDEN DUMBWAYS.ID" 
          menuList={["Partai", "Paslon", "Voting"]} 
        /> 
 
        <main className="flex items-center justify-center flex-col text-black"> 
          <h1 className="text-[48px] font-[900] mt-[50px] text-login font-login"> 
            INFO PEMILU TERUPDATE 
          </h1> 
          <div className="flex justify-center items-center gap-[50px] w-full bg-white pt-[15px] mt-[50px] mb-[50px]"> 
            <div className="flex flex-col items-center justify-center gap-[30px]"> 
              <p className="text-[40px] text-black font-[900]">Hasil :</p> 
              <Chart />
            </div> 
 
            <div className="flex flex-col gap-[30px]"> 
              <div className="bg-brink-pink w-[657px] h-[146px] rounded-[15px] flex justify-center items-center gap-[30px] px-[30px]"> 
                <div className="bg-merah-marun w-[80px] h-[112px] rounded-[10px] p-[10px] text-center"> 
                  <p className="text-[16px] font-[700] text-white">No.</p> 
                  <p className="text-[16px] font-[700] text-white">Paslon</p> 
                  <p className="text-[32px] font-[700] text-white">3</p> 
                </div> 
 
                <div> 
                  <p className="text-merah-marun text-[40px] font-[900]"> 
                    CINTARA SURYA PALOH 
                  </p> 
                  <p className="text-[36px] font-[700] text-merah-marun"> 
                    78% 
                  </p> 
                </div> 
              </div> 
 
              <div className="bg-gold-ochre w-[657px] h-[146px] rounded-[15px] flex items-center gap-[30px] px-[30px]"> 
                <div className="bg-login w-[80px] h-[112px] rounded-[10px] p-[10px] text-center"> 
                  <p className="text-[16px] font-[700] text-white">No.</p> 
                  <p className="text-[16px] font-[700] text-white">Paslon</p> 
                  <p className="text-[32px] font-[700] text-white">1</p> 
                </div> 
 
                <div> 
                  <p className="text-login text-[40px] font-[900]"> 
                    SURYA SURYA 
                  </p> 
                  <p className="text-[36px] font-[700] text-login">45%</p> 
                </div> 
              </div> 
 
              <div className="bg-biru-laut w-[657px] h-[146px] rounded-[15px] flex items-center gap-[30px] px-[30px]"> 
                <div className="bg-hijau-gelap w-[80px] h-[112px] rounded-[10px] p-[10px] text-center"> 
                  <p className="text-[16px] font-[700] text-white">No.</p> 
                  <p className="text-[16px] font-[700] text-white">Paslon</p> 
                  <p className="text-[32px] font-[700] text-white">2</p> 
                </div> 
 
                <div> 
                  <p className="text-hijau-gelap text-[40px] font-[900]"> 
                    CINTARA 
                  </p> 
                  <p className="text-[36px] font-[700] text-hijau-gelap"> 
                    25% 
                  </p> 
                </div> 
              </div> 
            </div> 
          </div> 
          <div className= "flex justify-center items-center pb-12">
            {pilih === false ? (
              <button
                  className="flex ml-2 mr-auto bg-login px-14 py-3 mt-14 rounded-lg text-white text-center font-semibold text-3xl hover:bg-[#4f4808] hover:shadow-md transition-all"
                  onClick={() => setOpen(true)}
                >
                  MASUKKAN SUARAMU
                </button>
            ) : (
                <p className="uppercase text-merah text-4xl font-bold mt-14">
                  Anda sudah memilih !!!!
                </p>
            )}
          </div>
          <ModalVoter open={open} onClose={() => setOpen(false)}>
              <div>
                <h1 className="text-center font-black text-ijo-lumut text-4xl mb-3">
                  MASUKAN PILIHAN MU
                </h1>
                <div className="flex gap-4">
                  {DataModalVoter.map((data, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-6 shadow-lg rounded-2xl"
                    >
                      <div className="bg-[#E3E3E3] px-4 pt-6 rounded-2xl relative w-full h-full cursor-pointer hover:shadow-lg hover:bg-[#FCFF63]">
                        <div className="absolute right-0 top-0 border-white w-20 h-20 bg-[#A9A9A9] text-3xl font-bold text-white rounded-full border-[3px] flex justify-center items-center hover:bg-[#FF6384]">
                          {data.noUrut}
                        </div>
                        <img
                          className="w-full h-3/6 object-cover rounded-xl"
                          src={data.img}
                          alt="Foto Paslon"
                        />
                        <h1 className="font-bold text-2xl text-outline uppercase mt-3 text-paslon-kuning-tua">
                          {data.name}
                        </h1>
                        <p className="text-lg">{data.motto}</p>
                        <p className="text-lg font-bold">Partai Pengusung :</p>
                        <ul className="list-disc ml-8 leading-5">
                          {data.partaiPengusung.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex mt-4 gap-8 mx-4">
                  <button className="flex justify-center items-center bg-transparent py-2 rounded-xl text-tombol-suaramu text-center font-bold text-2xl w-full border-tombol-suaramu border-4 hover:bg-gray-200 transition-all">
                    RESET
                  </button>
                  <button
                    className="flex justify-center items-center bg-login py-2 rounded-xl text-white text-center font-semibold text-2xl w-full hover:bg-[#4f4808] hover:shadow-md transition-all"
                    onClick={memilih}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </ModalVoter>
        </main>
              
        <div className="bg-dasar w-full flex items-center justify-center flex-col">
            <p className="text-login font-login text-[48px] font-[900] text-center mb-[50px] pt-10"> 
              INFO PASLON
            </p> 
           <div className="w-full max-w-[947px] mx-auto my-10">
              <Carousel
              showArrows={true} 
              infiniteLoop={true}
              showThumbs={false} 
              autoPlay={false} 
              interval={5000}>
                <div className="bg-white w-[947px] h-[494px] flex justify-center items-center gap-30 p-50 rounded-10">
                  <div className='flex'>
                    <div className='flex flex-row w-[947px] h-[494px] items-center'>
                        <div className='p-20'>
                          <img className="w-64 h-80" src={Profil} alt="Profil" />
                        </div>
                        <div className="text-black font-login ml-4 text-left">
                          <p className="text-[24px] font-[700]">Nomor Urut: 1</p>
                          <p className="text-[40px] text-merah-marun font-login font-[700]">CINTARA SURYA PALOH</p>
                          <p className="text-[24px] font-[400] text-left">Visi & Misi:</p>
                          <ul className="text-[24px] text-left font-[400] list-disc pl-8">
                            <li>Memindahkan Indonesia ke Isekai.</li>
                            <li>Nonton anime 3x sehari.</li>
                            <li>Melakukan peresapan pada budaya jepang.</li>
                          </ul>
                          <p className="text-[24px] font-[400] text-left ">Koalisi:</p>
                          <ul className="text-[24px] font-[400] text-left list-disc pl-8">
                            <li>Partai Persatuan Wiboo.</li>
                            <li>Partai Redbull.</li>
                            <li>Partai Black Magic.</li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white w-[947px] h-[494px] flex justify-center items-center gap-30 p-50 rounded-10">
                  <div className='flex'>
                    <div className='flex flex-row w-[947px] h-[494px] items-center'>
                        <div className='p-20'>
                          <img className="w-64 h-80" src={Profil} alt="Profil" />
                        </div>
                        <div className="text-black font-login ml-4 text-left">
                          <p className="text-[24px] font-[700]">Nomor Urut: 2</p>
                          <p className="text-[40px] text-merah-marun font-login font-[700]">CINTARA SURYA PALOH</p>
                          <p className="text-[24px] font-[400] text-left">Visi & Misi:</p>
                          <ul className="text-[24px] text-left font-[400] list-disc pl-8">
                            <li>Memindahkan Indonesia ke Isekai.</li>
                            <li>Nonton anime 3x sehari.</li>
                            <li>Melakukan peresapan pada budaya jepang.</li>
                          </ul>
                          <p className="text-[24px] font-[400] text-left ">Koalisi:</p>
                          <ul className="text-[24px] font-[400] text-left list-disc pl-8">
                            <li>Partai Persatuan Wiboo.</li>
                            <li>Partai Redbull.</li>
                            <li>Partai Black Magic.</li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white w-[947px] h-[494px] flex justify-center items-center gap-30 p-50 rounded-10">
                  <div className='flex'>
                    <div className='flex flex-row w-[947px] h-[494px] items-center'>
                        <div className='p-20'>
                          <img className="w-64 h-80" src={Profil} alt="Profil" />
                        </div>
                        <div className="text-black font-login ml-4 text-left">
                          <p className="text-[24px] font-[700]">Nomor Urut: 3</p>
                          <p className="text-[40px] text-merah-marun font-login font-[700]">CINTARA SURYA PALOH</p>
                          <p className="text-[24px] font-[400] text-left">Visi & Misi:</p>
                          <ul className="text-[24px] text-left font-[400] list-disc pl-8">
                            <li>Memindahkan Indonesia ke Isekai.</li>
                            <li>Nonton anime 3x sehari.</li>
                            <li>Melakukan peresapan pada budaya jepang.</li>
                          </ul>
                          <p className="text-[24px] font-[400] text-left ">Koalisi:</p>
                          <ul className="text-[24px] font-[400] text-left list-disc pl-8">
                            <li>Partai Persatuan Wiboo.</li>
                            <li>Partai Redbull.</li>
                            <li>Partai Black Magic.</li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div> 

          {/*<div className="mt-[50px] mb-[80px]"> 
            <p className="text-login font-login text-[48px] font-[900] text-center mb-[50px]"> 
              INFO PASLON
            </p> 
            <div className="flex justify-center items-center">
              <Carousel 
                showArrows={true} 
                infiniteLoop={true}
                showThumbs={false} 
                autoPlay={false} 
                interval={5000}
                className='flex items-center justify-center'>
                  <div className="bg-white w-[947px] h-[494px] flex justify-center items-center gap-30 p-50 rounded-10">
                    <div className='flex'>
                      <div>
                        <img className="w-[246px] h-[328px]" src={Profil} alt="Profil" />
                      </div>
                      <div className="text-black ml-4 text-left">
                        <p className="text-[24px] font-[700]">Nomor Urut: 1</p>
                        <p className="text-[40px] text-merah-marun font-login font-[700]">CINTARA SURYA PALOH</p>
                        <p className="text-[24px] font-[400] text-left">Visi & Misi:</p>
                        <ul className="text-[24px] text-left font-[400] list-disc pl-8">
                          <li>Memindahkan Indonesia ke Isekai.</li>
                          <li>Nonton anime 3x sehari.</li>
                          <li>Melakukan peresapan pada budaya jepang.</li>
                        </ul>
                        <p className="text-[24px] font-[400] text-left ">Koalisi:</p>
                        <ul className="text-[24px] font-[400] text-left list-disc pl-8">
                          <li>Partai Persatuan Wiboo.</li>
                          <li>Partai Redbull.</li>
                          <li>Partai Black Magic.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
            <div className="bg-white w-[947px] h-[494px] flex justify-center items-center gap-30 p-50 rounded-10">
              <div className='flex'>
                <div>
                  <img className="w-[246px] h-[328px]" src={Profil} alt="Profil" />
                </div>
                <div className="text-black ml-4 text-left">
                  <p className="text-[24px] font-[700]">Nomor Urut: 1</p>
                  <p className="text-[40px] text-merah-marun font-login font-[700]">CINTARA SURYA PALOH</p>
                  <p className="text-[24px] font-[400] text-left">Visi & Misi:</p>
                  <ul className="text-[24px] text-left font-[400] list-disc pl-8">
                    <li>Memindahkan Indonesia ke Isekai.</li>
                    <li>Nonton anime 3x sehari.</li>
                    <li>Melakukan peresapan pada budaya jepang.</li>
                  </ul>
                  <p className="text-[24px] font-[400] text-left ">Koalisi:</p>
                  <ul className="text-[24px] font-[400] text-left list-disc pl-8">
                    <li>Partai Persatuan Wiboo.</li>
                    <li>Partai Redbull.</li>
                    <li>Partai Black Magic.</li>
                  </ul>
                </div>
              </div>
            </div>
              </Carousel>
            </div>
          </div>*/} 
        </div> 

        
 
        <div> 
          <div className="w-full h-[384px] bg-white flex justify-center items-center px-[120px]"> 
            <p className="text-[40px] font-bold text-center text-merah font-login"> 
              PILIH BERDASARKAN GACHA TIDAK USAH SERIUS <br /> YANG PENTING TIDAK 
              MELEGALKAN SLOT 
            </p> 
          </div> 
        </div> 
 
        <Footer /> 
      </body> 
    </div> 
  ); 
}; 
 
export default Vote;


