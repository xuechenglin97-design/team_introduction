import React from 'react';
import { DetailHeader, SectionTitle } from './Shared';
import { Banknote, ShieldCheck, Leaf, Utensils, Pill, FlaskConical, TestTube, Zap, Fuel, Activity, Factory, MapPin, User, Settings2 } from 'lucide-react';

// --- Page 1: 秸秆结晶糖 ---
export const ProductSugar: React.FC<{onBack: () => void}> = ({ onBack }) => (
    <div className="pb-8 bg-forest-950 min-h-screen">
        <DetailHeader title="产品详情: 秸秆结晶糖" onBack={onBack} />
        <div className="relative h-[340px] w-full pt-14">
            <img src="https://picsum.photos/800/600?random=10" className="w-full h-full object-cover" alt="Straw Sugar" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-950/20 to-forest-950"></div>
            <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-bold text-neon-400 border border-neon-400 px-2 py-0.5 rounded-full uppercase tracking-wider bg-forest-950/50">High Purity Biomass Sugar</span>
                <h2 className="text-3xl font-bold mt-2 mb-2 text-white">秸秆结晶糖</h2>
                <p className="text-sm text-white/70 leading-relaxed">
                    基于“全组分物理分离”与“绿色生物炼制”核心技术，实现非粮生物质向高纯度糖类的转化。
                </p>
            </div>
        </div>

        <div className="px-5 py-6 space-y-8">
            <section>
                <SectionTitle title="技术指标" />
                <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-forest-800/50 border border-white/5 rounded-xl p-3 text-center">
                        <div className="text-[10px] text-neon-400/70 font-bold mb-1">PURITY</div>
                        <div className="text-xl font-bold text-neon-400">&gt;99%</div>
                        <div className="text-[9px] text-white/40">色谱纯度</div>
                    </div>
                    <div className="bg-forest-800/50 border border-white/5 rounded-xl p-3 text-center">
                        <div className="text-[10px] text-neon-400/70 font-bold mb-1">YIELD</div>
                        <div className="text-xl font-bold text-neon-400">95%</div>
                        <div className="text-[9px] text-white/40">结晶回收率</div>
                    </div>
                    <div className="bg-forest-800/50 border border-white/5 rounded-xl p-3 text-center">
                        <div className="text-[10px] text-neon-400/70 font-bold mb-1">STANDARD</div>
                        <div className="text-sm font-bold text-neon-400 mt-1 mb-1">食品级</div>
                        <div className="text-[9px] text-white/40">质量标准</div>
                    </div>
                </div>
                <div className="bg-forest-900 rounded-xl p-4 border border-white/5 space-y-3">
                    <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                        <span className="text-white/50">外观状态</span>
                        <span>淡黄色或白色晶体</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                        <span className="text-white/50">灰分含量</span>
                        <span>≤0.2%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-white/50">水分</span>
                        <span>≤2%</span>
                    </div>
                </div>
            </section>

            <section>
                <SectionTitle title="核心优势" />
                <div className="space-y-3">
                    <div className="bg-gradient-to-r from-forest-800 to-transparent p-4 rounded-xl border-l-2 border-neon-400 flex gap-4">
                        <Banknote className="w-6 h-6 text-neon-400 shrink-0" />
                        <div>
                            <h4 className="font-bold text-sm mb-1">成本低</h4>
                            <p className="text-xs text-white/60">通过降低预处理强度、开发新型脱色措施、优化结晶条件大幅降低结晶糖成本。</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-forest-800 to-transparent p-4 rounded-xl border-l-2 border-neon-400 flex gap-4">
                        <ShieldCheck className="w-6 h-6 text-neon-400 shrink-0" />
                        <div>
                            <h4 className="font-bold text-sm mb-1">高纯度</h4>
                            <p className="text-xs text-white/60">产品满足食品级要求，最高可达到医药级标准。</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-forest-800 to-transparent p-4 rounded-xl border-l-2 border-neon-400 flex gap-4">
                        <Leaf className="w-6 h-6 text-neon-400 shrink-0" />
                        <div>
                            <h4 className="font-bold text-sm mb-1">低碳生产</h4>
                            <p className="text-xs text-white/60">全生命周期碳减排显著，符合国家“双碳”战略及绿色制造标准。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <SectionTitle title="下游应用" />
                <div className="space-y-3">
                    <div className="flex items-center gap-4 bg-forest-900/50 p-4 rounded-xl border border-white/5">
                        <div className="w-12 h-12 bg-neon-400/10 rounded-lg flex items-center justify-center shrink-0">
                            <Utensils className="w-6 h-6 text-neon-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">食品行业</h4>
                            <p className="text-xs text-white/60 mt-1">作为天然甜味剂、低GI健康食品配料及功能性食品基料。</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-forest-900/50 p-4 rounded-xl border border-white/5">
                        <div className="w-12 h-12 bg-neon-400/10 rounded-lg flex items-center justify-center shrink-0">
                            <Pill className="w-6 h-6 text-neon-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">医药行业</h4>
                            <p className="text-xs text-white/60 mt-1">高质量药物赋形剂、输液用糖原料及医药中间体合成。</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-forest-900/50 p-4 rounded-xl border border-white/5">
                        <div className="w-12 h-12 bg-neon-400/10 rounded-lg flex items-center justify-center shrink-0">
                            <FlaskConical className="w-6 h-6 text-neon-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">生物基材料</h4>
                            <p className="text-xs text-white/60 mt-1">用于聚乳酸(PLA)、聚丁二酸丁二醇酯(PBS)等生物基塑料的聚合前体。</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
);

