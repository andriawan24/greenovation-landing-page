import Breadcrumb from "@/src/common/breadcrumb/breadcrumb"
import SEO from "@/src/common/seo"
import Footer from "@/src/layout/footers/footer"
import HeaderTwo from "@/src/layout/headers/header-2"
import Wrapper from "@/src/layout/wrapper"
import { useState } from "react"

const index = () => {

  const [language, setLanguage] = useState('id')

  return (
    <>
      <Wrapper>
        <SEO pageTitle={'Privacy Policy'} />
        <HeaderTwo />
        <main>
          <Breadcrumb top_title="Privacy Policy" page_title="Privacy Policy" />
          <section className="pt-40 text-center">
            <button onClick={() => setLanguage('id')} className={language == "id" ? 'tp-btn-2 mr-20' : ''}>Indonesia</button>
            <button onClick={() => setLanguage('en')} className={language == "en" ? 'tp-btn-2 ml-20' : ''}>English</button>
          </section>
          {language == "id" ? (
            <section className="pt-80 pb-80 pl-40 pr-40">
              <h1>Kebijakan Privasi untuk Greenovation</h1>
              <p>Di Greenovation, dapat diakses dari Greenovation, salah satu prioritas utama kami adalah privasi pengunjung kami. Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Greenovation dan bagaimana kami menggunakannya.</p>
              <p>Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami.</p>
              
              <h2>File Log</h2>
              <p>Greenovation mengikuti prosedur standar menggunakan file log. File-file ini mencatat pengunjung ketika mereka mengunjungi situs web. Semua perusahaan hosting melakukan ini dan merupakan bagian dari analisis layanan hosting. Informasi yang dikumpulkan oleh file log termasuk alamat protokol internet (IP), jenis browser, Penyedia Layanan Internet (ISP), cap tanggal dan waktu, halaman rujukan/keluar, dan mungkin jumlah klik. Ini tidak terkait dengan informasi apa pun yang dapat diidentifikasi secara pribadi. Tujuan dari informasi tersebut adalah untuk menganalisis tren, mengelola situs, melacak pergerakan pengguna di situs web, dan mengumpulkan informasi demografis. Kebijakan Privasi kami dibuat dengan bantuan <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">Pembuat Kebijakan Privasi</a>.</p>

              <h2>Kebijakan Privasi</h2>
              <p>Anda dapat berkonsultasi dengan daftar ini untuk menemukan Kebijakan Privasi untuk masing-masing mitra periklanan Greenovation.</p>
              <p>Server iklan atau jaringan iklan pihak ketiga menggunakan teknologi seperti cookie, JavaScript, atau Web Beacon yang digunakan dalam iklan masing-masing dan tautan yang muncul di Greenovation, yang dikirim langsung ke browser pengguna. Mereka secara otomatis menerima alamat IP Anda ketika ini terjadi. Teknologi ini digunakan untuk mengukur efektivitas kampanye iklan mereka dan/atau untuk mempersonalisasi konten iklan yang Anda lihat di situs web yang Anda kunjungi.</p>
              <p>Perhatikan bahwa Greenovation tidak memiliki akses atau kontrol terhadap cookie yang digunakan oleh pengiklan pihak ketiga.</p>

              <h2>Kebijakan Privasi Pihak Ketiga</h2>
              <p>Kebijakan Privasi Greenovation tidak berlaku untuk pengiklan atau situs web lain. Oleh karena itu, kami menyarankan Anda untuk berkonsultasi dengan Kebijakan Privasi masing-masing server iklan pihak ketiga ini untuk informasi lebih rinci. Ini mungkin mencakup praktik dan instruksi mereka tentang cara memilih untuk tidak ikut serta dalam opsi tertentu.</p>
              <p>Anda dapat memilih untuk menonaktifkan cookie melalui opsi browser individual Anda. Untuk mengetahui informasi lebih detail mengenai pengelolaan cookie dengan browser web tertentu, dapat ditemukan di situs web browser masing-masing. Apa itu Cookies?</p>

              <h2>Informasi Anak</h2>
              <p>Bagian lain dari prioritas kami adalah menambahkan perlindungan bagi anak-anak saat menggunakan internet. Kami mendorong orang tua dan wali untuk mengamati, berpartisipasi, dan/atau memantau dan membimbing aktivitas online mereka.</p>
              <p>Greenovation tidak dengan sengaja mengumpulkan Informasi Identifikasi Pribadi apa pun dari anak-anak di bawah usia 13 tahun. Jika menurut Anda anak Anda memberikan informasi semacam ini di situs web kami, kami sangat menganjurkan Anda untuk segera menghubungi kami dan kami akan melakukan upaya terbaik kami untuk segera menghapusnya. informasi tersebut dari catatan kami.</p>

              <h2>Hanya Kebijakan Privasi Online</h2>
              <p>Kebijakan Privasi ini hanya berlaku untuk aktivitas online kami dan berlaku bagi pengunjung situs web kami sehubungan dengan informasi yang mereka bagikan dan/atau kumpulkan di Greenovation. Kebijakan ini tidak berlaku untuk informasi apa pun yang dikumpulkan secara offline atau melalui saluran selain situs web ini.</p>

              <h2>Kepatuhan</h2>
              <p>Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui Syarat dan Ketentuannya.</p>
            </section>
          ) : (
            <section className="pt-80 pb-80 pl-40 pr-40">
            <h1>Privacy Policy for Greenovation</h1>
            <p>At Greenovation, accessible from Greenovation, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Greenovation and how we use it.</p>
            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
            
            <h2>Log Files</h2>
            <p>Greenovation follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">Privacy Policy Generator</a>.</p>

            <h2>Privacy Policies</h2>
            <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Greenovation.</p>
            <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Greenovation, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
            <p>Note that Greenovation has no access to or control over these cookies that are used by third-party advertisers.</p>

            <h2>Third Party Privacy Policies</h2>
            <p>Greenovation's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
            <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>

            <h2>Children's Information</h2>
            <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
            <p>Greenovation does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

            <h2>Online Privacy Policy Only</h2>
            <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Greenovation. This policy is not applicable to any information collected offline or via channels other than this website.</p>

            <h2>Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
          </section>
          )}
        </main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default index