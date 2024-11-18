// File: components/DestinasiWisata.jsx

import React from "react";
import GuaJepang from "../asset/GuaJepang.jpg";
import GurunTeh from "../asset/GurunTeh.jpg";
import PuncakSakub from "../asset/PuncakSakub.jpg";

const DestinasiWisata = () => {
    return (
        <div id="destinasi" className="bg-gray-100 px-4 sm:px-8 py-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Destinasi Wisata</h2>
            
            {/* Layout grid untuk destinasi wisata */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Gambar pertama dengan ukuran lebih besar */}
                <div className="md:col-span-2 relative overflow-hidden rounded-lg border border-gray-300">
                    <img src={GuaJepang} alt="Gua Jepang" className="w-full h-full max-h-[400px] object-cover rounded-lg"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-4 text-white rounded-b-lg">
                        <h3 className="text-2xl font-semibold">Gua Jepang</h3>
                        <p className="text-lg">Menjelajahi keunikan sejarah dan budaya Gua Jepang.</p>
                    </div>
                </div>

                {/* Gambar kedua dan ketiga di bawah dalam dua kolom */}
                <div className="relative overflow-hidden rounded-lg border border-gray-300">
                    <img src={GurunTeh} alt="Gurun Teh" className="w-full h-full max-h-[375px] object-cover rounded-lg"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-4 text-white rounded-b-lg">
                        <h3 className="text-2xl font-semibold">Gurun Teh</h3>
                        <p className="text-lg">Nikmati hamparan hijau dan udara sejuk di Gurun Teh.</p>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg border border-gray-300">
                    <img src={PuncakSakub} alt="Puncak Sakub" className="w-full h-full max-h-[375px] object-cover rounded-lg"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-4 text-white rounded-b-lg">
                        <h3 className="text-2xl font-semibold">Puncak Sakub</h3>
                        <p className="text-lg">Rasakan keindahan alam dari ketinggian di Puncak Sakub.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinasiWisata;
