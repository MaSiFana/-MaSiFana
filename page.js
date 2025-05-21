

export default function Home() {
  const cards = [
    {
      title: "HTML基础练习",
      description: "学习HTML基础标签和页面结构"
    },
    {
      title: "CSS布局实践",
      description: "掌握Flexbox和Grid布局技巧"
    },
    {
      title: "JavaScript基础",
      description: "学习JavaScript基础语法和DOM操作"
    },
    {
      title: "React基础",
      description: "了解React的基本概念和组件化开发"
    },
    {
      title: "Next.js入门",
      description: "学习Next.js的基本用法和路由配置"
    },
  ];
  
  return (
    <div className="space-y-8">
      {/* 新增顶部标题和介绍 */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">《Web前端技术》课程作业展示</h1>
        <p className="text-gray-600 text-lg mb-8">欢迎来到课程作业展示平台。这里汇集了各个阶段的学习成果与练习项目</p>
      </div>

      {/* 响应式卡片（原有内容） */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="relative h-48">
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300 hover:scale-105">
                查看详情
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}