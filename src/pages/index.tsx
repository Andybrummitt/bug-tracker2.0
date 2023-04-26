import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="container md:flex justify-between my-12">
        {/* Change image when application is completed. (webp and app image) */}
        <div className="md: order-2">
          <Image
            height="200"
            width="200"
            src="/iphones-mock-image.jpg"
            alt="Phones with app"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-1 md:order-2">
            Minimise Bugs.
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-1 md:order-2">
            Prioritise Features and Fixes.
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-1 md:order-2">
            Organise Development.
          </h2>
          <Link
            href="/dashboard/create-project"
            className="text-white inline-block bg-blue-600 my-4 p-2 border-0"
          >
            Start Tracking
          </Link>
        </div>
      </section>
    </Layout>
  );
}
