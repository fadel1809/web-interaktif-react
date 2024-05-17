import Wrapper from '../assets/wrapper/detailTansformasi';
import Navbar from '../components/Navbar';
import Background from "../assets/images/background-detail.png";
import IconJam from "../assets/images/icon-jam.png";
import { FaArrowLeft } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

const DetailTransformasi = () => {
  return (
    <Wrapper>
      <div>
        <Navbar />
        <div className="relative flex flex-col min-h-screen md:pt-14">
          <div className="relative flex-grow">
            <img
              src={Background}
              className="absolute inset-0 w-full h-full md:object-fill z-0"
            />

            <div id="content" className="relative z-10 p-10 text-justify rounded-xl mx-6 mb-96 mt-10 md:p-10 md:mb-96 md:rounded-3xl md:mx-64 bg-white">
              <button className="flex items-center space-x-2 mb-8 md:mb-4 text-lg font-bold text-pinky">
                <FaArrowLeft />
                <span>Home</span>
              </button>

              <div className="flex items-center text-justify mb-8 md:mb-4">
                <img src={IconJam} alt="Icon Jam" className="w-10 h-10 mr-2" />
              </div>

              <h1 className="text-2xl font-bold mb-4">Transformasi Status Pengemudi Uber Dari Mitra ke Karyawan Tetap di Inggris, Bagaimana Dampak bagi Indonesia jika Mengikuti Jejaknya?</h1>
              <p className="mb-4">Pioner perusahaan teknologi asal Inggris yang menyediakan jasa layanan transportasi online, tak lain dan tak bukan ialah Uber, mengubah status para pengemudi yang tadinya mitra menjadi karyawan tetap pada 2021 lalu. Hal tersebut dikabulkan oleh Mahkamah Agung Inggris karena tuntutann yang dilakukan oleh dua mantan pengemudi Uber yang menggugat perusahaan tersebut atas dasar ketidakadilan.</p>
              <p className='mb-4'>Namun, dengan berubahnya status mitra menjadi karyawan tetap pada Uber, hal ini tak berjalan mulus bahkan menimbulkan dampak negatif lain bagi para pekerjanya. Nailul Huda melihat bahwa Uber melakukan tindakan memberhentikan karyawan secara sementara karena permintaan pasar yang menurun. </p>
              <p className='mb-4'>“Kalau setahu saya di UK sana, memang Uber mengubah status para mitranya menjadi  pekerja tetap. Namun, di satu sisi Uber melakukan rasionalisasi, jadi kayak semacam pekerja aja ketika dia tengah turun permintaannya, otomatis juga dia akan melakukan layoff kepada para pekerjanya,” Kata Huda.</p>
              <p className='mb-4'>Ahli ekonomi digital itu berharap bahwa kejadian serupa tidak akan terjadi di platform layanan transportasi online di Indonesia. Rekomendasi pengaturan yang ketat dengan mengubah status mitranya diubah menjadi pekerja tetap bukanlah sebagai solusi yang tepat. Menurut Huda, hal yang paling dibutuhkan bagi para mitra pengemudi merupakan kesetaraan.</p>
              <div className="mb-4">
                <video className="w-full h-52 md:w-full md:rounded-xl" controls>
                  <source src="/src/assets/video/video-detail-transformasi.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className='mb-4'>Uber sempat beroperasi di Indonesia pada tahun 2015. Namun, setelah beberapa tahun beroperasi, Uber menghentikan layanannya di Indonesia pada tahun 2018, Uber menjual bisnisnya di Asia Tenggara kepada Grab, yang kemudian mengambil alih operasi Uber di wilayah tersebut. Beberapa faktor mengapa Uber tidak dapat bertahan lama di Indonesia karena Uber menghadapi persaingan ketat dari layanan transportasi online lokal, seperti Gojek dan Grab. </p>
            </div>
            <div className="relative text-white bg-orange-bg mx-auto px-8 -mt-72 md:-mt-60 py-6 md:px-60 z-0">
              <div className="flex flex-col md:flex-row justify-between ">
                <div className="mb-4 md:mb-0">
                  <h2 className="mt-4 font-bold">Foto</h2>
                  <p className='mt-6 md:mt-7'>Ariella Dwiputri Kinari</p>
                  <p className='mt-2 md:mt-2'>David Samohaga</p>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="mt-4 font-bold">Ilustrator</h2>
                  <p className='mt-6 md:mt-7'>Ariella Dwiputri Kinari</p>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="mt-4 font-bold">Tata Letak</h2>
                  <p className='mt-6 md:mt-7'>Ariella Dwiputri Kinari</p>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="mt-4 font-bold">Supervisor & Editor</h2>
                  <p className='mt-6 md:mt-7'>Utami Diah Kusumawati</p>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="mt-4 font-bold">Web Developer</h2>
                  <p className='mt-6 md:mt-7'>Lifosmin Simon</p>
                </div>
              </div>
              <div className="mt-10 md:mt-20 flex flex-col items-center md:justify-between border-t border-white pt-4 md:flex-row">
                <p className='mt-28 md:-mt-20 font-thin text-sm'>© 2024 Copyright by RideNarrative</p>
                <button className="flex space-x-3 md:space-x-2 -mt-24 mb-20 text-2xl font-bold text-white md:text-lg md:mt-2">
                  <GiFullMotorcycleHelmet className='w-9 h-9 md:mt-1 md:w-6 md:h-6' />
                  <span>RideNarrative</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper >
  );
};

export default DetailTransformasi;
