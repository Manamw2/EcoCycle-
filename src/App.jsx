import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Home, PlusSquare, ShoppingBag, Award, User, ChevronRight, Menu, Scan, Flame, Sprout, Leaf, ArrowRight, Camera, CheckCircle, XCircle } from 'lucide-react';
import './index.css';

// 1. Splash Screen
const SplashScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'linear-gradient(135deg, var(--primary-light) 0%, #ffffff 100%)' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: 'var(--primary)', padding: '24px', borderRadius: '50%', marginBottom: '24px', boxShadow: 'var(--shadow-md)' }}>
          <Leaf color="white" size={64} />
        </div>
        <h1 style={{ color: 'var(--primary-dark)', fontSize: '32px', fontWeight: '800', marginBottom: '12px' }}>EcoCycle</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', textAlign: 'center', padding: '0 32px' }}>تحويل المخلفات إلى طاقة وحياة</p>
      </div>
      <div style={{ padding: '32px 24px' }}>
        <button className="btn btn-primary" onClick={() => navigate('/login')}>ابدأ الآن</button>
      </div>
    </div>
  );
};

// 2. Login Screen
const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container" style={{ padding: '24px', backgroundColor: '#fff', height: '100vh' }}>
      <div style={{ marginTop: '40px', marginBottom: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', color: 'var(--primary-dark)', fontWeight: '700' }}>مرحباً بك</h2>
        <p style={{ color: 'var(--text-muted)' }}>سجل للانضمام إلى مجتمع EcoCycle</p>
      </div>
      <div className="input-group">
        <label>الاسم</label>
        <input type="text" placeholder="أدخل اسمك الكريم" />
      </div>
      <div className="input-group">
        <label>البريد الإلكتروني أو رقم الهاتف</label>
        <input type="text" placeholder="example@email.com" />
      </div>
      <div className="input-group">
        <label>كلمة المرور</label>
        <input type="password" placeholder="••••••••" />
      </div>
      <div style={{ marginTop: '32px' }}>
        <button className="btn btn-primary" onClick={() => navigate('/home')}>إنشاء حساب</button>
      </div>
    </div>
  );
};

// Layout with Bottom Nav
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </div>
      <div className="bottom-nav">
        <button className={`nav-item ${path === '/home' ? 'active' : ''}`} onClick={() => navigate('/home')}>
          <Home size={24} />
          <span>الرئيسية</span>
        </button>
        <button className={`nav-item ${path === '/add' ? 'active' : ''}`} onClick={() => navigate('/add')}>
          <PlusSquare size={24} />
          <span>إضافة</span>
        </button>
        <button className={`nav-item ${path === '/market' ? 'active' : ''}`} onClick={() => navigate('/market')}>
          <ShoppingBag size={24} />
          <span>السوق</span>
        </button>
        <button className={`nav-item ${path === '/points' ? 'active' : ''}`} onClick={() => navigate('/points')}>
          <Award size={24} />
          <span>النقاط</span>
        </button>
        <button className={`nav-item ${path === '/account' ? 'active' : ''}`} onClick={() => navigate('/instructions')}>
          <User size={24} />
          <span>الحساب</span>
        </button>
      </div>
    </div>
  );
};

