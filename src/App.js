
import './App.css';
import Swiper from 'react-tiga-swiper';
import 'react-tiga-swiper/dist/index.css';

function App() {  
  const urls = [
    "https://console.huaweicloud.com/dlv/vision/share/?id=a3b2adc379704410905310a5d089240f&locale=zh-cn&region=cn-east-3",
    "https://console.huaweicloud.com/dlv/vision/share/?id=19458e36e0654a859cf9302dde08dc99&locale=zh-cn&region=cn-east-3"
  ];

  const styles = { flex: 1, backgroundColor: 'black', width: '100vw', }

  return (
    <Swiper
      duration={200}
      autoPlay={10000}
      selectedIndex={0}
      showIndicators={false}
      indicator={null}
      showDots={false}
      dots={null}
      // direction="vertical"
      loop={true}
    >
      {
        urls.map((item, key) => (
          <iframe frameBorder={0} key={key} style={styles} src={item}></iframe>
        ))
      }
    </Swiper>
  );
}

export default App;
