// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-blue-600 dark:text-blue-400">Shan</span>imalism
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              視覺設計與創意專家
            </p>
            <p className="text-gray-600 dark:text-gray-300 max-w-lg">
              專注於為中小企業和新創公司提供高品質的視覺設計服務，幫助您的品牌脫穎而出。
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/portfolio" className="btn btn-primary">
                查看作品集
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                聯絡我
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-blue-100 dark:bg-blue-900">
              {/* 這裡可以放置您的照片或標誌 */}
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-600 dark:text-blue-400">
                S
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">我的專業服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">✏️</div>
              <h3 className="text-xl font-bold mb-2">品牌設計</h3>
              <p className="text-gray-600 dark:text-gray-300">
                從標誌設計到品牌識別系統，為您的企業打造獨特的視覺形象。
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold mb-2">網站設計</h3>
              <p className="text-gray-600 dark:text-gray-300">
                創建美觀且用戶友好的網站，提升您的在線形象和用戶體驗。
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">UI/UX 設計</h3>
              <p className="text-gray-600 dark:text-gray-300">
                設計直觀且吸引人的用戶界面，優化用戶體驗，提高轉化率。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">精選作品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 這裡可以放置您的作品預覽 */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 dark:bg-gray-600 w-full">
                  {/* 作品圖片位置 */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                    作品預覽 {item}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">作品標題 {item}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">類別: UI 設計</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/portfolio/${item}`} className="btn btn-primary">
                    查看詳情
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn btn-secondary">
              查看更多作品
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">客戶評價</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-bold">王小明</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">科技新創 CEO</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                &quot;Shan 的設計不僅美觀，而且非常符合我們的品牌調性。他的專業建議幫助我們的產品更好地連接用戶。&quot;
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">
                  B
                </div>
                <div>
                  <h4 className="font-bold">李小華</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">電商平台經理</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                &quot;我們的網站改版後，轉化率提高了 30%。Shan 的設計既美觀又實用，真的很專業。&quot;
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">
                  C
                </div>
                <div>
                  <h4 className="font-bold">張小芳</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">餐飲品牌創辦人</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                &quot;Shan 為我們設計的品牌識別系統讓我們在競爭激烈的市場中脫穎而出，顧客反饋非常正面。&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">準備好開始您的項目了嗎？</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            讓我們一起合作，為您的品牌創造令人驚艷的視覺體驗。
          </p>
          <Link href="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            立即聯絡
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Shanimalism</h3>
              <p className="text-gray-400 mt-2">視覺設計與創意專家</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Behance
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Shanimalism. 保留所有權利。
          </div>
        </div>
      </footer>
    </div>
  );
}
