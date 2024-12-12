import { listMenu } from "@/constants/menu/listMenu.menu";
import listSocialMenu from "@/constants/menu/listSocial.menu";
import listSocialGmail from "@/constants/menu/listSocialGmail";

const Footer = () => {
    return (
        <div className="bg-black mt-20 border-t-2">
            <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
                <div className="p-5 sm:w-2/12">
                    <div className="text-sm uppercase text-indigo-600 font-bold">Menu</div>
                    <ul className="text-sm text-white">
                        <li className="my-2">
                            {listMenu[0]?.title}
                        </li>
                        <li className="my-2">
                            {listMenu[1]?.title}
                        </li>
                        <li className="my-2">
                            {listMenu[2]?.title}
                        </li>
                        <li className="my-2">
                            {listMenu[3]?.title}
                        </li>
                        <li className="my-2">
                            {listMenu[4]?.title}
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
                        <li className="my-2 text-white no-underline">
                            {listSocialGmail.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:bg-b-200 decoration-slate-100 underline-none"
                                >
                                    {social.title} thanhtung2888@gmail.com
                                </a>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center space-x-5 bg-black text-white p-4">
                {listSocialMenu.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-slate-100 underline"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <div className="bg-black w-full text-white text-center py-5">
                © Copyright 2024. All Rights Reserved.
            </div>
        </div>
    );
}

export default Footer;
