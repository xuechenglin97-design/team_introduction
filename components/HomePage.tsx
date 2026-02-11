import React from 'react';
import { HomeHeader, SectionTitle } from './Shared';
import { ChevronRight, ArrowRight, Settings2, TestTube2, Factory, Phone } from 'lucide-react';
import { PageRoute } from '../App';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="pb-8">
      <HomeHeader />
      
      {/* Hero Section */}
      <div className="relative pt-14">
        <div className="relative h-64 w-full overflow-hidden">
            <img 
              src="/hero-bg.jpg" 
              alt="Lab Background" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Green Overlay - kept dark for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/30"></div>
            
            {/* Team Name Overlay at Top of Image - Normal Spacing */}
            <div className="absolute top-4 left-6 right-6 z-10 flex items-start">
                 <div className="w-1 h-10 bg-neon-400 mr-3 rounded-full shadow-[0_0_10px_rgba(55,233,104,0.5)] shrink-0"></div>
                 <div className="flex flex-col">
                    {/* Removed justify-between and split logic for normal spacing */}
                    <div className="text-[17px] font-bold text-white drop-shadow-md leading-tight">
                        中国科学院过程工程研究所
                    </div>
                    <div className="text-[19px] font-bold text-white drop-shadow-md leading-tight mt-1">
                        生物质炼制工程研究团队
                    </div>
                 </div>
            </div>

            {/* Responsive Text & Padding */}
            <div className="absolute bottom-6 left-4 right-4 sm:left-6 sm:right-6">
                <span className="inline-block px-2 py-1 bg-white/10 backdrop-blur-md border border-white/30 text-xs text-white rounded mb-2">
                    全国重点实验室团队
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-2 text-white">
                    30年深耕生物质<br/>
                    <span className="text-neon-400">驱动非粮生物制造未来</span>
                </h1>
            </div>
        </div>
      </div>

      {/* Team Intro */}
      <div className="px-5 py-6">
        <SectionTitle title="团队简介" />
        <p className="text-sm text-forest-800 leading-relaxed mb-6 text-justify">
            团队依托中国科学院过程工程研究所生物质炼制工程北京市重点实验室，致力于生物质资源的高效转化与高值化利用，拥有深厚的学术积淀与工业化经验。从实验室小试到万吨级示范项目，打通了生物质全产业链技术路径。曾获国家科技进步二等奖、中国专利金奖、中国发明专利优秀奖等，先后承担国家973、863、国家重点研发计划、中科院先导、STS等科研项目，技术转让实施企业50余家。
        </p>

        {/* Stats Cards - Updated Content */}
        <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-forest-900">
                <div className="text-xs text-gray-500 mb-1">授权专利</div>
                <div className="text-2xl font-bold text-forest-950">200+ <span className="text-sm font-normal">件</span></div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-forest-900">
                <div className="text-xs text-gray-500 mb-1">核心论文</div>
                <div className="text-2xl font-bold text-forest-950">300+ <span className="text-sm font-normal">篇</span></div>
            </div>
        </div>

        {/* Core Products - Refactored to Card Layout (No Mask) */}
        <SectionTitle title="核心产品" />
        <div className="space-y-4 mb-8">
            {/* Card 1: Sugar */}
            <div 
                onClick={() => onNavigate('product-sugar')}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-forest-100 cursor-pointer group"
            >
                <div className="h-48 w-full overflow-hidden relative">
                    <img 
                        src="/product.jpg" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt="Straw Sugar" 
                    />
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-forest-950">秸秆结晶糖</h3>
                        <span className="shrink-0 text-[10px] font-bold text-forest-700 bg-forest-50 border border-forest-200 px-2 py-1 rounded-full">
                            纯度＞99%
                        </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed line-clamp-2">
                        食品级标准，替代传统淀粉糖。成本低、白度高，广泛应用于食品及医药领域。
                    </p>
                    <button className="w-full py-2 bg-forest-900 text-white text-sm font-medium rounded flex items-center justify-center hover:bg-forest-800 transition-colors">
                        点击查看详情 <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
            </div>

            {/* Card 2: Fermentable Sugar */}
            <div 
                onClick={() => onNavigate('product-fermentable')}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-forest-100 cursor-pointer group"
            >
                <div className="h-48 w-full overflow-hidden relative">
                    <img 
                        src="/product2.jpg" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt="Fermentable Sugar" 
                    />
                </div>
                <div className="p-4">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-forest-950">秸秆可发酵糖</h3>
                        <span className="shrink-0 text-[10px] font-bold text-forest-700 bg-forest-50 border border-forest-200 px-2 py-1 rounded-full">
                            最高浓度突破600 g/L
                        </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed line-clamp-2">
                         综合成本与淀粉糖持平，无需脱毒直接发酵，是理想的生物基产品原料。
                    </p>
                    <button className="w-full py-2 bg-forest-900 text-white text-sm font-medium rounded flex items-center justify-center hover:bg-forest-800 transition-colors">
                        点击查看详情 <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
            </div>

            {/* Card 3: Lignin */}
            <div 
                onClick={() => onNavigate('product-lignin')}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-forest-100 cursor-pointer group"
            >
                <div className="h-48 w-full overflow-hidden relative">
                    <img 
                        src="/product3.jpg" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt="Lignin" 
                    />
                </div>
                <div className="p-4">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-forest-950">秸秆高活性木质素</h3>
                        <span className="shrink-0 text-[10px] font-bold text-forest-700 bg-forest-50 border border-forest-200 px-2 py-1 rounded-full">
                            酚羟基含量&gt;3.0 mmol/g
                        </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed line-clamp-2">
                        保留天然结构与活性官能团，可用于制备无醛黏合剂、特种分散剂等。
                    </p>
                    <button className="w-full py-2 bg-forest-900 text-white text-sm font-medium rounded flex items-center justify-center hover:bg-forest-800 transition-colors">
                        点击查看详情 <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
            </div>
        </div>

        {/* Core Equipment - Updated for Light Theme */}
        <SectionTitle title="核心装备" />
        <div className="space-y-4 mb-8">
             {/* Equip 1 */}
             <div 
                onClick={() => onNavigate('equip-explosion')}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-forest-100 cursor-pointer"
             >
                <div className="h-40 w-full relative">
                    <img src="/device1.jpg" className="w-full h-full object-cover" alt="Explosion Device" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-forest-900/20 to-transparent"></div>
                </div>
                <div className="p-4 bg-white text-forest-950">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold">无添加酸碱低压汽爆预处理装置</h3>
                        <Settings2 className="w-5 h-5 text-forest-600 shrink-0 ml-2" />
                    </div>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                        首创秸秆分级汽爆技术，预处理压力可从行业常规的2.0 MPa降低至 0.8 MPa，抑制物降低60%；不添加酸碱，无三废排放。
                    </p>
                    <button className="w-full py-2 bg-forest-900 text-white text-sm font-medium rounded flex items-center justify-center hover:bg-forest-800 transition-colors">
                        点击查看详情 <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
             </div>

             {/* Equip 2 */}
             <div 
                onClick={() => onNavigate('equip-reactor')}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-forest-100 cursor-pointer"
             >
                <div className="h-40 w-full relative">
                    <img src="/device2.jpg" className="w-full h-full object-cover" alt="Reactor" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-forest-900/20 to-transparent"></div>
                </div>
                <div className="p-4 bg-white text-forest-950">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold">高固酶解装置</h3>
                        <TestTube2 className="w-5 h-5 text-forest-600 shrink-0 ml-2" />
                    </div>
                    <p className="text-xs text-gray-600 mb-4 line-clamp-2">
                        解决高浓度生物质酶解体系传质难题，实现高浓度糖液的一步产出。
                    </p>
                    <button className="w-full py-2 bg-forest-900 text-white text-sm font-medium rounded flex items-center justify-center hover:bg-forest-800 transition-colors">
                        点击查看详情 <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
             </div>
        </div>

        {/* Platform - Updated Texts */}
        <SectionTitle title="生物质炼制中试平台" />
        <div 
            onClick={() => onNavigate('platform-langfang')}
            className="relative h-96 rounded-2xl overflow-hidden mb-8 group cursor-pointer shadow-lg"
        >
            <img src="/platform.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Platform" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-900/60 to-forest-900/30 p-6 flex flex-col justify-end">
                <div className="flex items-center space-x-2 text-neon-400 mb-2">
                    <Factory className="w-4 h-4" />
                    <span className="text-xs font-bold">生物质产业中试基地·河北廊坊</span>
                </div>
                <h3 className="text-xl font-bold mb-2 leading-snug text-white">
                    生物质炼制中试示范平台
                </h3>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed font-medium">
                    千吨级生物质炼制中试平台，致力于打通从“实验室研发”到“工业化运行”的最后一公里。
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-2 mb-6">
                    <div>
                        <div className="text-2xl font-bold text-white">5000m²+</div>
                        <div className="text-[10px] text-gray-400">占地面积</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">100+</div>
                        <div className="text-[10px] text-gray-400">核心设备</div>
                    </div>
                </div>

                <button className="w-full py-3 bg-neon-400/90 backdrop-blur text-forest-950 font-bold rounded-lg flex items-center justify-center">
                     点击查看详情
                </button>
            </div>
        </div>

        {/* Footer with Updated Contact Layout */}
        <div className="bg-white rounded-2xl p-8 text-center border border-forest-100 shadow-sm">
            <div className="w-24 h-24 mx-auto bg-forest-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                 <img src="/sample-qr.jpg" className="w-full h-full object-cover" alt="QR Code" />
            </div>
            <h4 className="font-bold text-sm mb-6 text-forest-950">获取样品请扫码</h4>
            
            <div className="bg-forest-50/50 rounded-xl p-6 border border-forest-100 inline-block w-full">
                <div className="flex items-center gap-2 mb-4">
                     <div className="w-1 h-4 bg-forest-600 rounded-full"></div>
                     <h5 className="text-sm font-bold text-forest-800">联系人</h5>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-forest-100 pb-2 last:border-0 last:pb-0">
                        <span className="text-sm text-forest-700 font-medium">王老师</span>
                        <a href="tel:15810204973" className="flex items-center gap-1 text-lg font-bold text-forest-900 font-mono">
                           15810204973
                        </a>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-forest-700 font-medium">冯老师</span>
                        <a href="tel:18810528589" className="flex items-center gap-1 text-lg font-bold text-forest-900 font-mono">
                           18810528589
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-8 text-center text-[10px] text-forest-400/80">
            中国科学院过程工程研究所<br/>
            生物质炼制工程研究团队 © 2026
        </div>
      </div>
    </div>
  );
};

export default HomePage;