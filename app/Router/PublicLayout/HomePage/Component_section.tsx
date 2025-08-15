type SectionProps = {
  imgSrc: string;
  Label: string;
  Label2: string;
  Button: string;
  Direct: String;
  flex: 'row' | 'row-reverse' | 'col' | 'col-reverse';
};

export default function Section_Panjang({
  imgSrc,
  Label,
  Label2,
  Button,
  Direct,
  flex = 'col',
}: SectionProps) {
  const baseFlexClass = 'flex-col';
  const responsiveFlexClass = {
    row: 'lg:flex-row',
    'row-reverse': 'lg:flex-row-reverse',
    col: 'lg:flex-col',
    'col-reverse': 'lg:flex-col-reverse',
  }[flex];

  return (
    <section className="w-full min-h-[35vh] px-12">
      <div className={`w-full min-h-[35vh] flex ${baseFlexClass} ${responsiveFlexClass} justify-center items-center`}>
        <div className="w-full lg:w-[40vw] h-[25vh] flex flex-col justify-center items-center gap-y-5">
          <h1 className="text-[#66EBFF] md:text-[6vh] lg:text-[8vh] font-bold text-center lg:text-start">{Label}</h1>
          <p className="text-center lg:text-start">{Label2}</p>
          <a href={`${Direct}`} className="w-full text-center lg:text-start">
            <p className=" Button border-b-2 border-[#66EBFF] text-[#66EBFF] hover:text-black inline-block">{Button}</p>
            
          </a>
        </div>
        <div className="w-full lg:w-[50%] p-5 justify-center items-center flex">
          <img src={imgSrc} alt={Label} />
        </div>
      </div>
    </section>
  );
}
