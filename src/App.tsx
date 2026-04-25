import { useState } from "react";
import Icon from "@/components/ui/icon";

type Section = "home" | "register" | "verify" | "contract" | "catalog" | "gps" | "cabinet" | "support";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/20efe43b-9ac8-4635-901d-e0b848c858dc/files/d5b25246-0ca0-4b70-b74d-25f57bff3192.jpg";

const bikes = [
  { id: 1, name: "Горный Explorer", type: "Горный", price: 350, rating: 4.9, available: true, emoji: "🚵", image: "https://cdn.poehali.dev/projects/20efe43b-9ac8-4635-901d-e0b848c858dc/bucket/b23b91dc-e110-450a-98ac-e4b9071ac5ec.JPG" },
  { id: 2, name: "Городской Breeze", type: "Городской", price: 200, rating: 4.7, available: true, emoji: "🚲" },
  { id: 3, name: "Электро EcoRide", type: "Электрический", price: 500, rating: 4.8, available: true, emoji: "⚡" },
  { id: 4, name: "Детский Sprout", type: "Детский", price: 150, rating: 5.0, available: false, emoji: "🌿" },
  { id: 5, name: "Складной Compact", type: "Складной", price: 280, rating: 4.6, available: true, emoji: "🌱" },
  { id: 6, name: "Шоссейный Swift", type: "Шоссейный", price: 420, rating: 4.8, available: true, emoji: "🍃" },
];

