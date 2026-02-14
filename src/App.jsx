import React, { useState, useEffect } from 'react';
import { 
  Wallet, Shield, Globe, Calculator, 
  CheckCircle2, AlertTriangle, ChevronDown, 
  Languages, ArrowRight 
} from 'lucide-react';

const App = () => {
  // --- Global State ---
  const [walletAddress, setWalletAddress] = useState(null);
  const [usdtBalance, setUsdtBalance] = useState(0);
  const [activeTab, setActiveTab] = useState('home'); 
  const [lang, setLang] = useState('en'); // Default Language
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // --- Translation Dictionary (The Brain) ---
  const t = {
    en: {
      nav_overview: "Protocol Overview",
      nav_market: "Liquidity Market",
      connect: "Connect Wallet",
      connected: "Connected",
      hero_badge: "Audited Smart Contract / Non-Custodial",
      hero_title_1: "Liquidity Protocol for",
      hero_title_2: "Metaverse Assets",
      hero_desc: "Access global liquidity using your Virtual Land as collateral. Instant. Permissionless. Powered by USDT.",
      appraisal_title: "Instant Valuation (LTV Check)",
      asset_type: "Asset Type",
      tier_size: "Tier / Size",
      market_floor: "Market Floor Price",
      avail_liquidity: "Available Liquidity",
      unlock_btn: "Unlock This Liquidity Now",
      feature_1: "No Credit Check",
      feature_2: "Instant Transfer",
      feature_3: "Low Protocol Fee (1.5%)",
      how_title: "How the Protocol Works",
      how_subtitle: "Trustless execution via Smart Contracts",
      step_1_title: "Connect & Appraise",
      step_1_desc: "System verifies your Land NFT ownership and calculates real-time LTV limit.",
      step_2_title: "Lock in Escrow",
      step_2_desc: "Your NFT is locked in the Smart Contract. USDT is transferred to your wallet instantly.",
      step_3_title: "Repay or Liquidate",
      step_3_desc: "Repay principal + fee to unlock. If expired, the protocol transfers NFT to the provider.",
      market_title: "Liquidity Market",
      market_subtitle: "Provide USDT to earn yield from secured assets.",
      market_req: "Requesting",
      market_apy: "Est. Yield (APY)",
      btn_provide: "Provide Liquidity",
      btn_closed: "Position Closed",
      footer_desc: "Decentralized Peer-to-Protocol liquidity network. Empowering Metaverse land owners.",
      footer_legal: "Operated by MetaLiquid Global Ltd. (Seychelles)",
      disclaimer_title: "Disclaimer:",
      disclaimer_text: "This interface allows interaction with the smart contract. MetaLiquid is not a bank. Users maintain full control of private keys."
    },
    th: {
      nav_overview: "ภาพรวมโปรโตคอล",
      nav_market: "ตลาดสภาพคล่อง",
      connect: "เชื่อมต่อกระเป๋า",
      connected: "เชื่อมต่อแล้ว",
      hero_badge: "สัญญาอัจฉริยะผ่านการตรวจสอบ / ไม่ถือครองสินทรัพย์",
      hero_title_1: "โปรโตคอลสภาพคล่องสำหรับ",
      hero_title_2: "สินทรัพย์ Metaverse",
      hero_desc: "เข้าถึงสภาพคล่องระดับโลกโดยใช้ที่ดินเสมือนเป็นหลักทรัพย์ค้ำประกัน รวดเร็ว ไม่ต้องขออนุญาต ด้วย USDT",
      appraisal_title: "ประเมินวงเงินทันที (ตรวจสอบ LTV)",
      asset_type: "ประเภทสินทรัพย์",
      tier_size: "ระดับ / ขนาด",
      market_floor: "ราคาพื้นฐานตลาด",
      avail_liquidity: "วงเงินสภาพคล่องที่ได้",
      unlock_btn: "เบิกถอนสภาพคล่องทันที",
      feature_1: "ไม่ตรวจเครดิตบูโร",
      feature_2: "โอนเหรียญทันที",
      feature_3: "ค่าธรรมเนียมต่ำ (1.5%)",
      how_title: "หลักการทำงาน",
      how_subtitle: "ดำเนินการอัตโนมัติผ่าน Smart Contract",
      step_1_title: "เชื่อมต่อ & ประเมิน",
      step_1_desc: "ระบบตรวจสอบความเป็นเจ้าของ NFT และคำนวณวงเงิน LTV อัตโนมัติ",
      step_2_title: "ล็อกในสัญญา Escrow",
      step_2_desc: "NFT ถูกล็อกใน Smart Contract และ USDT จะถูกโอนเข้ากระเป๋าคุณทันที",
      step_3_title: "คืนสภาพคล่อง หรือ เคลม",
      step_3_desc: "คืนเงินต้น+ค่าธรรมเนียมเพื่อปลดล็อก หากครบกำหนด NFT จะถูกโอนให้ผู้ให้สภาพคล่อง",
      market_title: "ตลาดสภาพคล่อง",
      market_subtitle: "ให้สภาพคล่อง USDT เพื่อรับผลตอบแทนจากสินทรัพย์ค้ำประกัน",
      market_req: "ต้องการสภาพคล่อง",
      market_apy: "ผลตอบแทนคาดหวัง (APY)",
      btn_provide: "ให้สภาพคล่อง (Provide)",
      btn_closed: "ปิดรับแล้ว",
      footer_desc: "เครือข่ายสภาพคล่องแบบกระจายศูนย์ (Decentralized) เพิ่มอำนาจให้เจ้าของที่ดิน Metaverse",
      footer_legal: "ดำเนินงานโดย MetaLiquid Global Ltd. (Seychelles)",
      disclaimer_title: "ข้อควรระวัง:",
      disclaimer_text: "อินเทอร์เฟซนี้ใช้สำหรับเชื่อมต่อกับ Smart Contract เท่านั้น ไม่ใช่ธนาคาร ผู้ใช้งานเป็นผู้ดูแล Private Key ของตนเอง 100%"
    },
    cn: {
      nav_overview: "协议概览",
      nav_market: "流动性市场",
      connect: "连接钱包",
      connected: "已连接",
      hero_badge: "经审计的智能合约 / 非托管",
      hero_title_1: "元宇宙资产的",
      hero_title_2: "流动性协议",
      hero_desc: "使用您的虚拟土地作为抵押品获取全球流动性。即时。无需许可。由 USDT 支持。",
      appraisal_title: "即时估值 (LTV 检查)",
      asset_type: "资产类型",
      tier_size: "等级 / 规模",
      market_floor: "市场底价",
      avail_liquidity: "可用流动性",
      unlock_btn: "立即解锁流动性",
      feature_1: "无信用检查",
      feature_2: "即时转账",
      feature_3: "低协议费 (1.5%)",
      how_title: "协议如何运作",
      how_subtitle: "通过智能合约进行无需信任的执行",
      step_1_title: "连接与估值",
      step_1_desc: "系统验证您的 Land NFT 所有权并计算实时 LTV 限制。",
      step_2_title: "锁定在托管中",
      step_2_desc: "您的 NFT 被锁定在智能合约中。USDT 即时转入您的钱包。",
      step_3_title: "偿还或清算",
      step_3_desc: "偿还本金+费用以解锁。如果过期，协议将 NFT 转移给提供者。",
      market_title: "流动性市场",
      market_subtitle: "提供 USDT 以从担保资产中赚取收益。",
      market_req: "请求金额",
      market_apy: "预计收益率 (APY)",
      btn_provide: "提供流动性",
      btn_closed: "仓位已关闭",
      footer_desc: "去中心化点对协议流动性网络。赋能元宇宙土地所有者。",
      footer_legal: "由 MetaLiquid Global Ltd. (塞舌尔) 运营",
      disclaimer_title: "免责声明:",
      disclaimer_text: "此界面允许您与区块链智能合约进行交互。MetaLiquid 不是银行。用户始终保持对其私钥和资产的完全控制。"
    }
  };

  // --- Mock Data ---
  const listings = [
    {
      id: 101,
      assetName: "The Sandbox: Land (-24, 15)",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=sand1&backgroundColor=0ea5e9",
      collateralValue: "1,200 USDT",
      liquidityRequest: "600 USDT", 
      duration: "30 Days",
      apy: "18% APY",
      status: "Open"
    },
    {
      id: 102,
      assetName: "Decentraland: Estate (Genesis)",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=mana1&backgroundColor=f43f5e",
      collateralValue: "4,500 USDT",
      liquidityRequest: "2,000 USDT", 
      duration: "60 Days",
      apy: "24% APY",
      status: "Active"
    },
    {
      id: 103,
      assetName: "Pixels: Water Land #442",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=pixel1&backgroundColor=22c55e",
      collateralValue: "2,800 USDT",
      liquidityRequest: "1,120 USDT",
      duration: "14 Days",
      apy: "30% APY",
      status: "Liquidated"
    }
  ];

  const connectWallet = () => {
    setTimeout(() => {
      setWalletAddress("0x71C...9A23");
      setUsdtBalance(12500.00);
    }, 800);
  };

  const Navbar = () => (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-white px-4 md:px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
        <div className="bg-emerald-500 p-1.5 rounded-lg">
          <Globe className="text-slate-900 w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight">Meta<span className="text-emerald-400">Liquid</span></h1>
        </div>
      </div>

      <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
        <button onClick={() => setActiveTab('home')} className={`hover:text-emerald-400 transition ${activeTab === 'home' ? 'text-emerald-400' : ''}`}>
          {t[lang].nav_overview}
        </button>
        <button onClick={() => setActiveTab('market')} className={`hover:text-emerald-400 transition ${activeTab === 'market' ? 'text-emerald-400' : ''}`}>
          {t[lang].nav_market}
        </button>
      </div>

      <div className="flex items-center gap-3">
        {/* Language Selector */}
        <div className="relative">
          <button 
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 px-3 py-2 rounded-lg border border-slate-700"
          >
            <Languages className="w-4 h-4" />
            <span className="uppercase">{lang}</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          
          {isLangMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-32 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden z-50">
              <button onClick={() => { setLang('en'); setIsLangMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2">
                🇬🇧 English
              </button>
              <button onClick={() => { setLang('th'); setIsLangMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2">
                🇹🇭 ไทย
              </button>
              <button onClick={() => { setLang('cn'); setIsLangMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2">
                🇨🇳 中文
              </button>
            </div>
          )}
        </div>

        {/* Wallet Button */}
        <button 
          onClick={connectWallet}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2
          ${walletAddress ? 'bg-slate-800 text-emerald-400 border border-slate-700' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-900/20'}`}
        >
          <Wallet className="w-4 h-4" />
          <span className="hidden sm:inline">{walletAddress ? t[lang].connected : t[lang].connect}</span>
        </button>
      </div>
    </nav>
  );

  const AppraisalSection = () => {
    const [game, setGame] = useState('sandbox');
    
    // Mock Logic
    const prices = { sandbox: 1200, decentraland: 900, pixels: 2800 };
    const marketValue = prices[game];
    const liquidityLimit = marketValue * 0.6; // 60% LTV

    return (
      <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-6 border border-slate-700 shadow-xl max-w-md mx-auto mt-10 text-left relative overflow-hidden group hover:border-emerald-500/30 transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition">
          <Calculator className="w-24 h-24 text-emerald-500" />
        </div>
        
        <div className="flex items-center gap-2 mb-6 text-emerald-400 border-b border-slate-700 pb-4">
          <Calculator className="w-5 h-5" />
          <h3 className="font-bold text-lg">{t[lang].appraisal_title}</h3>
        </div>
        
        <div className="space-y-5 relative z-10">
          <div>
            <label className="text-xs text-slate-400 mb-1 block uppercase tracking-wider">{t[lang].asset_type}</label>
            <select 
              value={game} onChange={(e) => setGame(e.target.value)}
              className="w-full bg-slate-900 border border-slate-600 text-white rounded-lg p-3 text-sm focus:ring-1 focus:ring-emerald-500 outline-none hover:border-slate-500 transition"
            >
              <option value="sandbox">The Sandbox</option>
              <option value="decentraland">Decentraland</option>
              <option value="pixels">Pixels (Ronin)</option>
            </select>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">{t[lang].market_floor}</span>
              <span className="text-sm text-slate-300 font-mono">~{marketValue.toLocaleString()} USDT</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-800">
              <span className="text-sm font-bold text-emerald-400">{t[lang].avail_liquidity}</span>
              <span className="text-2xl font-bold text-white font-mono">{liquidityLimit.toLocaleString()} USDT</span>
            </div>
          </div>

          <button onClick={() => setActiveTab('market')} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-lg transition text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
            {t[lang].unlock_btn} <ArrowRight className="w-4 h-4"/>
          </button>
        </div>
      </div>
    );
  };

  const Marketplace = () => (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{t[lang].market_title}</h2>
            <p className="text-slate-500">{t[lang].market_subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-slate-100 relative overflow-hidden">
                <img src={item.image} alt="asset" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-3 left-3 text-white font-bold drop-shadow-md">
                   {item.assetName}
                </div>
                <div className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded border uppercase backdrop-blur-md ${
                  item.status === 'Open' ? 'bg-emerald-500/90 text-white border-emerald-400' : 'bg-slate-500/90 text-white border-slate-400'
                }`}>
                  {item.status}
                </div>
              </div>
              
              <div className="p-5">
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">{t[lang].market_req}</span>
                    <span className="font-bold text-slate-900 text-xl">{item.liquidityRequest}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-slate-500">{t[lang].market_apy}</span>
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{item.apy}</span>
                  </div>
                  
                  <button 
                    disabled={item.status !== 'Open'}
                    className={`w-full py-3 rounded-lg font-bold text-sm transition flex items-center justify-center gap-2
                    ${item.status === 'Open' 
                      ? 'bg-slate-900 text-white hover:bg-emerald-600 shadow-lg shadow-slate-200' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                  >
                    {item.status === 'Open' ? t[lang].btn_provide : t[lang].btn_closed}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="font-sans bg-slate-900 min-h-screen flex flex-col">
      <Navbar />
      
      {activeTab === 'home' && (
        <main className="flex-grow">
          <section className="relative py-20 px-6 bg-slate-900 text-center overflow-hidden min-h-[80vh] flex flex-col justify-center">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-slate-950 -z-10"></div>
            
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs font-semibold text-emerald-400 mb-8 backdrop-blur-sm">
                <Shield className="w-3 h-3" /> {t[lang].hero_badge}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                {t[lang].hero_title_1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">{t[lang].hero_title_2}</span>
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                {t[lang].hero_desc}
              </p>

              <AppraisalSection />

              <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 text-slate-500 text-sm font-medium">
                 <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> {t[lang].feature_1}</div>
                 <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> {t[lang].feature_2}</div>
                 <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> {t[lang].feature_3}</div>
              </div>
            </div>
          </section>
          
          <section className="py-20 bg-white border-y border-slate-100">
             <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                   <h2 className="text-3xl font-bold text-slate-900">{t[lang].how_title}</h2>
                   <p className="text-slate-500 mt-2">{t[lang].how_subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {[
                     { id: 1, title: t[lang].step_1_title, desc: t[lang].step_1_desc, color: "bg-emerald-100 text-emerald-600" },
                     { id: 2, title: t[lang].step_2_title, desc: t[lang].step_2_desc, color: "bg-blue-100 text-blue-600" },
                     { id: 3, title: t[lang].step_3_title, desc: t[lang].step_3_desc, color: "bg-purple-100 text-purple-600" }
                   ].map((step) => (
                     <div key={step.id} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:border-emerald-200 transition duration-300">
                        <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-sm`}>{step.id}</div>
                        <h3 className="font-bold text-xl mb-3 text-slate-800">{step.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </section>
        </main>
      )}

      {activeTab === 'market' && (
        <main className="flex-grow pt-10 bg-slate-50">
           <Marketplace />
        </main>
      )}

      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900 text-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 text-emerald-500">
             <Globe className="w-5 h-5" />
             <span className="font-bold text-white tracking-tight">MetaLiquid</span>
          </div>
          <p className="max-w-md mx-auto mb-8 leading-relaxed text-slate-400">
            {t[lang].footer_desc} <br/>
            <span className="text-xs opacity-70">{t[lang].footer_legal}</span>
          </p>
          <div className="pt-8 border-t border-slate-900 text-xs text-center leading-relaxed text-slate-600 max-w-2xl mx-auto">
            <p className="mb-2">
              <strong>{t[lang].disclaimer_title}</strong> {t[lang].disclaimer_text}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;