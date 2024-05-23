import Wrapper from "../assets/wrapper/maximPage"
import Navbar from "../components/Navbar"
import { GiFullMotorcycleHelmet } from "react-icons/gi"
import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import Logo from "../assets/images/Maxim/logo-maxim.png"
import BackgroundMaxim from "../assets/images/Maxim/bg-maxim.png"
import BackgroundMaximMotor from "../assets/images/Maxim/bg-maxim-motor.png"
import Asset1 from "../assets/images/Maxim/asset-1.png"
import Asset2 from "../assets/images/Maxim/asset-2.png"
import Vektor from "../assets/images/Maxim/bg-vektor.png"
import Headline1 from "../assets/images/Maxim/headline-1.png"
import Headline2 from "../assets/images/Maxim/headline-2.png"
import KetentuanMobile from "../assets/images/Maxim/ketentuan-mobile.png"
import KedelapanMobile from "../assets/images/Maxim/kedelapan-mobile.png"
import Ketentuan from "../assets/images/Maxim/kedelapan.png"
import Kedelapan from "../assets/images/Maxim/kedelapan.png"

const MaximPage = () => {

    const navigate = useNavigate();

    const buttonClickHome = () => {
        navigate("/")
    }

    return (
        <Wrapper>
            <Navbar />

            {/* SECTION 1 */}
            <section id="section-1" className="relative flex flex-col bg-cream-primary min-h-full">
                <div className="relative flex-grow bg-[#F4C301] rounded-2xl my-10 mx-10 md:my-20 md:mx-44">
                    <button className="flex absolute items-center space-x-3 top-4 left-7 md:top-4 md:left-7 text-md md:text-md text-md md:text-lg font-bold text-white" onClick={buttonClickHome}>
                        <FaArrowLeft />
                        <span>Home</span>
                    </button>

                    <div className="flex flex-col md:flex-row justify-between md:mt-[4rem]">
                        <div className="flex flex-col mt-20 md:mt-20 md:ml-7">
                            <img src={Logo} className="size-3/12 md:size-fit mb-8 md:mb-7 md:-ml-0 mx-auto"></img>
                            <p className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2">Ilusi Kesejahteraan</p>
                            <p className="flex flex-row text-white font-semibold md:font-bold mx-auto md:-ml-0 text-2xl md:text-5xl md:text-nowrap mb-2 md:mb-[6.9rem]">Bagi Maxim</p>
                        </div>

                        <div className="relative mt-10 w-full md:w-full md:-mt-7 md:ml-10">
                            <div className="absolute inset-0 w-fit h-fit">
                                <img src={BackgroundMaxim} />
                            </div>
                            <div className="relative z-10 ml-12 mt-16 w-7/12 md:mt-20 md:w-[65%] md:ml-20">
                                <img src={BackgroundMaximMotor} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section id="section-2" className="relative flex flex-col bg-[#FEF0C7] min-h-full">
                <div className="relative mx-10 md:my-20 md:mx-44 text-justify text-md mt-10">
                    <p className="mb-6">Bayu (27), sedang asyik mengobrol dengan rekan sejawatnya di sebuah tempat yang berada di daerah Ciputat, Tangerang Selatan. Bangunan di mana tempat Bayu bersama teman-temannya bercengkrama itu tidak terlalu besar, tidak juga terlalu sempit, dapat dikatakan tempat tersebut merupakan <i>basecamp</i> untuk Bayu bersama rekan sesama pengemudi ojek <i>online</i> lainnya untuk berkumpul bersama.</p>
                    <p className="mb-6">Pria berumur 27 tahun tersebut mengaku sudah melakoni profesi sebagai ojek <i>online</i> selama tiga tahun. Bayu pergi merantau ke kota dan meninggalkan kampung halamannya untuk bekerja.</p>
                    <p className="mb-6">“Menjadi profesi ojol sudah jalan tiga tahun ini, di masa pandemi Covid saya mencoba peruntungan jadi <i>driver</i> ojek <i>online</i>,” ujarnya.</p>
                    <p className="mb-6">Situasi terburuk sudah pernah Bayu lewati ketika pandemi Covid-19 melanda, khususnya ketika Pembatasan Sosial Berskala Besar (PSBB) ditetapkan oleh pemerintah pada 2020 lalu. Kala itu pemerintah melarang pengemudi ojek <i>online</i> mengangkut penumpang, sehingga mengurangi pendapatannya.</p>
                    <p className="mb-6">“Saat Covid kemarin banyak yang kita nggak bisa dapat, berbeda sebelum pandemi, teman-teman pun yang biasanya sehari bisa mencukupi kebutuhannya tapi karena berhubung PSBB, akhirnya mengurangi pendapatan,”  ujar pengemudi Maxim itu menjelaskan.</p>
                    <p className="mb-6">Mungkin beberapa di antara anda masih jarang mengetahui keberadaan Maxim, atau bahkan sama sekali tidak mengetahuinya. Maxim merupakan sebuah  perusahaan teknologi asal Rusia yang beroperasi di Indonesia pada 2019 lalu. Dikenal dengan ciri khas atribut pengemudinya yang serba berwarna kuning, perusahaan teknologi ini hampir sama dengan seperti Gojek maupun Grab, ketiganya menyediakan jasa transportasi <i>online</i>.</p>
                    <p className="mb-6">“Kalau untuk Maxim sendiri sama kayak aplikasi lain seperti Gojek, kita posisinya adalah mitra. Sebagai mitra, diterapkan sistem bagi hasil dalam pendapatan,” terang Bayu.</p>
                    <p className="mb-6">Sumber penghasilan para pengemudi ojol ditentukan berdasarkan pesanan yang diterima dan jarak yang ditempuh dalam proses pengantaran. Sesuai dengan keputusan Menteri Perhubungan Nomor KP 1001 Tahun 2022 tentang Pedoman Perhitungan Biaya Jasa Penggunaan Sepeda Motor Yang Digunakan Untuk Kepentingan Masyarakat Yang Dilakukan Dengan Aplikasi, menyatakan bahwa perusahaan aplikasi mengenakan biaya tidak langsung dengan batasan maksimal 15% dari biaya sewa untuk penggunaan aplikasi tersebut.</p>
                    <img src={Ketentuan} className="hidden md:block mb-6"></img>
                    <img src={KetentuanMobile} className="md:hidden mb-6"></img>
                    <p className="mb-6">Selain itu, penghasilan juga dipengaruhi oleh apakah pesanan diterima pada jam sibuk. Pria berkepala dua itu menerangkan bahwa aplikator (dalam konteks ini pihak Maxim) menerapkan sistem bagi hasil dengan memotong sekitar 10-15%. “Kalau untuk Maxim sendiri saat ini kisarannya ada di angka 10-15%, minimal itu potongan 10%, maksimal itu 15%, sesuai dengan anjuran pemerintah,” ujarnya.</p>
                    <p className="mb-6">Aplikator akan memotong penghasilan pengemudi ojol sebesar 15% dari total ongkos kirim. Sebagai contoh, <i>driver</i> Maxim mendapatkan penumpang dengan ongkos pengantaran yang tertera di aplikasi sebesar Rp30.000 maka perhitungannya adalah 30.000 - (30.000 x 15%) = Rp. 25.500. Angka Rp25.500 lah yang akan menjadi pendapatan sang <i>driver</i> ojol dan yang Rp4.500 akan masuk ke kantong pihak Maxim.</p>
                    <p className="mb-6">Usut punya usut, ternyata potongan biaya dalam aplikasi ini sebelumnya hampir dikeluhkan semua pengemudi ojek <i>online</i> lantaran jumlahnya yang cukup besar, yakni mencapai angka 20%. Hal tersebut tertuang dalam Keputusan Menteri Perhubungan Republik Indonesia Nomor KP 564 Tahun 2022 Tentang &quot;Pedoman Perhitungan Biaya Jasa Penggunaan Sepeda Motor Yang Digunakan Untuk Kepentingan Masyarakat Yang Dilakukan Dengan Aplikasi&quot; yang kini statusnya telah dicabut dan diganti dengan  Keputusan Menteri Perhubungan Nomor 667 Tahun 2022 dan keputusan Menteri Perhubungan Nomor KP 1001 Tahun 2022.</p>
                    <img src={Kedelapan} className="hidden md:block mb-6"></img>
                    <img src={KedelapanMobile} className="md:hidden mb-6"></img>
                </div>
            </section>

            {/* SECTION 3 */}
            <section id="section-3" className="relative flex bg-cream-primary min-h-full justify-center items-center">
                <div className="relative mx-10 md:mt-10 md:mb-[800px] md:mx-44 text-justify text-md mt-10">
                    <img src={Headline1} className="flex size-10/12 my-10 md:size-fit mx-auto md:my-20"></img>
                    <p className="mb-6">Pekerjaan sebagai pengemudi ojek <i>online</i> yang berstatus sebagai” mitra”, membuat para <i>driver</i> cenderung tereksploitasi oleh aplikator. Pasalnya, di Tanah Air sendiri belum ada payung hukum yang jelas mengenai transportasi ojek <i>online</i>, khususnya aturan mengenai jaminan sosial dan kesehatan bagi pengemudi.</p>
                    <figure className='md:hidden size-fit mb-6 md:size-6/12'>
                        <img src={Asset2} className="w-full h-full" alt="Foto: Natania Rizky" />
                        <figcaption className="text-center mt-1 text-sm">Foto: Natania Rizky</figcaption>
                    </figure>
                    <p className="mb-6">“Kita nggak ada ketentuan jam kerja karena kita di sini statusnya mitra. Nah kemarin kan juga sempat yang mau ada pengaturan jam kerja dari Kemnaker, itu kita juga sempat tolak juga. Karena kalau seandainya dibatasi ya balik lagi, kita statusnya itu mitra. Kalau kita mau dibatasi jam kerja, harusnya ada hak-hak dan kewajiban yang tegak lurus lah sama hal yang akan diberlakukan,” tegas Bayu.</p>
                    <p className="mb-6">Pada Agustus 2023 lalu, Kementerian Ketenagakerja sempat memiliki wacana untuk mengatur jam kerja ojol menjadi 10 jam per hari nya. Namun, banyak pengemudi ojek <i>online</i> yang keberatan lantaran mereka menganggap pendapatan akan berkurang jika jam kerja akan dibatasi menjadi 10 jam.</p>
                    <div className="relative flex flex-col md:flex-row my-6 md:space-x-4">
                        <figure className='size-fit mb-6 md:size-6/12'>
                            <img src={Asset1} className="w-full h-full" alt="Foto: Natania Rizky" />
                            <figcaption className="text-center text-sm mt-1">Foto: Natania Rizky</figcaption>
                        </figure>
                        <figure className='hidden md:block size-fit mb-6 md:size-6/12'>
                            <img src={Asset2} className="w-full h-full" alt="Foto: Natania Rizky" />
                            <figcaption className="text-center mt-1 text-sm">Foto: Natania Rizky</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            {/* SECTION 4 */}
            <section id="section-2">
                <div className="relative flex flex-col min-h-full bg-[#FEF0C7]">
                    <img
                        src={Vektor}
                        className="absolute hidden md:block md:-mt-48 md:mb-96 inset-0 w-full h-full object-cover md:object-fill z-0"
                    />

                    <div className="relative z-10 p-10 text-justify rounded-xl mx-6 mt-16 mb-20 md:p-10 md:mb-96 md:-mt-[600px] md:rounded-3xl md:mx-44 bg-white">
                        <img src={Headline2} className="mx-auto size-10/12 mb-10 md:size-3/12 md:mb-20"></img>
                        <p className="mb-6">Aplikator seharusnya dapat bersikap terbuka pada aspirasi-aspirasi mitranya, menampung setiap masalah dengan memberikan ruang terbuka maupun solusi atas setiap keluhan yang terjadi. Namun, alih-alih mendapatkan solusi maupun perlakuan baik dari aplikator, nampaknya hal tersebut tidak berjalan mulus bagi para mitra Maxim.</p>
                        <p className="mb-6">“Kita audiensi, mengenai keresahan kita, tetapi hanya ditampung-tampung saja tanpa ada kejelasan, tanpa ada <i>feedback</i> seperti apa kedepannya,” keluh Bayu.</p>
                        <p className="mb-6">“Balik lagi ke masalah payung hukum ojol itu belum ada di Indonesia, jadi seolah-olah aplikator itu masih semau-maunya ke kita yang sifatnya hanya mitra,” lanjutnya menjelaskan ketidakpuasan yang dirasakan.</p>
                        <p className="mb-6">Sejak tahun 2018 hingga 2023, Indonesia menyaksikan gelombang demonstrasi yang melibatkan sejumlah besar pengemudi ojek <i>online</i>. Protes ini tidak hanya mencerminkan ketidakpuasan, tetapi juga merupakan ekspresi dari berbagai isu yang melibatkan para pekerja <i>platform</i> digital ini. Pada 2018 lalu, pengemudi ojol yang terafiliasi dalam Gerakan Jabodetabek Bersatu melakukan demonstrasi di kantor Grab Indonesia yang berada di Setia Budi, Jakarta Selatan.</p>
                        <p className="mb-6">Dalam demonstrasi tersebut, para pengemudi menyampaikan beberapa tuntutan, di antaranya perihal meminta aplikator untuk memenuhi janjinya, menolak keras status aplikator sebagai perusahaan transportasi,  menentang dengan tegas eksploitasi terhadap pengemudi ojol.</p>
                        <p className="mb-6">Tuntutan keempat adalah menolak dengan keras adanya monopoli dalam bisnis transportasi <i>online</i>. Terakhir, tuntutan bahwa jika aplikator tidak memenuhi tuntutan yang diajukan, mereka akan meminta kepada pemerintah untuk mengusir Grab dan Gojek dari Indonesia serta membuat aplikasi pemerintah sebagai alternatif.</p>
                        <p className="mb-6">Beberapa protes dari para pengemudi juga sering kali terfokus pada isu tarif rendah dan kondisi kerja yang dianggap tidak adil oleh sebagian besar pengemudi ojol. Mereka merasa bahwa tarif yang ditetapkan oleh perusahaan aplikasi ojol tidak sesuai dengan tingkat inflasi dan biaya hidup yang terus meningkat.</p>
                        <p className="mb-6">Seiring berjalannya waktu, protes ini berkembang menjadi gerakan yang lebih luas, mencakup tuntutan terkait hak-hak pekerja, keamanan, dan kesejahteraan. Para pengemudi mulai menuntut perlindungan hukum dan jaminan sosial, mengingat mereka bekerja sebagai mitra independen tanpa status pekerja tetap. Isu-isu ini menciptakan ketegangan antara pengemudi ojol dan perusahaan aplikator.</p>
                        <p className="mb-6">“Mengapa kami melakukan demo? Ya karena itu tadi mbak, masalah seperti tidak adanya keterbukaan, argo minim, dan jumlah potongan yang besar,” ujarnya.</p>
                        <p className="mb-6">Bayu berharap agar jerih payah dan pengabdian mereka dihargai. Ia menginginkan adanya perlindungan dan hak yang setara dengan kontribusi yang mereka berikan dalam memenuhi kebutuhan mobilitas masyarakat, terutama soal jaminan kesehatan.</p>
                        <p className="mb-6">“Kalau dari aplikator saya pengennya sih potongan dibikin <i>flat</i>, lalu lebih memperhatikanlah soal keselamatan <i>driver</i>, karena kita sebagai mitra itu sebenarnya kan aset perusahaan,  di mana aset itu kan sebenarnya harus dijaga. Cuma mungkin kadang-kadang aplikator berpikirnya ketika lu udah gak mau kerja banyak di belakang teman-teman yang lain yang mau jadi <i>driver</i> seperti itu,” ujar pria berkepala dua itu menerangkan.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="relative text-white bg-pink-primary mx-auto px-10 py-6 md:-mt-48 md:px-48 z-0">
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

export default MaximPage