// --- Page 2: 秸秆可发酵糖 ---
export const ProductFermentable: React.FC<{onBack: () => void}> = ({ onBack }) => (
    <div className="pb-8 bg-forest-950 min-h-screen">
        <DetailHeader title="产品详情: 秸秆可发酵糖" onBack={onBack} />
        <div className="relative h-[400px] w-full pt-14 flex items-center justify-center bg-forest-900">
             {/* Using a placeholder bottle image */}
            <div className="w-full h-full bg-[url('https://picsum.photos/600/800?random=11')] bg-cover bg-center opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-2 py-1 bg-neon-400/20 border border-neon-400 text-[10px] font-bold text-neon-400 rounded uppercase tracking-wider mb-2">CORE PRODUCT</span>
                <h2 className="text-3xl font-bold text-white mb-1">秸秆可发酵糖</h2>
                <p className="text-xs text-white/60 uppercase tracking-widest font-light">STRAW-DERIVED FERMENTABLE SUGAR SYRUP</p>
            </div>
        </div>

        <div className="px-5 py-6 space-y-8">
            <section>
                <SectionTitle title="技术指标" />
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-forest-800 p-4 rounded-xl border border-white/5">
                        <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">糖浓度 (TDS)</div>
                        <div className="text-2xl font-bold text-neon-400">≥ 150 <span className="text-sm font-normal text-white/60">g/L</span></div>
                    </div>
                    <div className="bg-forest-800 p-4 rounded-xl border border-white/5">
                        <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">葡萄糖/木糖</div>
                        <div className="text-2xl font-bold text-neon-400">2.5 : 1 <span className="text-sm font-normal text-white/60">Avg</span></div>
                    </div>
                </div>
                <div className="bg-forest-800 p-4 rounded-xl border border-white/5">
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">杂质含量</div>
                    <div className="text-lg font-bold text-neon-400">极低乙酸/糠醛浓度</div>
                </div>
            </section>

            <section>
                <SectionTitle title="核心优势" />
                <div className="space-y-4">
                     <div className="flex gap-4 p-4 bg-forest-800/40 rounded-xl border border-white/5">
                        <div className="bg-neon-400/10 p-2 rounded-lg h-min"><ShieldCheck className="w-5 h-5 text-neon-400"/></div>
                        <div>
                            <h4 className="font-bold text-sm mb-1">低抑制物含量</h4>
                            <p className="text-xs text-white/50 leading-relaxed">通过精准组分分离技术，显著降低发酵抑制物，实现无需脱毒直接利用。</p>
                        </div>
                     </div>
                     <div className="flex gap-4 p-4 bg-forest-800/40 rounded-xl border border-white/5">
                        <div className="bg-neon-400/10 p-2 rounded-lg h-min"><Banknote className="w-5 h-5 text-neon-400"/></div>
                        <div>
                            <h4 className="font-bold text-sm mb-1">低成本</h4>
                            <p className="text-xs text-white/50 leading-relaxed">与淀粉糖成本基本持平</p>
                        </div>
                     </div>
                     <div className="flex gap-4 p-4 bg-forest-800/40 rounded-xl border border-white/5">
                        <div className="bg-neon-400/10 p-2 rounded-lg h-min"><Zap className="w-5 h-5 text-neon-400"/></div>
                        <div>
                            <h4 className="font-bold text-sm mb-1">高效发酵性能</h4>
                            <p className="text-xs text-white/50 leading-relaxed">丰富的碳源组成更利于多种微生物生长，显著缩短发酵周期，提高产率。</p>
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
                        <div key={i} className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-xl border border-white/5">
                            <item.icon className="w-6 h-6 text-neon-400 mb-2" />
                            <span className="text-[10px] font-medium text-center text-white/80">{item.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
);

// --- Page 3: 酶解木质素 ---
export const ProductLignin: React.FC<{onBack: () => void}> = ({ onBack }) => (
    <div className="pb-8 bg-forest-950 min-h-screen">
        <DetailHeader title="产品详情: 酶解木质素" onBack={onBack} />
        
        <div className="px-5 pt-20">
             <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10 mb-6">
                <img src="https://picsum.photos/800/600?random=12" className="w-full h-full object-cover" alt="Lignin Powder" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                    <span className="bg-neon-400 text-forest-950 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-neon-400/20">
                        Enzymatic Lignin
                    </span>
                </div>
             </div>

             <h2 className="text-3xl font-bold text-white mb-4">酶解木质素</h2>
             <p className="text-sm text-white/70 leading-relaxed mb-8">
                采用独有的低强度分级汽爆预处理结合高效酶解技术得到。在维持木质素天然骨架结构的同时，保留了极高的反应活性，是传统化学法木质素的理想替代品。
             </p>

             <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-4 bg-neon-400 rounded-full"></div>
                    <h3 className="text-sm font-bold tracking-wider uppercase text-white font-sans">技术指标 / SPECIFICATIONS</h3>
                    <div className="h-px bg-gradient-to-r from-neon-400/50 to-transparent flex-grow"></div>
                </div>
                <div className="space-y-3">
                    <div className="bg-gradient-to-br from-forest-800 to-forest-900 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                        <div>
                            <p className="text-white/40 text-[10px] uppercase font-bold mb-1">反应活性 / Reactivity</p>
                            <p className="text-base font-bold text-white">酚羟基含量 ＞3.0 mmol/g</p>
                        </div>
                        <Zap className="w-6 h-6 text-neon-400/50" />
                    </div>
                    <div className="bg-gradient-to-br from-forest-800 to-forest-900 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                        <div>
                            <p className="text-white/40 text-[10px] uppercase font-bold mb-1">产品纯度 / Purity</p>
                            <p className="text-base font-bold text-white">酸不溶木质素含量 ＞85%</p>
                        </div>
                        <ShieldCheck className="w-6 h-6 text-neon-400/50" />
                    </div>
                    <div className="bg-gradient-to-br from-forest-800 to-forest-900 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                        <div>
                            <p className="text-white/40 text-[10px] uppercase font-bold mb-1">分子量分布 / MW Distribution</p>
                            <p className="text-base font-bold text-white">Mn: 1500-3000 | PDI &lt; 2.5</p>
                        </div>
                        <Activity className="w-6 h-6 text-neon-400/50" />
                    </div>
                </div>
             </section>

             <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-4 bg-neon-400 rounded-full"></div>
                    <h3 className="text-sm font-bold tracking-wider uppercase text-white font-sans">核心优势 / CORE ADVANTAGES</h3>
                    <div className="h-px bg-gradient-to-r from-neon-400/50 to-transparent flex-grow"></div>
                </div>
                <div className="space-y-4">
                     {[
                        {title: "保留天然结构", desc: "无酸碱强化学处理，最大限度保留β-O-4键等天然官能团结构，保证原材料的生物活性。", icon: Leaf},
                        {title: "高反应活性", desc: "丰富的酚羟基含量赋予材料极佳的化学接枝能力，在改性树脂及复合材料中表现卓越。", icon: Zap},
                        {title: "低成本", desc: "不采用昂贵的有机溶剂、不采用剧烈的反应条件。", icon: Banknote},
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="bg-neon-400/10 p-2 rounded-lg shrink-0">
                                <item.icon className="w-5 h-5 text-neon-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                                <p className="text-xs text-white/50 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                     ))}
                </div>
             </section>
             
             <section className="mb-4">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-4 bg-neon-400 rounded-full"></div>
                    <h3 className="text-sm font-bold tracking-wider uppercase text-white font-sans">下游应用 / APPLICATIONS</h3>
                    <div className="h-px bg-gradient-to-r from-neon-400/50 to-transparent flex-grow"></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {[
                        {title: "无醛黏合剂", desc: "替代苯酚制备高性能酚醛树脂及聚氨酯材料"},
                        {title: "橡胶助剂", desc: "作为功能性填料提升橡胶的抗老化与补强性能"},
                        {title: "特种分散剂", desc: "用于染料、农药及水煤浆的高效分散与稳定"},
                        {title: "3D打印材料", desc: "生物基3D打印线材的功能性添加与性能改性"},
                    ].map((item, i) => (
                        <div key={i} className="bg-forest-800/50 border border-white/10 p-4 rounded-xl">
                            <div className="w-2 h-2 bg-neon-400 rounded-full mb-2"></div>
                            <h5 className="text-sm font-bold text-white mb-1">{item.title}</h5>
                            <p className="text-[10px] text-white/40 leading-tight">{item.desc}</p>
                        </div>
                    ))}
                </div>
             </section>

             <footer className="mt-8 pt-8 text-center border-t border-white/5">
                <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">CAS BIOMASS REFINING TEAM</p>
             </footer>
        </div>
    </div>
);

