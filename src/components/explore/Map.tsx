import { SimpleSouthKoreaMapChart } from "./vector_map/index";
import { mapTheme } from "../../theme-colors/mapTheme";

// 쿼리 대체
const data = [
  { locale: "Busan", count: 150 },
  { locale: "Daegu", count: 300 },
  { locale: "Daejeon", count: 40 },
  { locale: "Gangwon", count: 250 },
  { locale: "Gwangju", count: 100 },
  { locale: "Gyeonggi", count: 400 },
  { locale: "Incheon", count: 220 },
  { locale: "Jeju", count: 100 },
  { locale: "North Chungcheong", count: 50 },
  { locale: "North Gyeongsang", count: 20 },
  { locale: "North Jeolla", count: 330 },
  { locale: "Sejong", count: 10 },
  { locale: "Seoul", count: 100 },
  { locale: "South Chungcheong", count: 100 },
  { locale: "South Gyeongsang", count: 20 },
  { locale: "South Jeolla", count: 25 },
  { locale: "Ulsan", count: 10 },
];

function Map() {
  const setColorByCount = (count: number) => {
    if (count > 100) return mapTheme.level1;
    if (count > 50) return mapTheme.level2;
    if (count > 20) return mapTheme.level3;
    else return mapTheme.level4;
  };
  return (
    <>
      <SimpleSouthKoreaMapChart setColorByCount={setColorByCount} data={data} />
    </>
  );
}
export default Map;
