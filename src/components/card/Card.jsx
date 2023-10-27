import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col justify-between gap-8 md:flex-row">
      <div className="relative flex-1">
        <Image className="flex-1 object-cover" src="/p1.jpeg" alt="" fill />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3">
        <div className="flex gap-2 font-medium opacity-90">
          <span>20.10.2023 </span>
          <span>-</span>
          <span className="text-red-500">CULTURE</span>
        </div>
        <h2 className="text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="text-sm text-[var(--softTextColor)]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae eos
          beatae enim? Voluptatem architecto enim error. Tempora modi voluptatum
          quo aperiam, ipsa ratione placeat commodi atque dignissimos eius, vel
          inventore.
        </p>
        <button className="relative w-max after:absolute after:-bottom-[2px] after:left-0 after:h-[1.5px] after:w-full after:bg-[var(--textColor)]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;