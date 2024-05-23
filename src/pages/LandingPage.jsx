/* eslint-disable react/no-unescaped-entities */
import Wrapper from "../assets/wrapper/landingPage"
import Navbar from "../components/Navbar"
import Stroke from "../assets/images/stroke.png"
import gojek1 from "../assets/images/gojek1.png";
import gojek2 from "../assets/images/gojek2.png";
import cloud1 from "../assets/images/cloud1.png"
import cloud2 from "../assets/images/cloud2.png"
import cloud3 from "../assets/images/cloud3.png"
import building from "../assets/images/building.png"
import vectorSect4 from "../assets/images/vector-sect4.png"
import diagramSect4 from "../assets/images/bagan-sect4.png"
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import grab from "../assets/images/grab.png"
import indrive from "../assets/images/indrive.png"
import maxim from "../assets/images/maxim.png"
import gojek from "../assets/images/gojek.png"
import ideas from "../assets/images/ideas.png"
import persen from "../assets/images/persen.png"
import peta from "../assets/images/peta.png"
import dolar from "../assets/images/dolar.png"
import bintangUngu from "../assets/images/bintang-ungu.png"
import kado from "../assets/images/kado.png"
import jamPasir from "../assets/images/jam-pasir.png"
import tandaTanya from "../assets/images/tanda-tanya.png"
import human from "../assets/images/human.png"
import tandaSeru from "../assets/images/tanda-seru.png"
import puzzle from "../assets/images/puzzle.png"
import vectorEnd from "../assets/images/vector-end.png"
import ahliVideo from "../assets/video/Ahli ekonomi part 1.mp4"
import  { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform,useAnimation,useInView } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  const buttonClickGrab = () => {
    navigate("/grabPage")
  }

  const buttonClickMaxim = () => {
    navigate("/maximPage")
  }

  const buttonClickIndrive = () => {
    navigate("/indrivePage")
  }

  const buttonClickGojek = () => {
    navigate("/gojekPage")
  }

  const buttonClickUpaya = () => {
    navigate("/detailUpaya")
  }

  const buttonClickTransformasi = () => {
    navigate('/detailTransformasi');
  };

  const buttonClickAntara = () => {
    navigate('/detailAntara');
  };

  const buttonClickPro = () => {
    navigate('/detailPro');
  };

  const buttonClickLow = () => {
    navigate('/detailLow');
  };

  const buttonClickMengurai = () => {
    navigate('/detailMengurai');
  };
 
 const controls = useAnimation();
 const { ref, inView } = useInView({
   triggerOnce: true, // Animasi hanya dipicu sekali saat elemen masuk ke dalam viewport
   threshold: 0.1, // Persentase elemen yang harus terlihat di viewport sebelum memicu animasi
 });

 useEffect(() => {
   if (inView) {
     controls.start("show");
   }
 }, [controls, inView]);
  return (
    <Wrapper>
      <div className="bg-[#FFE3CA]">
        <Navbar />
        {/* SECTION-1 */}
        <div
          id="section1-div"
          className="flex justify-center z-10 absolute left-32 right-32 top-32 "
        >
          <div className="bg-[#0C359E] w-[940px] h-[660px] relative rounded-xl">
            <motion.img
              src={gojek2}
              alt=""
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: "easeIn",
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="absolute right-0 h-1/3 top-2 "
            />

            <h1 className="text-white text-4xl pt-16 text-center px-56 font-bold">
              Kesejahteraan Ojek Daring, Murni atau Ilusi?
            </h1>
            <motion.img
              src={gojek1}
              alt=""
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: "easeIn",
                    delay: 1,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="absolute top-16 "
            />

            <div className="absolute bottom-0 left-[5.5em] z-50   ">
              <motion.iframe
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0, height: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      delay: 2,
                      duration: 2,
                      stiffness: 100,
                      damping: 10,
                      type: "spring",
                    },
                    height: 450,
                  },
                }}
                src="https://www.youtube.com/embed/fcg8n9NMZt8?si=ucUw-F7nt_kE8uAk"
                className="rounded-xl"
                width={750}
                height={450}
                frameBorder={0}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            {/* <img
              src={gojek3}
              alt=""
              className="absolute bottom-0 w-10/12 inset-x-20 rounded-xl"
            /> */}
          </div>
        </div>

        <section id="section-1" className="bg-white">
          <img src={Stroke} alt="" className="mt-10 z-0 bg-[#FFE3CA]" />
          <img src={cloud2} alt="" className="absolute z-50 w-64 top-[760px]" />
          <img
            src={cloud3}
            alt=""
            className="absolute w-44 top-[550px] right-0 "
          />
        </section>
        {/* !!SECTION-1 */}

        {/* SECTION-1 part 2 */}
        <section id="section-1-2" className="bg-[#EE99C2] h-[700px] relative ">
          <img src={building} className="absolute w-full z-0" alt="" />
          <img
            src={cloud1}
            className="absolute w-80 top-[63px] right-0"
            alt=""
          />
          <div className="flex flex-col justify-center items-center absolute z-10 top-[150px] ">
            <div className="bg-white w-7/12 rounded rounded-[13px] ">
              <motion.div
                ref={ref}
                className="text-[#525252] text-justify text-md px-8 py-5"
                variants={{
                  hidden: { opacity: 0, x: -100 }, // Elemen tersembunyi di awal dan di luar layar di sumbu X
                  show: {
                    opacity: 1,
                    x: 0, // Elemen bergerak ke posisi aslinya di sumbu X
                    transition: {
                      delay: 0.5, // Delay animasi selama 0.5 detik
                      type: "spring",
                      stiffness: 100, // Kekakuan pegas
                      damping: 10, // Peredaman pegas
                    },
                  },
                }}
                initial="hidden"
                animate={controls}
              >
                <p className="mb-6">
                  Diantara kebisingan mesin sepeda motor yang menelusuri
                  jalan-jalan, terdapat ketidakpastian yang menyelimuti para
                  pengemudi ojek <i>online</i>. Mereka tidak hanya membawa
                  penumpang, tetapi juga beban harapan dan kebutuhan setiap
                  pelanggan, mereka mencari nafkah dari setiap perjalanan.
                  Namun, di balik pekerjaan yang mereka lakukan, tersembunyi
                  kenyataan pahit yang harus mereka hadapi.
                </p>
                <p>
                  Mitra merupakan status dari pengemudi ojek <i>online</i> yang
                  memberikan kesan kerjasama dan hubungan kesetaraan yang erat.
                  Namun, di balik status sebagai “mitra” kebenaran yang
                  mendasarinya adalah ketidakjelasan hukum dan legalitasnya.
                  Mereka menjalani pekerjaan tanpa jaminan, tanpa perlindungan,
                  dan tanpa kepastian akan masa depan mereka. Para pengemudi
                  menghadapi tantangan yang tak terhitung jumlahnya, termasuk
                  ketidakpastian pendapatan, tekanan untuk mencapai target, dan
                  risiko terjadinya kecelakaan di jalan hingga dapat merenggut
                  nyawa.
                </p>
                <p className="mt-6">
                  Berbagai konsekuensi pekerjaan mereka lakukan. Namun, apakah
                  langkah mereka yang cepat dan layanan yang efisien itu sejalan
                  dengan hak dan kesejahteraan yang pantas mereka terima?
                  Ataukah itu hanya gambaran ilusi dari mobilitas yang terus
                  berputar? Kesejahteraan dan kesetaraan ini bukan hanya tentang
                  uang, melainkan rasa aman, kesehatan, dan perlindungan memadai
                  yang setara dengan dedikasi mereka.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* !!SECTION-1 part 2 */}
        {/* Section 2  */}
        <section id="section-2">
          <div className="bg-[#FFE3CA]">
            <div id="padding" className="px-20 py-40 flex justify-center">
              <div id="box">
                <div id="heading" className="flex justify-center mb-20">
                  <h1 className="text-3xl font-bold text-[#3D3D3D] ">
                    Cerita{" "}
                    <span className="text-[#EE99C2]">
                      Ojek <i>Online</i>
                    </span>
                  </h1>
                </div>

                <div id="box-ojol">
                  <div className="grid lg:grid-cols-4 sm:grid-cols-1 flex justify-center">
                    <div
                      id="box-1"
                      className="bg-[#FFCC00] rounded rounded-[14px] px-5 h-fit py-8 mr-5"
                    >
                      <div
                        id="row1"
                        className="flex items-center justify-center relative"
                      >
                        <h1 className="text-[#FFEC41] text-3xl absolute left-0">
                          1
                        </h1>
                        <img src={maxim} className="w-28" alt="" />
                      </div>
                      <div id="row2 flex justify-center">
                        <h1 className="text-white font-bold text-lg flex justify-center px-10 py-8 text-center">
                          Ilusi Kesejahteragaan Bagi Maxim
                        </h1>
                      </div>
                      <div id="row3">
                        <div className=" text-justify bg-white rounded rounded-[12px] text-sm py-3 px-2">
                          <p>
                            Bayu (27), sedang asyik mengobrol dengan rekan
                            sejawatnya di sebuah tempat yang berada di daerah
                            Ciputat, Tangerang Selatan. Bangunan...
                          </p>
                          <button
                            onClick={buttonClickMaxim}
                            type="button"
                            className="flex items-center mt-5"
                          >
                            Read More
                            <MdArrowOutward />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      id="box-2"
                      className="bg-[#00AA13] rounded rounded-[14px] px-5 py-8 h-fit mx-5"
                    >
                      <div
                        id="row1"
                        className="flex items-center justify-center relative"
                      >
                        <h1 className="text-[#09DE20] text-3xl absolute left-0">
                          2
                        </h1>
                        <img src={gojek} className="w-28" alt="" />
                      </div>
                      <div id="row2 flex justify-center">
                        <h1 className="text-white font-bold text-md flex justify-center px-10 py-3 text-center">
                          Ojol Wanita Mengenang Masa Lalu, Nasib Gojek Tidak
                          Lagi Seperti Dulu
                        </h1>
                      </div>
                      <div id="row3">
                        <div className="bg-white text-justify  rounded rounded-[12px] py-3 px-2 text-sm">
                          <p>
                            Perempuan tak semata-mata dilahirkan hanya untuk
                            melahirkan dan menciptakan keturunan kembali, dalam
                            kata lain...
                          </p>
                          <button
                            type="button"
                            className="flex items-center mt-5"
                            onClick={buttonClickGojek}
                          >
                            Read More
                            <MdArrowOutward />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      id="box-3"
                      className="bg-[#B4E750] rounded rounded-[14px] px-5 py-8 ml-5 h-fit"
                    >
                      <div
                        id="row1"
                        className="flex items-center justify-center relative"
                      >
                        <h1 className="text-[#DCFB9B] text-3xl absolute left-0">
                          3
                        </h1>
                        <img src={indrive} className="w-28" alt="" />
                      </div>
                      <div id="row2 flex justify-center">
                        <h1 className="text-white font-bold text-lg flex justify-center px-10 py-8 text-center">
                          Di Balik Cerita Aplikasi Ojol asal Rusia
                        </h1>
                      </div>
                      <div id="row3">
                        <div className="bg-white text-justify rounded rounded-[12px] py-3 px-2 text-sm">
                          <p>
                            Indrive, mungkin beberapa di antara Anda masih asing
                            dengan nama tersebut. Dapat dikatakan, jasa layanan
                            transportasi yang masih baru ini memiliki
                            perbedaan...
                          </p>
                          <button
                            type="button"
                            className="flex items-center mt-5"
                            onClick={buttonClickIndrive}
                          >
                            Read More
                            <MdArrowOutward />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      id="box-4"
                      className="bg-[#00B14F] rounded rounded-[14px] px-5 py-6 h-fit ml-10"
                    >
                      <div
                        id="row1"
                        className="flex items-center justify-center relative"
                      >
                        <h1 className="text-[#33F589] text-3xl absolute left-0">
                          4
                        </h1>
                        <img src={grab} className="w-20" alt="" />
                      </div>
                      <div id="row2 flex justify-center">
                        <h1 className="text-white font-bold text-md flex justify-center px-10 py-8 text-center">
                          Dari Kejayaan Hingga Kesulitan: Perubahan Dinam...
                        </h1>
                      </div>
                      <div id="row3">
                        <div className="bg-white text-justify text-sm rounded rounded-[12px] py-3 px-2">
                          <p>
                            Usai mengantar makanan kepada sang pelanggan, pria
                            itu mematikan mesin motornya dan berhenti sejenak
                            untuk menghilangkan dahaga...
                          </p>
                          <button
                            onClick={buttonClickGrab}
                            type="button"
                            className="flex items-center mt-5"
                          >
                            Read More
                            <MdArrowOutward />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2 */}
        {/* Sectionn 3  */}
        <section id="section-3">
          <div className="bg-[#FFE3CA]">
            <div id="padding-sect3" className="px-40 py-14 ">
              <div
                id="box-sect3"
                className="bg-[#0C359E] rounded rounded-[13px] mb-20"
              >
                <div className="row-sect-3 flex flex-col items-center justify-center px-8 py-5">
                  <div className="flex">
                    <h1 className="text-white text-3xl font-bold">
                      Menolak Status 'Mitra, Ketua Asosiasi Ojek Daring Dorong
                      Perubahan Status Pengemudi Ojol
                    </h1>
                    <button>
                      <FaChevronDown className="text-white" />
                    </button>
                  </div>

                  <div className=" text-white text-justify ">
                    <p className="my-6">
                      Ketua Umum Asosiasi Pengemudi Ojek Daring Garda Indonesia,
                      Igun Wicaksono, menyayangkan pemerintah lantaran belum ada
                      kepastian hukum sampai detik ini mengenai status
                      kemitraan. Menurutnya, status pengemudi ojek <i>online</i>
                      sebagai “mitra” dianggap tidak memiliki kejelasan. Igun
                      juga berharap agar para pengemudi ojek <i>online</i> dapat
                      diubah menjadi karyawan tetap.
                    </p>
                    <p className="mb-6">
                      “Kita ingin membuka peluang dari rekan-rekan pengemudi ini
                      agar bisa menjadi karyawan atau pekerja tetap di
                      perusahaan aplikasi dengan status sebagai <i>driver</i>,
                      karena dengan posisi saat ini yang disebut mitra, kami
                      menilai ini hal yang tidak jelas. Mitra seperti apa yang
                      dimaksud oleh mereka? kami ini juga sebenarnya adalah
                      konsumen,” ujar Igun.
                    </p>
                    <p className="mb-6">
                      Menurut Ketum Asosiasi Pengemudi Ojek Daring Garda
                      Indonesia itu, para pengemudi ojek <i>online</i> yang saat
                      ini berstatus sebagai “mitra” juga merupakan bagian dari
                      konsumen. Igun menyatakan bahwa mitra menggunakan aplikasi
                      yang dimiliki oleh perusahaan. Tak hanya itu, mitra juga
                      diharuskan membayar potongan yang diterima dari para
                      pelanggan, baik itu penumpang, antaran barang maupun
                      makanan, sehingga dirinya menyebut mitra juga merupakan
                      bagian dari konsumen.
                    </p>
                    <p className="mb-6">
                      Pekerja ekonomi gig, dalam hal ini pengemudi ojek {""}
                      <i>online</i>, memiliki ciri tersendiri dengan merujuk
                      pada model bisnis di mana pekerja gig memiliki tingkat
                      fleksibilitas dibanding pekerja tetap. Hal ini juga yang
                      menjadi keunggulan bagi para pekerja <i>gig economy</i>{" "}
                      karena ketersediaan waktu yang fleksibel menjadi hal yang
                      sangat berharga bagi individu yang juga memiliki tanggung
                      jawab lain, seperti kegiatan belajar, tanggung jawab
                      keluarga, atau bahkan aspirasi untuk bekerja paruh waktu
                      tambahan.
                    </p>
                    <p className="mb-6">
                      Asosiasi Pengemudi Ojek Daring Garda Indonesia merupakan
                      perkumpulan yang terbentuk akibat peristiwa demonstrasi
                      yang dilakukan oleh para pengemudi ojek <i>online</i> di
                      Istana Merdeka, Jakarta Pusat, pada 27 Maret 2018 lalu.
                      Aksi tersebut diberi nama dengan “Gabungan Aksi Roda dua
                      Indonesia” atau disingkat Garda Indonesia.
                    </p>
                    <p className="mb-6">
                      Aksi demo tersebut digelar untuk menuntut hak kepada
                      pemerintah atas pendapatan yang terus menurun pada saat
                      itu, demo juga digelar dengan tujuan supaya tidak timbul
                      monopoli dari perusahaan aplikasi. Pada aksi demonstrasi
                      itu juga para pengemudi ojek <i>online</i> meminta tarif
                      diatur oleh pihak pemerintah dan juga legalitas dari ojek
                      <i>online</i>.
                    </p>
                    <p className="mb-6">
                      Berangkat dari aksi tersebut, pada awal Agustus tahun 2018
                      lalu, Kementerian Perhubungan mengundang seluruh elemen
                      ojek <i>online</i> untuk mendiskusikan permasalahan yang
                      terjadi, hingga akhirnya terbit Peraturan Menteri
                      Perhubungan Republik Indonesia nomor 12 tahun 2019 tentang
                      perlindungan keselamatan pengguna sepeda motor. Namun,
                      peraturan tersebut hanya membahas mengenai kemitraan,
                      keselamatan, biaya jasa, hingga aturan suspend. Peraturan
                      tersebut tidak mencantumkan angka pasti dari tarif ojol
                      dan ketiadaan sanksi apabila terdapat aplikator yang
                      melanggar melebihi batas tarif.
                    </p>
                    <p className="mb-6">
                      “Aturan yang sudah ditentukan oleh Kementerian Perhubungan
                      masih sebatas diskresi menteri perhubungan, bukan sebagai
                      acuan undang-undang atau bukan sebagai legalitas, sehingga
                      pada Peraturan Menteri Perhubungan nomor 12 tidak
                      mencantumkan apabila perusahaan aplikasi melakukan
                      pelanggaran tarif, ini yang membuat akhirnya tarif berlaku
                      liar karena tidak ada sanksi hukum dari para pelaku
                      aplikator,” ujarnya.
                    </p>
                    <p className="mb-6">
                      Peraturan Menteri Perhubungan Nomor PM. 12 Tahun 2019
                      merupakan peraturan pertama yang mengatur ojek{" "}
                      <i>online</i> di Indonesia. Peraturan ini awalnya dianggap
                      sebagai kemenangan bagi para pengemudi ojek <i>online</i>{" "}
                      karena akhirnya memberikan landasan hukum bagi layanan
                      ojek <i>online</i>. Namun keberadaannya banyak menimbulkan
                      kritik dan permasalahan, misalnya terkait terbatasnya
                      ruang lingkup serta kurang optimalnya pengawasan dan
                      pelaksanaannya.
                    </p>
                    <p className="mb-6">
                      Berselang empat tahun kemudian, yakni pada Agustus 2022
                      lalu, Kementerian Perhubungan menerbitkan aturan yakni
                      Keputusan Menteri Perhubungan nomor 564 tahun 2022
                      mengenai Pedoman Perhitungan Biaya Jasa Penggunaan Sepeda
                      Motor yang Digunakan untuk Kepentingan Masyarakat yang
                      Dilakukan dengan Aplikasi. Dari sinilah Kementerian
                      Perhubungan mulai memperhatikan masalah tarif pada ojek
                      <i>online</i> dengan merinci biaya jasa penggunaan sepeda
                      motor.
                    </p>
                    <p className="mb-6">
                      Isu mengenai tarif kerap kali menjadi persoalan yang
                      banyak dikeluhkan. Hal ini dikarenakan terdapat aplikator
                      yang bermain di “tarif bawah” sehingga menimbulkan
                      kerugian bagi para pengemudi.
                    </p>
                    <p className="mb-6">
                      “Jadi ada satu perusahaan aplikasi, sebut saja perusahaan
                      A,misalkan perusahaan ini patuh sesuai peraturan Menteri
                      Perhubungan, dengan tarif Rp. 2.500 per kilometer. Namun,
                      karena aplikasi A ini lebih laku, aplikasi B agar dapat
                      laku juga akhirnya dia bermain di tarif bawah. Maksudnya
                      di tarif bawah itu di luar dari peraturan menteri yang
                      sudah ditentukan, jadi misalnya di bawah Rp.2000, akhirnya
                      di sini terjadilah perang tarif, dan ini yang akan
                      dirugikan adalah para pengemudi,” tegas Igun.
                    </p>
                    <p className="mb-6">
                      Persaingan antara aplikasi layanan transportasi{" "}
                      <i>online</i> seringkali menjadi perlombaan untuk
                      mendapatkan lebih banyak pelanggan dengan menawarkan tarif
                      yang lebih rendah daripada yang seharusnya. Hal tersebut
                      sangat disayangkan karena ojol tidak dapat bersaing secara
                      sehat sesuai tarif yang ditentukan oleh pemerintah,
                      sehingga Igun mendorong pemerintah untuk membuat
                      undang-undang perihal sanksi hukum apabila terdapat
                      aplikator yang melanggar melebihi batas tarif.
                    </p>
                    <p className="mb-6">
                      “Ini (masalah tarif) yang banyak dikeluhkan. Maka itu kami
                      memerlukan adanya undang-undang,” timpalnya.
                    </p>
                    <p className="mb-6">
                      Kini sudah hampir satu dekade usai kehadiran transportasi{" "}
                      <i>online</i> membuka peluang bagi ekonomi gig di
                      Indonesia. Pertumbuhan ekonomi gig yang semakin pesat
                      tidak diikuti oleh regulasi yang memadai untuk memberikan
                      pedoman yang jelas bagi semua pihak yang terlibat dalam
                      industri ini. Igun Wicaksono berharap pada masa
                      pemerintahan yang akan datang, para pemangku kepentingan
                      dapat menjamin kesejahteraan pekerja pengemudi ojek
                      <i>online</i>.
                    </p>
                    <p className="mb-6">
                      “Kami berharap pemerintah selanjutnya adalah baik itu
                      legislatif maupun eksekutif yang akan menjabat di periode
                      yang baru ini bisa mendorong undang-undang legalitas bagi
                      pengemudi ojek daring ini bisa masuk dalam prioritas
                      legislasi nasional. Jadi dengan hal itu adanya jaminan
                      kesejahteraan juga, jaminan perlindungan maupun jaminan
                      keselamatan dari para pengemudi ojek <i>online</i> secara
                      tidak langsung. Dengan adanya undang-undang, jaminan
                      perlindungan sosial bisa dapatkan,” terangnya.
                    </p>
                    <p className="mb-6">
                      Menurut Igun, dengan adanya undang-undang diharapkan dapat
                      membantu para pengemudi dalam mendapatkan perlindungan
                      kesehatan dan keselamatan kerja yang memadai. Pasalnya
                      pekerjaan sebagai pengemudi ojek <i>online</i> memiliki
                      risiko yang tinggi mengingat mereka menghabiskan waktu
                      banyak di perjalanan. Dalam hal ini pula pengemudi
                      merupakan aset dari aplikator sehingga aplikator harus
                      menjaga para mitra ojol dengan baik.
                    </p>
                    <p className="mb-6">
                      “Sebagai contoh mungkin dalam undang-undang itu pihak
                      perusahaan aplikasi wajib untuk memberikan santunan sosial
                      apabila si pengemudi terlibat kecelakaan dan akhirnya
                      terjadi cacat atau meninggal dunia, bagi keluarga yang
                      ditinggalkan atau keluarga pengemudi yang pengemudinya
                      cacat. Terus juga keselamatan pun begitu, karena
                      keselamatan ini tidak hanya keselamatan bagi pengemudinya
                      juga, tetapi juga bagi penumpang yang dibawa ataupun pihak
                      ketiga lain yang terlibat dalam kecelakaan,” jelasnya.
                    </p>
                  </div>
                </div>
                <div className="flex-col justify-center w-full ">
                  <hr className="border-1 w-full" />
                  <p className="flex justify-center items-center py-2 text-white">
                    Tutup
                    <FaChevronUp className="ml-3 text-black-50 text-sm" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 3 */}
        {/* Section 4 */}
        <section id="section-4">
          <img src={vectorSect4} className="absolute z-0 bg-[#FFE3CA]" alt="" />
          <div className="relative flex flex-col justify-center">
            <div className="pt-[4.5rem] px-72" id="box-1-sect4">
              <div className="bg-[#F4F4F4] boxx-1 rounded rounded-[18px] px-8 py-10">
                <div className="heading flex justify-center">
                  <h1 className="text-[#3D3D3D] text-3xl font-bold flex justify-center text-center">
                    Upaya Kementerian Ketenagakerjaan untuk Meningkatkan
                    Kesejahteraan Pengemudi Ojol
                  </h1>
                </div>
                <div className="content text-justify text-sm text-[#525252]">
                  <p className="py-6">
                    Sudah satu tahun berlalu usai Direktorat Jenderal Pembinaan
                    Hubungan Industrial dan Jaminan Sosial Kementerian
                    Ketenagakerjaan, Indah Anggoro Putri, menyatakan bahwa
                    kementerian akan mengatur regulasi mengenai persoalan
                    terkait ojek <i>online</i>, meliputi :
                  </p>
                  <img src={diagramSect4} className="py-5" alt="" />
                  <p className="pb-6">
                    Walaupun hingga saat ini memang belum ada peraturan yang
                    jelas yang dikhususkan kepada mitra ojek <i>online</i>,
                    Kementerian Ketenagakerjaan menegaskan bahwa pihaknya masih
                    terus berupaya dalam mempelajari dan membuat regulasi untuk
                    mereka. Nantinya, regulasi yang kelak direalisasikan, akan
                    lebih condong kepada penekanan syarat kerja dan jaminan
                    sosial.
                  </p>
                  <p>
                    “Pada dasarnya memang ada inisiasi untuk melakukan pembuatan
                    regulasi. Namun, titik berat dari regulasi tersebut lebih
                    kepada perlindungan-perlindungan yang sesuai dengan
                    karakteristik dari bisnis model mereka. Kita masih melakukan
                    komunikasi dengan beberapa pihak seperti pengemudi,
                    aplikator, Kominfo dan Kemenhub, “ ujar Arjuna selaku
                    Direktorat Hubungan Kerja dan Pengupahan Kementerian
                    Ketenagakerja...
                  </p>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="bg-[#EE99C2] text-white rounded rounded-md px-5 py-2 mt-5"
                    onClick={buttonClickUpaya}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div className="bg-[#F4F4F4] boxx-1 rounded rounded-[18px] px-8 py-8 mt-20">
                <div className="heading flex justify-center">
                  <h1 className="text-[#3D3D3D] text-3xl font-bold flex justify-center text-center">
                    Pandangan Ahli mengenai Dinamika Pekerja Kontrak di Industri
                    Transportasi <i>Online</i>
                  </h1>
                </div>
                <div className="content text-justify text-sm text-[#525252]">
                  <p className="py-6">
                    Tren pekerja lepas atau pekerja kontrak saat ini nampaknya
                    tengah menjadi pekerjaan yang cukup digemari di Indonesia,
                    hal ini yang disebut sebagai ekonomi gig atau pekerja gig
                    (gig worker). Pasalnya, dengan keunggulan yang dimiliki oleh
                    ekonomi gig seperti jam kerja yang fleksibel, kebebasan
                    untuk mengejar suatu proyek, peluang untuk mendapatkan
                    penghasilan yang tidak hanya dari satu sumber saja, hingga
                    beberapa kelebihan lainnya menjadi alasan mengapa pekerjaan
                    ini cukup diminati oleh berbagai masyarakat saat ini.
                  </p>
                  <p className="pb-6">
                    “Ekonomi gig dapat dikatakan sebagai ekonomi yang memberikan
                    fleksibilitas bagi para pelaku usaha di ekonomi tersebut.
                    Kalau melihat data Survei Angkatan Kerja Nasional (Sakernas)
                    dari tahun 2015 hingga Agustus 2023, sejumlah 60% pekerja di
                    Indonesia didominasi pekerja informal, untuk saat ini memang
                    ekonomi gig itu tengah naik, artinya memang orang cenderung
                    lebih banyak terjun dalam ekonomi gig,” ujar Nailul Huda,
                    selaku peneliti ekonomi digital yang saat ini juga tengah
                    menduduki jabatan sebagai direktur ekonomi digital Center of
                    Economic and Law Studies (CELIOS).
                  </p>
                  <p className="pb-6">
                    Ekonomi gig terbagi menjadi dua jenis, yang pertama adalah
                    ekonomi gig <i>online</i> base, di mana para pekerjanya
                    dapat bekerja tanpa perlu berinteraksi tatap muka secara
                    langsung. Beberapa contoh ekonomi gig <i>online</i> base
                    seperti graphic designer, programmer, dan lainnya. Sedangkan
                    ekonomi gig location based, sesuai dengan namanya, jenis
                    ekonomi ini membutuhkan kehadiran fisik dalam melakukan
                    suatu pekerjaan di lokasi tertentu, salah satu contohnya
                    ialah <i>driver</i> ataupun mitra dari transportasi{" "}
                    <i>online</i>.
                  </p>
                  <p className="pb-6">
                    Unik. Kalimat itulah yang dilontarkan Nailul Huda selaku
                    pakar ekonomi digital dalam memandang sistem ekonomi ini.
                    Menurutnya, ekonomi gig sangat mengedepankan fleksibilitas
                    bagi para pekerja sehingga hal ini yang menjadi salah satu
                    keistimewaan.
                  </p>
                  <p className="pb-6">
                    “Jam kerja di ekonomi gig itu sangat fleksibel, bisa dalam
                    satu hari itu kita kerja cuman 2 jam, 3 jam, atau bahkan 12
                    jam, tergantung dari pekerjaan dan output yang kita
                    selesaikan, berbeda dengan pekerjaan konvensional yang sudah
                    terjadwalkan pekerjaannya misal dari jam 8 sampai dan itu
                    berlangsung selama bertahun tahun, ini salah satu
                    karakteristik unik dari ekonomi gig,” ujarnya.
                  </p>
                  <p className="pb-6">
                    Walaupun di sisi lain ekonomi gig ini tidak memberikan
                    pendapatan yang stabil dan pasti, keunggulan lain dari gig
                    worker menurut direktur ekonomi digital tersebut adalah
                    kemampuan para pekerjanya dalam memanfaatkan peluang untuk
                    mencari pekerjaan lain sesuai dengan skill yang dimiliki.
                    Dengan begitu, mereka bisa mendapatkan penghasilan dari
                    berbagai tempat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4 */}
        {/* section 5 */}
        <section className="" id="section-5">
          <div className="bg-[#FFE3CA]">
            <div className="flex flex-col justify-center py-32 px-72 mt-14">
              <div className="heading">
                <h1 className="text-2xl font-bold text-[#3D3D3D] text-center px-48">
                  Dilema Mengubah Status Mitra Menjadi {"            "}
                  <span className="text-[#EE99C2]">Karyawan Tetap</span>
                </h1>
              </div>
              <div className="content text-[#3D3D3D] text-justify ">
                <p className="my-5">
                  Ekonomi gig mulai ramai diperbincangkan di Tanah Air ketika
                  <i>platform</i> Gojek hadir pada 2015 lalu, sebuah perusahaan
                  teknologi yang menyediakan berbagai jasa layanan seperti antar
                  penumpang, antar makanan, antar barang, hingga beberapa
                  layanan lain. Dengan hadirnya Gojek dan beberapa perusahaan
                  serupa lainnya, hal tersebut berhasil membuat angka
                  pengangguran terbuka di Indonesia menurun drastis.
                </p>
                <p className="mb-5">
                  “Jasa transportasi <i>online</i> ini mengurangi tingkat
                  pengangguran terbuka yang sangat efektif setelah booming nya
                  transportasi ojek <i>online</i> tahun 2016,” terang Nailul
                  Huda.
                </p>
                <p className="mb-5">
                  Hal yang membedakan ekonomi gig dari segi hukum
                  ketenagakerjaan dalam konteks transportasi <i>online</i>
                  apabila dilihat dari jenis pekerjaan lain, yakni terdapat pada
                  pekerjanya yang dikategorikan sebagai mitra atau partner.
                  Mereka tidak dianggap memiliki hubungan kerja dengan
                  perusahaan gig, tetapi hanya dianggap sebagai mitra atau rekan
                  kerja.
                </p>
                <p className="mb-5">
                  Istilah hubungan kemitraan tidak hanya diterapkan oleh
                  <i>platform-platform</i> seperti Gojek, Grab, atau Maxim,
                  tetapi juga umum digunakan oleh perusahaan-perusahaan
                  e-commerce seperti Shopee Express, J&T Express yang
                  menggunakan skema hubungan mitra untuk mempekerjakan kurirnya.
                </p>
                <p className="mb-5">
                  Namun, nampaknya hingga saat ini penyebutan “mitra” sebagai
                  status kerja dianggap sebagai alasan untuk menghindari
                  memberikan pengemudi ojek <i>online</i> dari jaminan upah
                  minimum, jaminan kesehatan, pesangon, upah lembur, hingga
                  kebebasan untuk berserikat bagi para pekerjanya.
                </p>
                <p className="mb-5">
                  Sulistiyani, dalam bukunya yang berjudul “Kemitraan dan
                  Model-model Pemberdayaan” mendefinisikan mitra sebagai bentuk
                  persekutuan antara dua pihak atau lebih yang membentuk suatu
                  ikatan kerjasama. Hal ini dilakukan atas dasar kesepakatan dan
                  rasa saling membutuhkan dalam rangka meningkatkan kapasitas
                  dan kapabilitas di suatu bidang usaha tertentu atau tujuan
                  tertentu sehingga dapat memperoleh hasil yang baik. Pemerintah
                  sendiri menegaskan bahwa kemitraan harus memiliki kedudukan
                  yang setara, sebagaimana yang dimaksud dalam Undang-undang
                  Republik Indonesia nomor 20 tahun 2008 sebagai berikut:
                </p>
                <div
                  className="text-[#FCFCFC] bg-white border border-[#EE99C2]  rounded rounded-lg px-5 py-4 my-5"
                  style={{ boxShadow: "5px 10px #EE99C2" }}
                >
                  <p className="text-[#3D3D3D] font-bold">Pasal 36</p>
                  <ol className="text-[#3D3D3D] ">
                    <li>
                      1. Dalam melaksanakan kemitraan sebagaimana dimaksud dalam
                      pasal 26 para pihak mempunyai kedudukan hukum yang setara
                      dan terhadap mereka berlaku hukum Indonesia.
                    </li>
                    <li>
                      2. Pelaksanaan kemitraan diawasi secara tertib dan teratur
                      oleh lembaga yang dibentuk dan bertugas untuk mengawasi
                      persaingan usaha sebagaimana diatur dalam peraturan
                      perundang-undangan.
                    </li>
                  </ol>
                </div>
                <p className="mt-5">
                  Sayangnya, apa yang terjadi di lapangan berbeda dengan
                  seharusnya prinsip kesetaraan yang dimaksud. Perusahaan
                  aplikasi sangat mendominasi, seperti masalah suspend atau
                  keputusan sanksi terhadap mitra dilakukan pihak aplikator
                  secara sepihak, hingga dilarang untuk membentuk serikat
                  pekerja
                </p>
                <div className="rounded rounded-2xl bg-[#0C359E] px-5 py-7 my-5">
                  <div className="flex justify-between items-center">
                    <h1 className="text-white text-2xl font-bold">
                      Lemah Mitra, Timpang Kontrak
                    </h1>
                    <img src={ideas} alt="" />
                  </div>
                  <p className="text-white">
                    Dominasi perusahaan aplikator terhadap mitra ojek daring
                    jabodetabek, 2023
                  </p>
                  <div className="grid grid-cols-2 my-3 flex justify-items-center">
                    <div
                      id="persen"
                      className=" bg-[#FCFCFC] rounded-2xl px-3 py-2 w-11/12"
                    >
                      <div className="flex items-center my-3">
                        <img src={persen} className="w-[2.8em]" alt="" />
                        <h1 className="ml-2 font-bold">
                          Potongan Aplikator ke Mitra
                        </h1>
                      </div>
                      <div className="px-3">
                        <table className="w-full">
                          <tr>
                            <td className="">
                              <p className="py-2">N = 225</p>
                            </td>
                          </tr>
                          <tr className="">
                            <td className="bg-[#E1F7E7] rounded-l-md">
                              <p className="py-1">20%</p>
                            </td>
                            <td className="bg-[#E1F7E7] rounded-r-md">
                              <p className="py-2">: 52.9%</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">15%</p>
                            </td>
                            <td>: 0.4%</td>
                          </tr>
                          <tr className="">
                            <td className="py-2">10%</td>
                            <td>: 17.8%</td>
                          </tr>
                          <tr className="">
                            <td>
                              <p className="py-2">Tidak Menjawab</p>
                            </td>
                            <td>: 28.9%</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div
                      id="peta"
                      className=" bg-[#FCFCFC] rounded-2xl px-3 py-2 w-11/12"
                    >
                      <div className="flex items-center my-3">
                        <img src={peta} className="w-[2.8em]" alt="" />
                        <h1 className="ml-2 font-bold">Tarif per KM</h1>
                      </div>
                      <div className="px-3">
                        <table className="w-full">
                          <tr className="bg-[#E1F7E7]">
                            <td className="bg-[#E1F7E7] rounded rounded-l-md">
                              <p className="py-2">Jam Normal</p>
                            </td>
                            <td className="bg-[#E1F7E7] rounded rounded-r-md">
                              <p className="py-2">: Rp 2.500 - Rp. 2.800</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">(N = 139)</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-[#E1F7E7] rounded rounded-l-md">
                              <p className="py-2">Jam Sibuk </p>
                            </td>
                            <td className="bg-[#E1F7E7] rounded rounded-r-md">
                              <p className="py-2">Rp 2.500 - Rp. 4.000</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">10%</p>
                            </td>
                            <td>: 17.8%</td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">(N = 147)</p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 flex justify-items-center">
                    <div
                      id="dolar"
                      className=" bg-[#FCFCFC] rounded-2xl px-3 py-2 w-11/12"
                    >
                      <div className="flex items-center my-3 ">
                        <img src={dolar} className="w-[2.8em]" alt="" />
                        <h1 className="ml-2 font-bold">
                          Performa minimal untuk bonus
                        </h1>
                      </div>
                      <div className="px-3">
                        <table className="w-full">
                          <tr>
                            <td>
                              <p className="py-2">(N = 225)</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">80%</p>
                            </td>
                            <td>: Rp 2.500 - Rp. 2.800</td>
                          </tr>

                          <tr>
                            <td>
                              <p className="py-2">85%</p>
                            </td>
                            <td>: Rp 2.500 - Rp. 4.000</td>
                          </tr>
                          <tr>
                            <td className="bg-[#E1F7E7] rounded rounded-l-md">
                              <p className="py-2">90%</p>
                            </td>
                            <td className="bg-[#E1F7E7] rounded rounded-r-md ">
                              : 17.8%
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">95%</p>
                            </td>
                            <td>: 17.8%</td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">97%</p>
                            </td>
                            <td>: 17.8%</td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">Tidak Menjawab</p>
                            </td>
                            <td>: 17.8%</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div
                      id="bintangungu"
                      className=" bg-[#FCFCFC] rounded-2xl px-3 py-2 w-11/12"
                    >
                      <div className="flex items-center my-3">
                        <img src={bintangUngu} className="w-[2.8em]" alt="" />
                        <h1 className="ml-2 font-bold">
                          Rating minimal untuk bonus
                        </h1>
                      </div>
                      <div className="px-3">
                        <table className="w-full">
                          <tr>
                            <td>
                              <p className="py-2">(N = 225)</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">4 - 4,4</p>
                            </td>
                            <td>: Rp 2.500 - Rp. 2.800</td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">4,5</p>
                            </td>
                            <td>: Rp 2.500 - Rp. 4.000</td>
                          </tr>
                          <tr className="">
                            <td className="bg-[#E1F7E7] rounded rounded-l-md ">
                              <p className="py-2">4,6</p>
                            </td>
                            <td className="bg-[#E1F7E7] rounded rounded-r-md ">
                              : 17.8%
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">4,7</p>
                            </td>
                            <td>: 17.8%</td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">4,8</p>
                            </td>
                            <td>: 17.8%</td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">Tidak Menjawab</p>
                            </td>
                            <td>: 17.8%</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div
                      id="bintangungu"
                      className=" bg-[#FCFCFC] rounded-2xl px-3 py-2  w-6/12 mt-3"
                    >
                      <div className="flex items-center my-3">
                        <img src={kado} className="w-[2.8em]" alt="" />
                        <h1 className="ml-2 font-bold">
                          Insiden harian mendapatkan bonus
                        </h1>
                      </div>
                      <div className="px-3 text-sm ">
                        <table className="w-full">
                          <tr>
                            <td>
                              <p className="py-2">(N = 225)</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">
                                Setiap hari berhasil mendapatkan bonus
                              </p>
                            </td>
                            <td>: Rp 2.500 - Rp. 2.800</td>
                          </tr>

                          <tr>
                            <td>
                              <p className="py-2">
                                Tidak setiap hari mendapatkan bonus, hanya
                                beberapa kali sepekan
                              </p>
                            </td>
                            <td>: Rp 2.500 - Rp. 4.000</td>
                          </tr>
                          <tr>
                            <td className="bg-[#E1F7E7] rounded rounded-l-md">
                              <p className="py-2">
                                Tidak setiap hari mendapatkan bonus, hanya
                                beberapa kali sebulan
                              </p>
                            </td>
                            <td className="bg-[#E1F7E7] rounded rounded-r-md">
                              : 17.8%
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="py-2">Tidak Menjawab</p>
                            </td>
                            <td>: 17.8%</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <footer className="text-[#FCFCFC] flex justify-center">
                    <p>Sumber : Survei IDEAS, 15 April - 14 Mei 2023</p>
                  </footer>
                </div>
                <p className="">
                  Hingga berbagai kontra pun muncul, beragam masalah mulai dari
                  upah yang dianggap menyiksa para pengemudi ojek <i>online</i>{" "}
                  karena potongan yang terlalu besar, pengemudi ojek
                  <i>online</i> yang merasa dieksploitasi oleh aplikator, hingga
                  masalah mengenai status sebagai mitra yang dianggap tidak
                  memiliki kejelasan sampai hari ini. Igun Wicaksono, selaku
                  Ketua Umum Ojek Daring Garda Indonesia, berharap pemerintah
                  dapat mengubah status mitra menjadi pekerja formal atau
                  sebagai karyawan tetap. Menurutnya, dengan menyandang status
                  sebagai “mitra”, pekerja berada di posisi yang rentan karena
                  para pengemudi tidak mendapatkan hak dan perlindungan hukum
                  selayaknya orang yang bekerja pada suatu perusahaan.
                </p>
                <p className="mt-5">
                  Namun, alih-alih menjadi solusi yang tepat, direktur ekonomi
                  digital Center of Economic and Law Studies itu menegaskan
                  bahwa mengubah status mitra dengan menjadikannya karyawan
                  tetap (pekerja formal) tidaklah menyelesaikan masalah,
                  melainkan hanya akan menimbulkan masalah baru lantaran bisa
                  menjadi bumerang bagi perusahaan maupun mitra.
                </p>
                <div className="z-50 flex justify-center my-8">
                  <video
                    className="z-50 w-full rounded rounded-lg"
                    controls={true}
                  >
                    <source src={ahliVideo} type="video/mp4" />
                    Browser Anda tidak mendukung tag video.
                  </video>
                </div>

                <p className="mt-5">
                  “Apabila itu (diubah menjadi pekerja formal) dijadikan sebagai
                  sebuah solusi, saya rasa itu malah bisa jadi backfire bagi
                  mitra sendiri yang dia bisa terkena PHK atau layoff, karena
                  rasionalisasi dari perusahaannya itu sendiri, lalu bisa
                  kehilangan identitas dari pekerja gig-nya. Kalau dijadikan
                  pekerja, dia harus memenuhi syarat untuk jam kerjanya, lalu
                  mereka juga harus menentui syarat kualifikasinya,” jelas Huda.
                </p>
                <p className="mt-5">
                  Walaupun mengubah status mitra menjadi karyawan tetap dapat
                  memberi mereka akses kepada hak dan perlindungan yang lebih
                  luas seperti jaminan sosial, asuransi kesehatan, cuti, dan
                  upah minimum, tetapi hal tersebut juga akan mengurangi
                  fleksibilitas yang dimiliki oleh mitra pengemudi, mereka tidak
                  lagi dapat bekerja sesuai dengan jadwal, peluang untuk bekerja
                  di berbagai tempat pun sedikit,bahkan identitas{" "}
                  <i>gig economy</i>
                  dalam konteks ini juga akan menjadi hilang karena statusnya
                  diubah menjadi pekerja formal.
                </p>
                <p className="mt-5">
                  Nailul Huda mengatakan bahwa hal yang paling penting untuk
                  dilakukan saat ini adalah bukan semata mata mengubah status
                  mitra ojek <i>online</i> menjadi pekerja formal, tetapi
                  memberikan jaminan sosial untuk kesejahteraan para pengemudi
                  ojek <i>online</i>.
                </p>
                <p className="mt-5">
                  “Fleksibilitas dari mitra itu akan hilang ketika dia jadi
                  statusnya naik jadi pekerja, makanya yang kita dorong itu
                  bukan status jadi mitra dari pekerja, tetapi keberlindungan
                  ataupun keberpihakan <i>platform</i> dan pemerintah untuk bisa
                  melindungi mitranya, memberikan jaminan sosial, dan memberikan
                  pelayanan tambahan bagi mitra, sehingga mereka bisa keluar
                  dari garis kemiskinan atau ya istilahnya bisa lebih sejahtera
                  hidupnya,”
                </p>
                <p className="mt-5">
                  “Kalau kita lihat ketika pendapatan itu kurang dan sebagainya,
                  tapi dia sudah ada jaminan sosial yang sudah melingkupi
                  keluarga dari pekerja gig, itu sangat membantu sekali,”
                  tambahnya
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* section 5 */}
        {/* section 6 */}
        <section id="section-7">
          <div className="bg-[#FFE3CA]">
            <div className="flex flex-col justify-center py-30 px-52">
              <div className="grid grid-cols-2 flex justify-items-center">
                <div
                  id="jam-pasir"
                  className="bg-white rounded rounded-2xl py-8 px-7 w-10/12"
                >
                  <div className="head flex flex-col justify-start">
                    <img src={jamPasir} className="size-2/12 mb-4" alt="" />
                    <h1 className="font-bold text-lg text-[#3D3D3D]">
                      Transformasi Status Pengemudi Uber Dari Mitra ke Karyawan
                      Tetap di Inggris, Bagaimana Dampak bagi Indonesia jika
                      Mengikuti Jejaknya?
                    </h1>
                  </div>
                  <div className="content  text-[#3D3D3D] text-justify ">
                    <p className="text-[#3D3D3D]">
                      Pioner perusahaan teknologi asal Inggris yang menyediakan
                      jasa layanan transportasi <i>online</i>, tak lain dan tak
                      bukan ialah Uber, mengubah status para pengemudi yang
                      tadinya mitra menjadi karyawan tetap pada 2021 lalu. Hal
                      tersebut dikabulkan oleh Mahkamah Agung
                    </p>
                    <button
                      className=" flex items-center mt-2"
                      onClick={buttonClickTransformasi}
                    >
                      Baca Detail
                      <MdArrowOutward />
                    </button>
                  </div>
                </div>
                <div
                  id="tanda-tanya"
                  className="bg-white rounded rounded-2xl py-8 px-7 w-10/12"
                >
                  <div className="head flex flex-col justify-start">
                    <img src={tandaTanya} className="size-2/12 mb-4" alt="" />
                    <h1 className="font-bold text-lg text-[#3D3D3D]">
                      Antara Terpaksa dan Pilihan, Alasan Pengemudi Ojol
                      Terlibat dalam Hubungan Kemitraan yang Tidak Menguntungkan
                    </h1>
                  </div>
                  <div className="content text-[#3D3D3D] text-justify ">
                    <p className="text-[#3D3D3D]">
                      Beberapa dari Anda mungkin mempertanyakan mengapa masih
                      banyak orang yang bersedia menjadi mitra meskipun hubungan
                      kemitraan tersebut dianggap merugikan diri mereka sendiri?
                      Penjelasan atas pertanyaan ini terkait erat dengan kondisi
                      pasar kerja
                    </p>
                    <button
                      className=" flex items-center mt-2"
                      onClick={buttonClickAntara}
                    >
                      Baca Detail
                      <MdArrowOutward />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-7">
                <div
                  id="human"
                  className="bg-white rounded rounded-2xl py-8 px-7 w-11/12"
                >
                  <div className="head flex flex-col justify-start">
                    <img src={human} className="size-1/12 mb-4" alt="" />
                    <h1 className="font-bold text-lg text-[#3D3D3D]">
                      Pro kontra  <i>Sharing Economy</i> pada Transportasi{" "}
                      <i>Online</i> Indonesia
                    </h1>
                  </div>
                  <div className="content text-[#3D3D3D] text-justify ">
                    <p className="text-[#3D3D3D] ">
                      “Kalau kita lihat dari <i>sharing economy</i>, yang
                      memiliki modal (sumber daya) pasti dia akan mendapatkan
                      bagian terbesar, mitra yang mendapatkan sharing{" "}
                      <i>revenue</i>
                      yang paling besar, karena modal (motor/mobil) dari mereka
                      , tenaga kerja juga mereka sendiri, kemudian juga banyak
                      hal lain yang mereka tanggung sendiri,” kata Nailul Huda.
                    </p>
                    <button
                      className=" flex items-center mt-2"
                      onClick={buttonClickPro}
                    >
                      Baca Detail
                      <MdArrowOutward />
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 flex justify-items-center">
                <div
                  id="tanda-seru"
                  className="bg-white rounded rounded-2xl py-8 px-7 w-10/12"
                >
                  <div className="head flex flex-col justify-start">
                    <img src={tandaSeru} className="size-2/12 mb-4" alt="" />
                    <h1 className="font-bold text-lg text-[#3D3D3D]">
                      <i>Low Skill Labor Trap</i>, Jebakan Pekerjaan
                      Keterampilan Rendah yang Menjamur
                    </h1>
                  </div>
                  <div className="content text-[#3D3D3D] text-justify">
                    <p className="text-[#3D3D3D]">
                      Para pekerja gig pada dasarnya memiliki risiko
                      terperangkap dalam pekerjaan dengan keterampilan rendah,
                      yang dikenal sebagai istilah <i>low skilled labor trap</i>
                      , pekerja di sektor gig yang memiliki kualitas rendah dan
                      tidak mempunyai daya tawar tinggi
                    </p>
                    <button
                      className=" flex items-center mt-2"
                      onClick={buttonClickLow}
                    >
                      Baca Detail
                      <MdArrowOutward />
                    </button>
                  </div>
                </div>
                <div
                  id="puzzle"
                  className="bg-white rounded rounded-2xl py-8 px-7 w-10/12"
                >
                  <div className="head flex flex-col justify-start">
                    <img src={puzzle} className="size-2/12 mb-4" alt="" />
                    <h1 className="font-bold text-lg text-[#3D3D3D]">
                      Mengurai Keterkaitan <i>Sharing Economy</i> dan Economy
                      Gig dari Perspektif Transportasi <i>Online</i>
                    </h1>
                  </div>
                  <div className="content text-[#3D3D3D] text-justify ">
                    <p className="text-[#3D3D3D]">
                      Ketika mendengar kata "berbagi", mungkin yang terlintas di
                      benak Anda adalah saling memberi atau membagi sesuatu
                      dengan orang lain apapun jenisnya, baik itu barang,
                      layanan, atau sumber daya. Selaras dengan hal tersebut,
                      hal ini juga yang terjadi pada
                    </p>
                    <button
                      className=" flex items-center mt-2"
                      onClick={buttonClickMengurai}
                    >
                      Baca Detail
                      <MdArrowOutward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 6 */}
        {/* section 7 */}
        <section id="section-7">
          <div className="bg-[#FFE3CA] pt-28">
            <img src={vectorEnd} className="absolute z-0 bg-[#FFE3CA]" alt="" />
            <div className="flex justify-center bg-orange-bg">
              <div className="relative flex flex-col my-12 bg-[#FFE3CA] w-8/12 px-8 py-10 rounded rounded-b-2xl">
                <div className="head flex justify-center"></div>
                <div className="content text-[#3D3D3D] text-justify  ">
                  <p className="mb-5">
                    Pada akhirnya, nasib para pengemudi ojek <i>online</i> saat
                    ini, masih jauh dari “kesejahteraan” dan “kesetaraan”. Hal
                    ini terbukti dari banyaknya pengemudi ojek <i>online</i>{" "}
                    yang berstatus sebagai pekerja lepas tanpa jaminan keamanan
                    kerja, jaminan sosial, atau manfaat lainnya yang seringkali
                    diberikan kepada pekerja tetap. Ketergantungan pada{" "}
                    <i>platform</i>
                    juga menjadi faktor lain lantaran pengemudi ojek
                    <i>online</i> sering kali harus mengikuti kebijakan dan
                    tarif yang ditetapkan oleh <i>platform</i>, tanpa banyak
                    pilihan untuk bernegosiasi atau mengatur kondisi kerja
                    mereka sendiri.
                  </p>
                  <p className="mb-5">
                    Semua faktor ini berkontribusi pada ketidaksetaraan dan
                    ketidaksejahteraan bagi pengemudi ojek <i>online</i>, dan
                    menunjukkan perlunya reformasi kebijakan dan perlindungan
                    yang lebih baik bagi pekerja dalam ekonomi gig.
                  </p>
                  <p className="mb-5">
                    Rendahnya daya tawar ojek pada ojek <i>online</i> Juga
                    mengakibatkan mereka terpaksa menerima berbagai keputusan
                    penting yang diambil oleh <i>platform</i> tanpa melibatkan
                    mereka sama sekali. Keputusan-keputusan ini termasuk
                    penurunan tarif per kilometer, pemberian sanksi seperti
                    penangguhan atau pemutusan hubungan kerja, pengurangan dan
                    penentuan bonus yang lebih sulit, hingga peningkatan jumlah
                    minimum penerimaan pesanan.
                  </p>
                  <p className="mb-5">
                    Di sisi lain, untuk menangani <i>low skill labor trap</i>,
                    diperlukan adanya pelatihan, menggabungkan pendidikan, dan
                    kesempatan kerja yang lebih baik.
                  </p>
                  <p className="mb-5">
                    Dibutuhkan kolaborasi antara berbagai pihak yang terlibat,
                    baik itu pemerintah ataupun <i>platform</i>, untuk
                    mengembangkan program-program yang inovatif dalam
                    meningkatkan kualifikasi dan keterampilan para pekerja di
                    ekonomi gig. Khususnya peningkatan keterampilan bagi para
                    gig <i>worker</i>.
                  </p>
                  <p className="mb-5">
                    Pekerja gig memerlukan perlindungan sosial yang perlu
                    disesuaikan dengan karakteristik pekerjaan yang tidak
                    menentu. Hal-hal seperti asuransi kesehatan, asuransi
                    kecelakaan, dan program pensiun harus direalisasikan sesuai
                    dengan ciri khas utama dari gig worker, yaitu fleksibilitas.
                    Ini yang menandakan bahwa pekerja gig memiliki opsi untuk
                    berpartisipasi dalam program-program perlindungan sosial
                    sesuai dengan variasi pendapatan yang mereka terima.
                  </p>
                  <p className="">
                    Pada akhirnya, perlindungan sosial yang fleksibel bukanlah
                    opsi, melainkan suatu kewajiban. Keberlanjutan pekerjaan
                    yang aman bagi pekerja gig bergantung pada kemampuan kita
                    untuk mengadaptasi sistem yang ada dengan perubahan realitas
                    pekerjaan mereka. Kini sudah sepatutnya pemerintah segera
                    mewujudkan perlindungan yang lebih baik bagi pekerja gig di
                    Indonesia yang kian terus bertambah jumlahnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 7 */}
        {/* footer */}

        <div className="relative text-white bg-pink-primary mx-auto px-10 py-6 md:px-48 z-0">
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="mb-4 md:mb-0">
              <h2 className="mt-4 font-bold">Penulis</h2>
              <p className="mt-6 md:mt-7">Natania Rizky Ananda</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="mt-4 font-bold">Produser</h2>
              <p className="mt-6 md:mt-7">Natania Rizky Ananda</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="mt-4 font-bold">Pembimbing</h2>
              <p className="mt-6 md:mt-7">Ingki Rinaldi, M.Si</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="mt-4 font-bold">Web Developer</h2>
              <p className="mt-6 md:mt-7">Muhammad Arlanda</p>
            </div>
          </div>
          <div className="mt-10 md:mt-20 flex flex-col items-center md:justify-between border-t border-white pt-4 md:flex-row">
            <p className="mt-28 md:-mt-20 font-thin text-sm">
              © 2024 Copyright by RideNarrative
            </p>
            <button className="flex space-x-3 md:space-x-2 -mt-24 mb-20 text-2xl font-bold text-white md:text-lg md:mt-2">
              <GiFullMotorcycleHelmet className="w-9 h-9 md:mt-1 md:w-6 md:h-6" />
              <span>RideNarrative</span>
            </button>
          </div>
        </div>

        {/* footer */}
      </div>
    </Wrapper>
  );
}
export default LandingPage