const IMG_URL =
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781687620/-44_hcqogx.jpg";

const shared: React.CSSProperties = {
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "45%",
  pointerEvents: "none",
  objectFit: "cover",
  height: "100%",
  opacity: 0.45,
  zIndex: 0,
};

export default function SectionBg() {
  return (
    <>
      <img
        src={IMG_URL}
        alt=""
        aria-hidden="true"
        style={{
          ...shared,
          left: 0,
          objectPosition: "left center",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      <img
        src={IMG_URL}
        alt=""
        aria-hidden="true"
        style={{
          ...shared,
          right: 0,
          objectPosition: "right center",
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
    </>
  );
}
