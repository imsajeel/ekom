const BrandsImages = [
  {
    id: "1",
    alt: "apple",
    url:
      "https://static-01.daraz.pk/original/9593a960fd8c7805479ff31fa0fcc137.jpg",
  },
  {
    id: "2",
    alt: "samsung",
    url:
      "https://static-01.daraz.pk/original/1de455b6b129d96edbbe9448ccd86987.jpg",
  },
  {
    id: "3",
    alt: "huawei",
    url:
      "https://static-01.daraz.pk/original/6bb7204851b28b9866cbacbc37147500.jpg",
  },
  {
    id: "4",
    alt: "vivo",
    url:
      "https://static-01.daraz.pk/original/db06c6d1f85b399e238d755faf228518.jpg",
  },
  {
    id: "5",
    alt: "oppo",
    url:
      "https://static-01.daraz.pk/original/ba9d0b645e0e4ac067482012990165e5.jpg",
  },
  {
    id: "6",
    alt: "voice",
    url:
      "https://static-01.daraz.pk/brand/voice_92871d05748b0e01b4cab302599c9c64.jpg",
  },
  {
    id: "7",
    alt: "nokia",
    url:
      "data:image/png;base64,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",
  },
];

export default BrandsImages;
