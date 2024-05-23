import Wrapper from '../assets/wrapper/detailMengurai';
import Navbar from '../components/Navbar';
import Background from "../assets/images/background-detail.png";
import IconPuzzle from "../assets/images/icon-puzzle.png"
import { FaArrowLeft } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const DetailMengurai = () => {
  const navigate = useNavigate();

  const buttonClickHome = () => {
    navigate("/")
  }

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
              <motion.button className="flex items-center space-x-2 mb-8 md:mb-4 text-lg font-bold text-pink-primary" onClick={buttonClickHome} whileHover={{scale:1.2}}>
                <FaArrowLeft />
                <span>Home</span>
              </motion.button>


              <div className="flex items-center text-justify mb-8 md:mb-4">
                <img src={IconPuzzle} alt="Icon Jam" className="w-10 h-10 mr-2" />
              </div>

              <motion.h1 className="text-2xl text-start font-bold mb-6" variants={slideLeftHeadline} initial="hidden" animate="visible">Mengurai Keterkaitan <i>Sharing Economy</i> dan <i>Economy Gig</i> dari Perspektif Transportasi <i>Online</i></motion.h1>
              <motion.p className="mb-6" variants={fadeUpParagraph} initial="hidden" animate="visible">Ketika mendengar kata &quot;berbagi&quot;, mungkin yang terlintas di benak Anda adalah saling memberi atau membagi sesuatu dengan orang lain apapun jenisnya, baik itu barang, layanan, atau sumber daya. Selaras dengan hal tersebut, hal ini juga yang terjadi pada ekonomi berbagi atau yang dikenal dengan sebutan <i>sharing economy</i>. Lantas apa kaitannya antara <i>sharing economy</i> dan <i>economy gig</i> pada konteks transportasi <i>online</i>?</motion.p>
              <motion.p className='mb-6' variants={fadeUpParagraph} initial="hidden" animate="visible"><i>Sharing economy</i> merujuk pada model ekonomi di mana individu atau organisasi berbagi akses terhadap barang, layanan, atau sumber daya dengan orang lain melalui <i>platform</i> digital. Dalam konteks ekonomi gig, beberapa perusahaan menggunakan konsep <i>sharing economy</i> untuk menghubungkan penyedia layanan dengan konsumen mereka, memfasilitasi pertukaran sementara dari sumber daya dan layanan yang ada. </motion.p>
              <motion.p className='mb-6' variants={fadeUpParagraph} initial="hidden" animate="visible">Sebagai contoh dari <i>sharing economy</i>, individu atau organisasi berbagi sumber daya yang dimiliki seperti mobil atau motor yang dapat kita temukan pada layanan transportasi Grab, Gojek, Maxim. Pengemudi selaku pemilik modal dari sumber daya berbagi perjalanan dengan penumpang menggunakan kendaraan pribadi mereka. Contoh lain yakni tempat tinggal seperti Airbnb, menyewakan akomodasi yang dimiliki secara sementara, termasuk rumah, apartemen, atau kamar tamu atau keterampilan lain untuk mendapatkan manfaat ekonomi.</motion.p>
              <motion.p className='mb-6' variants={fadeUpParagraph} initial="hidden" animate="visible"><i>Sharing economy</i> dan <i>gig economy</i> merupakan hal yang berbeda. Namun, keduanya memiliki keterkaitan yang erat meskipun memiliki perbedaan dalam beberapa aspek. Keduanya melibatkan konsep berbagi sumber daya. Tak hanya itu, baik <i>sharing economy</i> maupun <i>gig economy</i> menawarkan fleksibilitas kerja yang lebih besar daripada model tradisional. Dalam <i>sharing economy</i>, seseorang bisa memanfaatkan sumber daya yang dimiliki sesuai dengan waktu dan kebutuhan mereka. <i>Sharing economy</i> dan <i>gig economy</i> pun sangat terkait dengan kemajuan teknologi digital. <i>Platform online</i> memainkan peran penting dalam menghubungkan penyedia sumber daya (dalam <i>sharing economy</i>) atau pekerja gig (dalam <i>gig economy</i>) dengan konsumen atau klien.</motion.p>
              <motion.p className='mb-6' variants={fadeUpParagraph} initial="hidden" animate="visible">Jasa layanan transportasi <i>online</i> yang mengadopsi konsep ekonomi berbagi untuk menghubungkan pemilik kendaraan dengan calon penumpang melalui aplikasi digital. Hal ini sesuai dengan prinsip ekonomi berbagi di mana memanfaatkan sumber daya yang ada sehingga tidak adanya sumber daya yang terbuang sia-sia.</motion.p>
              <motion.p className='mb-6' variants={fadeUpParagraph} initial="hidden" animate="visible">“Kembali lagi marwahnya dari transportasi <i>online</i> itu sebagai <i>sharing economy</i>, di mana tidak ada satu <i>space</i> kendaraan kita yang mubazir kemudian daripada nganggur ya dimanfaatkan, sehingga modal dari kepemilikan kendaraan kita bisa dibagi ke orang lain ,” terang Nailul Huda memberi penjelasan mengenai seperti apa sistem <i>sharing economy</i>.</motion.p>
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

export default DetailMengurai;
