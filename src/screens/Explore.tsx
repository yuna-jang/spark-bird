import Filter from "../components/explore/Filter";
import Map from "../components/explore/Map";
/*
- 한국의 지역별 탐조 가능한 새, 스팟에 대한 포스트 
- 한국의 계절별 탐조 가능한 새, 스팟에 대한 포스트
- 각 포스트에서는 Our Trips 링크로 이동이 가능해야 함
*/
function Explore() {
  return (
    <>
      <Map />
      <Filter />
    </>
  );
}
export default Explore;
