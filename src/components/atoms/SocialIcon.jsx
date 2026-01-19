const SocialIcon = ({ icon: Icon, href }) => (
  <a href={href} className="w-8 h-8 flex items-center justify-center border rounded-full">
    <Icon size={14} />
  </a>
);

export default SocialIcon;
