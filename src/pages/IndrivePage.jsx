import Logo from "../assets/images/inDrive/asset-1.png"
import Asset1 from "../assets/images/inDrive/indrive-asset-1.png"
import Asset3 from "../assets/images/inDrive/asset-4.png"
import Indrive1 from "../assets/images/inDrive/indrive-1.jpeg"
import Indrive2 from "../assets/images/inDrive/indrive-2.png"
import BackgroundIndrive from "../assets/images/inDrive/bg-indrive.png"
import BackgroundIndriveMotor from "../assets/images/inDrive/bg-indrive-motor.png"
import Wrapper from "../assets/wrapper/indrivePage"
import Navbar from "../components/Navbar"
import { GiFullMotorcycleHelmet } from "react-icons/gi"
import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react"
import { motion } from "framer-motion"

const fadeUpContent = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.2 } }
};

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

const zoomInHeadline = {
    hidden: { opacity: 0, z: 100 },
    visible: { opacity: 1, z: 0, transition: { duration: 1.5 } }
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

const fadeUpImage2 = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.3 } }
};

const IndrivePage = () => {

    const navigate = useNavigate();

    const buttonClickHome = () => {
        navigate("/")
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Wrapper>
            <Navbar />

            {/* SECTION 1 DESKTOP*/}
            <section id="section-1" className="relative flex flex-col bg-cream-primary min-h-full">
                {/* DESKTOP */}
                <div className="hidden relative md:block flex-grow bg-green-indrive rounded-2xl my-10 mx-10 md:my-20 md:mx-44">
                    <motion.button whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.2 }} className="flex absolute items-center space-x-3 top-4 left-7 md:top-4 md:left-7 text-md md:text-md text-md md:text-lg font-bold text-white" onClick={buttonClickHome}>
                        <FaArrowLeft />
                        <span>Home</span>
                    </motion.button>

                    <div className="flex flex-col md:flex-row justify-between md:mt-[4rem]">
                        <div className="hidden md:flex md:flex-col mt-20 md:mt-7 md:ml-7">
                            <motion.img variants={slideRightLogo} initial="hidden" animate="visible" src={Logo} className="size-3/12 md:w-24 md:h-8 mb-8 md:mb-7 md:-ml-0 mx-auto"></motion.img>
                            <motion.p variants={fadeUpParagraphSection1} initial="hidden" animate="visible" className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Di Balik Cerita Aplikasi</motion.p>
                            <motion.p variants={fadeUpParagraphSection1} initial="hidden" animate="visible" className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Ojol Asal Rusia</motion.p>
                        </div>

                        <div className="relative mt-10 w-full md:w-full md:-mt-3 md:ml-5">
                            <div className="absolute inset-0 w-fit h-fit">
                                <img src={BackgroundIndrive} />
                            </div>
                            <motion.div variants={slideLeftMotor} initial="hidden" animate="visible" className="relative z-10 ml-12 mt-[4.3rem] w-7/12 md:mt-[6rem] md:w-[58%] md:ml-16">
                                <img src={BackgroundIndriveMotor} />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* MOBILE */}
                <motion.div variants={slideRightImage} initial="hidden" animate="visible" className="md:hidden relative flex-grow bg-green-indrive rounded-2xl my-10 mx-10 md:my-20 md:mx-44">
                    <button className="flex absolute items-center space-x-3 top-4 left-7 md:top-4 md:left-7 text-md md:text-md text-md md:text-lg font-bold text-white" onClick={buttonClickHome}>
                        <FaArrowLeft />
                        <span>Home</span>
                    </button>

                    <div className="flex flex-col md:flex-row justify-between md:mt-[4rem]">
                        <div className="hidden md:flex md:flex-col mt-20 md:mt-7 md:ml-7">
                            <img src={Logo} className="size-3/12 md:w-24 md:h-8 mb-8 md:mb-7 md:-ml-0 mx-auto"></img>
                            <p className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Di Balik Cerita Aplikasi</p>
                            <p className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Ojol Asal Rusia</p>
                        </div>

                        <div className="relative mt-10 w-full md:w-full md:-mt-3 md:ml-5">
                            <div className="absolute inset-0 w-fit h-fit">
                                <img src={BackgroundIndrive} />
                            </div>
                            <div className="relative z-10 ml-12 mt-[4.3rem] w-7/12 md:mt-[6rem] md:w-[58%] md:ml-16">
                                <img src={BackgroundIndriveMotor} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 2 */}
            <section id="section-2" className="relative flex flex-col bg-bg-indrive min-h-full z-0">
                <div className="relative mx-10 md:my-20 md:mx-44 text-justify text-md mt-10">
                    <div className="relative hidden md:flex md:flex-col mb-6 md:mr-10 md:float-start border bg-[#8ACA18] rounded-2xl z-10">
                        <motion.p variants={zoomInHeadline} viewport={{ once: true }} initial="hidden" whileInView="visible" className="text-center text-white font-semibold mt-4 text-xl md:text-4xl md:mt-10 z-20">Tarif Aplikasi Indrive</motion.p>
                        <motion.img variants={fadeUpContent} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Asset1} className="relative md:p-2 w-full md:w-auto z-20" alt="Tarif Aplikasi Indrive"></motion.img>
                    </div>

                    <motion.div variants={slideLeftImage} viewport={{ once: true }} initial="hidden" whileInView="visible" className="relative md:hidden flex-col mb-6 md:mr-10 md:float-start border bg-[#8ACA18] rounded-2xl z-10">
                        <p className="text-center text-white font-semibold mt-4 text-xl md:text-4xl md:mt-10 z-20">Tarif Aplikasi Indrive</p>
                        <img src={Asset1} className="relative md:p-2 w-full md:w-auto z-20" alt="Tarif Aplikasi Indrive"></img>
                    </motion.div>

                    {/* <img src={Asset1} className="mr-10 size-fit mb-6 md:-mb-0 md:float-start md:size-5/12"></img> */}
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Indrive. Mungkin beberapa di antara Anda masih asing dengan nama tersebut. Dapat dikatakan, jasa layanan transportasi yang masih baru ini memiliki perbedaan yang paling signifikan dibandingkan dengan pesaingnya, hal ini juga yang menjadi keunggulan bagi aplikasi tersebut. Aplikasi yang semula dikenal dengan sebutan “Indriver” berubah nama menjadi “Indrive” karena perusahaan tersebut telah melakukan <i>rebranding</i> pada 2022 lalu. Indrive juga mengubah identitas atribut para pengemudinya yang serba biru menjadi warna hijau. Lantas, apa bedanya Indrive dengan jasa transportasi lain seperti Gojek, Grab, maupun Maxim?</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Di sebuah warung kecil di daerah Jagakarsa, beberapa pengemudi ojol sedang menikmati istirahat siang  usai <i>ngebid</i> (mencari penumpang) di pagi hari. Mereka duduk di bangku kayu sederhana, sambil merokok dan menikmati kopi yang disajikan oleh sang pemilik warung. Sebagian dari mereka duduk di sekitar meja, berbincang-bincang dengan santai, sementara yang lain memilih duduk di pinggir warung, menikmati angin sepoi-sepoi yang berembus.</motion.p>

                    <motion.figure variants={slideLeftImage} viewport={{ once: true }} initial="hidden" whileInView="visible" className="md:hidden mb-6">
                        <img src={Indrive1} className="rounded-2xl" alt="Indrive 1"></img>
                        <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
                    </motion.figure>

                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Bedanya Indrive sama aplikasi lain itu para <i>customernya</i> bisa nawar harga,” ujar Junaidi (33), pengemudi ojek <i>online</i> yang sudah bergabung di InDrive selama kurang lebih 2, 5 tahun.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Perbedaan dan keunggulan Indrive dibanding dengan aplikasi lain terletak pada fleksibilitas yang ditawarkan, sehingga konsumen dapat memilih berapa biaya yang ingin mereka keluarkan untuk perjalanan mereka.</motion.p>
                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Ada patokannya minimal berapa, ngga bisa semena mena juga,” jelas Junaidi.</motion.p>

                    <motion.figure variants={slideRightImage} viewport={{ once: true }} initial="hidden" whileInView="visible" className="md:hidden mb-6">
                        <img src={Indrive2} className="rounded-2xl" alt="Indrive 2"></img>
                        <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
                    </motion.figure>

                    <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Meski begitu, konsumen tidak serta merta menetapkan sendiri tarif sesuai keinginan. Indrive tentu telah menetapkan standar harga, yang kemudian konsumen dapat menawarnya.</motion.p>

                    <div className="flex flex-col md:flex-row justify-between md:space-x-4 mt-10">
                        <motion.figure variants={fadeUpImage1} viewport={{ once: true }} initial="hidden" whileInView="visible" className="hidden md:block md:size-indrive">
                            <img src={Indrive1} className="rounded-2xl uniform-size" alt="Indrive 1" />
                            <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
                        </motion.figure>
                        <motion.figure variants={fadeUpImage2} viewport={{ once: true }} initial="hidden" whileInView="visible" className="hidden md:block md:size-indrive">
                            <img src={Indrive2} className="rounded-2xl uniform-size" alt="Indrive 2" />
                            <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
                        </motion.figure>
                    </div>
                </div>
            </section>


            {/* SECTION 3 */}
            <section id="section-2">
                <motion.div variants={fadeUpSection3} viewport={{ once: true }} initial="hidden" whileInView="visible" className="relative flex flex-col bg-cream-primary min-h-full">
                    <div className="relative mx-10 md:my-20 md:mx-44 text-justify text-md mt-10">
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Walaupun Indrive belum merata di seluruh Indonesia, kini sudah ada beberapa daerah yang telah aktif menggunakan layanan transportasi ini, terutama di wilayah Jabodetabek.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Perusahaan asal Rusia yang didirikan pada tahun 2012 ini mulai melakukan ekspansi ke Indonesia pada tahun 2021. Sama seperti pesaingnya, Indrive menerapkan sistem bagi hasil antara perusahaan dengan mitranya. Aplikator memotong 12% dari total penghasilan yang diterima oleh pengemudi. Walaupun potongan ini masih dalam batas aman sesuai dengan peraturan Kementerian Perhubungan, tetapi para pengemudi masih merasa jumlah potongan tersebut terlalu besar dan membebankan mereka.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Berapa sih potongan kita?” Tanya Junaidi ke sesama rekan sesama pengemudi yang sedang duduk di sebelahnya.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“11 persen kan ya?” lanjutnya.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“12 persen,” jawab pengemudi Indrive dengan inisial B yang tidak ingin disebutkan namanya itu.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Ohiya 12 persen, untuk tarifnya Rp 2.500 per km, ya standar aja nggak jauh beda sama yang lain sebenarnya,” Junaidi membalas.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Kita kan dibudakin aplikator,” lanjut pria berinisial B itu.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Kalau ada demo biasanya bukan cuman Indrive aja, tapi banyak juga ojol dari berbagai aplikasi yang ikut, tujuan kita demo buat minta kesejahteraan,” ujar pria itu ketika ditanya perihal aksi demo yang kerap kali dilakukan oleh pengemudi ojol.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Memang dalam kurun waktu lima sampai enam tahun terakhir para mitra ojek <i>online</i> dari berbagai aplikasi melakukan aksi demonstrasi, baik pengemudi ojol yang berdomisili di Jabodetabek, maupun luar Jabodetabek. Selain menuntut masalah payung hukum, tarif, dialog yang terbuka dengan aplikator, mereka juga meminta pemerintah untuk mempertimbangkan agar status mitra dapat diubah menjadi karyawan tetap.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Sebenarnya, untuk jadi karyawan tetap semua ojol pasti pengen ya, tapi kan mustahil. Paling nggak potongannya aja sih yang agak diturunkan ya sedikit <i>aja</i>-lah ngga usah banyak-banyak,” kata Junaidi.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Beberapa penelitian menyajikan argumen tentang dampak negatif dari kemitraan yang tidak seimbang terhadap pekerja. Bahkan, ada pandangan bahwa gagasan kemitraan yang digaungkan oleh ekonomi gig sebenarnya merupakan bentuk lain dari memperlakukan pekerja sebagai ‘barang dagangan’ belaka. Hal ini bisa berpotensi menyebabkan eksploitasi.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Kalau dibilang merasa (ekploitasi) ya merasa, cuman kan di satu sisi kita butuh, buat kebutuhan sehari-hari, kalau kita ngga gitu (kerja) kita nyari <i>cuannya</i> dari mana?  Mau ngga mau ya ikutin aja,” ujar Junaidi terlihat pasrah.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Di sisi lain, pekerja gig seperti pengemudi ojek <i>online</i> maupun kurir paket menyebabkan jebakan pekerjaan dengan keterampilan rendah. Jebakan ini terjadi ketika pekerjaan yang ada tidak menuntut pengembangan keterampilan yang dapat meningkatkan peluang kerja atau pendapatan di masa depan bagi individu. Dengan kata lain, pekerja gig terperangkap dalam pekerjaan yang minim kesempatan untuk meningkatkan kualifikasi mereka.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Dalam konteks pengemudi ojek <i>online</i>, masalah tersebut semakin diperparah oleh struktur pendidikan dari sebagian besar pengemudi ojol karena sebatas lulusan SMA. Pada periode April- Mei 2023, salah satu Lembaga riset di Indonesia, Institute for Demographic and Poverty Studies (IDEAS), melakukan survey non-probabilitas dengan teknik <i>purposive sampling</i> terhadap 225 pengemudi ojek daring di 10 titik simpul transportasi di Jabodetabek. Hasilnya, data menunjukkan bahwa pendidikan terakhir dari profesi pengemudi ojek <i>online</i> merupakan di tingkat Sekolah Menengah Atas (SMA).</motion.p>
                        <motion.img variants={slideLeftImage} viewport={{ once: true }} initial="hidden" whileInView="visible" src={Asset3} className="mb-6"></motion.img>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Fakta bahwa  sebagian besar pengemudi memiliki latar belakang pendidikan sekolah menengah (SMA) atau bahkan lebih rendah, menunjukkan bahwa banyak di antara mereka mungkin tidak memiliki akses ke pelatihan lebih lanjut atau pendidikan tinggi yang dapat membuka peluang kerja yang lebih luas.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Dalam hal ini, Kementerian Ketenagakerjaan menyediakan sebuah solusi dengan menyediakan aplikasi bernama Siap Kerja untuk masyarakat yang ingin mencari pekerjaan, mendapatkan sertifikat nasional, mengikuti pelatihan, hingga memulai bisnis. Siap Kerja yang diluncurkan pada tahun 2022 itu, dibuat dengan tujuan untuk mempersiapkan mematangkan, dan menyediakan fasilitas kepada masyarakat agar mereka dapat meningkatkan efektivitas dan kemampuan mereka pada bidang ketenagakerjaan. Hal ini juga dibuat karena Kemnaker menyadari bahwa para pekerja gig ekonomi seperti pengemudi ojol, kurir paket, dan profesi lain membutuhkan dukungan agar mereka meningkatkan kapasitas dirinya.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">Namun, alih-alih menciptakan solusi, naas masih banyak pengemudi ojek <i>online</i> yang tidak mengetahui adanya fasilitas yang disediakan oleh Kemnaker, seperti Siap Kerja yang dihadirkan untuk membantu mereka. </motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-6">“Wah kalau itu saya nggak tahu,” kata Junaidi.</motion.p>
                        <motion.p variants={fadeUpParagraph} viewport={{ once: true }} initial="hidden" whileInView="visible" className="mb-10 md:mb-0">“Kalau ada info-info kayak gitu kan, kadang-kadang cuman nyampe di atasnya doang, ke bawahnya nggak nyampe,” jelasnya.</motion.p>
                    </div>
                </motion.div>
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

export default IndrivePage