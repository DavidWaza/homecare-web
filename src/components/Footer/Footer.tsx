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
      <div className="w-full h-full mx-auto  max-w-[1400px] selection text-white  flex gap-8 justify-between p-20">
        <div className="mr-10 max-w-[300px] m-auto ">
          <h1 className="text-4xl font-medium mb-4 hidden lg:block">
            Ostat Aid
          </h1>
          <p className="text-lg mb-4 hidden lg:block">
            We believe in the power of diverse perspectives, we recognise that
            fostering an inclusive environment ensures that each and every voice
            is not only heard but also thoughtfully considered.
          </p>
        </div>
        <div className="w-full max-w-screen-md flex lg:flex-row flex-col gap-4 justify-around">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl mb-3">Quick Links</h3>
            <div className="lg:pl-4 flex flex-col gap-2">
              {footerLinks.map((item) => (
                <div key={item.id}>
                  <Link href={item.path}>{item.title}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Services</h3>
            <div className="lg::pl-2">
              <p>Book a service</p>
              <p>Customer policy</p>
              <p>Pricing</p>
            </div>
          </div>
        </div>
        <div className="box w-full flex flex-col lg:gap-4 gap-2">
          <h3 className="font-bold text-2xl">Contact Info</h3>
          <p>Lekki face 1, Lekki, Lagos 101245, NG</p>
          <p>Links</p>
        </div>
      </div>
    </footer>
  );
}
