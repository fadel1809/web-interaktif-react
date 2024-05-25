import Wrapper from "../assets/wrapper/indrivePage"
import Navbar from "../components/Navbar"
import { GiFullMotorcycleHelmet } from "react-icons/gi"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import Logo from "../assets/images/Gojek/logo.png"
import BackgroundGojek from "../assets/images/Gojek/bg-gojek.png"
import BackgroundGojekMotor from "../assets/images/Gojek/bg-gojek-motor.png"
import Asset1 from "../assets/images/Gojek/asset-1.png"
import Asset2 from "../assets/images/Gojek/asset-2.png"
import Asset3 from "../assets/images/Gojek/asset-3.png"
import Data1 from "../assets/images/Gojek/data-1.png"
import Data2 from "../assets/images/Gojek/data-2.png"
import Data3 from "../assets/images/Gojek/data-3.png"
import Data4 from "../assets/images/Gojek/data-4.png"
import Data5 from "../assets/images/Gojek/data-5.png"
import Gojek from "../assets/images/Gojek/gojek.png"
import Maxim from "../assets/images/Gojek/maxim.png"
import Grab from "../assets/images/Gojek/grab.png"
import Indrive from "../assets/images/Gojek/indrive.png"
import IndriveMobile from "../assets/images/Gojek/indrive-mobile.png"
import MaximMobile from "../assets/images/Gojek/maxim-mobile.png"
import GrabMobile from "../assets/images/Gojek/grab-mobile.png"
import GojekMobile from "../assets/images/Gojek/gojek-mobile.png"
import Text from "../assets/images/Gojek/text.png"
import Asset1Mobile from "../assets/images/Gojek/asset-1-mobile.png"
import Asset2Mobile from "../assets/images/Gojek/asset-2-mobile.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion"

const fadeUpParagraphSection1 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.2 } }
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

const zoomOutAnimation = {
    hidden: { scale: 1.5, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1, // Durasi animasi dalam detik
            ease: "easeOut", // Efek easing untuk transisi
        },
    },
};

const slideRightImage = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
}

const fadeUpMaxim = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.1, // Adjust delay as needed
        },
    },
};

const fadeUpGojek = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.4, // Adjust delay as needed
        },
    },
};

const fadeUpIndrive = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.7, // Adjust delay as needed
        },
    },
};

const fadeUpGrab = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 1, // Adjust delay as needed
        },
    },
};

const images = [
    { src: Data1, alt: 'Data1' },
    { src: Data2, alt: 'Data2' },
    { src: Data3, alt: 'Data3' },
    { src: Data4, alt: 'Data4' },
    { src: Data5, alt: 'Data5' }
];