// 3. Home Dashboard
const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="page-container" style={{ padding: '0', backgroundColor: 'var(--bg-color)' }}>
        {/* Top Section */}
        <div style={{ background: 'var(--primary)', padding: '40px 24px 80px', borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px', color: 'white' }}>
          <div className="flex justify-between align-center" style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '24px', margin: 0 }}>مرحباً يا ياسمين 👋</h2>
            <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', cursor: 'pointer' }}>
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{ margin: '-50px 24px 24px', background: 'white', borderRadius: '24px', padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', boxShadow: 'var(--shadow-md)' }}>
          <div className="text-center">
            <p className="text-muted" style={{ fontSize: '13px' }}>كمية المخلفات</p>
            <p className="font-bold" style={{ fontSize: '18px', color: 'var(--primary-dark)' }}>2 كجم</p>
          </div>
          <div className="text-center" style={{ borderRight: '1px solid #eee' }}>
            <p className="text-muted" style={{ fontSize: '13px' }}>Eco Points</p>
            <p className="font-bold" style={{ fontSize: '18px', color: 'var(--warning)' }}>184 نقطة</p>
          </div>
          <div className="text-center" style={{ borderTop: '1px solid #eee', paddingTop: '16px' }}>
            <p className="text-muted" style={{ fontSize: '13px' }}>السماد المنتج</p>
            <p className="font-bold" style={{ fontSize: '18px', color: '#8B5A2B' }}>340 جرام</p>
          </div>
          <div className="text-center" style={{ borderTop: '1px solid #eee', borderRight: '1px solid #eee', paddingTop: '16px' }}>
            <p className="text-muted" style={{ fontSize: '13px' }}>الغاز المنتج</p>
            <p className="font-bold" style={{ fontSize: '18px', color: '#0ea5e9' }}>1.5 م³</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ padding: '0 24px 24px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>إجراءات سريعة</h3>
          <div className="grid-2">
            <div className="card text-center" onClick={() => navigate('/scan')} style={{ cursor: 'pointer' }}>
              <Camera size={32} color="var(--primary)" style={{ margin: '0 auto 8px' }} />
              <p className="font-bold" style={{ fontSize: '14px' }}>مسح المخلفات</p>
            </div>
            <div className="card text-center" onClick={() => navigate('/add')} style={{ cursor: 'pointer' }}>
              <PlusSquare size={32} color="var(--primary)" style={{ margin: '0 auto 8px' }} />
              <p className="font-bold" style={{ fontSize: '14px' }}>إضافة مخلفات</p>
            </div>
            <div className="card text-center" onClick={() => navigate('/track')} style={{ cursor: 'pointer' }}>
              <Flame size={32} color="#0ea5e9" style={{ margin: '0 auto 8px' }} />
              <p className="font-bold" style={{ fontSize: '14px' }}>متابعة الغاز</p>
            </div>
            <div className="card text-center" onClick={() => navigate('/fertilizer')} style={{ cursor: 'pointer' }}>
              <Sprout size={32} color="#8B5A2B" style={{ margin: '0 auto 8px' }} />
              <p className="font-bold" style={{ fontSize: '14px' }}>مركز السماد</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// 4. Waste Scan Screen
const ScanScreen = () => {
  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState(null);

  const performScan = () => {
    // Alternate between case 1 and case 2 for demo
    setScanResult(prev => prev === 'good' ? 'bad' : 'good');
  };

  return (
    <div className="page-container flex" style={{ flexDirection: 'column' }}>
      <div className="screen-header">
        <button className="back-btn" onClick={() => navigate(-1)}><ChevronRight /></button>
        <h2 className="screen-title">مسح المخلفات</h2>
        <div style={{ width: '24px' }}></div>
      </div>
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: '#000', borderRadius: '24px', flex: 1, marginBottom: '24px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=600&auto=format&fit=crop" alt="Camera feed" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
          <div style={{ position: 'absolute', width: '200px', height: '200px', border: '3px dashed var(--primary)', borderRadius: '16px' }}></div>
        </div>
        
        {scanResult === 'good' && (
          <div className="card" style={{ background: 'var(--primary-light)', borderColor: 'var(--primary)' }}>
            <div className="flex align-center mb-2">
              <CheckCircle color="var(--primary)" size={24} style={{ marginLeft: '8px' }} />
              <h3 style={{ margin: 0, color: 'var(--primary-dark)' }}>قشر موز</h3>
            </div>
            <p style={{ margin: '4px 0', fontSize: '14px' }}>✔ مناسب للغاز الحيوي</p>
            <p style={{ margin: '4px 0', fontSize: '14px' }}>✔ مناسب للسماد</p>
            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <p className="font-bold" style={{ fontSize: '14px', marginBottom: '8px' }}>أفضل استخدام:</p>
              <div className="flex" style={{ gap: '8px' }}>
                <span style={{ fontSize: '12px', background: 'white', padding: '4px 8px', borderRadius: '4px' }}>غاز حيوي</span>
                <span style={{ fontSize: '12px', background: 'white', padding: '4px 8px', borderRadius: '4px' }}>سماد</span>
              </div>
            </div>
          </div>
        )}

        {scanResult === 'bad' && (
          <div className="card" style={{ background: '#FEE2E2' }}>
            <div className="flex align-center mb-2">
              <XCircle color="var(--danger)" size={24} style={{ marginLeft: '8px' }} />
              <h3 style={{ margin: 0, color: 'var(--danger)' }}>عظام</h3>
            </div>
            <p style={{ margin: '4px 0', fontSize: '14px', color: 'var(--danger)' }}>❌ غير مناسب</p>
          </div>
        )}

        <button className="btn btn-primary" onClick={performScan} style={{ marginTop: 'auto' }}>مسح المخلفات</button>
      </div>
    </div>
  );
};

// 5. Add Waste Screen
const AddWasteScreen = () => {
  const navigate = useNavigate();
  const [qty, setQty] = useState('');
  const amount = parseFloat(qty) || 0;

  return (
    <Layout>
      <div className="page-container">
        <div className="screen-header">
          <h2 className="screen-title" style={{ textAlign: 'right' }}>إضافة مخلفات</h2>
        </div>
        <div style={{ padding: '24px' }}>
          <div className="input-group">
            <label>نوع المخلفات</label>
            <select>
              <option>خضروات</option>
              <option>فواكه</option>
              <option>بقايا طعام</option>
              <option>خبز</option>
            </select>
          </div>
          <div className="input-group">
            <label>الكمية (كجم)</label>
            <input type="number" value={qty} onChange={e => setQty(e.target.value)} placeholder="0.0" />
          </div>

          <div className="card mt-4" style={{ background: 'var(--primary-light)' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--primary-dark)' }}>التوقعات:</h3>
            <div className="flex justify-between mb-2">
              <span className="text-muted">الغاز المتوقع</span>
              <span className="font-bold">{(amount * 0.2).toFixed(1)} م³</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">السماد المتوقع</span>
              <span className="font-bold">{(amount * 0.15).toFixed(2)} كجم</span>
            </div>
          </div>

          <button className="btn btn-primary mt-4" onClick={() => { alert('تمت الإضافة بنجاح!'); navigate('/home'); }}>إضافة</button>
        </div>
      </div>
    </Layout>
  );
};

// 6. Gas Tracking Screen
const TrackGasScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container flex" style={{ flexDirection: 'column' }}>
      <div className="screen-header">
        <button className="back-btn" onClick={() => navigate(-1)}><ChevronRight /></button>
        <h2 className="screen-title">متابعة الغاز</h2>
        <div style={{ width: '24px' }}></div>
      </div>
      <div style={{ padding: '40px 24px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Circular Progress */}
        <div style={{ position: 'relative', width: '200px', height: '200px', marginBottom: '40px' }}>
          <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="8" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="#0ea5e9" strokeWidth="8" strokeDasharray="283" strokeDashoffset="70" strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1s ease' }} />
          </svg>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Flame size={40} color="#0ea5e9" style={{ marginBottom: '8px' }} />
            <span style={{ fontSize: '32px', fontWeight: '800', color: '#0ea5e9' }}>75%</span>
          </div>
        </div>

        <div className="card" style={{ width: '100%' }}>
          <div className="flex justify-between align-center mb-4" style={{ paddingBottom: '16px', borderBottom: '1px solid #eee' }}>
            <span className="text-muted font-bold">وقت الطهي المتوقع</span>
            <span style={{ fontSize: '18px', fontWeight: '700' }}>2 - 3 ساعات</span>
          </div>
          <div className="flex justify-between align-center">
            <span className="text-muted font-bold">الوقت المتبقي لإتمام العملية</span>
            <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)' }}>45 دقيقة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. Fertilizer Center
const FertilizerScreen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null);
  
  // Auto pricing states
  const [productType, setProductType] = useState('سماد');
  const [qty, setQty] = useState('');
  const [age, setAge] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculatePrice = () => {
    let price = 0;
    const quantity = parseFloat(qty) || 0;
    if (productType === 'سماد') {
      if (age === 'new') price = 20 * quantity;
      else if (age === 'medium') price = 15 * quantity;
      else if (age === 'old') price = 10 * quantity;
    } else if (productType === 'مخلفات') {
      if (age === 'new') price = 5 * quantity;
      else if (age === 'medium') price = 3 * quantity;
      else if (age === 'old') price = 1 * quantity;
    } else if (productType === 'غاز حيوي') {
      if (age === 'new') price = 50 * quantity;
      else if (age === 'medium') price = 40 * quantity;
      else if (age === 'old') price = 30 * quantity;
    }
    setCalculatedPrice(price);
  };

  useEffect(() => {
    calculatePrice();
  }, [productType, qty, age]);

  return (
    <div className="page-container flex" style={{ flexDirection: 'column' }}>
      <div className="screen-header">
        <button className="back-btn" onClick={() => navigate(-1)}><ChevronRight /></button>
        <h2 className="screen-title">مركز السماد</h2>
        <div style={{ width: '24px' }}></div>
      </div>
      <div style={{ padding: '24px', flex: 1, overflowY: 'auto' }}>
        <div className="card text-center" style={{ background: 'var(--primary-light)' }}>
          <p className="text-muted mb-2">إجمالي إنتاج هذا الشهر</p>
          <h2 style={{ color: 'var(--primary-dark)', fontSize: '28px', margin: 0 }}>12 كجم</h2>
        </div>

        <div className="mt-4">
          <button className={`btn mb-4 ${activeTab === 'use' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveTab('use')}>
            استخدام في المنزل 🌱
          </button>
          {activeTab === 'use' && (
            <div className="card" style={{ animation: 'fadeIn 0.2s' }}>
              <h3 className="mb-2">استخدامات للنباتات:</h3>
              <div className="flex justify-between mt-4">
                <div className="text-center"><div style={{fontSize:'24px', marginBottom:'4px'}}>🥕</div><span style={{fontSize:'12px'}}>خضروات</span></div>
                <div className="text-center"><div style={{fontSize:'24px', marginBottom:'4px'}}>🍎</div><span style={{fontSize:'12px'}}>فاكهة</span></div>
                <div className="text-center"><div style={{fontSize:'24px', marginBottom:'4px'}}>🌸</div><span style={{fontSize:'12px'}}>أزهار</span></div>
              </div>
            </div>
          )}

          <button className={`btn mb-4 ${activeTab === 'store' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveTab('store')}>
            تخزين 📦
          </button>
          {activeTab === 'store' && (
            <div className="card text-muted" style={{ animation: 'fadeIn 0.2s', fontSize: '14px', lineHeight: '1.6' }}>
              <ul style={{ paddingRight: '20px' }}>
                <li>تخزين في أوعية محكمة الغلق</li>
                <li>يحفظ بعيداً عن الشمس</li>
                <li>درجة حرارة مثالية 15–25 مئوية</li>
                <li>تجنب الرطوبة</li>
                <li>وضع ملصق بتاريخ التعبئة</li>
                <li>يخزن في مكان جيد التهوية</li>
              </ul>
            </div>
          )}

          <button className={`btn mb-4 ${activeTab === 'sell' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveTab('sell')}>
            بيع 💰
          </button>
          {activeTab === 'sell' && (
            <div className="card" style={{ animation: 'fadeIn 0.2s' }}>
              <div className="input-group">
                <label>نوع المنتج</label>
                <select value={productType} onChange={e => setProductType(e.target.value)}>
                  <option>سماد</option>
                  <option>مخلفات</option>
                  <option>غاز حيوي</option>
                </select>
              </div>
              <div className="input-group">
                <label>الكمية</label>
                <input type="number" value={qty} onChange={e => setQty(e.target.value)} placeholder="0" />
              </div>
              <div className="input-group">
                <label>الجودة / العمر</label>
                <select value={age} onChange={e => setAge(e.target.value)}>
                  <option value="">-- اختر --</option>
                  <option value="new">{productType === 'سماد' ? '0–3 أشهر (ممتاز)' : productType === 'مخلفات' ? '0–7 أيام' : '0–1 يوم'}</option>
                  <option value="medium">{productType === 'سماد' ? '3–6 أشهر (جيد)' : productType === 'مخلفات' ? '7–14 يوم' : '1–3 أيام'}</option>
                  <option value="old">{productType === 'سماد' ? '6–12 شهر (مقبول)' : productType === 'مخلفات' ? '14–21 يوم' : '3–5 أيام'}</option>
                </select>
              </div>
              {calculatedPrice > 0 && (
                <div style={{ background: '#F0FDF4', padding: '16px', borderRadius: '8px', textAlign: 'center', marginBottom: '16px', color: 'var(--primary-dark)' }}>
                  <p className="font-bold text-muted mb-2">السعر المقترح</p>
                  <h3 style={{ margin: 0, fontSize: '24px' }}>{calculatedPrice} جنيه</h3>
                </div>
              )}
              <button className="btn btn-primary">أضف للعرض للبيع</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 8. Marketplace Screen
const MarketScreen = () => {
  return (
    <Layout>
      <div className="page-container" style={{ padding: '24px' }}>
        <div className="flex justify-between align-center mb-4">
          <h2 style={{ fontSize: '24px', margin: 0 }}>السوق</h2>
          <button className="btn btn-outline" style={{ padding: '8px 16px', width: 'auto', fontSize: '14px' }}>بيع منتجك</button>
        </div>
        
        <div className="grid-2">
          {/* Item 1 */}
          <div className="card" style={{ padding: '12px' }}>
            <div style={{ height: '100px', background: '#e0e0e0', borderRadius: '8px', marginBottom: '12px', display: 'flex', justifyContent:'center', alignItems:'center' }}>🌱</div>
            <h4 className="mb-2" style={{ fontSize: '14px' }}>بذور طماطم عضوية</h4>
            <div className="flex justify-between align-center mb-2">
              <span className="font-bold text-success" style={{ fontSize: '14px' }}>15 جنيه</span>
            </div>
            <button className="btn btn-primary" style={{ padding: '8px', fontSize: '14px' }}>شراء</button>
          </div>
          {/* Item 2 */}
          <div className="card" style={{ padding: '12px' }}>
            <div style={{ height: '100px', background: '#e0e0e0', borderRadius: '8px', marginBottom: '12px', display: 'flex', justifyContent:'center', alignItems:'center' }}>🪴</div>
            <h4 className="mb-2" style={{ fontSize: '14px' }}>نبتة زينة داخلية</h4>
            <div className="flex justify-between align-center mb-2">
              <span className="font-bold text-warning" style={{ fontSize: '14px' }}>150 نقطة</span>
            </div>
            <button className="btn btn-primary" style={{ padding: '8px', fontSize: '14px' }}>شراء</button>
          </div>
          {/* Item 3 */}
          <div className="card" style={{ padding: '12px' }}>
            <div style={{ height: '100px', background: '#e0e0e0', borderRadius: '8px', marginBottom: '12px', display: 'flex', justifyContent:'center', alignItems:'center' }}>📦</div>
            <h4 className="mb-2" style={{ fontSize: '14px' }}>سماد عضوي (5 كجم)</h4>
            <div className="flex justify-between align-center mb-2">
              <span className="font-bold text-success" style={{ fontSize: '14px' }}>100 جنيه</span>
            </div>
            <button className="btn btn-primary" style={{ padding: '8px', fontSize: '14px' }}>شراء</button>
          </div>
          {/* Item 4 */}
          <div className="card" style={{ padding: '12px' }}>
            <div style={{ height: '100px', background: '#e0e0e0', borderRadius: '8px', marginBottom: '12px', display: 'flex', justifyContent:'center', alignItems:'center' }}>🔥</div>
            <h4 className="mb-2" style={{ fontSize: '14px' }}>غاز حيوي (2 م³)</h4>
            <div className="flex justify-between align-center mb-2">
              <span className="font-bold text-success" style={{ fontSize: '14px' }}>90 جنيه</span>
            </div>
            <button className="btn btn-primary" style={{ padding: '8px', fontSize: '14px' }}>شراء</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// 9. Eco Points Screen
const PointsScreen = () => {
  return (
    <Layout>
      <div className="page-container" style={{ padding: '24px' }}>
        <h2 className="screen-title" style={{ textAlign: 'right', marginBottom: '24px' }}>النقاط (Eco Points)</h2>
        
        <div className="card flex align-center justify-between" style={{ background: 'var(--primary)', color: 'white', padding: '32px 24px', borderRadius: '24px' }}>
          <div>
            <p style={{ opacity: 0.9, marginBottom: '8px' }}>إجمالي النقاط</p>
            <h1 style={{ fontSize: '40px', margin: 0 }}>184</h1>
          </div>
          <div>
            <Award size={64} style={{ opacity: 0.6 }} />
          </div>
        </div>

        <h3 className="mt-4 mb-4">كيف تربح النقاط؟</h3>
        <div className="card flex align-center mb-4">
          <div style={{ background: 'var(--primary-light)', padding: '12px', borderRadius: '12px', marginLeft: '16px' }}>
            <PlusSquare color="var(--primary)" />
          </div>
          <div>
            <h4 style={{ margin: '0 0 4px 0' }}>إضافة مخلفات</h4>
            <p className="text-muted" style={{ margin: 0, fontSize: '14px' }}>كل كجم مخلفات = 10 نقاط</p>
          </div>
        </div>
        <div className="card flex align-center mb-4">
          <div style={{ background: '#FEF3C7', padding: '12px', borderRadius: '12px', marginLeft: '16px' }}>
            <Sprout color="var(--warning)" />
          </div>
          <div>
            <h4 style={{ margin: '0 0 4px 0' }}>إنتاج سماد</h4>
            <p className="text-muted" style={{ margin: 0, fontSize: '14px' }}>كل كجم سماد = 20 نقطة</p>
          </div>
        </div>

        <h3 className="mt-4 mb-4">كيف تستخدمها؟</h3>
        <div className="card">
          <ul style={{ paddingRight: '20px', lineHeight: '2' }}>
            <li>الحصول على <span className="font-bold text-success">خصومات</span> على منتجات السوق</li>
            <li>شراء منتجات بالكامل باستخدام النقاط</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

// 10. Instructions Screen
const InstructionsScreen = () => {
  return (
    <Layout>
      <div className="page-container" style={{ padding: '24px' }}>
        <h2 className="screen-title" style={{ textAlign: 'right', marginBottom: '24px' }}>التعليمات ودليل الاستخدام</h2>
        
        <div className="grid-2 mb-4">
          <div className="card" style={{ background: 'var(--primary-light)' }}>
            <h3 className="text-success mb-2 text-center">✔ مسموح</h3>
            <ul style={{ paddingRight: '20px', fontSize: '14px', lineHeight: '1.6' }}>
              <li>خضار وفواكه</li>
              <li>قشور الفواكه</li>
              <li>بقايا الطعام</li>
              <li>قهوة وشاي</li>
              <li>خبز</li>
            </ul>
          </div>
          <div className="card" style={{ background: '#FEE2E2' }}>
            <h3 className="text-danger mb-2 text-center">❌ تجنب</h3>
            <ul style={{ paddingRight: '20px', fontSize: '14px', lineHeight: '1.6' }}>
              <li>لحوم وأسماك</li>
              <li>زيوت بكميات كبيرة</li>
              <li>بلاستيك / زجاج</li>
              <li>عظام كبيرة</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4">
          <h3 className="mb-4">خطوات التشغيل:</h3>
          <ol style={{ paddingRight: '20px', lineHeight: '2', fontWeight: '600' }}>
            <li>أضف المخلفات</li>
            <li>أضف ماء (1–2 كوب لكل 2–3 كجم)</li>
            <li>أضف biostarter</li>
            <li>اضغط Start</li>
            <li>تابع العملية داخل التطبيق</li>
          </ol>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--warning)', background: '#FEF3C7' }}>
          <h3 className="mb-2 text-warning flex align-center"><Flame size={20} style={{ marginLeft: '8px' }}/> تعليمات الأمان</h3>
          <ul style={{ paddingRight: '20px', lineHeight: '1.8', fontSize: '14px' }}>
            <li>لا تلمس الجهاز أثناء التشغيل (حرارة عالية).</li>
            <li>تأكد من الغلق الجيد لمنع تسرب الغاز.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/scan" element={<ScanScreen />} />
        <Route path="/add" element={<AddWasteScreen />} />
        <Route path="/track" element={<TrackGasScreen />} />
        <Route path="/fertilizer" element={<FertilizerScreen />} />
        <Route path="/market" element={<MarketScreen />} />
        <Route path="/points" element={<PointsScreen />} />
        <Route path="/instructions" element={<InstructionsScreen />} />
      </Routes>
    </Router>
  );
}
