import Image from "next/image";
import styles from "@/styles/pages/page.module.css";
import RootLayout from "@/components/layouts/RootLayout";
import AbouUsSection from "@/components/pages/Home/AboutUsSection";
import PartnerSection from "@/components/pages/Home/PartnersSections";
import HeaderSection from "@/components/pages/Home/HeaderSection";
import FaqSection from "@/components/pages/Home/FaqSection";
import TeamSection from "@/components/pages/Home/TeamSection";

export default function Home() {
  return (
    <RootLayout>
      <HeaderSection />
      <main className={styles.main} id="main">
        <PartnerSection />
        <AbouUsSection />
        <FaqSection />
        <TeamSection />
      </main>
    </RootLayout>
  );
}
