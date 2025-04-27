const Logo = ({ fullLogo = false }: { fullLogo?: boolean }) => {
  return (
    <div className="grid items-center justify-center text-center w-fit">
      {/* FAST CACHE part */}
      <div className="relative flex items-center justify-center -mb-2">
        {fullLogo ? (
          <>
            <div className="text-amber-500 text-2xl font-bold">FAST</div>
            <div className="text-amber-500 text-2xl">CACHE</div>
          </>
        ) : (
          <>
            <small className="text-amber-500 text-xs font-bold">FAST</small>
            <small className="text-amber-500 text-xs">CACHE</small>
          </>
        )}
      </div>

      {/* PAWN part */}
      <div className="relative">
        <div className="relative">
          <div
            className={[
              "text-red-600 transform group-hover:scale-105 transition-transform duration-300 font-black",
              fullLogo
                ? "text-5xl"
                : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
            ].join(" ")}
          >
            PAWN
          </div>
        </div>
      </div>

      {fullLogo && (
        <div className="relative">
          <div className="text-gray-500 text-xs">Guns - Gold - Buy & Sell - Tools - Electronics</div>
        </div>
      )}
    </div>
  );
};

export default Logo;
