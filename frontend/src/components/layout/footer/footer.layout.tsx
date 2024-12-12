const Footer = () => {
    return (
        <div className="bg-black mt-20 border-t-2">
            <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
                <div className="p-5 sm:w-2/12">
                    <div className="text-sm uppercase text-indigo-600 font-bold">Menu</div>
                    <ul className="text-sm text-white">
                        <li className="my-2">
                            <a className="hover:text-indigo-600" href="/home">Home</a>
                        </li>
                        <li className="my-2">
                            <a className="hover:text-indigo-600" href="/freestyle-football">FreeStyle</a>
                        </li>
                        <li className="my-2">
                            <a className="hover:text-indigo-600" href="/director">Director</a>
                        </li>
                        <li className="my-2">
                            <a className="hover:text-indigo-600" href="/gallery">Gallery</a>
                        </li>
                        <li className="my-2">
                            <a className="hover:text-indigo-600" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="p-5 sm:w-7/12 text-center sm:pl-20">
                    <h3 className="font-bold text-xl text-indigo-600 mb-4">Description</h3>
                    <p className="text-white text-sm mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="p-5 sm:w-3/12">
                    <div className="text-sm uppercase text-indigo-600 font-bold">Contact Us</div>
                    <ul>
                        <li className="my-2">
                            <a className="hover:text-indigo-600 text-white" href="#">DISTRICT 2, HO CHI MINH CITY</a>
                        </li>
                        <li className="my-2">
                            <a
                                className="hover:text-indigo-600 text-white"
                                href="mailto:thanhtung2888@gmail.com?subject=Inquiry&body=Hello%20Thanh%20Tung,%0D%0A%0D%0AI%20have%20a%20question%20regarding..."
                            >
                                thanhtung2888@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center space-x-5 bg-black">
                <a href="https://www.facebook.com/TuNgage" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
                </a>
                {/* <a href="https://m.me/Tungage" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
                </a> */}
                <a href="https://www.youtube.com/@tungage" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluency/30/youtube-play.png" alt="Y" />
                </a>
            </div>
            <div className="bg-black w-full text-white text-center py-5">
                © Copyright 2024. All Rights Reserved.
            </div>
        </div>
    );
}

export default Footer;
