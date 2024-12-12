import React from "react";

const HomePage = () => {
    return (
        <section className="bg-black text-white h-screen flex flex-col md:flex-row items-center justify-center text-center">
            {/* Content Section */}
            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center text-left px-6">
                <div className="text-5xl md:text-9xl font-extrabold tracking-wider">TUNGAGE</div>

                <div className="mt-6 md:mt-10 text-2xl md:text-4xl lg:text-5xl text-red-500 space-y-2">
                    <p>| Vận động viên</p>
                    <p>| Đạo diễn hình ảnh</p>
                    <p>| MC - TV Host | Content Creator</p>
                </div>

                <div className="mt-8 md:mt-12 text-base md:text-2xl space-y-2">
                    <p>www.tungage.com</p>
                    <p>thanhtung2888@gmail.com</p>
                    <p>@tungage</p>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-full flex items-center justify-center mt-6 md:mt-0 relative overflow-hidden">
                <img
                    src="/public/header.png"
                    alt="TUNGAGE Portfolio"
                    className="w-full h-full object-cover bg-black"
                />
            </div>
        </section>
    );
};

export default HomePage;