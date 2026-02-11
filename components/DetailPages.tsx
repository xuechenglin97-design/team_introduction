import React from 'react';
import { DetailHeader, SectionTitle } from './Shared';
import { Banknote, ShieldCheck, Leaf, Utensils, Pill, FlaskConical, TestTube, Zap, Fuel, Activity, Factory, MapPin, User, Settings2, Phone } from 'lucide-react';

// --- Page 1: 秸秆结晶糖 ---
export const ProductSugar: React.FC<{onBack: () => void}> = ({ onBack }) => (
    <div className="pb-8 bg-forest-50 min-h-screen">
        <DetailHeader title="产品详情: 秸秆结晶糖" onBack={onBack} />
        
        {/* Top Image Section - Clean, No Overlay */}
        <div className="h-[280px] w-full pt-14 bg-white">
            <img src="/product.jpg" className="w-full h-full object-cover" alt="Straw Sugar" />
        </div>

        {/* Main Content Container with Overlap */}
        <div className="px-4 -mt-10 relative z-10 space-y-6">
            
            {/* Header Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-forest-100">
                <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-forest-50 border border-forest-200 text-[10px] font-bold text-forest-700 rounded uppercase tracking-wider">
                        High Purity Cellulosic Crystal Sugar
                    </span>
                </div>
                <h2 className="text-2xl font-bold text-forest-950 mb-3">秸秆结晶糖</h2>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    基于秸秆高效分级、低强度汽爆预处理和秸秆高固酶解成套技术，实现高纯度秸秆结晶糖的规模化制备。
                </p>
            </div>

            <section>
                <SectionTitle title="技术指标" />
                <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white border border-forest-100 shadow-sm rounded-xl p-3 text-center">
                        <div className="text-[10px] text-forest-600/70 font-bold mb-1">纯度</div>
                        <div className="text-xl font-bold text-forest-800">&gt;99%</div>
                    </div>
                    <div className="bg-white border border-forest-100 shadow-sm rounded-xl p-3 text-center">
                        <div className="text-[10px] text-forest-600/70 font-bold mb-1">比旋光度</div>
                        <div className="text-xl font-bold text-forest-800">52.5°</div>
                    </div>
                    <div className="bg-white border border-forest-100 shadow-sm rounded-xl p-3 text-center">
                        <div className="text-[10px] text-forest-600/70 font-bold mb-1">规格</div>
                        <div className="text-xl font-bold text-forest-800">食品级</div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-forest-100 shadow-sm space-y-3">
                    <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                        <span className="text-gray-500">外观状态</span>
                        <span className="text-forest-900 font-medium">白色或淡黄色晶体</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                        <span className="text-gray-500">灰分含量</span>
                        <span className="text-forest-900 font-medium">≤0.2%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">水分</span>
                        <span className="text-forest-900 font-medium">≤2%</span>
                    </div>
                </div>
            </section>

            <section>
                <SectionTitle title="核心优势" />
                <div className="space-y-3">
                    <div className="bg-white p-4 rounded-xl border-l-4 border-forest-600 shadow-sm flex gap-4">
                        <Banknote className="w-6 h-6 text-forest-600 shrink-0" />
                        <div>
                            <h4 className="font-bold text-sm mb-1 text-forest-950">成本低</h4>
                            <p className="text-xs text-gray-600">通过降低预处理强度、开发新型脱色措施、优化结晶条件大幅降低结晶糖成本。</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border-l-4 border-forest-600 shadow-sm flex gap-4">
                        <ShieldCheck className="w-6 h-6 text-forest-600 shrink-0" />
                        <div>
                            <h4 className="font-bold text-sm mb-1 text-forest-950">高纯度</h4>
                            <p className="text-xs text-gray-600">产品满足食品级要求，最高可达到医药级标准。</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border-l-4 border-forest-600 shadow-sm flex gap-4">
                        <Leaf className="w-6 h-6 text-forest-600 shrink-0" />
                        <div>
                            <h4 className="font-bold text-sm mb-1 text-forest-950">低碳生产</h4>
                            <p className="text-xs text-gray-600">全生命周期碳减排显著，符合国家“双碳”战略及绿色制造标准。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <SectionTitle title="下游应用" />
                <div className="space-y-3">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-forest-100 shadow-sm">
                        <div className="w-12 h-12 bg-forest-50 rounded-lg flex items-center justify-center shrink-0 text-forest-600">
                            <Utensils className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-forest-950">食品行业</h4>
                            <p className="text-xs text-gray-600 mt-1">可添加到功能性饮料、烘焙类产品、糖果等食品中。</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-forest-100 shadow-sm">
                        <div className="w-12 h-12 bg-forest-50 rounded-lg flex items-center justify-center shrink-0 text-forest-600">
                            <Pill className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-forest-950">医药行业</h4>
                            <p className="text-xs text-gray-600 mt-1">高质量药物赋形剂、输液用糖原料及医药中间体合成。</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-forest-100 shadow-sm">
                        <div className="w-12 h-12 bg-forest-50 rounded-lg flex items-center justify-center shrink-0 text-forest-600">
                            <FlaskConical className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-forest-950">生物基材料</h4>
                            <p className="text-xs text-gray-600 mt-1">用于聚乳酸(PLA)、聚丁二酸丁二醇酯(PBS)等生物基塑料的聚合前体。</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
);

// --- Page 2: 秸秆可发酵糖 ---
export const ProductFermentable: React.FC<{onBack: () => void}> = ({ onBack }) => (
    <div className="pb-8 bg-forest-50 min-h-screen">
        <DetailHeader title="产品详情: 秸秆可发酵糖" onBack={onBack} />
        
        {/* Top Image Section - Clean, No Overlay */}
        <div className="h-[280px] w-full pt-14 bg-white">
            <img src="/product2.jpg" className="w-full h-full object-cover" alt="Fermentable Sugar Syrup" />
        </div>

        {/* Main Content Container with Overlap */}
        <div className="px-4 -mt-10 relative z-10 space-y-6">
            
            {/* Header Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-forest-100">
                <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-forest-50 border border-forest-200 text-[10px] font-bold text-forest-700 rounded uppercase tracking-wider">
                         Straw-Derived Fermentable Sugar Syrup
                    </span>
                </div>
                <h2 className="text-2xl font-bold text-forest-950 mb-3">秸秆可发酵糖</h2>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    通过低强度汽爆预处理、纤维素酶定制化复配技术和高固酶解等一系列技术突破，大幅降低秸秆可发酵糖成本。
                </p>
            </div>

            <section>
                <SectionTitle title="技术指标" />
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-forest-100">
                        <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">糖浓度 (TDS)</div>
                        <div className="text-2xl font-bold text-forest-800">≥ 600 <span className="text-sm font-normal text-gray-500">g/L</span></div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-forest-100">
                        <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">葡萄糖/木糖</div>
                        <div className="text-2xl font-bold text-forest-800">3 : 1 <span className="text-sm font-normal text-gray-500">Avg</span></div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-forest-100">
                    <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">杂质含量</div>
                    <div className="text-lg font-bold text-forest-800">极低乙酸/糠醛浓度</div>
                </div>
            </section>

            <section>
                <SectionTitle title="核心优势" />
                <div className="space-y-4">
                     <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-forest-100">
                        <div className="bg-forest-50 p-2 rounded-lg h-min text-forest-600"><ShieldCheck className="w-5 h-5"/></div>
                        <div>
                            <h4 className="font-bold text-sm mb-1 text-forest-950">低抑制物含量</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">通过精准组分分离技术，显著降低发酵抑制物，实现无需脱毒直接利用。</p>
                        </div>
                     </div>
                     <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-forest-100">
                        <div className="bg-forest-50 p-2 rounded-lg h-min text-forest-600"><Banknote className="w-5 h-5"/></div>
                        <div>
                            <h4 className="font-bold text-sm mb-1 text-forest-950">低成本</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">综合成本与淀粉糖基本持平</p>
                        </div>
                     </div>
                     <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-forest-100">
                        <div className="bg-forest-50 p-2 rounded-lg h-min text-forest-600"><Zap className="w-5 h-5"/></div>
                        <div>
                            <h4 className="font-bold text-sm mb-1 text-forest-950">高效发酵性能</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">更低的抑制物含量避免了对微生物发酵的不良影响，更高的糖浓度带来更高的产物浓度，降低分离纯化成本。</p>
                        </div>
                     </div>
                </div>
            </section>

            <section>
                <SectionTitle title="下游应用" />
                <div className="grid grid-cols-3 gap-3">
                    {[
                        {icon: Fuel, name: "燃料乙醇"},
                        {icon: FlaskConical, name: "有机酸"},
                        {icon: Activity, name: "单细胞蛋白"},
                        {icon: Factory, name: "PHA/聚乳酸"},
                        {icon: Pill, name: "高值氨基酸"},
                        {icon: TestTube, name: "特种发酵液"},
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-3 bg-white shadow-sm rounded-xl border border-forest-100">
                            <item.icon className="w-6 h-6 text-forest-600 mb-2" />
                            <span className="text-[10px] font-medium text-center text-forest-800">{item.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
);

// --- Page 3: 秸秆高活性木质素 (Renamed) ---
export const ProductLignin: React.FC<{onBack: () => void}> = ({ onBack }) => (
    <div className="pb-8 bg-forest-50 min-h-screen">
        <DetailHeader title="产品详情: 秸秆高活性木质素" onBack={onBack} />
        
        {/* Top Image Section - Clean, No Overlay */}
        <div className="h-[280px] w-full pt-14 bg-white">
            <img src="/product3.jpg" className="w-full h-full object-cover" alt="Lignin Powder" />
        </div>

        {/* Main Content Container with Overlap */}
        <div className="px-4 -mt-10 relative z-10 space-y-6">
            
            {/* Header Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-forest-100">
                <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-forest-50 border border-forest-200 text-[10px] font-bold text-forest-700 rounded uppercase tracking-wider">
                         High Activity Straw Lignin
                    </span>
                </div>
                <h2 className="text-2xl font-bold text-forest-950 mb-3">秸秆高活性木质素</h2>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    采用独有的低强度分级汽爆预处理结合高效酶解技术得到。在维持木质素天然骨架结构的同时，保留了极高的反应活性，是传统化学法木质素的理想替代品。
                </p>
            </div>

             <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-6 bg-forest-900 rounded-full"></div>
                    <h3 className="text-sm font-bold tracking-wider uppercase text-forest-950 font-sans">技术指标 / SPECIFICATIONS</h3>
                    <div className="h-px bg-forest-200 flex-grow"></div>
                </div>
                <div className="space-y-3">
                    <div className="bg-white p-4 rounded-xl border border-forest-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-[10px] uppercase font-bold mb-1">反应活性 / Reactivity</p>
                            <p className="text-base font-bold text-forest-800">酚羟基含量 ＞3.0 mmol/g</p>
                        </div>
                        <Zap className="w-6 h-6 text-forest-200" />
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-forest-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-[10px] uppercase font-bold mb-1">产品纯度 / Purity</p>
                            <p className="text-base font-bold text-forest-800">酸不溶木质素含量 ＞85%</p>
                        </div>
                        <ShieldCheck className="w-6 h-6 text-forest-200" />
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-forest-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-[10px] uppercase font-bold mb-1">分子量分布 / MW Distribution</p>
                            <p className="text-base font-bold text-forest-800">Mn: 1500-3000 | PDI &lt; 2.5</p>
                        </div>
                        <Activity className="w-6 h-6 text-forest-200" />
                    </div>
                </div>
             </section>

             <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-6 bg-forest-900 rounded-full"></div>
                    <h3 className="text-sm font-bold tracking-wider uppercase text-forest-950 font-sans">核心优势 / CORE ADVANTAGES</h3>
                    <div className="h-px bg-forest-200 flex-grow"></div>
                </div>
                <div className="space-y-4">
                     {[
                        {title: "保留天然结构", desc: "无酸碱强化学处理，最大限度保留β-O-4键等天然官能团结构，保证原材料的生物活性。", icon: Leaf},
                        {title: "高反应活性", desc: "丰富的酚羟基含量赋予材料极佳的化学接枝能力，在改性树脂及复合材料中表现卓越。", icon: Zap},
                        {title: "低成本", desc: "不采用昂贵的有机溶剂、不采用剧烈的反应条件。", icon: Banknote},
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start bg-white p-4 rounded-xl border border-forest-100 shadow-sm">
                            <div className="bg-forest-50 p-2 rounded-lg shrink-0 text-forest-600">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-forest-950">{item.title}</h4>
                                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                     ))}
                </div>
             </section>
             
             <section className="mb-4">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-6 bg-forest-900 rounded-full"></div>
                    <h3 className="text-sm font-bold tracking-wider uppercase text-forest-950 font-sans">下游应用 / APPLICATIONS</h3>
                    <div className="h-px bg-forest-200 flex-grow"></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {[
                        {title: "无醛黏合剂", desc: "替代苯酚制备高性能酚醛树脂及聚氨酯材料"},
                        {title: "橡胶助剂", desc: "作为功能性填料提升橡胶的抗老化与补强性能"},
                        {title: "特种分散剂", desc: "用于染料、农药及水煤浆的高效分散与稳定"},
                        {title: "3D打印材料", desc: "生物基3D打印线材的功能性添加与性能改性"},
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-forest-100 shadow-sm p-4 rounded-xl">
                            <div className="w-2 h-2 bg-forest-600 rounded-full mb-2"></div>
                            <h5 className="text-sm font-bold text-forest-950 mb-1">{item.title}</h5>
                            <p className="text-[10px] text-gray-500 leading-tight">{item.desc}</p>
                        </div>
                    ))}
                </div>
             </section>
        </div>
    </div>
);

// --- Page 4: 无添加酸碱低压汽爆装置 ---
export const EquipExplosion: React.FC<{onBack: () => void}> = ({ onBack }) => (
    <div className="pb-8 bg-forest-50 min-h-screen">
        <DetailHeader title="装备详情: 汽爆装置" onBack={onBack} />
        <section className="relative h-[300px] w-full mt-14">
            <img src="/device1.jpg" className="w-full h-full object-cover" alt="Explosion Equipment" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-2 py-0.5 bg-neon-400 text-forest-950 text-[10px] font-bold rounded mb-2">核心自研装备</span>
                <h2 className="text-2xl font-bold leading-tight text-white">无添加酸碱低压汽爆装置</h2>
            </div>
        </section>

        <div className="px-5 py-6 space-y-8">
            <section>
                <SectionTitle title="核心技术优势" />
                <div className="space-y-4">
                    <div className="bg-white p-5 rounded-xl border-l-4 border-neon-400 shadow-sm flex gap-4">
                        <div className="bg-forest-50 size-12 rounded-lg flex items-center justify-center flex-shrink-0 text-forest-600">
                            <Leaf className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-forest-800 mb-1">零化学添加</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">纯物理绿色工艺，无需酸碱化学试剂，从源头消除废水污染及酸碱回收难题。</p>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-xl border-l-4 border-neon-400 shadow-sm flex gap-4">
                        <div className="bg-forest-50 size-12 rounded-lg flex items-center justify-center flex-shrink-0 text-forest-600">
                            <Activity className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-forest-800 mb-1">发酵抑制物降低60%</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">汽爆压力从2.0 MPa降低至0.8 MPa，生成的酶解发酵抑制物含量降低60%</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                 <div className="bg-white rounded-2xl border border-forest-100 shadow-md overflow-hidden">
                    <div className="p-5 border-b border-gray-100 flex items-center gap-3 bg-forest-50/50">
                        <Settings2 className="w-5 h-5 text-forest-600" />
                        <h3 className="font-bold text-forest-900">技术规格参数</h3>
                    </div>
                    <div className="p-2">
                        {[
                            {k: "最大容积", v: "50 m³"},
                            {k: "用汽量", v: "~0.5 kg蒸汽/kg原料"},
                            {k: "工作压力", v: "0.6~2.0 MPa可调"},
                            {k: "控制方式", v: "PLC/DCS多方式匹配"},
                        ].map((row, i) => (
                            <div key={i} className="flex justify-between p-3 border-b border-gray-50 last:border-0">
                                <span className="text-gray-500 text-sm">{row.k}</span>
                                <span className="text-forest-900 font-medium text-sm">{row.v}</span>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>

            <section>
                <SectionTitle title="工业化应用案例" />
                <div className="space-y-4">
                    {[
                        {title: "匹配30万吨秸秆年处理规模50m³汽爆装置", desc: "针对大规模工业化生产定制，高效稳定运行。", icon: Factory},
                        {title: "百升/千升级中试规模汽爆装置", desc: "满足工艺放大验证需求，数据采集精准。", icon: Settings2},
                        {title: "实验室规模汽爆装置", desc: "紧凑型设计，适用于基础科研与配方优化。", icon: FlaskConical},
                    ].map((item, i) => (
                        <div key={i} className="relative rounded-xl overflow-hidden group h-24 shadow-sm border border-forest-100">
                             <img src={`https://picsum.photos/600/200?random=${20+i}`} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Case Study" />
                             <div className="absolute inset-0 bg-white/80 flex items-center px-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-forest-100 p-2 rounded-lg shrink-0 text-forest-700">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div className="z-10">
                                        <p className="text-forest-950 font-bold text-sm mb-1 line-clamp-1">{item.title}</p>
                                        <p className="text-gray-600 text-[11px] leading-tight">{item.desc}</p>
                                    </div>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
);

// --- Page 5: 高固酶解反应器 ---
export const EquipReactor: React.FC<{onBack: () => void}> = ({ onBack }) => (
    <div className="pb-8 bg-forest-50 min-h-screen">
        <DetailHeader title="装备详情: 高固酶解反应器" onBack={onBack} />
        <section className="relative w-full aspect-video mt-14 mx-4 rounded-2xl overflow-hidden max-w-[calc(100%-2rem)] border border-white/10 shadow-lg">
            <img src="/device2.jpg" className="w-full h-full object-cover" alt="Reactor" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900 to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full mb-2 border border-white/30">
                    ● 核心装备
                </span>
                <h2 className="text-2xl font-bold text-white">核心装备：高固酶解反应器</h2>
            </div>
        </section>

        <div className="px-5 py-6 space-y-8">
            <section>
                <SectionTitle title="技术亮点" />
                <div className="space-y-4">
                    <div className="bg-white border border-forest-100 rounded-2xl p-5 flex gap-4 shadow-sm">
                        <div className="bg-forest-50 size-12 rounded-lg flex items-center justify-center shrink-0 text-forest-600">
                            <FlaskConical className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-forest-950 text-base mb-1">高固形物浓度（＞20%）</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">固形物浓度相较于传统工业酶解（约10%），提升了100%~200%。</p>
                        </div>
                    </div>
                    <div className="bg-white border border-forest-100 rounded-2xl p-5 flex gap-4 shadow-sm">
                        <div className="bg-forest-50 size-12 rounded-lg flex items-center justify-center shrink-0 text-forest-600">
                            <Leaf className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-forest-950 text-base mb-1">大幅降低能耗</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">在同等固形物浓度下，相比于常规机械搅拌，能耗降低70%以上。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <SectionTitle title="性能指标" />
                <div className="bg-white border border-forest-100 rounded-2xl p-6 space-y-8 shadow-sm">
                    {/* Item 1 */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-forest-950">糖浓度提升</span>
                                <span className="text-sm text-gray-500 mt-1">最高可达 300 g/L <span className="text-xs text-gray-400">(无浓缩情况)</span></span>
                            </div>
                            <div className="text-right shrink-0 ml-4">
                                <span className="text-4xl font-bold text-forest-900">300</span>
                                <span className="text-sm text-gray-500 font-medium ml-1">g/L</span>
                            </div>
                        </div>
                        <div className="h-2 w-full bg-forest-50 rounded-full overflow-hidden">
                            <div className="h-full bg-forest-500 w-3/4 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                             <div className="flex flex-col">
                                <span className="text-lg font-bold text-forest-950">综合用水量降低</span>
                                <span className="text-sm text-gray-500 mt-1">资源节约效益显著</span>
                            </div>
                            <div className="text-right shrink-0 ml-4">
                                <span className="text-4xl font-bold text-forest-900">40</span>
                                <span className="text-sm text-gray-500 font-medium ml-1">%</span>
                            </div>
                        </div>
                        <div className="h-2 w-full bg-forest-50 rounded-full overflow-hidden">
                            <div className="h-full bg-forest-500 w-2/5 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <SectionTitle title="技术规格参数" />
                <div className="bg-white rounded-xl overflow-hidden border border-forest-100 shadow-sm">
                    {[
                        {k: "最大容积", v: "400 m³"},
                        {k: "固形物浓度（最高）", v: "35%"},
                        {k: "控温精度", v: "±0.1 ℃"},
                    ].map((row, i) => (
                        <div key={i} className="flex bg-transparent border-b border-gray-50 last:border-0">
                            <div className="w-1/2 p-4 text-sm text-gray-500 bg-forest-50/50">{row.k}</div>
                            <div className="w-1/2 p-4 text-sm text-forest-900 font-medium">{row.v}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
);

// --- Page 6: 廊坊中试平台 (Updated) ---
export const PlatformLangfang: React.FC<{onBack: () => void}> = ({ onBack }) => (
    <div className="pb-8 bg-forest-50 min-h-screen">
        {/* Updated Title */}
        <DetailHeader title="生物质产业中试平台" onBack={onBack} />
        
        <div className="mt-14 space-y-4 px-4 mb-8">
            <div className="relative rounded-xl overflow-hidden h-48 shadow-lg">
                 <img src="/platform.jpg" className="w-full h-full object-cover" alt="Platform 1" />
                 <div className="absolute bottom-2 left-4 text-sm font-bold text-white drop-shadow-md">廊坊中试基地鸟瞰</div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-32">
                 <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img src="/platform2.jpg" className="w-full h-full object-cover" alt="Platform 2" />
                 </div>
                 <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img src="/platform3.jpg" className="w-full h-full object-cover" alt="Platform 3" />
                 </div>
            </div>
        </div>

        <div className="px-5 space-y-8">
            <section>
                <SectionTitle title="平台概况" />
                <div className="bg-white border border-forest-100 rounded-2xl p-6 shadow-sm">
                    <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
                        廊坊中试平台是中国科学院过程工程研究所生物质炼制团队的核心技术转化基地。平台作为连接“基础研究”与“产业化落地”的桥梁，拥有完善的生物质全组分利用工艺链条，可实现从原材料处理到高附加值产品产出的全流程验证。
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-center border-t border-gray-100 pt-6">
                        <div>
                            <div className="text-2xl font-bold text-forest-700">5000<span className="text-xs align-top">㎡</span></div>
                            <div className="text-[10px] text-gray-500 mt-1">设施规模</div>
                        </div>
                        <div className="border-l border-gray-100">
                            <div className="text-2xl font-bold text-forest-700">20<span className="text-xs align-top">+</span></div>
                            <div className="text-[10px] text-gray-500 mt-1">中试生产线</div>
                        </div>
                        <div className="border-l border-gray-100">
                            <div className="text-2xl font-bold text-forest-700">100<span className="text-xs align-top">+</span></div>
                            <div className="text-[10px] text-gray-500 mt-1">核心装备</div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <SectionTitle title="对外服务" />
                <div className="space-y-3">
                     {[
                        {title: "中试工艺验证", desc: "为企业提供从实验室到中试规模的全流程技术验证与参数优化。", icon: Activity},
                        {title: "提供公斤级样品", desc: "满足客户对各类生物质高附加值产品的样品试用与性能检测需求。", icon: Factory},
                        {title: "联合技术开发", desc: "依托团队科研实力，与企业共同攻克生物质炼制领域的关键核心技术。", icon: User}, 
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-forest-100 shadow-sm hover:border-forest-200 transition-colors">
                            <div className="bg-forest-50 p-3 rounded-lg h-min text-forest-600">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-forest-950 text-base mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                     ))}
                </div>
            </section>

            <section className="bg-forest-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg">
                <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">预约参观与洽谈</h3>
                    <p className="text-xs font-medium mb-6 opacity-80 leading-relaxed">
                        欢迎各界合作伙伴莅临廊坊中试基地参观指导，共商生物质产业化发展大计。
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 shrink-0 text-neon-400" />
                            <span className="text-sm font-bold">河北省廊坊市广阳区凤华道1号</span>
                        </div>
                    </div>
                     {/* Updated Contact Layout for Platform Page */}
                     <div className="mt-6 pt-6 border-t border-white/10">
                         <div className="flex items-center gap-2 mb-3">
                            <User className="w-4 h-4 text-neon-400" />
                            <span className="text-xs font-bold uppercase tracking-wider text-neon-400">联系人</span>
                         </div>
                         <div className="space-y-2">
                             <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                                 <span className="text-sm font-medium">王老师</span>
                                 <a href="tel:15810204973" className="font-mono font-bold text-neon-400">15810204973</a>
                             </div>
                             <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                                 <span className="text-sm font-medium">冯老师</span>
                                 <a href="tel:18810528589" className="font-mono font-bold text-neon-400">18810528589</a>
                             </div>
                         </div>
                     </div>
                </div>
                {/* Decorative background elements */}
                <Factory className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10" />
            </section>
        </div>
    </div>
);