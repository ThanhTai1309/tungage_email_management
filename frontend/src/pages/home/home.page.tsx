import React from "react";

const HomePage = () => {
    return (
        <section className="bg-black text-white h-screen flex flex-col md:flex-row items-center justify-center text-center">
            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center text-left px-6 space-y-6">
                <div className="text-5xl md:text-9xl font-extrabold tracking-wider">TUNGAGE</div>

                <div className="mt-6 md:mt-10 text-2xl md:text-4xl lg:text-5xl text-red-500 space-y-2">
                    <p>| Vận động viên</p>
                    <p>| Đạo diễn hình ảnh</p>
                    <p>| MC - TV Host | Content Creator</p>
                </div>

                <div className="mt-6 md:mt-10 text-2xl md:text-2xl lg:text-5xl space-y-2">
                    <div className="flex items-center space-x-2">
                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/sent.png" alt="sent" />
                        <span>www.tungage.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img width="48" height="48" src="https://img.icons8.com/color-glass/48/gmail.png" alt="gmail" />
                        <span>@thanhtung2888@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center space-x-5 mt-6"> {/* Thêm mt-6 để tạo khoảng cách */}
                        <a href="https://www.facebook.com/TuNgage" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="Facebook" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram" />
                        </a>
                        <a href="https://www.youtube.com/@tungage" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluency/48/youtube-play.png" alt="YouTube" />
                        </a>
                    </div>
                </div>
            </div>

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
