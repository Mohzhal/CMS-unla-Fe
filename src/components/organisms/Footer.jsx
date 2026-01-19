import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import SocialIcon from "../atoms/SocialIcon";

const Footer = () => (
  <footer className="bg-black text-white pt-10 p-2 sm:pt-12">
  <div
    className="
      max-w-7xl mx-auto px-4 sm:px-6
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-10 lg:gap-12
      items-start
    "
  >

   
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
      <img src="/unla.png" alt="UNLA" className="w-16 sm:w-20" />

      <p className="font-inria text-xs sm:text-sm leading-relaxed">
        universitas langlangbuana<br />
        Karawang
      </p>

     <div className="flex flex-row gap-4 mt-2">
  <a href="#">
    <SocialIcon icon={FaFacebookF} />
  </a>

  <a href="#">
    <SocialIcon icon={FaTwitter} />
  </a>

  <a href="#">
    <SocialIcon icon={FaInstagram} />
  </a>

  <a href="#">
    <SocialIcon icon={FaYoutube} />
  </a>
</div>

    </div>

    
    <div className="font-inria text-xs sm:text-sm space-y-5 text-center lg:text-left">
      <div>
        <h4 className="font-amethysta text-sm sm:text-base mb-1">Kontak</h4>
        <p>+62 822 3344 5566</p>
        <p>http://pasca.unla.ac.id</p>
      </div>

      <div>
        <h4 className="font-amethysta text-sm sm:text-base mb-1">About Us</h4>
        <p>Akademik</p>
      </div>

      <div>
        <h4 className="font-amethysta text-sm sm:text-base mb-1">Alamat</h4>
        <p className="leading-relaxed">
          UNIVERSITAS LANGLANGBUANA<br />
          Jl. Karapitan No. 116, Kb. Kacang,<br />
          Lengkong, Kota Bandung, Jawa Barat 40261
        </p>
      </div>
    </div>

    
    <div className="w-full h-52 sm:h-60 md:h-64 lg:h-56 xl:h-64 rounded-md overflow-hidden">
      <iframe
        title="Universitas Langlangbuana"
        src="https://www.google.com/maps?q=Universitas%20Langlangbuana&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </div>

  </div>

</footer>
);

export default Footer;
        