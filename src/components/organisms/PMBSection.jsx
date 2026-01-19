import Button from "../atoms/Button";
import SectionTitle from "../atoms/SectionTitle";

const PMBSection = () => (
  <section className="py-16 bg-black flex flex-col items-center gap-4">
    <SectionTitle
      title="Informasi Pendaftaran (PMB)"
      subtitle="Pendaftaran Mahasiswa Baru Tahun Akademik 2026/2027"
    />
    <p className="font-inria text-white/80">Universitas Langlangbuana</p>
    <Button>Daftar Sekarang</Button>
  </section>
);

export default PMBSection;
