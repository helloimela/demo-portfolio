import Header from "@/app/ui/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Stores",
  description: "Welcome to my shop with delicious food",
};

export default function LocationPage() {
  return (
    <div>
      <Header title="Our Stores" />
      <h1>Locations</h1>
      <p>Check out our branches:</p>
      <ul>
        <li>
          <h3>Pejaten Park</h3>
          <p>Jalan Pejaten 25</p>
          <p>021-782628</p>
        </li>
        <li>
          <h3>Menteng Thamrin</h3>
          <p>Jalan Menteng 125</p>
          <p>021-3255566</p>
        </li>
        <li>
          <h3>BSD City</h3>
          <p>Jalan Kembang Utama 289</p>
          <p>021-782628</p>
        </li>
      </ul>
    </div>
  );
}
