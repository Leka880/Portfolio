import { Portfolio } from "@/components/shared/Portfolio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const data = {
  user_id: 1,
  fullname: "Шехматов Виктор Александпович",
  contacts : "example@gmail.com",
  about: "какой длинный текст о себе ...",
  avatar: "https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg",
  project: [],
  created_at: "08.09.2925",
  updated_at: "08.09.2025"
}

export default function Home() {
  return (
    <div>
      <Portfolio data={data}></Portfolio>
    </div>
  );
}