const navItems = [
  { id: "home" as Section, label: "Главная", icon: "Home" },
  { id: "catalog" as Section, label: "Каталог", icon: "Bike" },
  { id: "gps" as Section, label: "GPS", icon: "MapPin" },
  { id: "cabinet" as Section, label: "Кабинет", icon: "User" },
  { id: "support" as Section, label: "Поддержка", icon: "Headphones" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [verifyStep, setVerifyStep] = useState(0);
  const [contractSigned, setContractSigned] = useState(false);
  const [selectedBike, setSelectedBike] = useState<number | null>(null);
  const [filterType, setFilterType] = useState("Все");

  const goto = (s: Section) => {
    setActiveSection(s);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nature border-b border-forest-200/30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => goto("home")} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full forest-gradient flex items-center justify-center text-sm">🌿</div>
            <span className="font-display text-xl font-semibold text-forest-700">ВелоПрокат</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goto(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-forest-600 text-cream"
                    : "text-forest-700 hover:bg-forest-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => goto("register")}
              className="px-4 py-2 rounded-lg border border-forest-600 text-forest-700 text-sm font-medium hover:bg-forest-50 transition-colors"
            >
              Войти
            </button>
            <button
              onClick={() => goto("register")}
              className="px-4 py-2 rounded-lg forest-gradient text-cream text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Регистрация
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-forest-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-cream/95 backdrop-blur border-t border-forest-200/30 px-4 py-3 space-y-1 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goto(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-3 transition-all ${
                  activeSection === item.id ? "bg-forest-600 text-cream" : "text-forest-700 hover:bg-forest-100"
                }`}
              >
                <Icon name={item.icon} size={18} />
                {item.label}
              </button>
            ))}
            <div className="flex gap-2 pt-2">
              <button onClick={() => goto("register")} className="flex-1 py-2.5 rounded-lg border border-forest-600 text-forest-700 text-sm font-medium">Войти</button>
              <button onClick={() => goto("register")} className="flex-1 py-2.5 rounded-lg forest-gradient text-cream text-sm font-medium">Регистрация</button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">

        {/* ─── HOME ─── */}
        {activeSection === "home" && (
          <div>
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${HERO_IMAGE})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-900/85 via-forest-800/60 to-transparent" />
              <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-6 text-cream/90 text-sm animate-fade-in opacity-0-init">
                    <span className="w-2 h-2 rounded-full bg-moss-300 animate-pulse-soft" />
                    Экологичный транспорт города
                  </div>
                  <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight text-shadow-forest animate-fade-in opacity-0-init animate-delay-100">
                    Свобода <br />
                    <em className="text-moss-300 not-italic">движения</em> <br />
                    с природой
                  </h1>
                  <p className="text-cream/80 text-lg mb-8 leading-relaxed animate-fade-in opacity-0-init animate-delay-200">
                    Аренда велосипедов с умной верификацией, GPS-трекингом <br className="hidden md:block"/>
                    и цифровым договором. Просто, безопасно, экологично.
                  </p>
                  <div className="flex flex-wrap gap-4 animate-fade-in opacity-0-init animate-delay-300">
                    <button
                      onClick={() => goto("catalog")}
                      className="px-8 py-4 rounded-xl forest-gradient text-cream font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-forest-900/30"
                    >
                      Выбрать велосипед
                    </button>
                    <button
                      onClick={() => goto("register")}
                      className="px-8 py-4 rounded-xl bg-white/15 backdrop-blur border border-white/30 text-cream font-semibold text-lg hover:bg-white/25 transition-all"
                    >
                      Узнать больше
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cream/50 animate-pulse-soft">
                <span className="text-xs">прокрутить</span>
                <Icon name="ChevronDown" size={16} />
              </div>
            </section>

            <section className="py-12 bg-forest-800 text-cream">
              <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { num: "1 200+", label: "Велосипедов" },
                  { num: "48 000", label: "Поездок в месяц" },
                  { num: "98%", label: "Довольных клиентов" },
                  { num: "0 г CO₂", label: "Выбросов" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-4xl font-bold text-moss-300 mb-1">{s.num}</div>
                    <div className="text-cream/60 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-20 max-w-6xl mx-auto px-6">
              <div className="text-center mb-14">
                <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest-800 mb-4">Почему ВелоПрокат?</h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">Удобный сервис с заботой о природе и вашей безопасности</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "ScanFace", title: "Верификация личности", desc: "Распознавание лица и сканирование паспорта — быстро и безопасно", color: "forest" },
                  { icon: "MapPin", title: "GPS-трекинг", desc: "Отслеживайте велосипед в реальном времени прямо в приложении", color: "earth" },
                  { icon: "FileText", title: "Цифровой договор", desc: "Подпишите договор онлайн — никакой бумажной волокиты", color: "moss" },
                  { icon: "Leaf", title: "Экологично", desc: "Ноль выбросов CO₂ — вклад в чистый воздух города", color: "forest" },
                  { icon: "Shield", title: "Страховка включена", desc: "Каждый велосипед застрахован, вы защищены", color: "earth" },
                  { icon: "Clock", title: "Аренда 24/7", desc: "Бери велосипед в любое время, возвращай когда удобно", color: "moss" },
                ].map((f) => (
                  <div key={f.title} className="nature-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      f.color === "forest" ? "bg-forest-100 text-forest-600" :
                      f.color === "earth" ? "bg-earth-100 text-earth-600" :
                      "bg-moss-100 text-moss-600"
                    }`}>
                      <Icon name={f.icon} size={22} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-forest-800 mb-2">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-20 forest-gradient text-cream text-center">
              <div className="max-w-2xl mx-auto px-6">
                <div className="text-5xl mb-4">🌿</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Готов к поездке?</h2>
                <p className="text-cream/70 text-lg mb-8">Зарегистрируйся за 2 минуты и бери велосипед уже сегодня</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button onClick={() => goto("register")} className="px-8 py-4 bg-cream text-forest-800 rounded-xl font-semibold hover:bg-white transition-colors">
                    Начать сейчас
                  </button>
                  <button onClick={() => goto("catalog")} className="px-8 py-4 border-2 border-cream/40 text-cream rounded-xl font-semibold hover:border-cream/70 transition-colors">
                    Смотреть каталог
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ─── REGISTER ─── */}
        {activeSection === "register" && (
          <div className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <div className="text-5xl mb-3">🌱</div>
                <h1 className="font-display text-4xl font-bold text-forest-800 mb-2">Добро пожаловать</h1>
                <p className="text-muted-foreground">Создайте аккаунт и начните ездить</p>
              </div>
              <div className="nature-card rounded-2xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">Полное имя</label>
                    <input type="text" placeholder="Иван Иванов" className="w-full px-4 py-3 rounded-xl border border-forest-200 bg-cream focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-forest-800" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">Телефон</label>
                    <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-4 py-3 rounded-xl border border-forest-200 bg-cream focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-forest-800" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">Email</label>
                    <input type="email" placeholder="ivan@example.com" className="w-full px-4 py-3 rounded-xl border border-forest-200 bg-cream focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-forest-800" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">Пароль</label>
                    <input type="password" placeholder="Минимум 8 символов" className="w-full px-4 py-3 rounded-xl border border-forest-200 bg-cream focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-forest-800" />
                  </div>
                  <div className="flex items-start gap-3 pt-1">
                    <input type="checkbox" className="mt-1 accent-forest-600 w-4 h-4" />
                    <span className="text-sm text-muted-foreground">
                      Я принимаю{" "}
                      <button className="text-forest-600 underline hover:text-forest-800">условия использования</button>{" "}
                      и{" "}
                      <button className="text-forest-600 underline hover:text-forest-800">политику конфиденциальности</button>
                    </span>
                  </div>
                  <button onClick={() => goto("verify")} className="w-full py-4 rounded-xl forest-gradient text-cream font-semibold text-lg hover:opacity-90 transition-opacity mt-2">
                    Зарегистрироваться
                  </button>
                </div>
                <div className="mt-6 text-center">
                  <span className="text-sm text-muted-foreground">Уже есть аккаунт? </span>
                  <button className="text-sm text-forest-600 font-medium hover:text-forest-800">Войти</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── VERIFY ─── */}
        {activeSection === "verify" && (
          <div className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-lg">
              <div className="text-center mb-8">
                <h1 className="font-display text-4xl font-bold text-forest-800 mb-2">Верификация</h1>
                <p className="text-muted-foreground">Подтвердите личность для безопасной аренды</p>
              </div>

              <div className="flex items-center justify-center gap-2 mb-8">
                {["Лицо", "Паспорт", "Готово"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className={`flex items-center gap-2 ${i <= verifyStep ? "text-forest-700" : "text-muted-foreground"}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                        i < verifyStep ? "bg-forest-600 text-cream" :
                        i === verifyStep ? "bg-forest-200 text-forest-800 border-2 border-forest-600" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {i < verifyStep ? "✓" : i + 1}
                      </div>
                      <span className="text-sm font-medium hidden sm:block">{step}</span>
                    </div>
                    {i < 2 && <div className={`w-12 h-0.5 ${i < verifyStep ? "bg-forest-600" : "bg-muted"} transition-all`} />}
                  </div>
                ))}
              </div>

              <div className="nature-card rounded-2xl p-8 shadow-xl">
                {verifyStep === 0 && (
                  <div className="text-center animate-fade-in">
                    <div className="w-48 h-48 mx-auto rounded-full bg-forest-100 border-4 border-forest-300 border-dashed flex flex-col items-center justify-center mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-forest-500 rounded-full" />
                      </div>
                      <Icon name="ScanFace" size={56} className="text-forest-400 mb-2" />
                      <span className="text-forest-600 text-sm font-medium">Наведите камеру</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-forest-800 mb-2">Сканирование лица</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      Разместите лицо в центре овала. Система автоматически<br/>
                      распознает и подтвердит вашу личность.
                    </p>
                    <button onClick={() => setVerifyStep(1)} className="w-full py-4 rounded-xl forest-gradient text-cream font-semibold hover:opacity-90 transition-opacity">
                      Начать сканирование
                    </button>
                    <div className="flex items-center gap-2 justify-center text-xs text-muted-foreground mt-3">
                      <Icon name="Shield" size={14} />
                      <span>Данные зашифрованы и не хранятся</span>
                    </div>
                  </div>
                )}

                {verifyStep === 1 && (
                  <div className="text-center animate-fade-in">
                    <div className="w-full h-48 rounded-xl bg-forest-100 border-2 border-dashed border-forest-300 flex flex-col items-center justify-center mb-6">
                      <Icon name="CreditCard" size={48} className="text-forest-400 mb-2" />
                      <span className="text-forest-600 text-sm font-medium">Паспорт / ID карта</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-forest-800 mb-2">Сканирование паспорта</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Приложите паспорт к камере. Мы автоматически<br/>
                      считаем ФИО, дату рождения и серию документа.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-forest-50 rounded-xl p-3 text-left">
                        <div className="text-xs text-muted-foreground mb-0.5">ФИО</div>
                        <div className="text-sm font-medium text-forest-800 flex items-center gap-1">
                          <Icon name="Scan" size={12} className="text-forest-500" />
                          Сканирование...
                        </div>
                      </div>
                      <div className="bg-forest-50 rounded-xl p-3 text-left">
                        <div className="text-xs text-muted-foreground mb-0.5">Серия и №</div>
                        <div className="text-sm font-medium text-forest-800 flex items-center gap-1">
                          <Icon name="Scan" size={12} className="text-forest-500" />
                          Сканирование...
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setVerifyStep(2)} className="w-full py-4 rounded-xl forest-gradient text-cream font-semibold hover:opacity-90 transition-opacity">
                      Сканировать документ
                    </button>
                  </div>
                )}

                {verifyStep === 2 && (
                  <div className="text-center animate-scale-in">
                    <div className="w-20 h-20 mx-auto rounded-full bg-forest-600 flex items-center justify-center mb-4">
                      <Icon name="CheckCircle" size={40} className="text-cream" />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-forest-800 mb-2">Верификация пройдена!</h3>
                    <p className="text-muted-foreground mb-4">Ваша личность успешно подтверждена</p>
                    <div className="bg-forest-50 rounded-xl p-4 text-left mb-6 space-y-2">
                      <div className="flex items-center gap-2 text-sm"><Icon name="Check" size={16} className="text-forest-600" /><span className="text-forest-700">Распознавание лица — <strong>пройдено</strong></span></div>
                      <div className="flex items-center gap-2 text-sm"><Icon name="Check" size={16} className="text-forest-600" /><span className="text-forest-700">Паспортные данные — <strong>подтверждены</strong></span></div>
                      <div className="flex items-center gap-2 text-sm"><Icon name="Check" size={16} className="text-forest-600" /><span className="text-forest-700">Уровень доверия — <strong>Высокий</strong></span></div>
                    </div>
                    <button onClick={() => goto("contract")} className="w-full py-4 rounded-xl forest-gradient text-cream font-semibold hover:opacity-90 transition-opacity">
                      Перейти к договору
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ─── CONTRACT ─── */}
        {activeSection === "contract" && (
          <div className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-2xl">
              <div className="text-center mb-8">
                <div className="text-4xl mb-3">📜</div>
                <h1 className="font-display text-4xl font-bold text-forest-800 mb-2">Договор аренды</h1>
                <p className="text-muted-foreground">Ознакомьтесь и подпишите договор онлайн</p>
              </div>
              <div className="nature-card rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-forest-700 text-cream px-8 py-5 flex items-center justify-between">
                  <div>
                    <div className="font-display text-lg font-semibold">Договор № 2025-04-001</div>
                    <div className="text-cream/60 text-sm">от 25 апреля 2025 года</div>
                  </div>
                  <Icon name="FileText" size={28} className="text-moss-300" />
                </div>
                <div className="p-8 max-h-80 overflow-y-auto text-sm text-forest-700 leading-relaxed space-y-4 border-b border-forest-100">
                  {[
                    { title: "1. Предмет договора", text: "ВелоПрокат (далее Арендодатель) предоставляет Арендатору велосипед во временное пользование на условиях, изложенных в настоящем договоре." },
                    { title: "2. Срок аренды и стоимость", text: "Аренда оплачивается почасово согласно тарифам каталога. Минимальный срок аренды — 1 час. Оплата производится до начала поездки." },
                    { title: "3. Обязанности арендатора", text: "Арендатор обязан соблюдать ПДД, использовать велосипед по назначению, вернуть в исправном состоянии. Запрещается передавать велосипед третьим лицам." },
                    { title: "4. Залог и ответственность", text: "При регистрации вносится залог 2 000 ₽, который возвращается при сдаче велосипеда в надлежащем состоянии." },
                    { title: "5. GPS-трекинг", text: "Арендатор соглашается на отслеживание местоположения велосипеда в течение всего срока аренды в целях безопасности." },
                    { title: "6. Экологическая ответственность", text: "Арендатор обязуется бережно относиться к окружающей среде и не оставлять велосипед в неположенных местах." },
                  ].map((item) => (
                    <div key={item.title}>
                      <strong className="font-semibold text-forest-800">{item.title}</strong>
                      <p className="mt-1 text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="p-8">
                  {!contractSigned ? (
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 accent-forest-600 w-4 h-4" />
                        <span className="text-sm text-muted-foreground">Я ознакомился с условиями договора и принимаю их в полном объёме</span>
                      </div>
                      <div className="bg-forest-50 rounded-xl p-4">
                        <div className="text-xs text-muted-foreground mb-2">Подпись</div>
                        <div className="h-16 border-2 border-dashed border-forest-300 rounded-lg flex items-center justify-center text-muted-foreground text-sm">Нарисуйте подпись</div>
                      </div>
                      <button onClick={() => setContractSigned(true)} className="w-full py-4 rounded-xl forest-gradient text-cream font-semibold text-lg hover:opacity-90 transition-opacity">
                        Подписать договор
                      </button>
                    </div>
                  ) : (
                    <div className="text-center animate-scale-in">
                      <div className="w-16 h-16 mx-auto rounded-full bg-forest-600 flex items-center justify-center mb-3">
                        <Icon name="CheckCircle" size={32} className="text-cream" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-forest-800 mb-1">Договор подписан!</h3>
                      <p className="text-muted-foreground text-sm mb-4">Копия отправлена на вашу почту</p>
                      <button onClick={() => goto("catalog")} className="px-8 py-3 rounded-xl forest-gradient text-cream font-semibold hover:opacity-90 transition-opacity">
                        Выбрать велосипед
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── CATALOG ─── */}
        {activeSection === "catalog" && (
          <div className="py-16 max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-forest-800 mb-3">Каталог велосипедов</h1>
              <p className="text-muted-foreground text-lg">Найдите идеальный велосипед для вашей поездки</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {["Все", "Горный", "Городской", "Электрический", "Детский", "Складной", "Шоссейный"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    filterType === type ? "forest-gradient text-cream shadow-md" : "bg-forest-100 text-forest-700 hover:bg-forest-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bikes
                .filter((b) => filterType === "Все" || b.type === filterType)
                .map((bike, i) => (
                  <div key={bike.id} className="nature-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="h-44 bg-gradient-to-br from-forest-100 to-moss-100 flex items-center justify-center relative overflow-hidden">
                      {bike.image ? (
                        <img src={bike.image} alt={bike.name} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{bike.emoji}</span>
                      )}
                      {!bike.available && (
                        <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
                          <span className="bg-foreground/70 text-background px-3 py-1 rounded-full text-sm font-medium">Занят</span>
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full px-2.5 py-1 flex items-center gap-1 text-xs font-medium text-forest-700">
                        ⭐ {bike.rating}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-display text-xl font-semibold text-forest-800">{bike.name}</h3>
                        <span className="text-xs bg-forest-100 text-forest-700 px-2 py-0.5 rounded-full">{bike.type}</span>
                      </div>
                      <div className="text-2xl font-bold text-forest-700 mb-4">
                        {bike.price} ₽<span className="text-sm font-normal text-muted-foreground">/час</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedBike(selectedBike === bike.id ? null : bike.id)}
                          className="flex-1 py-2.5 rounded-xl border border-forest-300 text-forest-700 text-sm font-medium hover:bg-forest-50 transition-colors"
                        >
                          Подробнее
                        </button>
                        <button
                          disabled={!bike.available}
                          onClick={() => goto("contract")}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            bike.available ? "forest-gradient text-cream hover:opacity-90" : "bg-muted text-muted-foreground cursor-not-allowed"
                          }`}
                        >
                          {bike.available ? "Арендовать" : "Недоступен"}
                        </button>
                      </div>
                      {selectedBike === bike.id && (
                        <div className="mt-4 pt-4 border-t border-forest-100 text-sm text-muted-foreground space-y-1 animate-fade-in">
                          <div className="flex items-center gap-2"><Icon name="Shield" size={14} className="text-forest-500" /> Страховка включена</div>
                          <div className="flex items-center gap-2"><Icon name="MapPin" size={14} className="text-forest-500" /> GPS-трекинг активен</div>
                          <div className="flex items-center gap-2"><Icon name="Wrench" size={14} className="text-forest-500" /> Технически исправен</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ─── GPS ─── */}
        {activeSection === "gps" && (
          <div className="py-16 max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-forest-800 mb-3">GPS-трекинг</h1>
              <p className="text-muted-foreground text-lg">Отслеживайте велосипед в реальном времени</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="nature-card rounded-2xl overflow-hidden shadow-lg">
                  <div className="bg-forest-700 text-cream px-5 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-moss-300 animate-pulse-soft" />
                      <span className="text-sm font-medium">Прямая трансляция</span>
                    </div>
                    <span className="text-cream/60 text-xs">Обновлено 2 сек назад</span>
                  </div>
                  <div className="relative h-96 bg-gradient-to-br from-forest-100 via-moss-100 to-earth-100 overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={`${i * 10}%`} x2="100%" y2={`${i * 10}%`} stroke="#2d6333" strokeWidth="0.5" />
                      ))}
                      {Array.from({ length: 12 }).map((_, i) => (
                        <line key={`v${i}`} x1={`${i * 8.33}%`} y1="0" x2={`${i * 8.33}%`} y2="100%" stroke="#2d6333" strokeWidth="0.5" />
                      ))}
                    </svg>
                    <svg className="absolute inset-0 w-full h-full">
                      <path d="M 0 200 Q 150 180 300 200 Q 450 220 600 200" stroke="#d4b690" strokeWidth="6" fill="none" strokeLinecap="round" />
                      <path d="M 200 0 Q 220 150 200 300 Q 180 380 200 500" stroke="#d4b690" strokeWidth="6" fill="none" strokeLinecap="round" />
                      <path d="M 100 100 Q 200 90 300 110 Q 400 130 500 100" stroke="#c3dbc4" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="8 4" />
                    </svg>
                    <div className="absolute" style={{ left: "42%", top: "48%" }}>
                      <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-forest-500/20 animate-pulse-soft" />
                        <div className="w-10 h-10 rounded-full bg-forest-600 border-4 border-white shadow-lg flex items-center justify-center text-white">🚲</div>
                      </div>
                    </div>
                    {[
                      { x: "20%", y: "30%", label: "Парк Горького" },
                      { x: "70%", y: "60%", label: "Станция А" },
                      { x: "60%", y: "20%", label: "Пункт Б" },
                    ].map((p) => (
                      <div key={p.label} className="absolute flex items-center gap-1" style={{ left: p.x, top: p.y }}>
                        <div className="w-3 h-3 rounded-full bg-earth-500 border-2 border-white shadow" />
                        <span className="text-xs font-medium text-forest-800 bg-white/70 px-1.5 rounded whitespace-nowrap">{p.label}</span>
                      </div>
                    ))}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-sm font-bold text-forest-800 shadow">N↑</div>
                  </div>
                  <div className="px-5 py-3 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-1"><Icon name="MapPin" size={14} className="text-forest-500" /> Садовое кольцо, 42</span>
                      <span className="flex items-center gap-1"><Icon name="Navigation" size={14} className="text-moss-500" /> 18 км/ч</span>
                    </div>
                    <button className="text-forest-600 text-sm font-medium hover:underline">Открыть в картах</button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="nature-card rounded-2xl p-5 shadow-md">
                  <h3 className="font-display text-lg font-semibold text-forest-800 mb-4">Статус поездки</h3>
                  <div className="space-y-3">
                    {[
                      { icon: "Bike", label: "Велосипед", value: "Горный Explorer" },
                      { icon: "Clock", label: "Время в пути", value: "1ч 23 мин" },
                      { icon: "Route", label: "Пройдено", value: "12.4 км" },
                      { icon: "Battery", label: "Заряд GPS", value: "87%" },
                      { icon: "Zap", label: "Скорость", value: "18 км/ч" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Icon name={s.icon} size={15} className="text-forest-500" />
                          {s.label}
                        </div>
                        <span className="text-sm font-semibold text-forest-800">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="nature-card rounded-2xl p-5 shadow-md">
                  <h3 className="font-display text-lg font-semibold text-forest-800 mb-3">История маршрута</h3>
                  <div className="space-y-2">
                    {[
                      { time: "09:00", place: "Парк Горького", type: "start" },
                      { time: "09:45", place: "Садовое кольцо", type: "mid" },
                      { time: "10:15", place: "Патриаршие пруды", type: "mid" },
                      { time: "—", place: "Пункт назначения", type: "end" },
                    ].map((h, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${h.type === "start" ? "bg-forest-500" : h.type === "end" ? "bg-earth-400" : "bg-moss-400"}`} />
                        <span className="text-muted-foreground w-12">{h.time}</span>
                        <span className="text-forest-700">{h.place}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 font-medium text-sm hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
                  <Icon name="AlertTriangle" size={16} />
                  Сообщить о проблеме
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── CABINET ─── */}
        {activeSection === "cabinet" && (
          <div className="py-16 max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-20 h-20 rounded-full forest-gradient flex items-center justify-center text-3xl shadow-lg">👤</div>
              <div>
                <h1 className="font-display text-3xl font-bold text-forest-800">Иван Иванов</h1>
                <p className="text-muted-foreground">Участник с апреля 2025 · Рейтинг 4.9 ⭐</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-forest-500" />
                  <span className="text-xs text-forest-600 font-medium">Верифицирован</span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: "Route", label: "Поездок", value: "23", color: "forest" },
                { icon: "MapPin", label: "Километров", value: "187", color: "moss" },
                { icon: "Leaf", label: "CO₂ сохранено", value: "14 кг", color: "earth" },
              ].map((s) => (
                <div key={s.label} className="nature-card rounded-2xl p-5 text-center shadow-md">
                  <Icon name={s.icon} size={24} className={`mx-auto mb-2 ${s.color === "forest" ? "text-forest-500" : s.color === "moss" ? "text-moss-500" : "text-earth-500"}`} />
                  <div className="font-display text-3xl font-bold text-forest-800">{s.value}</div>
                  <div className="text-muted-foreground text-sm">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="nature-card rounded-2xl p-6 shadow-md">
                <h3 className="font-display text-xl font-semibold text-forest-800 mb-4">Личные данные</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Email", value: "ivan@example.com" },
                    { label: "Телефон", value: "+7 (999) 123-45-67" },
                    { label: "Документ", value: "Паспорт подтверждён ✓" },
                    { label: "Баланс", value: "1 500 ₽" },
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between items-center py-2 border-b border-forest-100 last:border-0">
                      <span className="text-muted-foreground">{d.label}</span>
                      <span className="font-medium text-forest-800">{d.value}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full py-2.5 rounded-xl border border-forest-300 text-forest-700 text-sm font-medium hover:bg-forest-50 transition-colors">Редактировать</button>
              </div>
              <div className="nature-card rounded-2xl p-6 shadow-md">
                <h3 className="font-display text-xl font-semibold text-forest-800 mb-4">Последние поездки</h3>
                <div className="space-y-3">
                  {[
                    { date: "24 апр", bike: "Горный Explorer", km: "8.2 км", price: "700 ₽" },
                    { date: "22 апр", bike: "Городской Breeze", km: "5.1 км", price: "400 ₽" },
                    { date: "20 апр", bike: "Электро EcoRide", km: "12.7 км", price: "1 500 ₽" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-forest-100 last:border-0">
                      <div className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center text-sm">🚲</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-forest-800 truncate">{r.bike}</div>
                        <div className="text-xs text-muted-foreground">{r.date} · {r.km}</div>
                      </div>
                      <span className="text-sm font-semibold text-forest-700 flex-shrink-0">{r.price}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-forest-600 text-sm font-medium hover:underline">Вся история →</button>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-3">
              {[
                { icon: "CreditCard", label: "Пополнить баланс", action: () => {} },
                { icon: "FileText", label: "Мои договоры", action: () => goto("contract") },
                { icon: "Settings", label: "Настройки", action: () => {} },
              ].map((btn) => (
                <button key={btn.label} onClick={btn.action} className="nature-card rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-all text-left">
                  <Icon name={btn.icon} size={20} className="text-forest-600" />
                  <span className="text-sm font-medium text-forest-800">{btn.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ─── SUPPORT ─── */}
        {activeSection === "support" && (
          <div className="py-16 max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="text-5xl mb-3">🌳</div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-forest-800 mb-3">Служба поддержки</h1>
              <p className="text-muted-foreground text-lg">Мы здесь, чтобы помочь вам в любое время</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                { icon: "Phone", title: "Телефон", info: "+7 (800) 123-45-67", sub: "Бесплатно, 24/7", color: "forest" },
                { icon: "MessageCircle", title: "Чат", info: "Онлайн сейчас", sub: "Ответим за 2 минуты", color: "moss" },
                { icon: "Mail", title: "Email", info: "help@velopro.ru", sub: "Ответ за 4 часа", color: "earth" },
              ].map((c) => (
                <div key={c.title} className="nature-card rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 ${c.color === "forest" ? "bg-forest-100 text-forest-600" : c.color === "moss" ? "bg-moss-100 text-moss-600" : "bg-earth-100 text-earth-600"}`}>
                    <Icon name={c.icon} size={26} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-forest-800 mb-1">{c.title}</h3>
                  <p className="text-forest-700 font-medium">{c.info}</p>
                  <p className="text-muted-foreground text-sm">{c.sub}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="nature-card rounded-2xl p-7 shadow-md">
                <h3 className="font-display text-2xl font-semibold text-forest-800 mb-5">Написать нам</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">Тема обращения</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-forest-200 bg-cream focus:outline-none focus:ring-2 focus:ring-forest-500 text-forest-700">
                      <option>Выберите тему...</option>
                      <option>Проблема с велосипедом</option>
                      <option>Вопрос по оплате</option>
                      <option>Верификация документов</option>
                      <option>GPS-трекинг</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">Описание</label>
                    <textarea rows={4} placeholder="Опишите вашу ситуацию..." className="w-full px-4 py-3 rounded-xl border border-forest-200 bg-cream focus:outline-none focus:ring-2 focus:ring-forest-500 resize-none text-forest-700" />
                  </div>
                  <button className="w-full py-3.5 rounded-xl forest-gradient text-cream font-semibold hover:opacity-90 transition-opacity">Отправить обращение</button>
                </div>
              </div>
              <div className="nature-card rounded-2xl p-7 shadow-md">
                <h3 className="font-display text-2xl font-semibold text-forest-800 mb-5">Частые вопросы</h3>
                <div className="space-y-4">
                  {[
                    { q: "Как взять велосипед в аренду?", a: "Зарегистрируйтесь, пройдите верификацию, выберите велосипед в каталоге и подпишите договор онлайн." },
                    { q: "Что делать при поломке?", a: "Позвоните на горячую линию 8-800-123-45-67 или нажмите «Сообщить о проблеме» в разделе GPS-трекинг." },
                    { q: "Как работает GPS?", a: "Каждый велосипед оснащён трекером. Вы видите положение в реальном времени в разделе GPS." },
                    { q: "Как вернуть залог?", a: "Залог возвращается автоматически на карту в течение 3 рабочих дней после возврата велосипеда." },
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-forest-100 last:border-0 pb-3 last:pb-0">
                      <div className="text-sm font-semibold text-forest-800 mb-1">{faq.q}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-forest-900 text-cream/70 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-moss-400 flex items-center justify-center text-sm">🌿</div>
                <span className="font-display text-lg text-cream font-semibold">ВелоПрокат</span>
              </div>
              <p className="text-sm leading-relaxed">Экологичная аренда велосипедов с умной верификацией и GPS-трекингом</p>
            </div>
            {[
              { title: "Сервис", links: ["Каталог", "GPS-трекинг", "Тарифы", "Страховка"] },
              { title: "Компания", links: ["О нас", "Блог", "Партнёрство", "Вакансии"] },
              { title: "Поддержка", links: ["Центр помощи", "Контакты", "Договоры", "Условия"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-cream font-semibold text-sm mb-3">{col.title}</h4>
                <ul className="space-y-1.5">
                  {col.links.map((l) => (
                    <li key={l}><button className="text-sm hover:text-cream transition-colors">{l}</button></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="leaf-divider mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <span>© 2025 ВелоПрокат. Все права защищены.</span>
            <span className="flex items-center gap-1">
              <Icon name="Leaf" size={12} className="text-moss-400" />
              Сделано с заботой о природе
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}