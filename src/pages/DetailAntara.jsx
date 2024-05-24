import Wrapper from '../assets/wrapper/detailAntara';
import Navbar from '../components/Navbar';
import Background from "../assets/images/background-detail.png";
import IconTanya from "../assets/images/icon-tanda-tanya.png"
import { FaArrowLeft } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

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

const DetailAntara = () => {
  const navigate = useNavigate();

  const buttonClickHome = () => {
    navigate("/")
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <Wrapper>
      <div>
        <Navbar />
        <div className="relative flex flex-col min-h-screen bg-cream-primary md:pt-14">
          <div className="relative flex-grow bg-pink-primary no-bg-desktop">
            <img
              src={Background}
              className="absolute hidden md:block inset-0 w-full h-full object-cover md:object-fill z-0"
            />

            <motion.div id="content" className="relative z-10 p-10 text-justify rounded-xl mt-10 md:-mt-0 mx-6 mb-40 md:p-10 md:mb-60 md:rounded-3xl md:mx-64 bg-white" variants={fadeUpContent} initial="hidden" animate="visible">
              <motion.button className="flex items-center space-x-2 mb-8 md:mb-4 text-lg font-bold text-pink-primary" onClick={buttonClickHome} whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
                <FaArrowLeft />
                <span>Home</span>
              </motion.button>

              <div className="flex items-center text-justify mb-8 md:mb-4">
                <img src={IconTanya} alt="Icon Jam" className="w-10 h-10 mr-2" />
              </div>

              <motion.h1 className="text-2xl text-start font-bold mb-6" variants={slideLeftHeadline} initial="hidden" animate="visible">Antara Terpaksa dan Pilihan, Alasan Pengemudi Ojol Terlibat dalam Hubungan Kemitraan yang Tidak Menguntungkan</motion.h1>
              <motion.p className="mb-6" variants={fadeUpParagraph} viewport={{once:true}} initial="hidden" whileInView="visible">Beberapa dari Anda mungkin mempertanyakan mengapa masih banyak orang yang bersedia menjadi mitra meskipun hubungan kemitraan tersebut dianggap merugikan diri mereka sendiri?</motion.p>
              <motion.p className='mb-6' variants={fadeUpParagraph} viewport={{once:true}} initial="hidden" whileInView="visible">Penjelasan atas pertanyaan ini terkait erat dengan kondisi pasar kerja di Indonesia yang semakin rentan <i>(precarious labour market)</i>, hal ini  terjadi ketika terdapat banyak pekerjaan yang tidak memiliki ketidakpastian yang merujuk pada pekerjaan dengan upah rendah, tanpa perlindungan, dan tanpa jaminan keamanan kerja.</motion.p>
              <motion.p className='mb-6' variants={fadeUpParagraph} viewport={{once:true}} initial="hidden" whileInView="visible">Situasi pasar tenaga kerja yang tidak stabil akan mendorong pertambahan individu yang terlibat dalam model kerja yang tidak konvensional. Dalam kondisi pasar tenaga kerja yang rentan, pekerja sering kali merasa terpaksa menerima kondisi kerja yang tidak menguntungkan daripada tidak memiliki pekerjaan.</motion.p>
              <motion.p className='mb-6' variants={fadeUpParagraph} viewport={{once:true}} initial="hidden" whileInView="visible">Masalah dalam hubungan kemitraan bukan hanya tentang keputusan pribadi apakah mereka ingin atau tidak ingin terlibat dalam hubungan kemitraan. Namun, ini juga merupakan masalah struktural yang harus diatasi melalui intervensi kebijakan. Selama masih ada kekurangan dalam regulasi hukum terkait hubungan kemitraan, maka hubungan kemitraan yang tidak teratur akan terus meningkat.</motion.p>
              <motion.p className='mb-6' variants={fadeUpParagraph} viewport={{once:true}} initial="hidden" whileInView="visible">Sebagai dampaknya, pengusaha akan cenderung memilih untuk mengontrak pekerja dengan hubungan kemitraan karena hal ini memungkinkan mereka untuk menghindari kewajiban membayar upah minimum, pesangon, BPJS Ketenagakerjaan, dan hak-hak tenaga kerja lainnya. Sebaliknya, para pekerja akan semakin merasa terpuruk.</motion.p>
              <motion.p className="mb-6" variants={fadeUpParagraph} viewport={{once:true}} initial="hidden" whileInView="visible">Di sisi lain, isu perihal eksploitasi terhadap pengemudi ojek <i>online</i> menjadi perhatian serius pada ekonomi gig. Meskipun model kerja ini memberikan fleksibilitas yang dihargai oleh sebagian besar pengemudi, tetapi mereka juga rentan terhadap potensi terjadinya eksploitasi.</motion.p>
              <motion.p className='mb-6' variants={fadeUpParagraph} viewport={{once:true}} initial="hidden" whileInView="visible">“Dikatakan eksploitasi ketika dia harus bekerja selama berpuluh jam atau berbelas jam untuk bisa mendapatkan hasil yang tidak banyak, Itu dinamakan eksploitasi. Tapi kalau misalkan itu dia diberikan kebebasan untuk bisa mengambil berapapun jam kerjanya, terus kemudian dia kita rasa cukup 3 jam dia mendapatkan Rp 150.000,00 ya itu tidak masalah karena itu adalah bentuk dari feksibilitas tenaga kerja gig gitu kan. Nah yang menjadi masalah adalah perjanjian kerja antara misalnya dan <i>platformnya</i>,” jelas Nailul Huda.</motion.p>
              <motion.p className='mb-6' variants={fadeUpParagraph} viewport={{once:true}} initial="hidden" whileInView="visible">Fleksibilitas menjadi ciri utama dalam ekonomi gig karena model bisnis ini menekankan pada ketersediaan layanan atau pekerjaan sesuai permintaan. Keistimewaan ini juga memungkinkan para pekerja atau penyedia layanan untuk bekerja sesuai dengan jadwal yang mereka tentukan sendiri, tanpa keterikatan pada jam kerja yang tetap atau lokasi tertentu, sehingga pada konteks ekonomi gig pada bidang layanan jasa transportasi <i>online</i>, perusahaan dilarang untuk memaksa pekerjanya bekerja dalam batas waktu tertentu.</motion.p>
              <motion.p className="mb-6" variants={fadeUpParagraph} viewport={{once:true}} initial="hidden" whileInView="visible">“<i>Platform</i> tidak boleh memaksa pekerja itu untuk kerja selama beberapa jam tertentu, itu yang pertama. Yang kedua adalah <i>platform</i> ini memberikan kesempatan yang sama bagi para mitra untuk mendapatkan penghasilan di mana pun, dari manapun, jam kapanpun, untuk mendapatkan kesempatan yang sama. Sehingga kita bisa lihat di situ ada pembagian pendapatan yang adil bagi para mitra,” ujarnya.</motion.p>
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
    </Wrapper >
  );
};

export default DetailAntara;
