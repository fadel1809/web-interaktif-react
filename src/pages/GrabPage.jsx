import Wrapper from "../assets/wrapper/maximPage"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import { GiFullMotorcycleHelmet } from "react-icons/gi"
import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import Logo from "../assets/images/Grab/logo-grab.png"
import BackgroundGrab from "../assets/images/Grab/bg-grab.png"
import BackgroundGrabMotor from "../assets/images/Grab/bg-grab-motor.png"
import Asset1 from "../assets/images/Grab/asset-1.png"
import Asset2 from "../assets/images/Grab/asset-2.png"
import Asset3 from "../assets/images/Grab/asset-3.png"
import Vektor from "../assets/images/Grab/bg-vektor.png"
import Argo from "../assets/images/Grab/argo.png"
import ArgoMobile from "../assets/images/Grab/argo-mobile.png"
import Headline1 from "../assets/images/Grab/headline-1.png"
import Headline1Mobile from "../assets/images/Grab/headline-1-mobile.png"
import { motion } from "framer-motion"

const fadeUpParagraphSection1 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.2 } }
}

const fadeUpSection3 = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.5 } }
}

const slideLeftMotor = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.9 } }
}

const slideRightLogo = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.4 } }
}

const fadeUpParagraph = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
}

const slideLeftImage = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
}

const slideRightImage = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
}

const fadeUpImage1 = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
};

const GrabPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault();
            navigate("/", { replace: true }); // Use replace option to replace current URL in history
        };

        window.addEventListener("popstate", handleBackButton);

        return () => {
            window.removeEventListener("popstate", handleBackButton);
        };
    }, [navigate]);

    const buttonClickHome = () => {
        navigate("/");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Wrapper>
            <Navbar />

            {/* SECTION 1 */}
            <section id="section-1" className="relative flex flex-col bg-cream-primary min-h-full">
                <div className="relative flex-grow bg-[#00B14F] rounded-2xl my-10 mx-10 md:my-20 md:mx-44">
                    <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }} className="flex absolute items-center space-x-3 top-4 left-7 md:top-4 md:left-7 text-md md:text-md text-md md:text-lg font-bold text-white" onClick={buttonClickHome}>
                        <FaArrowLeft />
                        <span>Home</span>
                    </motion.button>

                    <div className="flex flex-col md:flex-row justify-between md:mt-[4rem]">
                        <div className="flex flex-col mt-20 md:mt-7 md:ml-7">
                            <motion.img variants={slideRightLogo} initial="hidden" animate="visible" src={Logo} className="size-3/12 md:w-16 md:h-8 mb-8 md:mb-7 md:-ml-0 mx-auto"></motion.img>
                            <motion.p variants={fadeUpParagraphSection1} initial="hidden" animate="visible" className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Dari Kejayaan Hingga</motion.p>
                            <motion.p variants={fadeUpParagraphSection1} initial="hidden" animate="visible" className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Kesulitan: Perubahan</motion.p>
                            <motion.p variants={fadeUpParagraphSection1} initial="hidden" animate="visible" className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Dinamis dalam Hidup</motion.p>
                            <motion.p variants={fadeUpParagraphSection1} initial="hidden" animate="visible" className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Pengemudi Ojol</motion.p>
                        </div>

                        <div className="relative mt-10 w-full md:w-full md:-mt-7 md:ml-2">
                            <div className="absolute inset-0 w-fit h-fit">
                                <img src={BackgroundGrab} />
                            </div>
                            <div className="relative z-10 ml-12 mt-[4.3rem] w-7/12 md:mt-24 md:w-[60%] md:ml-20">
                                <motion.img variants={slideLeftMotor} initial="hidden" animate="visible" src={BackgroundGrabMotor} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section id="section-2" className="relative flex flex-col bg-[#FEF0C7] min-h-full">
                <div className="relative mx-10 md:my-20 md:mx-44 text-justify text-md mt-10">
                    <motion.figure variants={slideRightImage} viewport={{ once: true }} initial="hidden" whileInView="visible" className='md:mr-10 size-fit mb-6 md:mb-0 md:float-start md:size-6/12'>
                        <img src={Asset1} className="w-full h-full" alt="Foto: Natania Rizky" />
                        <figcaption className="text-center mt-1 md:mt-3 text-sm md:text-md">Foto: Natania Rizky</figcaption>
                    </motion.figure>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Usai mengantar makanan kepada sang pelanggan, pria itu mematikan mesin motornya dan berhenti sejenak untuk menghilangkan dahaga sembari mengecek <i>handphone</i> menunggu <i>orderan</i> yang masuk. Perjalanan yang ditempuh untuk mengantarkan kudapan kepada sang pelanggan itu tidaklah memakan waktu lama, hanya saja kendaraan yang Ia pakai bukanlah motor biasa melainkan motor listrik yang dipakai dalam kesehariannya mencari nafkah, sehingga pengantaran yang tadinya membutuhkan waktu cepat menjadi sedikit lebih lambat dari biasanya.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Banyak yang komplain kalau itu kurang cepatlah, apalah, ada juga yang bilang lama padahal kan kita udah usahain untuk nyampe secepatnya,” ujar Taryana (40), pengemudi ojek <i>online</i> yang sudah bekerja selama 5 tahun di Grab.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Musibah sempat menimpa Taryana ketika Ia sedang mengais rezeki, motor miliknya hilang ketika sedang parkir saat hendak mengantar pesanan ke pelanggan, sehingga dirinya memutuskan untuk menyewa motor listrik per minggu.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Untuk motornya kemarin sempet hilang, saya parkir lalu hilang dan pihak aplikasi tidak bertanggung jawab atas hilangnya motor saya, bahkan asuransi kan saya masih cicilan juga tidak <i>dicover</i>,” ujarnya pasrah.</motion.p>
                    <motion.figure variants={slideLeftImage} viewport={{ once: true }} initial="hidden" whileInView="visible" className='hidden md:block md:ml-10 size-fit mb-6 md:mb-0 md:float-right md:size-6/12'>
                        <img src={Asset2} className="w-full h-full" alt="Foto: Natania Rizky" />
                        <figcaption className="text-center mt-1 md:mt-3 text-sm md:text-md">Foto: Natania Rizky</figcaption>
                    </motion.figure>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Sama seperti transportasi <i>online</i> lain, hubungan antara perusahaan dan pengemudi ojek <i>online</i> merupakan hubungan kemitraan, sehingga jika terjadi insiden seperti Taryana, pihak aplikasi tidak akan membantu untuk menangani masalah yang menimpa para pengemudinya, hal ini juga yang memicu para ojol untuk melakukan demonstrasi beberapa tahun belakangan karena hubungannya sebagai mitra tidak merasa dilindungi. Bahkan, beberapa di antara mereka menginginkan status mitra diubah menjadi pekerja formal.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Semenjak kehilangan motornya, pria kelahiran Sumedang itu hanya aktif melayani layanan Grabfood. Hal ini Ia lakukan  karena untuk mengantisipasi pelanggan yang tidak mau mentoleransi waktu pengantaran atau penjemputan yang lama lantaran Taryana menggunakan motor listrik.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Dalam sehari biasanya saya dapat 20 <i>orderan</i>, dari pagi sampai malam, saya khusus antar makanan aja sekarang, kadang Grabfood dan Grabmart. Nggak melayani pengantaran orang karena motor saya hilang,” pungkasnya.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Meski begitu, Taryana mengaku tetap gigih bekerja sepenuh hati dari pagi hingga malam demi bisa menghidupi keluarganya. Bahkan, Ia menduduki tingkatan kedua tertinggi dalam level yang dimiliki aplikasi Grab. Tak hanya rivalnya (Gojek) yang menerapkan sistem pelevelan, Grab juga mempunyai sistem peringkat yang serupa. Grab menggunakan istilah mulai dari anggota, pejuang, satria, hingga jawara sebagai level tertingginya.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Ada tingkatannya gitu mbak, yang paling tinggi namanya jawara, kalau yang paling bawah ada di level anggota,  ini saya sekarang ada di level kesatria,” ujarnya menerangkan.</motion.p>
                    <div className="flex flex-col md:flex-row justify-between md:space-x-4 mt-10">
                        <motion.figure variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="hidden md:size-indrive">
                            <img src={Asset2} className="rounded-2xl uniform-size" alt="Indrive 1" />
                            <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
                        </motion.figure>
                        <motion.figure variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="md:hidden md:size-fit mb-6">
                            <img src={Asset2} className="rounded-2xl uniform-size" alt="Indrive 1" />
                            <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
                        </motion.figure>
                        <motion.figure variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="hidden md:size-indrive">
                            <img src={Asset3} className="rounded-2xl uniform-size" alt="Indrive 2" />
                            <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
                        </motion.figure>
                        <motion.figure variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="md:hidden md:size-fit mb-6">
                            <img src={Asset2} className="rounded-2xl uniform-size" alt="Indrive 1" />
                            <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
                        </motion.figure>
                    </div>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Walaupun Taryana bekerja sebagai pengemudi ojek <i>online</i> pada 2019, dirinya pernah mencicipi masa kejayaan layaknya ojek <i>online</i> yang baru beroperasi di Indonesia pada 2015 lalu, ketika penghasilan para pengemudi ojek <i>online</i> bisa mendapatkan lebih dari Rp6 juta per bulannya. Kini, Taryana merasa lama kelamaan pihak aplikasi menurunkan harga tarif maupun bonus, berbeda seperti masa sebelum pandemi melanda.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Awal-awal ojek <i>online</i> baru beroperasi memang teman-teman bisa mendapatkan Rp10juta per bulan, saya waktu tahun 2019 aja dapat penghasilannya bisa Rp400 ribu sehari dan itu di luar bonus, gampang banget nyari uang segitu. Di bawah tahun 2019 itu bisa Rp700-800 ribu per hari,” lanjutnya.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Grab memiliki sistem bonus dengan cara mengumpulkan berlian perharinya. Berlian ibarat poin yang harus dikumpulkan oleh para pengemudi apabila ingin mendapatkan uang tambahan. Berlian didapatkan dari hasil <i>orderan</i>, setiap satu <i>orderan</i> dari pelanggan, para pengemudi akan mendapat sembilan berlian. Para pengemudi dapat menentukan pilihannya di antara  150 atau 250 berlian untuk mendapatkan bonus.</motion.p>
                    <motion.figure variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className='hidden md:block size-fit mb-6 mx-auto md:size-10/12'>
                        <img src={Asset3} className="w-full h-full" alt="Foto: Natania Rizky" />
                        <figcaption className="text-center mt-1 md:mt-3 text-sm md:text-md">Foto: Natania Rizky</figcaption>
                    </motion.figure>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Untuk bonus pake berlian gini mbak, kalau dulu kita dapat 250 berlian contohnya, itu bisa sampai Rp200 ribu,” Ujarnya sembari menyodorkan <i>handphone</i>.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Taryana merasa para pengemudi harus memaksakan diri untuk bekerja hingga meraup bonus, bahkan tak jarang di antara mereka sakit akibat terlalu memaksa. Hal ini yang dinilai Taryana maupun pengemudi lain bahwa seakan akan pihak aplikasi memaksa pengemudi untuk bekerja apabila ingin mendapatkan bonus dengan mendapatkan semua berlian. Pasalnya, untuk mendapatkan berlian sesuai dengan ketentuan dari Grab, dianggap tidak manusiawi.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Saya kemarin sampai 150 berlian dapat bonus Rp19.000,  kalau dulu itu banyak, bisa sampe 200, ini kalau nyampe 250 berlian itu berat banget jarang karena kan cape,” katanya.</motion.p>
                </div>
            </section>

            {/* SECTION 3 */}
            <section id="section-3" className="relative flex bg-cream-primary min-h-full justify-center items-center">
                <div className="relative mx-10 md:mt-10 md:mb-40 md:mx-44 text-justify text-md mt-10">
                    <motion.img variants={fadeUpImage1} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Headline1} className="hidden md:block size-10/12 my-10 md:size-fit mx-auto md:my-20"></motion.img>
                    <motion.img variants={fadeUpImage1} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Headline1Mobile} className="md:hidden mb-6 mx-auto"></motion.img>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Para pengemudi menggunakan lebih dari satu akun ojol dengan tujuan agar mendapatkan upah lebih. Taryana sendiri menjadi ‘<i>double agent</i>’ dengan bekerja untuk GoJek dan Grab. Selain itu, Ia menyebut bahwa beberapa rekannya juga menggunakan lebih dari satu aplikasi.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Boleh sih yang penting kita bisa jaga waktunya, saya aktif di Gojek dan Grab, walaupun saya juga ada Maxim dan Indrive tapi nggak dipakai, karena motor saya hilang jadi mendingan nggak ambil untuk antar orang, makanan aja,”</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Kalau Indrive cuman antar orang aja, nggak ada antar makanan. Maxim sebenarnya ada cuman harus bayar dulu <i>drivernya</i> jadi kurang laku, kita <i>driver</i> harus punya uang misalkan <i>customer</i> beli makanan Rp500 ribu ya <i>driver</i> harus punya uang 500 ribu, repot gitu,” lanjutnya.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Soal tarif, Taryana menjelaskan bahwa Grab memasang tarif Rp.2000 per km dan pihak aplikasi memotong 20 persen dari setiap pesanan yang masuk, dan bonus didapatkan dari berlian sesuai ketetapan yang Grab tentukan.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Kalau di Gojek ada juga sistem bonus, kebetulan saya hanya pegang Gofood , argonya Rp5 ribu kalau di Grab yang terdekat Rp8.500 , lebih parah Gojek argonya. Orang-orang kebanyakan pakai Gojek taunya bayarnya normal mbak, aslinya yang diberikan ke <i>driver</i> mah bayangin rp5000 dipotong lagi sama aplikasi,” tambahnya.</motion.p>
                    <motion.img variants={fadeUpImage1} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Argo} className="hidden md:block mb-6"></motion.img>
                    <motion.img variants={fadeUpImage1} viewport={{ once: true }} initial="hidden" whileInView="visible" src={ArgoMobile} className="md:hidden mb-6"></motion.img>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Meski begitu, Taryana mengatakan bahwa dengan argo yang sedikit pada Gojek, dirinya selalu mendapatkan <i>orderan</i> yang banyak dan berlangsung terus menerus, berbeda dengan Grab.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Cuma kalau di Gojek, dikasih terus <i><i>order</i>an</i> ga ada berhentinya. Jadi saya habis antar makanan ke <i>customer</i>, langsung masuk lagi <i>orderan</i>, kalau Grab ini kan lama nunggu jeda gitu, jadi memang Gojek argonya sedikit,” jelas Taryana sedikit membandingkan antara argo Grab dengan Gojek.</motion.p>
                </div>
            </section>

            {/* SECTION 4 */}
            <section id="section-2" className="bg-cream-primary ">
                <div className="relative flex flex-col min-h-full bg-[#B6E3CA] no-bg-desktop">
                    <img
                        src={Vektor}
                        className="absolute hidden md:block inset-0 w-full h-full object-cover md:object-fill z-0"
                    />

                    <motion.div variants={fadeUpSection3} viewport={{ once: true }} initial="hidden" whileInView="visible" className="relative z-10 p-10 text-justify rounded-xl mx-6 mt-16 mb-20 md:p-10 md:mb-40 md:-mt-0 md:rounded-3xl md:mx-44 bg-white">
                        <motion.h1 variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mx-6 size-10/12 mb-10 font-extrabold text-xl text-center text-black md:text-2xl md:mx-auto md:mb-20">Mengais Transparansi dari Pihak Aplikasi</motion.h1>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Hal yang menjadi banyak dikeluhkan bagi para pengemudi ojek <i>online</i> karena pihak aplikasi seringkali tidak transparan kepada para mitranya. Rendahnya daya tawar pengemudi ojek <i>online</i> memaksa mereka untuk menerima berbagai keputusan yang ditentukan oleh pihak aplikator secara sepihak tanpa keterlibatan mereka. Keputusan penting tersebut meliputi penurunan tarif per kilometer, penerapan sanksi seperti <i>suspend</i> atau pemutusan kemitraan, pemotongan dan penentuan nilai bonus yang semakin sulit dicapai, peningkatan jumlah minimum penerimaan <i>order</i>, ketentuan tingkat performa, hingga sistem penilaian dari pelanggan yang semakin ketat.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Namun, pada beberapa kasus, nampaknya pihak aplikasi sangat transparan mengatasi <i>order</i> fiktif. <i>Order</i> fiktif merupakan permintaan palsu yang dibuat oleh pengguna ojek <i>online</i> yang tidak bertanggung jawab. Pesanan palsu ini umumnya menggunakan metode pembayaran tunai dan menetapkan harga yang tinggi, sehingga pengemudi harus bertemu langsung dengan pengguna untuk menerima pembayaran.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Faktor seseorang melakukan <i>order</i> fiktif dapat beragam. Beberapa melakukannya hanya untuk bersenang-senang atau alasan pribadi lainnya. Apapun alasannya, <i>order</i> fiktif pasti merugikan banyak pihak, terutama pengemudi.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Kebanyakan sih kalau untuk <i>order</i> fiktif itu cepat diatasi, tetapi kasus lain untuk keluhan <i>driver</i> tidak didengar, hanya keluhan konsumen saja, bahkan terkadang tidak konfirmasi dulu main <i>suspend</i> atau putus mitra aja, jadi ngga ada komunikasi lagi,” ujar Taryana.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“<i>Suspend</i> biasanya tujuh hari, terkadang banyak juga  pelecehan sesama laki-laki. Jadi <i>customer</i> yang melakukan pelecehan seksual, itu lebih parah, takut loh saya, lebih takut itu malah,” ujar Taryana.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Dirinya hanya berharap pemerintah maupun aplikasi dapat mewujudkan kondisi kerja yang lebih baik, selain menginginkan adanya sistem bonus yang lebih mudah dicapai dan menguntungkan seperti dulu, bukan yang semakin sulit. Taryana juga menginginkan adanya pembatasan jumlah pengemudi agar persaingan tidak terlalu ketat dan setiap pengemudi memiliki peluang mendapatkan <i>order</i> yang lebih adil serta menginginkan transparansi lebih dari pihak aplikator dalam hal kebijakan, peraturan, dan sistem pemeringkatan.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Harapannya sih ya ada sistem bonus lagi kaya dulu, argonya mungkin lebih disesuaikan lagi lah karena sekarang kan bensin naik yah, jaman sekarang argonya malah dikurangin gitu, bukanya nambah. Jadi bukanya nambah, bukannya lebih baik malah lebih turun gitu kan, kita kan kebutuhan  kan lebih, namanya sekarang kan lebih banyak,”imbuhnya.</motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <div className="relative text-white bg-pink-primary mx-auto px-10 py-6 md: md:px-48 z-0">
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
        </Wrapper>
    )
}

export default GrabPage