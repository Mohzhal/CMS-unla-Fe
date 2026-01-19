const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center text-white">
    <h2 className="font-amethysta text-xl sm:text-2xl lg:text-3xl mb-2">
      {title}
    </h2>
    {subtitle && (
      <p className="font-inria text-sm text-white/80">{subtitle}</p>
    )}
  </div>
);

export default SectionTitle;
