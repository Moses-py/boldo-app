import Blog from "@/features/blog/Blog";
import Footer from "@/features/footer/Footer";
import Hero from "@/features/hero/Hero";
import Newsletter from "@/features/newsletter/Newsletter";
import Stats from "@/features/numbers/Stats";
import Story from "@/features/our_story/Story";
import Team from "@/features/team/Team";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Boldo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Boldo | Template Builder</title>
      </Head>
      <Hero />
      <Stats />
      <Story />
      <Team />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}
