import React from 'react';
import { Building2, Users, BarChart3, Globe2, ArrowRight, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="背景图片" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-white" />
              <span className="text-white text-2xl font-bold">企业云服务</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-blue-200 transition">解决方案</a>
              <a href="#" className="text-white hover:text-blue-200 transition">产品服务</a>
              <a href="#" className="text-white hover:text-blue-200 transition">资源中心</a>
              <a href="#" className="text-white hover:text-blue-200 transition">关于我们</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                立即开始
              </button>
            </div>
          </div>
        </nav>
        <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-5rem)] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              为您的企业提供专业云解决方案
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              通过我们全面的云平台助力企业转型。高效扩展、数据安全、加速创新。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center">
                免费试用 <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition">
                联系销售
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">为什么选择我们</h2>
            <p className="text-xl text-gray-600">为现代企业提供全方位解决方案</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Globe2 className="h-12 w-12 text-blue-600" />,
                title: "全球基础设施",
                description: "分布式数据中心确保全球范围内的高可用性和低延迟"
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
                title: "高级数据分析",
                description: "实时洞察和预测分析，助力明智决策"
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: "企业级安全",
                description: "军事级加密和全面的安全协议保护"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                企业级云解决方案
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                我们的平台为您提供构建、部署和扩展应用程序所需的一切支持。
              </p>
              <div className="space-y-4">
                {[
                  "自动扩展和负载均衡",
                  "先进的安全性和合规性",
                  "24/7专家支持服务",
                  "99.99%运行时间保证"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                alt="技术可视化"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            准备好转变您的业务了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            加入数千家信任我们云平台的企业，为关键业务应用提供支持。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full hover:bg-gray-100 transition">
              免费试用
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition">
              预约演示
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">解决方案</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">云计算</a></li>
                <li><a href="#" className="hover:text-white transition">大数据</a></li>
                <li><a href="#" className="hover:text-white transition">安全服务</a></li>
                <li><a href="#" className="hover:text-white transition">数据分析</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">公司</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition">招贤纳士</a></li>
                <li><a href="#" className="hover:text-white transition">合作伙伴</a></li>
                <li><a href="#" className="hover:text-white transition">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">资源</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">技术文档</a></li>
                <li><a href="#" className="hover:text-white transition">博客</a></li>
                <li><a href="#" className="hover:text-white transition">案例研究</a></li>
                <li><a href="#" className="hover:text-white transition">技术支持</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">法律</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">隐私政策</a></li>
                <li><a href="#" className="hover:text-white transition">服务条款</a></li>
                <li><a href="#" className="hover:text-white transition">安全说明</a></li>
                <li><a href="#" className="hover:text-white transition">合规认证</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© 2024 企业云服务。保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;