// --- Page 4: 无添加酸碱低压汽爆装置 ---
export const EquipExplosion: React.FC<{onBack: () => void}> = ({ onBack }) => (
    <div className="pb-8 bg-forest-950 min-h-screen">
        <DetailHeader title="装备详情: 汽爆装置" onBack={onBack} />
        <section className="relative h-[300px] w-full mt-14">
            <img src="https://picsum.photos/800/600?random=13" className="w-full h-full object-cover" alt="Explosion Equipment" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-2 py-0.5 bg-neon-400 text-forest-950 text-[10px] font-bold rounded mb-2">核心自研装备</span>
                <h2 className="text-2xl font-bold leading-tight text-white">无添加酸碱低压汽爆装置</h2>
            </div>
        </section>

        <div className="px-5 py-6 space-y-8">
            <section>
                <SectionTitle title="核心技术优势" />
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-forest-800 to-forest-900 p-5 rounded-xl border border-white/5 flex gap-4">
                        <div className="bg-neon-400/10 size-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Leaf className="w-6 h-6 text-neon-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-neon-400 mb-1">零化学添加</h4>
                            <p className="text-sm text-white/70 leading-relaxed">纯物理绿色工艺，无需酸碱化学试剂，从源头消除废水污染及酸碱回收难题。</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-forest-800 to-forest-900 p-5 rounded-xl border border-white/5 flex gap-4">
                        <div className="bg-neon-400/10 size-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Activity className="w-6 h-6 text-neon-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-neon-400 mb-1">发酵抑制物降低60%</h4>
                            <p className="text-sm text-white/70 leading-relaxed">汽爆压力从2.0 MPa降低至0.8 MPa，生成的酶解发酵抑制物含量降低60%</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                 <div className="bg-forest-800/30 rounded-2xl border border-white/10 overflow-hidden">
                    <div className="p-5 border-b border-white/10 flex items-center gap-3">
                        <Settings2 className="w-5 h-5 text-neon-400" />
                        <h3 className="font-bold text-white">技术规格参数</h3>
                    </div>
                    <div className="p-2">
                        {[
                            {k: "最大容积", v: "50 m³"},
                            {k: "用汽量", v: "~0.5 kg蒸汽/kg原料"},
                            {k: "工作压力", v: "0.6~2.0 MPa可调"},
                            {k: "控制方式", v: "PLC/DCS多方式匹配"},
                        ].map((row, i) => (
                            <div key={i} className="flex justify-between p-3 border-b border-white/5 last:border-0">
                                <span className="text-white/50 text-sm">{row.k}</span>
                                <span className="text-white font-medium text-sm">{row.v}</span>
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
                        {title: "百升/千升规模中试规模汽爆装置", desc: "满足工艺放大验证需求，数据采集精准。", icon: Settings2},
                        {title: "实验室规模汽爆装置", desc: "紧凑型设计，适用于基础科研与配方优化。", icon: FlaskConical},
                    ].map((item, i) => (
                        <div key={i} className="relative rounded-xl overflow-hidden group h-24">
                             <img src={`https://picsum.photos/600/200?random=${20+i}`} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Case Study" />
                             <div className="absolute inset-0 bg-forest-950/70 flex items-center px-4 border border-white/5">
                                <div className="flex items-start gap-4">
                                    <div className="bg-neon-400/20 p-2 rounded-lg shrink-0">
                                        <item.icon className="w-5 h-5 text-neon-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm mb-1 line-clamp-1">{item.title}</p>
                                        <p className="text-white/50 text-[11px] leading-tight">{item.desc}</p>
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
    <div className="pb-8 bg-forest-950 min-h-screen">
        <DetailHeader title="装备详情: 高固酶解反应器" onBack={onBack} />
        <section className="relative w-full aspect-video mt-14 mx-4 rounded-2xl overflow-hidden max-w-[calc(100%-2rem)] border border-white/10">
            <img src="https://picsum.photos/800/600?random=14" className="w-full h-full object-cover" alt="Reactor" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4">
                <span className="inline-block px-3 py-1 bg-green-800 text-neon-400 text-[10px] font-bold rounded-full mb-2 border border-neon-400/30">
                    ● 核心装备
                </span>
                <h2 className="text-2xl font-bold text-white">核心装备：高固酶解反应器</h2>
            </div>
        </section>

        <div className="px-5 py-6 space-y-8">
            <section>
                <SectionTitle title="技术亮点" />
                <div className="space-y-4">
                    <div className="bg-forest-900 border border-white/5 rounded-2xl p-5 flex gap-4">
                        <div className="bg-green-900/50 size-12 rounded-lg flex items-center justify-center shrink-0">
                            <FlaskConical className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-base mb-1">高固形物浓度（＞20%）</h4>
                            <p className="text-xs text-white/50 leading-relaxed">固形物浓度相较于传统工业酶解（约10%），提升了100%~200%。</p>
                        </div>
                    </div>
                    <div className="bg-forest-900 border border-white/5 rounded-2xl p-5 flex gap-4">
                        <div className="bg-green-900/50 size-12 rounded-lg flex items-center justify-center shrink-0">
                            <Leaf className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-base mb-1">大幅降低能耗</h4>
                            <p className="text-xs text-white/50 leading-relaxed">在同等固形物浓度下，相比于常规机械搅拌，能耗降低70%以上。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <SectionTitle title="性能指标" />
                <div className="bg-forest-900/50 border border-white/5 rounded-2xl p-6 space-y-6">
                    <div>
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-neon-400 text-xs font-bold">糖浓度提升</span>
                            <div>
                                <span className="text-3xl font-bold text-white">300</span>
                                <span className="text-sm text-white/50 ml-1">g/L</span>
                            </div>
                        </div>
                        <div className="text-white text-sm font-bold mb-2">最高可达 300 g/L <span className="text-xs font-normal text-white/40 ml-2">(无浓缩情况)</span></div>
                        <div className="h-2 w-full bg-forest-950 rounded-full overflow-hidden">
                            <div className="h-full bg-neon-400 w-3/4 rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-neon-400 text-xs font-bold">综合用水量降低</span>
                            <div>
                                <span className="text-3xl font-bold text-white">40</span>
                                <span className="text-sm text-white/50 ml-1">%</span>
                            </div>
                        </div>
                        <div className="text-white text-sm font-bold mb-2">资源节约效益显著</div>
                        <div className="h-2 w-full bg-forest-950 rounded-full overflow-hidden">
                            <div className="h-full bg-neon-400 w-2/5 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <SectionTitle title="技术规格参数" />
                <div className="bg-forest-900/30 rounded-xl overflow-hidden border border-white/5">
                    {[
                        {k: "最大容积", v: "400 m³"},
                        {k: "固形物浓度（最高）", v: "35%"},
                        {k: "搅拌系统", v: "高扭矩复合式动力"},
                        {k: "控温精度", v: "±0.1 ℃"},
                    ].map((row, i) => (
                        <div key={i} className="flex bg-transparent border-b border-white/5 last:border-0">
                            <div className="w-1/2 p-4 text-sm text-white/50 bg-white/5">{row.k}</div>
                            <div className="w-1/2 p-4 text-sm text-white font-medium">{row.v}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
);

// --- Page 6: 廊坊中试平台 ---
export const PlatformLangfang: React.FC<{onBack: () => void}> = ({ onBack }) => (
    <div className="pb-8 bg-forest-950 min-h-screen">
        <DetailHeader title="廊坊中试平台" onBack={onBack} />
        
        <div className="mt-14 space-y-4 px-4 mb-8">
            <div className="relative rounded-xl overflow-hidden h-48">
                 <img src="https://picsum.photos/800/400?random=15" className="w-full h-full object-cover" alt="Platform 1" />
                 <div className="absolute bottom-2 left-4 text-sm font-bold text-white drop-shadow-md">廊坊中试基地鸟瞰</div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-32">
                 <div className="relative rounded-xl overflow-hidden">
                    <img src="https://picsum.photos/400/300?random=16" className="w-full h-full object-cover" alt="Platform 2" />
                 </div>
                 <div className="relative rounded-xl overflow-hidden">
                    <img src="https://picsum.photos/400/300?random=17" className="w-full h-full object-cover" alt="Platform 3" />
                 </div>
            </div>
        </div>

        <div className="px-5 space-y-8">
            <section>
                <SectionTitle title="平台概况" />
                <div className="bg-forest-900/50 border border-green-900/50 rounded-2xl p-6">
                    <p className="text-sm text-gray-300 leading-relaxed text-justify mb-6">
                        廊坊中试平台是中国科学院过程工程研究所生物质炼制团队的核心技术转化基地。平台作为连接“基础研究”与“产业化落地”的桥梁，拥有完善的生物质全组分利用工艺链条，可实现从原材料处理到高附加值产品产出的全流程验证。
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-center border-t border-white/5 pt-6">
                        <div>
                            <div className="text-2xl font-bold text-neon-400">5000<span className="text-xs align-top">㎡</span></div>
                            <div className="text-[10px] text-gray-500 mt-1">设施规模</div>
                        </div>
                        <div className="border-l border-white/5">
                            <div className="text-2xl font-bold text-neon-400">20<span className="text-xs align-top">+</span></div>
                            <div className="text-[10px] text-gray-500 mt-1">中试生产线</div>
                        </div>
                        <div className="border-l border-white/5">
                            <div className="text-2xl font-bold text-neon-400">50<span className="text-xs align-top">+</span></div>
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
                        {title: "联合技术开发", desc: "依托团队科研实力，与企业共同攻克生物质炼制领域的关键核心技术。", icon: User}, // Using User icon as handshake proxy
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 bg-forest-900/30 rounded-xl border border-white/5 hover:bg-forest-900/50 transition-colors">
                            <div className="bg-green-900/40 p-3 rounded-lg h-min">
                                <item.icon className="w-6 h-6 text-neon-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                     ))}
                </div>
            </section>

            <section className="bg-neon-500 rounded-3xl p-6 text-forest-950 relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">预约参观与洽谈</h3>
                    <p className="text-xs font-medium mb-6 opacity-80 leading-relaxed">
                        欢迎各界合作伙伴莅临廊坊中试基地参观指导，共商生物质产业化发展大计。
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 shrink-0" />
                            <span className="text-sm font-bold">河北省廊坊市广阳区凤华道1号</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <User className="w-5 h-5 shrink-0" />
                            <span className="text-sm font-bold">联系人：冯老师 18810528589</span>
                        </div>
                    </div>
                </div>
                {/* Decorative background elements */}
                <Factory className="absolute -bottom-4 -right-4 w-32 h-32 text-forest-950/10" />
            </section>
        </div>
    </div>
);