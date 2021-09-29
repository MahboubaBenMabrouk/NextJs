import TrendingArea from './TrendingArea'
import WeeklyNews from './WeeklyNews'
import WeeklyNews2 from './WeeklyNews2'
import RecentArticles from './RecentArticles'
import WhatsNew from './WhatsNew'
import Youtube from './youtube'
import Pagination from './pagination'

const HomePage = () => {
  return (
    <div className="page-content">
        <TrendingArea/>
        <WeeklyNews/>
        <WhatsNew/>
        <WeeklyNews2/>
        <RecentArticles/>
        <Pagination/>
    </div>
  );
};

export default HomePage;
