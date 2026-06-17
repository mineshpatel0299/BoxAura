const IMG =
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781687620/-44_hcqogx.jpg";

type Variant =
  | "top-right"
  | "bottom-left"
  | "left-strip"
  | "right-strip"
  | "corner-both"
  | "top-center";

const imgBase: React.CSSProperties = {
  position: "absolute",
  pointerEvents: "none",
  objectFit: "cover",
  zIndex: 0,
};

const blobBase: React.CSSProperties = {
  position: "absolute",
  pointerEvents: "none",
  borderRadius: "50%",
  filter: "blur(80px)",
  zIndex: 0,
};

type Layer = { type: "img"; style: React.CSSProperties } | { type: "blob"; style: React.CSSProperties };

const VARIANTS: Record<Variant, Layer[]> = {
  "top-right": [
    {
      type: "blob",
      style: {
        ...blobBase,
        top: "-10%",
        right: "-5%",
        width: "45%",
        height: "60%",
        background: "radial-gradient(ellipse, rgba(252,205,210,0.55) 0%, rgba(253,230,220,0.3) 50%, transparent 80%)",
      },
    },
    {
      type: "blob",
      style: {
        ...blobBase,
        top: "20%",
        right: "10%",
        width: "25%",
        height: "35%",
        background: "radial-gradient(ellipse, rgba(245,222,200,0.5) 0%, transparent 75%)",
      },
    },
    {
      type: "img",
      style: {
        ...imgBase,
        top: 0,
        right: 0,
        width: "40%",
        height: "75%",
        opacity: 0.5,
        objectPosition: "right top",
        maskImage: "radial-gradient(ellipse at top right, rgba(0,0,0,1) 0%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at top right, rgba(0,0,0,1) 0%, transparent 70%)",
      },
    },
  ],

  "bottom-left": [
    {
      type: "blob",
      style: {
        ...blobBase,
        bottom: "-8%",
        left: "-5%",
        width: "40%",
        height: "55%",
        background: "radial-gradient(ellipse, rgba(248,200,210,0.5) 0%, rgba(255,235,220,0.25) 55%, transparent 80%)",
      },
    },
    {
      type: "blob",
      style: {
        ...blobBase,
        bottom: "15%",
        left: "12%",
        width: "20%",
        height: "30%",
        background: "radial-gradient(ellipse, rgba(240,215,195,0.45) 0%, transparent 70%)",
      },
    },
    {
      type: "img",
      style: {
        ...imgBase,
        bottom: 0,
        left: 0,
        width: "38%",
        height: "70%",
        opacity: 0.45,
        objectPosition: "left bottom",
        maskImage: "radial-gradient(ellipse at bottom left, rgba(0,0,0,1) 0%, transparent 65%)",
        WebkitMaskImage: "radial-gradient(ellipse at bottom left, rgba(0,0,0,1) 0%, transparent 65%)",
      },
    },
  ],

  "left-strip": [
    {
      type: "blob",
      style: {
        ...blobBase,
        top: "5%",
        left: "-8%",
        width: "30%",
        height: "90%",
        background: "linear-gradient(to bottom, rgba(252,205,215,0.45) 0%, rgba(248,225,205,0.35) 50%, rgba(255,220,230,0.3) 100%)",
        borderRadius: "40%",
      },
    },
    {
      type: "img",
      style: {
        ...imgBase,
        top: 0,
        left: 0,
        width: "25%",
        height: "100%",
        opacity: 0.4,
        objectPosition: "left center",
        maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, transparent 80%)",
        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, transparent 80%)",
      },
    },
  ],

  "right-strip": [
    {
      type: "blob",
      style: {
        ...blobBase,
        top: "5%",
        right: "-8%",
        width: "30%",
        height: "90%",
        background: "linear-gradient(to bottom, rgba(248,220,200,0.4) 0%, rgba(252,208,218,0.4) 50%, rgba(245,215,195,0.3) 100%)",
        borderRadius: "40%",
      },
    },
    {
      type: "img",
      style: {
        ...imgBase,
        top: 0,
        right: 0,
        width: "25%",
        height: "100%",
        opacity: 0.4,
        objectPosition: "right center",
        maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, transparent 80%)",
        WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, transparent 80%)",
      },
    },
  ],

  "corner-both": [
    {
      type: "blob",
      style: {
        ...blobBase,
        top: "-10%",
        right: "-5%",
        width: "35%",
        height: "45%",
        background: "radial-gradient(ellipse, rgba(255,210,220,0.5) 0%, transparent 75%)",
      },
    },
    {
      type: "blob",
      style: {
        ...blobBase,
        bottom: "-10%",
        left: "-5%",
        width: "35%",
        height: "45%",
        background: "radial-gradient(ellipse, rgba(245,225,205,0.45) 0%, transparent 75%)",
      },
    },
    {
      type: "img",
      style: {
        ...imgBase,
        top: 0,
        right: 0,
        width: "30%",
        height: "45%",
        opacity: 0.35,
        objectPosition: "right top",
        maskImage: "radial-gradient(ellipse at top right, rgba(0,0,0,1) 0%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at top right, rgba(0,0,0,1) 0%, transparent 70%)",
      },
    },
    {
      type: "img",
      style: {
        ...imgBase,
        bottom: 0,
        left: 0,
        width: "30%",
        height: "45%",
        opacity: 0.35,
        objectPosition: "left bottom",
        maskImage: "radial-gradient(ellipse at bottom left, rgba(0,0,0,1) 0%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at bottom left, rgba(0,0,0,1) 0%, transparent 70%)",
      },
    },
  ],

  "top-center": [
    {
      type: "blob",
      style: {
        ...blobBase,
        top: "-15%",
        left: "25%",
        width: "50%",
        height: "50%",
        background: "radial-gradient(ellipse, rgba(252,210,220,0.5) 0%, rgba(250,230,215,0.25) 55%, transparent 80%)",
      },
    },
    {
      type: "img",
      style: {
        ...imgBase,
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "55%",
        height: "45%",
        opacity: 0.35,
        objectPosition: "center top",
        maskImage: "radial-gradient(ellipse at top center, rgba(0,0,0,1) 0%, transparent 65%)",
        WebkitMaskImage: "radial-gradient(ellipse at top center, rgba(0,0,0,1) 0%, transparent 65%)",
      },
    },
  ],
};

export default function SectionBg({ variant = "top-right" }: { variant?: Variant }) {
  const layers = VARIANTS[variant];
  return (
    <>
      {layers.map((layer, i) =>
        layer.type === "img" ? (
          <img key={i} src={IMG} alt="" aria-hidden="true" style={layer.style} />
        ) : (
          <div key={i} aria-hidden="true" style={layer.style} />
        ),
      )}
    </>
  );
}
