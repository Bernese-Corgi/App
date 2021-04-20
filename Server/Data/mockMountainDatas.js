const mountains = ['가리산', '덕룡산', '무등산', '황매산', '천성산', '가야산', '명성산', '방태산', '공작산', '가리왕산'];
const mockMountainDatas = [
  ['20000217', '명성산', '922', ' ',
    '강원도 철원군 갈말읍, 경기도 포천시 영북면ㆍ이동면\', \'명성산은 서울에서 동북으로 84Km, 운천에서 약 4Km 거리에 위치해 있다. 산자락에 산정호수를 끼고 있어 등산과 호수의 정취를 만끽 할 수 있는 산이다.<BR>일명 \'울음산\'이라 불리기도 하는데 거기에는 안타까운 전설이 전해 내려오고 있다. 신라의 마지막 왕자인 마의태자가 망국의 슬픔으로 이 산에서 통곡을 하자 산도 따라 울었다 한다. 나라를 잃은 슬픔을 산도 알았을까. 그런 연유로 \'울 명\' \'소리 성\'자를 붙여 명성산으로 불리게 되었다는 것이다. <BR>산전체가 암벽으로 이루어져 산세가 당당하고 가파르며 가을이면 억새풀이 장관을 이룬다. 암릉과 암벽이 같이 형성된 산이라서 사시사철 다양한 풍경을 연출해 등산객들로 하여금 철따라 다른 느낌을 느끼게 해 준다. 정상은 민등봉이나 전망이 매우 좋으며, 남쪽으로 이어진 12봉 능선의 모습이 장쾌하다. 능선에서 우거진 억새풀밭을 오르락내리락 하는 사이에 지루한 줄 모르고 걷게 된다.'],
  ['20001344', '덕룡산', '433', ' ',
    '전라남도 강진군 도암면, 신전면', '덕룡산과 주작산은 높이에 따라 산세가 좌우되지 않는다는 사실을 깨닫게 하는 산이다. 해남 두륜산과 이어져 있고 높이라야 고작 400미터를 조금 넘지만 산세만 놓고 보면 1000미터 높이의 산에 뒤지지 않는다. 이 산은 웅장하면서도 창끝처럼 날카롭게 솟구친 암릉과 암릉 사이의 초원능선 등 능선이 표현할 수 있는 아름다움과 힘의 진수를 보여준다. 두륜산과 경계를 이루는 오소재에서 주작산, 덕룡산, 소석문까지 이어지는 11킬로미터 암릉은 마치 봉황이 날개를 펴고 하늘로 비상하는 형상이다. 봄이면 산꾼의 가슴을 태워버릴 듯 암릉에 흐드러지게 핀 진달래가 탄성을 자아내게 하고, 여름이면 은빛으로 빛나는 다도해와 누렇게 익은 보리밭의 조망, 가을이면 억새와 단풍 그리고 사시사철 신이 빚어 놓은 만물상이 연이어지는 스릴 넘치는 암릉이 산행의 백미다. 주작산은 강진군 신전면, 도암면, 해남군 옥천면, 북일면을 경계하고, 덕룡산은 강진군 도암면과 신전면을 경계한다. 덕룡산 정상에서 조망은 북으로 흑석산과 만의산, 만덕산과 월출산, 북동으로 궁성산과 국사봉, 수인산과 제암산, 동으로 천관산과 일림산, 남으로 두륜산과 상황봉, 서쪽은 두륜산과 첨찰산이 보인다.'],
  ['20000225', '무등산', '1187', ' ',
    '광주광역시 동구, 전라남도 담양군 남면ㆍ화순군 이서면', '광주시가지에서 동쪽으로 불과 10km 거리에 자리하고 있는 무등산은 도립공원으로 지정되어 있다.<BR>산의 형세가 험하지 않고 대부분이 흙으로 이루어져 있어 누구나 쉽게 오를 수 있으며, 곳곳에 맑은 물이 흐르고 있다. 특히 산위에는 서석대, 규봉, 입석대등의 웅장한 바위들이 있으며 산기슭과 중턱에는 약사암, 증심사, 원효사 등의 이름난 절들이 자리잡고 있다. 1972년 도립공원으로 지정되었으며 산 아래에는 각종 놀이 및 편의시설이 들어서 있다.'],
  ['20000006', '가리왕산', '1562', ' ',
    '강원도 정선군 정선읍 회동리ㆍ북평면, 평창군 진부면', '가리왕산은 태백산의 지붕역활을 하고 있으며 경사도가 완만한 등산로로 유명하다. 산 능선에는 고산식물인 주목, 잣나무, 단풍나무등 각종 수목이 울창하며 산삼등 많은 산약초가 자라고 있다.<BR><BR>회동리 입구에는 자연휴양림이 조성되어 각종 편의시설이 설치되어 있고 등산로 산행시간은 총 6시간 정도 소요된다. 군립공원으로 지정, 개발계획에 있으며 숙암방면 입구는 약 4km 구간에 철쭉이 밀집 자생하고 있다.'],
  ['20000005', '가리산', '774', ' ',
    '경기도 포천시 이동면 장암리', '백운산과 국망봉 사이에 위치한 신로봉에서 서쪽인 이동면 장암리 방면으로 뻗어내린 능선 상에 우뚝 솟은 가리산은 험준한 암릉으로 이루어진 산이다. 산 아래에서 볼 때 정산 주위는 두 개의 암봉으로 되어 있으며, 정상에서 서쪽과 북쪽 지역은 민간인 출입금지구역으로 주의를 요하는 곳이다. 백운산과 국망봉 사이에 위치한 신로봉에서 서쪽인 이동면 장암리 방면으로 뻗어내린 능선 상에 우뚝 솟은 가리산(774.3m)은 험준한 암릉으로 이루어진 산이다.산 아래에서 볼때 정상 주위는 두 개의 암봉으로 되어 있으며, 정상에서 서쪽과 북쪽 지역은 민간인 출입 금지구역으로 주의를 요하는 곳이다. 정상에서의 사방 조망은 경기 제일의 고봉인 화악산, 명지산에 이어 세번째로 높은 국망봉(1, 168m)과 신로봉으로 이어지는 능선이 파노라마를 이룬다.도평교를 하산 지점으로 잡을 경우 하산길은 지루함을 느낄만큼 계곡길의 연속이다. 가리산이란 명칭은 현재 폐광된 산 입구의 가리광산에서 유래됐다는 설이 전해진다.가리란 바로 비료의 주성분 가운데 하나인 칼륨의 일본식 발음이다.'],
  ['20000010', '가야산', '678', ' ',
    '충청남도 서산시 운산면·예산군 덕산면', '충남 서산시와 예산군의 경계를 이루는 가야산은 예산, 당진, 서산, 태안 지역에서 무소불위의 힘을 떨치는 산이다. 산은 그 자체로 서해를 향해 호령할 듯 섰다. 산세 또한 그 근방에서 찾아 볼 수 없는 암산으로 기암들이 징검다리 마냥 하늘을 받치고 있다. 백두대간 칠현산에서 분기한 금북정맥의 산답게 당찬 힘을 발휘한다. 가야산에서 석문봉까지 암릉을 형성한 후 두 줄기로 나뉘어 일락산과 옥양봉, 수정봉을 향해 갈래 친다. <BR>가야산 자락에는 사방 곳곳에 백제에서 조선시대에 걸쳐 이어진 문화재가 산자락마다 있다. 가야산 서쪽으로는 커다란 은행나무를 품고 있는 고풍스런 해미읍성이 자릴 꿰차고 있으며 북쪽에는 보물 143호로 지정된 대웅전이 있는 개심사가 있다. 북동쪽 자락에는 조선시대의 명지관인 정만인이 점지한 남원군묘와 육관대사로 알려진 풍수지리도사인 손석우의 묘가 있다. 그뿐만 아니다. 남쪽에는 충남 서북부를 대표하는 1500여년 된 역사를 자랑하는 백제시대의 수덕사가 명성을 떨치고 있다.'],
  ['20000684', '황매산', '1113', ' ',
    '경상남도 합천군 대병면, 가회면, 산청군 차황면.', '합천호 푸른물속에 산자락을 담그고 하봉, 중봉, 상봉 등 세 봉우리로 정상을 이루어 수중매로 불리는 황매산(1,108m)은 합천읍에서 서남쪽으로 20km 지점에 위치해 있다.<BR><BR>산아래의 황매 평전은 목장 지대와 고산 철쭉 자생지가 있으며, 통일 신라시대의 고찰인 염암사지(사적 131호)가 있다. 황매산은 군리 공원으로 1983년 지정되어, 가회면 둔내리에서 영암사지에 이르는 등산로를 개설하였다. 대병면 하금리 하금천에는 야영장을 개설하여 합천호와 이 지역을 찾는 관광객의 편의를 도모하고 있다.'],
  ['20000058', '공작산', '887', ' ',
    '강원도 홍천군 동면, 화촌면', '공작산은 강원도 홍천군 동면과 화촌면의 경계를 이루는 산으로, 공작이 날개를 펼친 듯한 산세에 암봉과 노송이 어우러져 한 폭의 동양화를 연상케 하는 산이다.<BR>정상에서 서남쪽 능선을 따라 6km 산자락에 있는 수타사에서 노천리에 이르는 약 8km길이의 수타계곡은 암반과 계곡의 경치가 뛰어나 여름철 계곡 피서지로 이름난 곳이다. 정상에서 바라보면 홍천군 일원이 한눈에 들어오며, 풍치가 아름답고 깎아 세운 듯한 암벽이 장관을 이루는 곳이다. <BR>정상에서 서남쪽 능선 약 6km 아래에 있는 수타사와 노천리까지 이어지는 약 8km의 수타계곡은 갖가지 멋진 바위들과 아름다운 풍경이 비할 데 없다. 산 정상에서 바라보면 홍천군 일원이 한눈에 들어오며, 봄에는 철쭉과 가을철에는 단풍이 노송과 함께 깍아 지른 듯한 바위와의 모습이 보는이의 마음을 사로잡고 눈덮인 겨울산 역시 등산객들을 매료시키는 곳이기도 하다.'],
  ['20000262', '방태산', '1446', ' ',
    '강원도 인제군 기린면, 상남면', '국내 최대의 면적을 자랑하는 자연휴양림을 거느리고 있는 방태산은 강원도 인제군과 홍천군의 경계를 이루는 산으로, 교통이 불편한 관계로 아직도 오염되지 않은 깨끗한 계곡을 간직하고 있다. <BR><BR>청정한 자연림에 들어서면 도심에서 불과 몇시간 거리밖에 떨어져 있지 않다는 사실이 믿어지지 않는다. 빽빽한 나무들 사이에 누워 하늘을 올려다보면 한줄기의 햇살도 허용하지 않는 수림의 깊이가 느껴진다.'],
];

module.exports.mockMountainDatas = mockMountainDatas;
module.exports.mountains = mountains;
