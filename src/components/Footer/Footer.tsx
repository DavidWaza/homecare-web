import Link from "next/link";
import { title } from "process";

export default function Footer() {
  const footerLinks = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Services",
      path: "/services",
    },
    {
      id: 4,
      title: "Career",
      path: "/Career",
    },
    {
      id: 5,
      title: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <footer className="bg-[#1a431b]">
      <div className=" grid md:grid-cols-3 w-full h-full mx-auto selection text-white gap-8 justify-between py-20 md:px-[10rem] px-10">
        <div className="">
          <h1 className="text-4xl font-medium mb-4 lg:block">
            Ostat Aid
          </h1>
          <p className="mb-4 hidden lg:block text-sm">
            We believe in the power of diverse perspectives, we recognise that
            fostering an inclusive environment ensures that each and every voice
            is not only heard but also thoughtfully considered.
          </p>
        </div>
        <div className="w-full max-w-screen-md flex lg:flex-row flex-col gap-4 justify-around">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((item) => (
                <div key={item.id}>
                  <Link href={item.path} className="text-sm">
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 py-5 md:py-0">
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-2 text-sm">
              <p>Book a service</p>
              <p>Customer policy</p>
              <p>Pricing</p>
            </div>
          </div>
        </div>
        <div className="box w-full flex flex-col lg:gap-4 gap-2">
          <h3 className="font-semibold">Contact Info</h3>
          <div>
            <p className="text-sm">Lekki face 1, Lekki, Lagos 101245, NG</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
