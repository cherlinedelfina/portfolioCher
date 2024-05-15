export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-indigo-600 w-9 h-9 rounded-md opacity-70"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45 translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full md:w-64" : "w-0"}`} style={{background : '#141414', fontFamily: "'Sometype Mono', monospace", color: '#e0e0e0'}}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-4 p-6">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2.5)} />
          <div className="flex justify-center gap-4">
            <ImageButton imageSource="/projects/github.png" onClick={() => window.location.href = "https://github.com/cherlinedelfina"} />
            <ImageButton imageSource="/projects/linkedin.png" onClick={() => window.location.href = "https://www.linkedin.com/in/cherline-delfina-tandra/"} />
            <ImageButton imageSource="/projects/email.png" onClick={() => window.location.href = "mailto:cherline.delfina@gmail.com"} />
          </div>
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-lg font-semibold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};

const ImageButton = (props) => {
  const { imageSource, onClick } = props;

  return (
    <button onClick={onClick}>
      <img src={imageSource} alt="Icon" className="w-6 h-6 mt-20 cursor-pointer" />
    </button>
  );
};
