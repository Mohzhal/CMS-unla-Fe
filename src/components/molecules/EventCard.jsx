const EventCard = ({ image, title }) => (
  <div className="relative min-w-[220px] h-[320px] group overflow-hidden rounded-lg">
    <img src={image} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition" />
    <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100">
      <p className="font-inria text-sm">{title}</p>
    </div>
  </div>
);

export default EventCard;
