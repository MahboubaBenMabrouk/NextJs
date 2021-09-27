import Layout from '../component/layout'
import TrendingArea from '../component/HomeSections/TrendingArea'
import WeeklyNews from '../component/HomeSections/WeeklyNews'
import WeeklyNews2 from '../component/HomeSections/WeeklyNews2'
import RecentArticles from '../component/HomeSections/RecentArticles'
import WhatsNew from '../component/HomeSections/WhatsNew'
import Youtube from '../component/HomeSections/youtube'
import Pagination from '../component/HomeSections/pagination'

export default function Index() {
  return (
    <>
    <TrendingArea/>
    <WeeklyNews/>
    <WhatsNew/>
    <WeeklyNews2/>
    <Youtube/>
    <RecentArticles/>
    <Pagination/>
    </>
  )
}
Index.getLayout = function getLayout(index) {
  return (
    <Layout>
      {index}
    </Layout>
  )
}