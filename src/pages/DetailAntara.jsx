import Wrapper from '../assets/wrapper/detailAntara';
import Navbar from '../components/Navbar';
import Background from "../assets/images/background-detail.png";
import IconTanya from "../assets/images/icon-tanda-tanya.png"
import { FaArrowLeft } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

const DetailAntara = () => {
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
                <img src={IconTanya} alt="Icon Jam" className="w-10 h-10 mr-2" />
              </div>

              <h1 className="text-2xl font-bold mb-4">Antara Terpaksa dan Pilihan, Alasan Pengemudi Ojol Terlibat dalam Hubungan Kemitraan yang Tidak Menguntungkan</h1>
              <p className="mb-4">Beberapa dari Anda mungkin mempertanyakan mengapa masih banyak orang yang bersedia menjadi mitra meskipun hubungan kemitraan tersebut dianggap merugikan diri mereka sendiri?</p>
              <p className='mb-4'>Penjelasan atas pertanyaan ini terkait erat dengan kondisi pasar kerja di Indonesia yang semakin rentan <i>(precarious labour market)</i>, hal ini  terjadi ketika terdapat banyak pekerjaan yang tidak memiliki ketidakpastian yang merujuk pada pekerjaan dengan upah rendah, tanpa perlindungan, dan tanpa jaminan keamanan kerja.</p>
              <p className='mb-4'>Situasi pasar tenaga kerja yang tidak stabil akan mendorong pertambahan individu yang terlibat dalam model kerja yang tidak konvensional. Dalam kondisi pasar tenaga kerja yang rentan, pekerja sering kali merasa terpaksa menerima kondisi kerja yang tidak menguntungkan daripada tidak memiliki pekerjaan.</p>
              <p className='mb-4'>Masalah dalam hubungan kemitraan bukan hanya tentang keputusan pribadi apakah mereka ingin atau tidak ingin terlibat dalam hubungan kemitraan. Namun, ini juga merupakan masalah struktural yang harus diatasi melalui intervensi kebijakan. Selama masih ada kekurangan dalam regulasi hukum terkait hubungan kemitraan, maka hubungan kemitraan yang tidak teratur akan terus meningkat.</p>
              <p className='mb-4'>Sebagai dampaknya, pengusaha akan cenderung memilih untuk mengontrak pekerja dengan hubungan kemitraan karena hal ini memungkinkan mereka untuk menghindari kewajiban membayar upah minimum, pesangon, BPJS Ketenagakerjaan, dan hak-hak tenaga kerja lainnya. Sebaliknya, para pekerja akan semakin merasa terpuruk.</p>
              <p className="mb-4">Di sisi lain, isu perihal eksploitasi terhadap pengemudi ojek <i>online</i> menjadi perhatian serius pada ekonomi gig. Meskipun model kerja ini memberikan fleksibilitas yang dihargai oleh sebagian besar pengemudi, tetapi mereka juga rentan terhadap potensi terjadinya eksploitasi.</p>
              <p className='mb-4'>“Dikatakan eksploitasi ketika dia harus bekerja selama berpuluh jam atau berbelas jam untuk bisa mendapatkan hasil yang tidak banyak, Itu dinamakan eksploitasi. Tapi kalau misalkan itu dia diberikan kebebasan untuk bisa mengambil berapapun jam kerjanya, terus kemudian dia kita rasa cukup 3 jam dia mendapatkan Rp 150.000,00 ya itu tidak masalah karena itu adalah bentuk dari feksibilitas tenaga kerja gig gitu kan. Nah yang menjadi masalah adalah perjanjian kerja antara misalnya dan <i>platformnya</i>,” jelas Nailul Huda.</p>
              <p className='mb-4'>Fleksibilitas menjadi ciri utama dalam ekonomi gig karena model bisnis ini menekankan pada ketersediaan layanan atau pekerjaan sesuai permintaan. Keistimewaan ini juga memungkinkan para pekerja atau penyedia layanan untuk bekerja sesuai dengan jadwal yang mereka tentukan sendiri, tanpa keterikatan pada jam kerja yang tetap atau lokasi tertentu, sehingga pada konteks ekonomi gig pada bidang layanan jasa transportasi <i>online</i>, perusahaan dilarang untuk memaksa pekerjanya bekerja dalam batas waktu tertentu.</p>
              <p className="mb-4">“<i>Platform</i> tidak boleh memaksa pekerja itu untuk kerja selama beberapa jam tertentu, itu yang pertama. Yang kedua adalah <i>platform</i> ini memberikan kesempatan yang sama bagi para mitra untuk mendapatkan penghasilan di mana pun, dari manapun, jam kapanpun, untuk mendapatkan kesempatan yang sama. Sehingga kita bisa lihat di situ ada pembagian pendapatan yang adil bagi para mitra,” ujarnya.</p>
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

export default DetailAntara;
