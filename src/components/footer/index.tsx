/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[600px] bg-gray-900 flex items-center justify-center flex-col">
      <div className="w-9/12 flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <Image
            src="/feenix-vertical.svg"
            width={180}
            height={180}
            alt="Feenix logo"
          />
          <span className="text-white text-xl font-bold mt-2">
            Certifications
          </span>
          <div className="grid grid-rows-2">
            <div className="flex items-center gap-4">
              <img
                src="/badges/gcloud.png"
                alt="Gcloud Badge"
                className="rounded bg-gray-800 p-2"
              />
              <img
                src="/badges/microsoft.png"
                alt="Gcloud Badge"
                className="rounded bg-gray-800 p-2"
              />
            </div>
            <div className="flex items-center gap-4 justify-between">
              <img
                src="/badges/aws.png"
                alt="Gcloud Badge"
                className="rounded bg-gray-800 p-2"
              />
              <img
                src="/badges/aicpa.png"
                alt="Gcloud Badge"
                className="rounded bg-gray-800 p-2"
              />
              <img
                src="/badges/aws-partner.png"
                alt="Gcloud Badge"
                className="rounded bg-gray-800 p-2"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-auto gap-x-12 text-gray-400 auto-rows-min">
          <div className="flex flex-col gap-3 ">
            <div className="text-2xl font-bold text-white col-span-4 mb-8">
              Company
            </div>
            <Link
              href="/"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="https://www.feenix.ai/about-us/"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              href="https://www.feenix.ai/support/"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Support
            </Link>
            <Link
              href="https://www.feenix.ai/#"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Product
            </Link>
            <Link
              href="https://www.feenix.ai/?page_id=987"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Pricing
            </Link>
            <Link
              href="https://www.feenix.ai/blog/"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Blogs
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-2xl font-bold text-white col-span-4 mb-8">
              Product
            </div>
            <Link
              href="https://www.feenix.ai/#"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              AWS Marketplace
            </Link>
            <Link
              href="https://www.feenix.ai/#"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Listing
            </Link>
            <Link
              href="https://www.feenix.ai/#"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Offers
            </Link>
            <Link
              href="https://www.feenix.ai/#"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Reporting
            </Link>
            <Link
              href="https://www.feenix.ai/#"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Co-Selling
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-bold text-white col-span-4 mb-8">
              Quick Link
            </div>
            <Link
              href=""
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Why Feenix.ai?
            </Link>
            <Link
              href=""
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Book demo
            </Link>
            <Link
              href=""
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Compliance
            </Link>
            <Link
              href=""
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Support
            </Link>
            <Link
              href=""
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Contacts Us
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-bold text-white col-span-4 mb-8">
              Contact Info
            </div>
            <div>info@feenix.ai</div>
            <div>San Jose, California USA</div>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://x.com/feenix_ai"
                target="_blank"
                className="border rounded-full border-white h-[50px] w-[50px] flex items-center justify-center"
              >
                <BsTwitterX className="text-white text-xl" />
              </Link>
              <Link
                href="https://www.facebook.com/feenixai"
                target="_blank"
                className="border rounded-full border-white h-[50px] w-[50px] flex items-center justify-center"
              >
                <FaFacebookF className="text-white text-xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/feenix-ai"
                target="_blank"
                className="border rounded-full border-white h-[50px] w-[50px] flex items-center justify-center"
              >
                <FaLinkedinIn className="text-white text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#161e31] mt-10 h-[80px] rounded w-9/12 flex justify-between p-8 items-center text-white text-sm">
        <span>© 2024 Feenix. All Rights Reserved</span>
        <Link href="https://www.feenix.ai/terms/" target="_blank">
          Terms & Condition{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
