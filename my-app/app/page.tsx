import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-[#0D0D0D] min-h-screen flex flex-col items-center py-8 px-4">
      {/* Logo */}
      <div className="mb-6 bg-white rounded-2xl p-2 shadow-lg">
        <Image
          src="/images/brand-logo.jpeg"
          alt="logo"
          height={100}
          width={100}
          loading="eager"
          className="rounded-xl shadow-2xl"
        />
      </div>

      {/* Headline */}
      <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
        “Play Smart, Predict Smarter - India’s Top Choice”
      </h1>

      {/* Join Telegram Button */}
      <a href="https://t.me/+k-S-yQDTe0BmNjZl" target="_blank" rel="noopener noreferrer"
        className="block w-full sm:w-auto mx-auto bg-[#BE9252] hover:bg-[#A97F45] text-white rounded-xl text-lg font-semibold px-8 py-3 mb-6 text-center shadow-lg transition">
        <span className="mr-2 inline-block align-middle">
          {/* Add telegram SVG/icon here */}
        </span>
        ACCESS PREMIUM GROUP
      </a>

      {/* Promotional Banner */}
      <div className="bg-white rounded-xl p-4 w-full max-w-md shadow-lg mb-6 flex flex-col items-center">
        <h2 className="text-lg font-bold text-[#BE9252] mb-2">Prediction Master</h2>
        <p className="text-[#D4AF37] text-xl font-bold mb-2">हर कोई जीत सकता है</p>
        {/* App screenshots and person image */}
        <div className="flex items-center justify-center mb-4">
          <img src="/images/screenshot1.jpg" alt="App Screenshot" className="h-32 rounded shadow-md mx-1" />
          <img src="/images/screenshot2.jpg" alt="App Screenshot" className="h-32 rounded shadow-md mx-1" />
          <img src="/images/screenshot3.jpg" alt="Excited Person" className="h-32 rounded shadow-md mx-1" />
        </div>
        <p className="mb-2 text-black font-semibold text-base">Start with ₹1000 • Win & Withdraw ₹5000</p>
        <a href="https://t.me/+k-S-yQDTe0BmNjZl" target="_blank" className="bg-[#BE9252] hover:bg-[#A97F45] text-white px-4 py-2 rounded-lg font-semibold mb-4">START WINNING</a>
      </div>

      {/* Repeat Join Button */}
      <a href="https://t.me/+k-S-yQDTe0BmNjZl" target="_blank" className="block w-full sm:w-auto bg-[#BE9252] hover:bg-[#A97F45] text-white rounded-xl text-lg font-semibold px-8 py-3 mb-6 text-center shadow-lg transition">
        JOIN VIP CHANNEL
      </a>

      {/* Optional: Footer/information/trust lines in Hindi, countdown */}
      <p className="text-white text-center text-sm font-semibold mt-4">VIP Color Prediction… अभी जुड़ें हमारे Telegram चैनल से…</p>
    </section>
  );
}
