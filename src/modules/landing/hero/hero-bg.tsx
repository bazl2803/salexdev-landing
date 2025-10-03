export const HeroBg = () => {
  return (
    <>
      <div
        className="absolute -z-10 h-full w-full bg-[url('/light-bg.jpg')] brightness-110 md:relative dark:bg-[url('/dark-bg.jpg')] dark:brightness-90"
        style={{
          backgroundPosition: "center top",
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
          WebkitMaskImage:
            "radial-gradient(circle, white 30%, transparent 75%)",
        }}
      />
    </>
  );
};