const GojekPage = () => {

    const navigate = useNavigate();

    const buttonClickHome = () => {
        navigate("/")
    }

    const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setCenterSlidePercentage(100);
            } else {
                setCenterSlidePercentage(33.33);
            }
        };

        handleResize(); // Set the initial value

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Wrapper>
            <Navbar />

            {/* SECTION 1 */}
            <section id="section-1" className="relative flex flex-col bg-cream-primary min-h-full">
                <div className="relative flex-grow bg-green-gojek rounded-2xl my-10 mx-10 md:my-20 md:mx-44">
                    <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }} className="flex absolute items-center space-x-3 top-4 left-7 md:top-4 md:left-7 text-md md:text-md text-md md:text-lg font-bold text-white" onClick={buttonClickHome}>
                        <FaArrowLeft />
                        <span>Home</span>
                    </motion.button>

                    <div className="flex flex-col md:flex-row justify-between md:mt-[4rem]">
                        <div className="flex flex-col mt-20 md:mt-10 md:mb-12 md:ml-7">
                            <motion.img variants={slideRightLogo} initial="hidden" animate="visible" src={Logo} className="size-3/12 md:w-24 md:h-8 mb-8 md:mb-7 md:-ml-0 mx-auto"></motion.img>
                            <motion.p variants={fadeUpParagraphSection1} initial="hidden" animate="visible" className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Ojol Wanita Mengenang</motion.p>
                            <motion.p variants={fadeUpParagraphSection1} initial="hidden" animate="visible" className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Masa Lalu, Nasib Gojek</motion.p>
                            <motion.p variants={fadeUpParagraphSection1} initial="hidden" animate="visible" className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Tidak Lagi Seperti Dulu</motion.p>
                        </div>

                        <div className="relative mt-10 w-full md:w-full md:mt-0 md:ml-2">
                            <div className="absolute inset-0 w-fit h-fit">
                                <img src={BackgroundGojek} />
                            </div>
                            <div className="relative z-10 ml-12 mt-[4.3rem] w-7/12 md:mt-20 md:w-[61%] md:ml-16">
                                <motion.img variants={slideLeftMotor} initial="hidden" animate="visible" src={BackgroundGojekMotor} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section id="section-2" className="relative flex flex-col bg-[#CCE7CB] min-h-full">
                <div className="relative mx-10 md:my-20 md:mx-44 text-justify text-md mt-10">
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Perempuan tak semata-mata dilahirkan hanya untuk melahirkan dan menciptakan keturunan kembali,  dalam kata lain,  perempuan tidak hanya terbatas pada peran sebagai ibu atau istri saja. Di era modern, persepsi terhadap peran perempuan di dunia kerja telah berubah secara signifikan. Sudah semakin banyak perempuan di Indonesia yang aktif berkontribusi dalam dunia kerja, membagi keringat dan tenaga dan usaha mereka. Tidak lagi mencerminkan kondisi pada masa R.A Kartini di mana perempuan dibatasi hanya untuk urusan rumah tangga seperti menjahit dan memasak. Meskipun ada sebagian yang belum sepenuhnya mendukung peran perempuan di dunia kerja, tetapi Indonesia menunjukkan bahwa lapangan kerja semakin terbuka bagi semua gender, seperti yang dilakukan oleh Ines (43), ia telah menggeluti profesi sebagai pengemudi ojek <i>online</i> sejak 2015 silam, tepat di mana Gojek mulai beroperasi.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Layaknya seorang ibu pada umumnya, perempuan itu tengah menyuapi sang anak di sela-sela waktu istirahat bekerja di sebuah warung makan sederhana. Berada di daerah Kemang Timur, warung makan tersebut juga merupakan <i>basecamp</i> di mana Ines dan teman-teman pengemudi ojek <i>online</i> lainnya biasa berkumpul.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Sebagai seorang ibu mengasuh dua anaknya yang masih balita, menjalani profesi sebagai pengemudi ojek <i>online</i> bukanlah hal yang mudah. Ibu dua anak tersebut mengaku tidak terlalu memaksakan diri untuk mencari nafkah. Menurutnya, sebagai seorang perempuan masih banyak hal-hal yang harus menjadi prioritas.</motion.p>
                    <motion.figure variants={slideRightImage} viewport={{ once: true }} initial="hidden" whileInView="visible" className="md:hidden md:size-fit mb-6">
                        <img src={Asset3} className="rounded-2xl" alt="Indrive 1" />
                        <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
                    </motion.figure>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Saya yang juga ibu berumah tangga, untuk ngojeknya itu nggak difokusin harus dari pagi sampai malam, karena kan kita juga harus urusin yang di rumah juga ya,”</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Makanya kalau keluar itu memang ketika di rumah udah beres, baru kita keluar, dan itu pun nggak kita patokin harus sekian-sekian, yang penting sedapetnya aja,” ujarnya.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-10 md:mb-0">Selama kurang lebih 9 tahun ia mengabdi sebagai pengemudi ojek <i>online</i>, Ines pernah melewati masa kejayaan dan masa terpuruk. Masa-masa kejayaan tersebut ketika tarif yang ditetapkan oleh aplikator cukup menguntungkan bagi para pengemudi ojol untuk per 1 kilometernya.  Bahkan, tak heran jika para pengemudi ojol bisa mendapatkan hasil di kisaran Rp 6-10 Juta dalam waktu satu bulan.</motion.p>
                </div>
            </section>

            {/* SECTION 3 */}
            <section id="section-3" className="relative flex bg-[#E6F3E5] min-h-full justify-center items-center py-10">
                <Carousel
                    className="w-full"
                    showThumbs={false}
                    showIndicators={true}
                    showStatus={false}
                    infiniteLoop={true}
                    swipeable={true}
                    emulateTouch={true}
                    centerMode={true}
                    centerSlidePercentage={centerSlidePercentage}
                    renderThumbs={() => images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} className="thumbnail" />
                    ))}
                >
                    {images.map((image, index) => (
                        <div key={index} className="p-2">
                            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                                <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </section>

            {/* SECTION 4 */}
            <section id="section-2">
                <div className="relative flex flex-col bg-cream-primary min-h-full">
                    <div className="relative mx-10 md:my-20 md:mx-44 text-justify text-md mt-10">
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Masa-masa “emas” itu ketika layanan jasa transportasi <i>online</i> belum lama beroperasi di Indonesia, yakni pada 2015-2017. Kala itu, pekerjaan sebagai pengemudi ojek <i>online</i> dapat dikatakan sebagai primadona dan sedang berada pada puncak popularitasnya dengan penghasilan hingga Rp10 juta per bulan. Pendapatan yang luar biasa ini akhirnya menarik perhatian banyak orang untuk berbondong-bondong menjadi pengemudi ojek <i>online</i>.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Kalau disuruh bilang lebih enak mana sama dulu? ya lebih enak dulu lah,  soalnya kan tarifnya malah Rp4.000 untuk sekilo” jelas Ines terlihat sumringah menceritakan masa “kejayaan” nya.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Saat ini, ia hanya bisa merindukan masa lalu itu sebagai kenangan, ditambah lagi bonus yang kecil dan sulit untuk didapatkan, serta potongan yang diberlakukan oleh aplikasi membuat sejumlah mitra ojol  merasa terpuruk, yakni berada di kisaran Rp1.800, - Rp2.000,00.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Kalau sekarang kan ya dinikmati saja hahahaha,” pungkasnya sambil tertawa miris.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Di sisi lain, masa terpuruk bagi Ines adalah ketika wabah Covid-19 melanda, di mana pemerintah melarang layanan transportasi <i>online</i> untuk mengangkut penumpang ketika masa Pembatasan Sosial Berskala Besar (PSBB) pada 2020 lalu. Ines dan mitra ojol lain, hanya menangani layanan pesan antar makanan dan juga barang atau yang dikenal dengan istilah GoFood dan GoSend pada <i>platform</i> Gojek, sehingga hasil pendapatan pun hanya bergantung pada layanan tersebut.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Pasti pendapatan turun drastis ya dari sebelum pandemi, ditambah kebutuhan juga banyak, dan kita ngga boleh angkut penumpang saat Covid,” ujar Ines.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Tak hanya perihal larangan penumpang, nasib mitra ojol dibuat makin terpuruk lantaran pihak pihak aplikator memberlakukan sistem level pada aplikasi Gojek. Gojek mulai menerapkan sistem level bagi seluruh mitranya ketika pandemi berlangsung. Terbagi menjadi 4 tingkatan level, Gojek memiliki level <i>basic</i>, level silver, level gold, hingga level platinum. Level yang paling tertinggi yakni level platinum akan diperuntukkan kepada pengemudi yang sudah mencapai poin 48.000 dan rating 4,97, level gold 41.000 dan rating 4,9, silver 35.000 poin dengan rating 4,9, hingga level terendah yakni <i>basic</i>, yaitu yang memiliki poin di bawah silver dengan rating hingga nol.</motion.p>
                        <motion.img variants={zoomOutAnimation} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Asset1} className="hidden md:block mb-6"></motion.img>
                        <motion.img variants={zoomOutAnimation} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Asset1Mobile} className="md:hidden mb-6"></motion.img>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Pengemudi level <i>basic</i> memiliki batasan jumlah orderan per hari, yaitu minimal Rp50.000 dengan mencapai 700 poin. Pengemudi level silver mempunyai batas minimal Rp120.000 dengan mencapai 1.100 poin, sementara pengemudi level gold minimal Rp140.000 dengan mencapai 1.400 poin, dan pengemudi level platinum minimal Rp180.000 dengan mencapai 1.700 poin.</motion.p>
                        <motion.img variants={zoomOutAnimation} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Asset2} className="hidden md:block mb-6"></motion.img>
                        <motion.img variants={zoomOutAnimation} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Asset2Mobile} className="md:hidden mb-6"></motion.img>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Poin tersebut dihasilkan dari jumlah orderan dikalikan 100, apabila seorang mitra  mendapatkan satu orderan dengan nilai 1 poin maka mitra akan mendapatkan poin 100, dan begitu seterusnya. Untuk menaikkan tingkat level pengemudi, evaluasi akan dilakukan terhadap kinerja mereka. Mitra tidak boleh membatalkan pesanan secara sepihak dan tidak mendapatkan keluhan dari pelanggan.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Sebagai pengemudi ojek <i>online</i>, tantangan dan kesulitan yang dihadapi tidaklah mudah, mereka harus bertahan di tengah persaingan yang semakin ketat dan ketidakpastian ekonomi yang menghantui. Namun, di balik semua itu, mereka ingin bisa bersaing secara sehat dengan pengemudi lain baik dari aplikasi yang sama maupun berbeda , mereka berharap untuk perbaikan keadaan yang adil di masa depan, seperti apa yang diungkapkan oleh Paulina (29), yang juga merupakan rekan Ines pada <i>platform</i> yang sama, ia berharap pemerintah dapat turut andil untuk memberlakukan pemerataan tarif sesama aplikasi, baik itu Gojek, Maxim, hingga Indrive.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Sekarang tuh banyak layanan transportasi <i>online</i> ya,  untuk saat ini Gojek dan Grab istilahnya udah sama, dia mengikuti pemerintah. Kalau sekarang ini kayak ada InDrive, ada Maxim, nah itu mereka kan tarifnya lebih murah dari kita,” kata Paulina.</motion.p>
                        <motion.figure variants={slideRightImage} viewport={{ once: true }} initial="hidden" whileInView="visible" className="hidden md:block md:size-fit mb-6">
                            <img src={Asset3} className="rounded-2xl" alt="Indrive 1" />
                            <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
                        </motion.figure>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Pada 2019 lalu Maxim kedapatan melanggar ketentuan tarif ojek <i>online</i> yang telah ditetapkan dan melakukan pelanggaran di beberapa kota Hal tersebut berhasil terungkap berkat pengawasan yang dilakukan oleh Kementerian Perhubungan. Bahkan, Maxim sering menetapkan harga yang lebih rendah dibandingkan Grab dan Gojek ketika beroperasi di pusat kota.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Lantas para pengemudi ojek daring saat itu meminta agar semua tarif merata. Dengan alasan, penawaran tarif yang rendah oleh Maxim dianggap mengancam penghasilan pengemudi ojek daring dari Gojek dan Grab. Mereka berpendapat bahwa penyelarasan harga bertujuan untuk menjaga minat penumpang tetap stabil, sehingga tidak ada pihak yang dirugikan.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Dengan demikian, para pelanggan akan memiliki lebih banyak pilihan dan dapat memilih layanan yang paling nyaman bagi mereka.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Maunya kita adalah minta dukungan dari pemerintah, kalau bisa pemerataan nih semua aplikasi tarifnya sama sehingga <i>customer</i> pun bisa memilih mana yang lebih nyaman,” jelasnya.</motion.p>
                    </div>

                    <img src={Text} className="container mx-auto mt-20 size-7/12 md:size-3/12"></img>
                    <div className="relative flex flex-col md:flex-row size-fit mx-auto my-20 space-x-4">
                        <motion.img variants={fadeUpMaxim} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Maxim} className="hidden md:block"></motion.img>
                        <motion.img variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" src={MaximMobile} className="md:hidden mb-6"></motion.img>
                        <motion.img variants={fadeUpGojek} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Gojek} className="hidden md:block"></motion.img>
                        <motion.img variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" src={GojekMobile} className="md:hidden mb-6"></motion.img>
                        <motion.img variants={fadeUpIndrive} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Indrive} className="hidden md:block"></motion.img>
                        <motion.img variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" src={IndriveMobile} className="md:hidden mb-6"></motion.img>
                        <motion.img variants={fadeUpGrab} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Grab} className="hidden md:block"></motion.img>
                        <motion.img variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" src={GrabMobile} className="md:hidden mb-6"></motion.img>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="relative text-white bg-pink-primary mx-auto px-10 py-6 md:px-48 z-0">
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

export default GojekPage