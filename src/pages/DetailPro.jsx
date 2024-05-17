import Wrapper from '../assets/wrapper/detailPro';
import Navbar from '../components/Navbar';
import Background from "../assets/images/background-detail.png";
import IconPeople from "../assets/images/icon-people.png"
import { FaArrowLeft } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

const DetailPro = () => {
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
                <img src={IconPeople} alt="Icon Jam" className="w-10 h-10 mr-2" />
              </div>

              <h1 className="text-2xl font-bold mb-4">Pro kontra  <i>Sharing Economy</i> pada Transportasi <i>Online</i> Indonesia</h1>
              <p className="mb-4">“Kalau kita lihat dari <i>sharing economy</i>, yang memiliki modal (sumber daya) pasti dia akan mendapatkan bagian terbesar, mitra yang mendapatkan <i>sharing revenue</i> yang paling besar, karena modal (motor/mobil) dari mereka , tenaga kerja juga mereka sendiri, kemudian juga banyak hal lain yang mereka tanggung sendiri,” kata Nailul Huda.</p>
              <p className='mb-4'>Menurut ahli ekonomi digital tersebut, yang mendapatkan jumlah besar adalah para mitra, karena merekalah yang memiliki aset berupa motor atau mobil yang dapat digunakan dan disewakan kepada orang lain yang membutuhkannya</p>
              <p className='mb-4'>“Aplikator itu kan dapetnya dia 15 persen, artinya sisanya didapatkan oleh mitra. Kalau kita hitung untuk pembiayaan <i>service</i> untuk aplikasi, <i>service</i> untuk <i>database</i>, <i>service</i> untuk mempertemukan antara teknologi lah ya, teknologi itu kan juga harus dihitung, jadi memang saya rasa saat ini yang paling banyak didapatkan secara nominal ya masih mitra sebenarnya,”</p>
              <p className='mb-4'>Walaupun mitra tetap mendapatkan bagian terbesar dalam konteks <i>sharing economy</i>,  Huda sangat menyayangkan apabila mereka tidak difasilitasi dengan ketersediaan jaminan sosial dan sebagainya, sehingga baik pemerintah maupun aplikator, perlu menyadari dan menyediakan jaminan sosial bagi pekerja gig.</p>
              <p className='mb-4'>“Yang kita harapkan ya pemerintah maupun aplikator harus mendorong penyediaan jaminan sosial, itu yang paling utama, jaminan kesehatan, dan jaminan untuk uang pensiun, baik itu untuk mitranya sendiri secara individual atau untuk keluarganya secara keseluruhan,” harapnya.</p>
              <p className="mb-4">Jika kita melihat secara jumlah memang mitra yang mendapat bagian besar dari <i>sharing economy</i> ini, nampaknya masih menjadi perdebatan jika kita mengatakan transportasi <i>online</i> ini termasuk ke dalam ekonomi berbagi. Melansir buku yang berjudul “Menyoal Kerja Layak dan Adil dalam Ekonomi Gig di Indonesia” memaparkan bahwa filosofi ekonomi berbagi tidak terjadi pada <i>platform</i> transportasi <i>online</i>. <i>Platform</i> seperti Gojek, Grab, dan Maxim memperlihatkan bahwa adanya ketimpangan dalam hubungan kekuatan dalam relasi kerja dan distribusi ekonomi.</p>
              <p className='mb-4'>Relasi yang timpang ini terjadi karena dominasi kekuatan oleh <i>platform</i> yang membuat keputusan tanpa keterlibatan mekanisme demokrasi, terutama dalam hal pembagian pendapatan dan proses kerja yang adil. Hal ini mengakibatkan prinsip keadilan dalam pembagian pendapatan dan proses kerja yang seharusnya menjadi bagian dari konsep ekonomi berbagi, malah menunjukkan kenyataan yang bertentangan.</p>
              <p className='mb-4'>Dapat dikatakan, gig <i>worker</i> sebagai pekerjaan yang menjalankan model <i>sharing economy</i> adalah ketika karakteristik dari ekonomi berbagi yang meliputi pembagian, pengaturan kerja, dan pendapatan secara adil terpenuhi. </p>
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

export default DetailPro;
