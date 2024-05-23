import Wrapper from '../assets/wrapper/detailUpaya';
import Navbar from '../components/Navbar';
import Background from "../assets/images/background-detail.png";
import { FaArrowLeft } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { useNavigate, Link } from 'react-router-dom';
// import ImageUpah from "../assets/images/bagan-sect4.png"
import ImageKemnaker from "../assets/images/image-kemnaker.png"

const DetailUpaya = () => {
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

            <div id="content" className="relative z-10 p-10 text-justify rounded-xl mx-6 mt-10 mb-40 md:-mt-0 md:p-10 md:mb-60 md:rounded-3xl md:mx-64 bg-white">
              <button className="flex items-center space-x-2 mb-8 md:mb-4 text-lg font-bold text-pink-primary" onClick={buttonClickHome}>
                <FaArrowLeft />
                <span>Home</span>
              </button>

              <h1 className="text-2xl font-bold mb-6 text-start">Upaya Kementerian Ketenagakerjaan untuk Meningkatkan Kesejahteraan Pengemudi Ojol</h1>
              <p className="mb-6">Sudah satu tahun berlalu usai Direktorat Jenderal Pembinaan Hubungan Industrial dan Jaminan Sosial Kementerian Ketenagakerjaan, Indah Anggoro Putri, menyatakan bahwa kementerian akan mengatur regulasi mengenai persoalan terkait ojek <i>online</i>, meliputi:</p>
              <div className="flex justify-center items-center">
                <div className="flex flex-col md:flex-row items-center md:space-x-7 md:mb-10">
                  <div className="text-center p-2 mb-7 w-52 md:w-36 bg-white rounded-lg shadow-blue-primary shadow-lg border border-blue-primary">
                    Jaminan Sosial
                  </div>
                  <div className="hidden md:block w-6 h-4 border-b-2 border-gray-500 border-dashed absolute transform rotate-45" style={{ top: '20rem', left: '10.9rem' }}></div>
                  <div className="text-center p-2 mb-7 w-52 md:w-36 md:mt-20 bg-white rounded-lg shadow-blue-primary shadow-lg border border-blue-primary">
                    Upah
                  </div>
                  <div className="hidden md:block w-6 h-8 border-b-2 border-gray-500 border-dashed absolute transform -rotate-45" style={{ top: '20rem', left: '20.6rem' }}></div>
                  <div className="text-center p-2 mb-7 w-52 md:w-52 bg-white rounded-lg shadow-blue-primary shadow-lg border border-blue-primary">
                    Ketiadaan Status Hubungan Kerja
                  </div>
                  <div className="hidden md:block w-12 h-8 border-b-2 border-gray-500 border-dashed rounded-xl absolute transform -rotate-[150deg]" style={{ top: '19.5rem', left: '35.7rem' }}></div>
                  <div className="text-center p-2 mb-7 w-52 md:w-40 md:mt-20 bg-white rounded-lg shadow-blue-primary shadow-lg border border-blue-primary">
                    Waktu Jam Kerja
                  </div>
                </div>
              </div>
              <p className='mb-6'>Walaupun hingga saat ini memang belum ada peraturan yang jelas yang dikhususkan kepada mitra ojek <i>online</i>, Kementerian Ketenagakerjaan menegaskan bahwa pihaknya masih terus berupaya dalam mempelajari dan membuat regulasi untuk mereka. Nantinya, regulasi yang kelak direalisasikan, akan lebih condong kepada penekanan syarat kerja dan jaminan sosial.</p>
              <p className='mb-6'>“Pada dasarnya memang ada inisiasi untuk melakukan pembuatan regulasi. Namun, titik berat dari regulasi tersebut lebih kepada perlindungan-perlindungan yang sesuai dengan karakteristik dari bisnis model mereka. Kita masih melakukan komunikasi dengan beberapa pihak seperti pengemudi, aplikator, Kominfo dan Kemenhub, “ ujar Arjuna selaku Direktorat Hubungan Kerja dan Pengupahan Kementerian Ketenagakerja.</p>
              <figure className='my-6'>
                <img src={ImageKemnaker} className="container mx-auto size-full md:size-1/2" alt="Foto: Natania Rizky" />
                <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
              </figure>
              <p className='mb-6'>Profesi sebagai  pengemudi ojek <i>online</i> sendiri merupakan pekerjaan yang termasuk ke dalam ekonomi gig, jenis pekerjaan yang sifatnya sementara tanpa batasan yang pasti, berpusat pada permintaan atau proyek tertentu (pekerja yang berbasis permintaan). Yang menjadi keunggulan pada model bisnis ini adalah dari segi fleksibilitasnya. Pengemudi ojek <i>online</i> bekerja secara fleksibel, dalam artian, mereka dapat memilih jam kerjanya sendiri.</p>
              <p className='mb-6'>Sistem ekonomi gig merujuk pada model pekerjaan di mana seseorang bekerja sebagai pekerja lepas (kontrak) untuk tugas-tugas yang spesifik, dan seringkali melalui <i>platform</i> digital atau aplikasi. Keunggulan lain pada pekerja gig yakni mereka dapat menciptakan peluang lebih besar untuk mendapatkan penghasilan tambahan. Pasalnya, pekerja gig dapat mengambil beberapa pekerjaan sekaligus untuk menambah penghasilan mereka.</p>
              <p className='mb-6'>Namun, di balik keunggulan tersebut, perlu diketahui bahwa tidak selamanya pekerja gig membawa kemaslahatan bagi para pekerjanya. Fleksibilitas ini juga membawa risiko, terutama dalam hal perlindungan sosial bagi para pekerja gig. Bahkan, menurut <b className='underline'>laporan Bank Dunia</b> <Link className="text-blue-500 underline" to="https://www.worldbank.org/en/topic/jobsanddevelopment/publication/online-gig-work-enabled-by-digital-platforms">Working Without Borders: The Promise and Peril of Online Gig Work (worldbank.org)</Link> pekerja gig memiliki tingkat kerentanan yang lebih tinggi karena tidak sepenuhnya tercakup oleh skema perlindungan sosial.</p>
              <p className='mb-6'>Selain ketiadaan jaminan perlindungan sosial, beberapa sisi negatif lain dari ekonomi gig yakni para pekerjanya dilanda ketidakpastian pendapatan. Pekerja gig sering kali menghadapi dinamika pendapatan yang signifikan karena pekerjaan mereka bergantung pada permintaan pasar yang berubah-ubah.</p>
              <p className='mb-6'>Tak hanya itu, pekerja gig juga tidak dilindungi oleh undang-undang ketenagakerjaan yang sama seperti pekerja formal sehingga hal ini membuat mereka rentan terhadap eksploitasi atau perlakuan yang tidak adil.</p>
              <p className='mb-6'>Situasi ini juga menimbulkan pertanyaan krusial seperti &quot;sejauh mana perlindungan pemerintah terhadap pekerja gig ekonomi harus realisasikan?&quot; pertanyaan ini menjadi sangat masuk akal di tengah pesatnya perkembangan ekonomi gig di Indonesia. Seseorang yang bekerja sebagai pengemudi layanan transportasi <i>online</i>, atau pekerja lepas di berbagai sektor jasa ,sering kali berada pada posisi terdepan dalam ekonomi tanpa perlindungan sosial yang memadai.</p>
              <p className='mb-6'>Dalam hal ini, Kemnaker mengaku tengah mempelajari lebih dalam terkait regulasi seperti apa nantinya akan dibuat, mengingat pengemudi ojek <i>online</i> ini termasuk ke dalam kategori ekonomi gig, berbeda dengan pekerja formal atau pekerja tetap. Sehingga untuk membuat regulasi yang tepat untuk model bisnis ekonomi gig, tidak serta merta membutuhkan waktu yang cepat.</p>
              <p className='mb-6'>“Pekerjaan ini adalah bagian dari gig <i>worker</i>, yang menjadi kendala di pekerjaan yang satu ini adalah karena mereka itu lingkup pekerjaan yang sifatnya <i>low skill</i>, itu juga mempengaruhi daya tawar dari pekerja tersebut,” sambungnya.</p>
              <p className='mb-6'>Dengan mayoritas pengemudi ojek <i>online</i> memiliki tingkat pendidikan hanya SMA/SMK, kebanyakan dari mereka tidak memiliki keunggulan kompetitif berupa keterampilan atau keahlian kerja yang memadai. Hal ini mengakibatkan tingkat mobilitas yang rendah, kurangnya daya tawar, dan kapasitas yang terbatas dalam mencari pekerjaan alternatif bagi para pengemudi ojek <i>online</i>.</p>
              <p className='mb-6'>Arjuna menjelaskan bahwa Kemnaker telah membuka peluang untuk meningkatkan kapasitas para <i>driver</i> ojol dengan program-program yang sebenarnya sudah ada. Program yang didirikan dengan tujuan untuk meningkatkan minat dari para tenaga kerja atau SDM masyarakat untuk lebih menggali potensinya.</p>
              <p className='mb-6'>Program tersebut merupakan Program Tenaga Kerja Mandiri (TKM), fasilitas ini dapat diakses oleh seluruh masyarakat, khususnya kelompok-kelompok kerja yang mempunyai inisiatif untuk memulai usaha baru. Program ini ditujukan untuk membantu para pencari kerja yang ingin memulai usaha mereka sendiri dengan memberikan bantuan dalam bentuk pelatihan kewirausahaan, pendampingan, modal usaha, dan bantuan lainnya.</p>
              <p className='mb-6'>“Misalkan mereka pengen usaha, <i>let&apos;s say</i> kita ambil contoh yang dekatlah sama yang mereka (ojek <i>online</i>) Buka usaha, reparasi kendaraan bermotor. Mereka terdiri dari kelompok kerja itu ada 10 orang yang nanti diberikan pendampingan dari sisi aspek pengelolaan usahanya tersebut,” ujarnya.</p>
              <p className='mb-6'>Selain Program Tenaga Kerja Mandiri (TKM), Kementerian Ketenagakerja mempunyai fasilitas berupa aplikasi bernama SiapKerja yang diluncurkan pada tahun 2022 lalu. Aplikasi tersebut dirancang untuk individu yang tertarik dalam mencari pekerjaan, mengikuti pelatihan, mendapatkan sertifikasi profesional, dan berpartisipasi dalam kegiatan bisnis. Tak hanya itu, Siap Kera juga menyajikan beragam layanan publik serta kegiatan terkait ketenagakerja.</p>
              <p className='mb-6'>Perbedaan utama antara Program Tenaga Kerja Mandiri dan aplikasi Siap Kerja adalah tujuan dan pendekatannya. TKM bertujuan untuk memberdayakan masyarakat dengan memfasilitasi pendirian usaha mandiri, sedangkan Siap Kerja bertujuan untuk membantu para pencari kerja dalam mempersiapkan diri mereka untuk memasuki pasar kerja dengan memberikan akses ke berbagai sumber daya dan informasi.</p>
              <p className='mb-6'>“Kita punya Siap Kerja juga, itu bisa diakses untuk misalkan bagaimana memperoleh untuk mengakses program-program Kemnaker, mulai dari yang tadi terkait pekerjaan mandiri, terkait dengan pelatihan dan pemagangan dan vokasi. Kita juga punya aparatur-aparatur di daerah yang siap membantu apabila ada dari kalangan mereka yang membutuhkan akses untuk bisa menerima program tersebut,” </p>
              <p className='mb-6'>Walaupun Kemnaker telah menyediakan beberapa program tersebut yang ditujukan untuk membantu siapapun masyarakat yang membutuhkan, termasuk para pekerja informal yang notabenenya bersifat <i>low skill</i>, tetapi tidak dapat dipungkiri hal ini masih menjadi tantangan Kemnaker sendiri untuk memastikan bahwa program tersebut tersosialisasikan dengan baik agar tidak hanya menjadi “formalitas” semata. </p>
              <p className='mb-6'>Faktanya, masih banyak pengemudi ojek <i>online</i> di lapangan yang masih tidak tahu menahu adanya program Kemnaker. Lantas, apa gunanya program yang sudah ada jika para masyarakat yang menjadi target bantuan tidak mengetahui keberadaan program yang disediakan oleh Kemnaker.</p>
              <p className='mb-6'>“Jadi memang pada dasarnya programnya sudah ada, sarana untuk mengaksesnya pun sudah ada, cuma memang kita akui bahwa <i>hype</i> nya itu masih kurang, belum banyak yang tau, akan diupayakan untuk lebih menjangkau para driver itu,” Arjuna mengakui.</p>
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

export default DetailUpaya;
