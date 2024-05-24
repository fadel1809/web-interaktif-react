import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import Wrapper from '../assets/wrapper/detailTansformasi';
import Navbar from '../components/Navbar';
import Background from "../assets/images/background-detail.png";
import IconJam from "../assets/images/icon-jam.png";
import Video from "../assets/video/video-detail-transformasi.mp4";
import { useEffect } from "react";

const fadeUpContent = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 2, y: 0, transition: { duration: 1.2 } }
};

const fadeUpParagraph = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
}

const slideLeftHeadline = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
}

const DetailTransformasi = () => {
  const navigate = useNavigate();

  const buttonClickHome = () => {
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <div>
        <Navbar />
        <div className="relative flex flex-col bg-cream-primary min-h-screen md:pt-14">
          <div className="relative flex-grow bg-pink-primary no-bg-desktop">
            <img
              src={Background}
              className="absolute hidden md:block inset-0 w-full h-full object-cover md:object-fill z-0"
              alt="Background"
            />
            <motion.div
              id="content"
              className="relative z-10 p-10 text-justify rounded-xl mt-10 md:-mt-0 mx-6 mb-40 md:p-10 md:mb-60 md:rounded-3xl md:mx-64 bg-white"
              variants={fadeUpContent}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                className="flex items-center space-x-2 mb-8 md:mb-4 text-lg font-bold text-pink-primary"
                onClick={buttonClickHome}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.2 }}
              >
                <FaArrowLeft />
                <span>Home</span>
              </motion.button>

              <div className="flex items-center text-justify mb-8 md:mb-4">
                <img src={IconJam} alt="Icon Jam" className="w-10 h-10 mr-2" />
              </div>

              <motion.h1 className="text-2xl font-bold mb-6 text-start" variants={slideLeftHeadline} initial="hidden" animate="visible">
                Transformasi Status Pengemudi Uber Dari Mitra ke Karyawan Tetap di Inggris, Bagaimana Dampak bagi Indonesia jika Mengikuti Jejaknya?
              </motion.h1>
              <motion.p className="mb-6" variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible">
                Pioner perusahaan teknologi asal Inggris yang menyediakan jasa layanan transportasi <i>online</i>, tak lain dan tak bukan ialah Uber, mengubah status para pengemudi yang tadinya mitra menjadi karyawan tetap pada 2021 lalu. Hal tersebut dikabulkan oleh Mahkamah Agung Inggris karena tuntutan yang dilakukan oleh dua mantan pengemudi Uber yang menggugat perusahaan tersebut atas dasar ketidakadilan.
              </motion.p>
              <motion.p className="mb-6" variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible">
                Namun, dengan berubahnya status mitra menjadi karyawan tetap pada Uber, hal ini tak berjalan mulus bahkan menimbulkan dampak negatif lain bagi para pekerjanya. Nailul Huda melihat bahwa Uber melakukan tindakan memberhentikan karyawan secara sementara karena permintaan pasar yang menurun.
              </motion.p>
              <motion.p className="mb-6" variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible">
                “Kalau setahu saya di UK sana, memang Uber mengubah status para mitranya menjadi pekerja tetap. Namun, di satu sisi Uber melakukan rasionalisasi, jadi kayak semacam pekerja aja ketika dia tengah turun permintaannya, otomatis juga dia akan melakukan <i>layoff</i> kepada para pekerjanya,” Kata Huda.
              </motion.p>
              <motion.p className="mb-6" variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible">
                Ahli ekonomi digital itu berharap bahwa kejadian serupa tidak akan terjadi di <i>platform</i> layanan transportasi <i>online</i> di Indonesia. Rekomendasi pengaturan yang ketat dengan mengubah status mitranya diubah menjadi pekerja tetap bukanlah sebagai solusi yang tepat. Menurut Huda, hal yang paling dibutuhkan bagi para mitra pengemudi merupakan kesetaraan.
              </motion.p>
              <div className="mb-6">
                <video className="w-full h-52 md:w-fit md:h-fit md:rounded-xl" controls={true}>
                  <source src={Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <motion.p className="mb-6" variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible">
                Uber sempat beroperasi di Indonesia pada tahun 2015. Namun, setelah beberapa tahun beroperasi, Uber menghentikan layanannya di Indonesia pada tahun 2018, Uber menjual bisnisnya di Asia Tenggara kepada Grab, yang kemudian mengambil alih operasi Uber di wilayah tersebut. Beberapa faktor mengapa Uber tidak dapat bertahan lama di Indonesia karena Uber menghadapi persaingan ketat dari layanan transportasi <i>online</i> lokal, seperti Gojek dan Grab.
              </motion.p>
            </motion.div>

            <div className="relative text-white bg-pink-primary mx-auto px-8 py-6 md:px-60 z-0">
              <div className="flex flex-col md:flex-row justify-between ">
                <div className="mb-4 md:mb-0">
                  <h2 className="mt-4 font-bold">Penulis</h2>
                  <p className='mt-6 md:mt-7'>Natania Rizky Ananda</p>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="mt-4 font-bold">Produser</h2>
                  <p className='mt-6 md:mt-7'>Natania Rizky Ananda</p>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="mt-4 font-bold">Pembimbing</h2>
                  <p className='mt-6 md:mt-7'>Ingki Rinaldi, M.Si</p>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="mt-4 font-bold">Web Developer</h2>
                  <p className='mt-6 md:mt-7'>Muhammad Arlanda</p>
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
    </Wrapper>
  );
};

export default DetailTransformasi;