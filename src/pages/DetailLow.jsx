import Wrapper from '../assets/wrapper/detailLow';
import Navbar from '../components/Navbar';
import Background from "../assets/images/background-detail.png";
import IconSecurity from "../assets/images/icon-security.png"
import { FaArrowLeft } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const DetailLow = () => {
  const navigate = useNavigate();

  const buttonClickHome = () => {
    navigate("/")
  }

  return (
    <Wrapper>
      <div>
        <Navbar />
        <div className="relative flex flex-col bg-cream-primary min-h-screen md:pt-14">
          <div className="relative flex-grow bg-pink-primary no-bg-desktop">
            <img
              src={Background}
              className="absolute hidden md:block inset-0 w-full h-full object-cover md:object-fill z-0"
            />

            <div id="content" className="relative z-10 p-10 text-justify rounded-xl mt-10 md:-mt-0 mx-6 mb-40 md:p-10 md:mb-60 md:rounded-3xl md:mx-64 bg-white">
              <button className="flex items-center space-x-2 mb-8 md:mb-4 text-lg font-bold text-pink-primary" onClick={buttonClickHome}>
                <FaArrowLeft />
                <span>Home</span>
              </button>


              <div className="flex items-center text-justify mb-8 md:mb-4">
                <img src={IconSecurity} alt="Icon Jam" className="w-10 h-10 mr-2" />
              </div>

              <h1 className="text-2xl text-start font-bold mb-6"><i>Low Skill Labor Trap</i>, Jebakan Pekerjaan Keterampilan Rendah yang Menjamur</h1>
              <p className="mb-6">Para pekerja gig pada dasarnya memiliki risiko terperangkap dalam pekerjaan dengan keterampilan rendah, yang dikenal sebagai istilah <i>low skilled labor trap</i>, pekerja di sektor gig yang memiliki kualitas rendah dan tidak mempunyai daya tawar tinggi sehingga rentan di eksploitasi. Masalah ini sangat relevan dalam ekonomi gig, terutama di sektor pengemudi ojek maupun taksi <i>online</i>.</p>
              <p className='mb-6'>“Kekhawatiran saya adalah kita terjebak dalam <i>low skill labor trap</i>, pekerja yang memiliki kualitas <i>skill</i> yang rendah, atau bisa kita bilang masih belum menyentuh level tertinggi dari satu kualitas tenaga kerja, ini bisa dilihat dari ketika lulusan SMA ataupun lulusan SMP, dia punya surat izin mengemudi lalu ia bekerja sebagai mitra dari transportasi <i>online</i>,  sebagian masyarakat sudah menganggap itu sudah oke gitu, karena mereka mendapatkan pendapatan dan menganggap bisa mencukupi kebutuhan, tapi meninggalkan kebutuhan akan meningkatkan <i>skill</i> dari pekerja gig itu sendiri, makanya kita juga dorong pemerintah aplikator dan sebagainya untuk bisa memberikan pelatihan,” </p>
              <p className='mb-6'>“Sebaliknya ketika pekerja ini sifatnya <i>high skill labor</i>, dia bisa memberikan daya tawar lebih tinggi,” ujarnya. Ia berharap masyarakat tidak menganggap pekerjaan transportasi <i>online</i> sebagai pekerjaan utama,” jelas Nailul Huda.</p>
              <p className='mb-6'>Mereka mungkin terjebak dalam pekerjaan yang tidak menawarkan banyak kesempatan untuk meningkatkan kapabilitasnya, tetapi nasi sudah menjadi bubur. Saat ini yang dibutuhkan bagi para pekerja gig adalah dukungan berupa insentif dan fasilitas yang memungkinkan mereka untuk meningkatkan kemampuan dan mendapatkan pekerjaan dengan tingkat keterampilan yang lebih tinggi. Prioritas pemerintah yakni memberikan pelatihan keterampilan kepada para pekerja gig, khususnya mereka yang sifatnya <i>low skill labor</i>.</p>
              <p className='mb-6'>Kini, yang perlu menjadi perhatian bagi Kementerian Ketenagakerjaan maupun aplikator adalah memastikan sosialiasi dan penyebaran program yang cukup luas kepada para pengemudi ojek <i>online</i>, sehingga mereka dapat mengetahui dan memanfaatkan program tersebut dengan sebaik mungkin.</p>
            </div>

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

export default DetailLow;
