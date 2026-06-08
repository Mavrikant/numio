# Calculator Inventory

Total: **112 calculators** across 5 categories.
Sourced from competitor analysis (calculator.net, omnicalculator.com, calculatorsoup.com, hesapkurdu.com, hesaplama.net) and AdSense CPM research (finance: $20-40 CPC; health: $15-35 CPC; engineering: $10-20 CPC; math/conversion: $1-5 CPC).

## Priority Tiers

- **P0 (must-have)**: First 30 to ship — highest CPM × search volume
- **P1 (should-have)**: Next 50 — strong demand or strong CPM
- **P2 (nice-to-have)**: Last 32 — long-tail SEO authority

P0 count: 30 | P1 count: 50 | P2 count: 32 | Total: 112

---

## Categories

### Health (`health/`)

| Priority | Slug | Title (EN) | Title (TR) | Brief | Inputs | Outputs | Notes |
|---|---|---|---|---|---|---|---|
| P0 | bmi | Body Mass Index | Vücut Kitle İndeksi | Calculate BMI from weight and height | weight, height, unit (metric/imperial) | bmi score, category (underweight/normal/overweight/obese), healthy weight range | Most searched health calculator globally; use WHO classification |
| P0 | bmr | Basal Metabolic Rate | Bazal Metabolizma Hızı | Estimate calories burned at complete rest per day | weight, height, age, gender, formula choice | bmr (kcal/day) | Offer Mifflin-St Jeor (default) AND Harris-Benedict; label clearly |
| P0 | calorie | Daily Calorie Needs | Günlük Kalori İhtiyacı | Calculate total daily energy expenditure with activity level | weight, height, age, gender, activity level, goal | tdee (kcal), calorie target for goal (deficit/surplus) | Uses TDEE = BMR × activity factor; separate from BMR |
| P0 | ideal-weight | Ideal Body Weight | İdeal Kilo | Estimate ideal weight range using multiple formulas | height, gender, frame size | ideal weight (Devine, Robinson, Miller, Hamwi formulas) | Show all 4 formulas side by side; note they are estimates |
| P0 | body-fat | Body Fat Percentage | Vücut Yağ Oranı | Estimate body fat % using US Navy tape method | gender, height, waist, neck, (hip for women) | body fat %, fat mass, lean mass, category | U.S. Navy method; simpler than DEXA; very popular search |
| P0 | pregnancy | Pregnancy Due Date | Hamilelik Doğum Tarihi | Calculate estimated due date from last menstrual period | last period date, cycle length | estimated due date, current week, trimester | Naegele's rule; also accept conception date as input |
| P0 | ovulation | Ovulation Calculator | Yumurtlama Hesaplama | Predict fertile window based on cycle data | last period date, average cycle length | ovulation date, fertile window (6 days), next period date | High CPM from fertility/OB advertisers |
| P1 | blood-pressure | Blood Pressure Categories | Tansiyon Değerlendirme | Interpret a blood pressure reading using AHA guidelines | systolic, diastolic | category (normal/elevated/hypertension stage 1-2/crisis), recommendation | Based on 2017 AHA/ACC guidelines; not a diagnostic tool disclaimer |
| P1 | heart-rate | Target Heart Rate | Hedef Kalp Atış Hızı | Calculate target heart rate zones for exercise | age, resting heart rate | max heart rate, target zones (50-85%), Karvonen HR zones | Use both 220-age and Karvonen formulas |
| P1 | tdee | TDEE Calculator | Günlük Kalori Harcaması | Calculate total daily energy expenditure across 5 activity levels | weight, height, age, gender, activity multiplier | tdee, macros for goal | Separate from calorie calc; more detailed activity breakdown |
| P1 | period | Period Tracker / Cycle | Adet Dönemi Hesaplama | Predict next period dates and cycle patterns | last period date, cycle length, period duration | next 3 period dates, fertile window, ovulation estimate | High traffic from young women; pair with ovulation calc |
| P1 | water-intake | Daily Water Intake | Günlük Su İhtiyacı | Recommend daily water intake based on weight and activity | weight, activity level, climate | liters/day, glasses/day | Simple but high search volume; use 35ml/kg base formula |
| P1 | macros | Macro Calculator | Makro Besin Hesaplama | Calculate daily protein, carbs, fat targets for fitness goals | weight, height, age, gender, goal, activity, diet style | protein (g), carbs (g), fat (g), calorie target | Uses TDEE then applies macro ratios by goal |
| P1 | sleep | Sleep Cycle Calculator | Uyku Döngüsü Hesaplama | Find optimal wake-up or bedtime based on 90-min sleep cycles | bedtime or desired wake time, age | recommended wake times (6 cycles, 5 cycles, 4 cycles) | Uses 90-min REM cycle; 14-min sleep onset factor |
| P1 | bac | Blood Alcohol Content | Kan Alkol Seviyesi | Estimate BAC based on drinks consumed and time | gender, weight, drinks consumed, drink type, hours elapsed | estimated BAC, hours until sober, legal limit comparison | Widmark formula; always include disclaimer — estimate only |
| P1 | calorie-deficit | Calorie Deficit | Kalori Açığı | Calculate deficit needed to lose a target amount of weight | current weight, target weight, timeframe, activity | daily calorie target, weekly deficit, projected loss date | Caps deficit at 1000 kcal/day max for safety warning |
| P1 | conception | Conception Date | Gebelik Başlangıç Tarihi | Estimate conception date from due date or last period | due date OR last period date | estimated conception date range | Reverse pregnancy calc — common search after pregnancy confirmed |
| P1 | lean-body-mass | Lean Body Mass | Yağsız Vücut Kütlesi | Calculate lean body mass from weight and body fat % | weight, body fat %, unit | lean mass (kg/lbs), fat mass | Boer formula for default; used in dosing and fitness contexts |
| P2 | waist-hip-ratio | Waist to Hip Ratio | Bel-Kalça Oranı | Assess cardiovascular risk using waist-to-hip measurements | waist circumference, hip circumference, gender | ratio, risk category (WHO classification) | WHR > 0.90 (men) / 0.85 (women) = substantially increased risk |
| P2 | bmi-kids | BMI for Children | Çocuklarda VKİ | Calculate BMI percentile for children using CDC growth charts | age, gender, weight, height | bmi, percentile, category | Use CDC 2000 growth charts; different thresholds than adult BMI |
| P2 | pregnancy-weight | Pregnancy Weight Gain | Gebelikte Kilo Alımı | Recommend healthy weight gain during pregnancy by trimester | pre-pregnancy weight, height, current week | recommended total gain range, trimester gain targets | IOM 2009 guidelines; varies by pre-pregnancy BMI |
| P2 | vo2max | VO2 Max Estimator | Maksimum Oksijen Kapasitesi | Estimate aerobic fitness (VO2 max) from a simple step test or pace | test type (step test / 1.5 mile run), result, age, gender | estimated VO2 max (ml/kg/min), fitness category | Cooper or YMCA step test formulas |
| P2 | cholesterol | Cholesterol Ratio | Kolesterol Oranı | Evaluate cardiovascular risk from cholesterol values | total cholesterol, HDL, LDL, triglycerides | cholesterol ratio, LDL/HDL ratio, risk category | Based on AHA and Framingham risk thresholds |
| P2 | gfr | GFR / Kidney Function | Böbrek Fonksiyon Hesabı | Estimate glomerular filtration rate for kidney health | age, gender, race, creatinine | eGFR (ml/min/1.73m²), CKD stage | CKD-EPI 2021 equation (race-free); note: not clinical diagnosis |
| P2 | calories-burned | Calories Burned | Yakılan Kalori | Estimate calories burned for common exercises | activity type, duration, weight | calories burned (kcal) | MET values from Compendium of Physical Activities |

**Health subtotal: 25**

---

### Finance (`finance/`)

| Priority | Slug | Title (EN) | Title (TR) | Brief | Inputs | Outputs | Notes |
|---|---|---|---|---|---|---|---|
| P0 | mortgage | Mortgage Calculator | Konut Kredisi Hesaplama | Calculate monthly mortgage payment with taxes and insurance | loan amount, interest rate, term, down payment, property tax, insurance | monthly payment (P+I), total payment, total interest, amortization table | Highest CPM finance calculator; use standard annuity formula |
| P0 | loan-amortization | Loan Amortization | Kredi Amortisman Tablosu | Generate full amortization schedule for any loan | principal, annual rate, term (months), start date | monthly payment, full schedule (month, payment, principal, interest, balance) | Core shared helper: `amortization.ts`; reused by mortgage, auto, student |
| P0 | compound-interest | Compound Interest | Bileşik Faiz Hesaplama | Calculate investment growth with compound interest | principal, annual rate, compound frequency, years, monthly contribution | future value, total interest, year-by-year breakdown | Offer daily/monthly/quarterly/annually compounding options |
| P0 | auto-loan | Auto Loan | Taşıt Kredisi Hesaplama | Calculate monthly car loan payment and total cost | vehicle price, down payment, trade-in value, interest rate, term | monthly payment, total cost, total interest | Shared `amortization.ts`; popular search especially around new model season |
| P0 | retirement | Retirement Savings | Emeklilik Birikimi | Project retirement savings and determine if on track | current age, retirement age, current savings, monthly contribution, expected return | projected balance at retirement, monthly income from savings, shortfall/surplus | Uses FV formula; pair with compound interest helper |
| P0 | savings-goal | Savings Goal | Birikim Hedefi | Calculate monthly savings needed to reach a financial goal | target amount, current savings, timeframe, annual return | required monthly contribution, projected growth chart | Core use-case for young savers; pair with compound helper |
| P0 | income-tax | Income Tax Estimator | Gelir Vergisi Hesaplama | Estimate income tax for Turkish and US systems | country (TR/US), gross income, filing status, deductions | estimated tax, effective rate, after-tax income | TR: use progressive brackets from latest GVK; US: federal only |
| P0 | credit-card-payoff | Credit Card Payoff | Kredi Kartı Borç Ödeme | Calculate time and interest to pay off credit card debt | balance, APR, minimum payment OR fixed payment | months to payoff, total interest, total paid, savings vs. minimum | High CPM — credit advertisers; debt avalanche tip |
| P0 | investment-return | Investment Return | Yatırım Getirisi | Calculate return on an investment over time | initial investment, final value OR annual return %, years | ROI %, annualized return (CAGR), total gain | Show both simple ROI and CAGR; clear formulas |
| P0 | salary | Salary / Hourly Converter | Maaş - Saatlik Ücret | Convert salary to hourly, daily, weekly, monthly equivalents | salary amount, frequency, hours/week, weeks/year | hourly, daily, weekly, monthly, annual equivalents | Very high search volume; include overtime multiplier option |
| P1 | student-loan | Student Loan | Öğrenci Kredisi | Calculate student loan monthly payment and repayment timeline | loan balance, interest rate, repayment term, repayment plan | monthly payment, total interest, payoff date, amortization | Shared `amortization.ts`; include income-driven repayment note |
| P1 | cd-yield | Certificate of Deposit | Vadeli Mevduat Getirisi | Calculate earnings on a certificate of deposit (CD/TL mevduat) | deposit amount, APY/interest rate, term (months), compounding | interest earned, total value at maturity | Shared `compound.ts`; include Turkish mevduat context |
| P1 | refinance | Refinance Break-Even | Yeniden Finansman Analizi | Determine if refinancing a loan saves money | current rate, new rate, remaining balance, closing costs | monthly savings, break-even months, lifetime savings | Shared `amortization.ts`; critical for homeowners when rates drop |
| P1 | budget | Budget Planner | Bütçe Planlayıcı | Build a monthly budget using the 50/30/20 rule | monthly income, expense categories | needs/wants/savings totals, budget surplus or deficit, 50/30/20 allocation | Interactive — user adds expense rows; exports summary |
| P1 | net-worth | Net Worth | Net Servet Hesaplama | Calculate personal net worth from assets and liabilities | asset list (home, savings, investments, car), liability list (loans, credit cards) | total assets, total liabilities, net worth | Simple but widely searched — good SEO entry point |
| P1 | roi | Return on Investment | Yatırım Getiri Oranı | Calculate ROI percentage for any investment or project | cost of investment, gain from investment | ROI %, net profit, annualized ROI if period given | Keep general — applies to stocks, business, real estate |
| P1 | inflation | Inflation Calculator | Enflasyon Hesaplama | Calculate purchasing power change due to inflation over time | initial amount, start year, end year, country | adjusted value, cumulative inflation %, year-by-year chart | Use TUIK CPI data for TR; US CPI-U for US; note dual-country |
| P1 | tip | Tip Calculator | Bahşiş Hesaplama | Split a restaurant bill and calculate tip amounts | bill total, tip %, number of people | tip amount, total per person, total amount | Evergreen; high mobile traffic |
| P1 | discount | Discount / Percent Off | İndirim Hesaplama | Calculate sale price and savings for a given discount percentage | original price, discount % | sale price, savings amount | Include reverse: find discount % from original+sale price |
| P1 | vat | VAT Calculator | KDV Hesaplama | Add or remove VAT/sales tax from a price | price, VAT rate (%) | price with VAT, price without VAT, VAT amount | Include Turkish standard rates (20%, 10%, 1%) as presets |
| P1 | home-affordability | Home Affordability | Ev Alabilirlik Hesaplama | Estimate maximum home price based on income and debts | annual income, monthly debts, down payment, rate, term | max home price, max loan, monthly payment, DTI | Use 28/36 rule; pair with mortgage calc |
| P1 | debt-payoff | Debt Payoff | Borç Ödeme Planı | Compare debt avalanche vs. snowball payoff strategies | list of debts (balance, rate, min payment), extra monthly payment | payoff order, total interest by method, time to debt-free | Two methods side by side; high CPM from credit advertisers |
| P1 | paycheck | Take-Home Pay | Net Maaş Hesaplama | Calculate take-home pay after Turkish SGK and income tax | gross salary, employment type, number of dependents | sgk deductions, income tax, net salary, employer cost | TR-specific: SGK prim, gelir vergisi, damga vergisi formulas |
| P1 | down-payment | Down Payment Savings | Peşinat Birikim Süresi | Calculate time to save a down payment for a home | target home price, down payment %, current savings, monthly savings | months to goal, total needed, projected date | Companion to home-affordability; shared `compound.ts` |
| P2 | pension | Pension / BES Planner | BES Emeklilik Hesaplama | Project BES (Turkish pension system) savings at retirement | monthly contribution, age, retirement age, fund return | projected total, state match (25%), monthly income at retirement | TR-specific: include devlet katkısı 25% rule |
| P2 | bond | Bond Yield | Tahvil Getiri Hesaplama | Calculate current yield and YTM for a bond | face value, coupon rate, current price, years to maturity | current yield, YTM, price-yield relationship | Explain difference between coupon rate and YTM |
| P2 | depreciation | Asset Depreciation | Varlık Amortismanı | Calculate annual depreciation using multiple methods | asset cost, salvage value, useful life | straight-line, declining balance, and sum-of-years-digits depreciation schedules | Three methods side by side |
| P2 | break-even | Break-Even Point | Başabaş Noktası | Calculate units or revenue needed to cover costs | fixed costs, variable cost per unit, price per unit | break-even units, break-even revenue, profit/loss at different volumes | Useful for small business owners — high engagement |
| P2 | margin | Profit Margin | Kar Marjı Hesaplama | Calculate gross margin, markup, and selling price | cost, revenue OR markup %; reverse calc available | gross margin %, markup %, selling price | Distinguish margin vs. markup clearly in UI |
| P2 | currency | Currency Converter | Döviz Çevirici | Convert between major currencies with live rates | amount, from currency, to currency | converted amount, exchange rate | Use open exchange rate API (e.g., exchangerate-api.com free tier); note rate is indicative |

**Finance subtotal: 30**

---

### Engineering (`engineering/`)

| Priority | Slug | Title (EN) | Title (TR) | Brief | Inputs | Outputs | Notes |
|---|---|---|---|---|---|---|---|
| P0 | ohms-law | Ohm's Law | Ohm Yasası | Solve for voltage, current, resistance, or power in a circuit | any 2 of: voltage (V), current (A), resistance (Ω), power (W) | remaining 2 values | Foundational EE calc; solve all 4 from any 2 inputs using V=IR and P=VI |
| P0 | concrete | Concrete Volume | Beton Hacmi Hesaplama | Calculate concrete needed for slabs, columns, and footings | shape (slab/column/footing), dimensions | volume (m³ / yd³), bags of cement needed | High search from DIY/construction; include bag count at standard mix |
| P0 | voltage-drop | Voltage Drop | Gerilim Düşümü | Calculate voltage drop in electrical cables | conductor material, wire gauge (AWG/mm²), length, current | voltage drop (V), percentage, recommend gauge if > 3% | Shared `units.ts` for wire gauge; NEC 3% rule reference |
| P1 | resistor-color | Resistor Color Code | Direnç Renk Kodu | Decode or encode resistor color bands to resistance value | 4 or 5 color band selection | resistance (Ω), tolerance | Interactive color picker UI; supports 4-band and 5-band |
| P1 | beam-deflection | Beam Deflection | Kiriş Sehimi | Calculate max deflection and stress for a loaded beam | beam type (simply supported/cantilever), span, load, material, section | max deflection (mm), bending moment, section modulus required | Standard Euler-Bernoulli beam; most common structural calc |
| P1 | led-resistor | LED Resistor | LED Direnç | Calculate the correct resistor for an LED circuit | supply voltage, LED forward voltage, LED current (mA) | resistor value (Ω), nearest standard resistor, power dissipation | For electronics hobbyists; share `units.ts` |
| P1 | wire-gauge | Wire Gauge / Cable Size | Kablo Kesiti | Find correct wire gauge for a given current and circuit length | current (A), circuit length, voltage, material, circuit type | recommended AWG and mm² size, voltage drop | Shared `units.ts`; reference IEC 60364 / NEC ampacity tables |
| P1 | power-factor | Power Factor Correction | Güç Faktörü Düzeltme | Calculate required capacitor size to improve power factor | apparent power (kVA), current power factor, target power factor | required capacitor size (kVAR), new apparent power | Industrial EE; useful for facility engineers |
| P1 | concrete-mix | Concrete Mix Design | Beton Karışım Oranları | Calculate material quantities for a concrete mix by grade | concrete grade (C20/C25/C30), volume needed | cement (kg), sand (kg), aggregate (kg), water (L) | Include standard TR mix ratios per TS EN 206 |
| P1 | square-footage | Area / Square Footage | Alan Hesaplama | Calculate area of rectangles, circles, triangles | shape, dimensions, unit | area (m², ft², etc.), perimeter | General-purpose; high search from real estate and construction |
| P1 | flow-rate | Pipe Flow Rate | Boru Akış Debisi | Calculate flow rate or velocity in a pipe | pipe diameter, fluid velocity OR flow rate, fluid type | flow rate (L/s, m³/h), velocity, Reynolds number | Darcy-Weisbach; useful for plumbing and HVAC engineers |
| P1 | torque | Torque Calculator | Tork Hesaplama | Calculate torque, force, or lever arm length | any 2 of: torque (Nm), force (N), distance (m) | missing value | Fundamental mechanical engineering; include unit conversions |
| P1 | heat-transfer | Heat Transfer | Isı Transferi | Calculate heat flow through a wall or material | material, thickness, area, temperature difference | heat flux (W/m²), total heat loss/gain (W), R-value | HVAC and building energy — medium niche CPM |
| P2 | capacitor | Capacitor Charge | Kondansatör Şarjı | Calculate charge, energy, and time constant for capacitors | capacitance, voltage, resistance | charge (C), energy (J), RC time constant (τ) | Electronics hobbyists; educational |
| P2 | transformer | Transformer Ratio | Trafo Dönüşüm Oranı | Calculate transformer turns ratio, secondary voltage/current | primary voltage, secondary voltage OR turns ratio | turns ratio, secondary current, efficiency if losses given | EE students and technicians |
| P2 | signal-frequency | Frequency / Wavelength | Frekans-Dalga Boyu | Convert between frequency, wavelength, and period | any 1 of: frequency (Hz), wavelength (m), period (s), speed (m/s) | remaining 3 values | Physics / RF engineering; c = fλ |
| P2 | pump-power | Pump Power | Pompa Gücü | Calculate hydraulic and shaft power for a pump | flow rate, head, fluid density, pump efficiency | hydraulic power (kW), shaft power (kW), motor size recommendation | Mechanical/chemical engineers; use `units.ts` |
| P2 | steel-weight | Steel / Metal Weight | Çelik Ağırlığı | Calculate weight of steel bars, pipes, plates | material, shape (bar/pipe/plate), dimensions, quantity | weight per unit (kg/m), total weight (kg/ton) | Construction and fabrication; popular in TR |
| P2 | bending-stress | Bending Stress | Eğilme Gerilmesi | Calculate bending stress in a beam cross-section | moment (Nm), section modulus or dimensions | max bending stress (MPa), safety factor | Structural engineering; companion to beam-deflection |
| P2 | electrical-power | Electrical Power | Elektrik Gücü | Calculate electrical power, current, or voltage | any 2 of: power (W), voltage (V), current (A), resistance (Ω) | remaining values, kWh cost estimate | Companion to ohms-law; add energy cost input |

**Engineering subtotal: 20**

---

### Math (`math/`)

| Priority | Slug | Title (EN) | Title (TR) | Brief | Inputs | Outputs | Notes |
|---|---|---|---|---|---|---|---|
| P0 | percentage | Percentage Calculator | Yüzde Hesaplama | Solve all common percentage problems in one tool | problem type (what is X% of Y / X is what % of Y / percentage change) | result, formula shown | 3-in-1 calculator; extremely high search volume; SEO anchor |
| P0 | fraction | Fraction Calculator | Kesir Hesaplama | Add, subtract, multiply, and divide fractions | two fractions, operation | simplified result, decimal equivalent, step-by-step solution | Show steps; high educational traffic |
| P0 | average | Average (Mean) | Ortalama Hesaplama | Calculate arithmetic mean, median, and mode | list of numbers | mean, median, mode, count, sum | Add range and standard deviation output |
| P0 | square-root | Square Root | Karekök Hesaplama | Calculate square root and nth root of any number | number, root (default 2) | result, decimal, nearby perfect square | Very high search — student and general traffic |
| P0 | scientific-notation | Scientific Notation | Bilimsel Gösterim | Convert between standard and scientific notation | number OR scientific notation string | scientific notation, standard form, engineering notation | Common student need; SEO value |
| P1 | standard-deviation | Standard Deviation | Standart Sapma | Calculate standard deviation and variance for a dataset | list of numbers, population or sample | mean, std deviation, variance, data summary | Include both population and sample formulas |
| P1 | percentage-change | Percentage Change | Yüzde Değişim | Calculate percentage increase or decrease between two values | original value, new value | percentage change, absolute change, direction | Separate from the 3-in-1 percentage calc for better SEO |
| P1 | ratio | Ratio Simplifier | Oran Sadeleştirme | Simplify a ratio to its lowest terms and find equivalent ratios | two or three numbers | simplified ratio, decimal form, equivalent ratios at different scales | Use GCD algorithm |
| P1 | prime-factorization | Prime Factorization | Asal Çarpanlar | Decompose a number into its prime factors | integer | prime factors, factor tree visualization, exponent notation | Educational; high student traffic |
| P1 | lcm-gcd | LCM and GCD | OBEB ve OKEK | Find least common multiple and greatest common divisor | two or more integers | LCM, GCD, step-by-step using Euclidean algorithm | Combined calc — covers both related searches |
| P1 | triangle | Triangle Calculator | Üçgen Hesaplama | Solve any triangle given sides and/or angles | any 3 of: 3 sides (SSS/SAS/ASA/AAS/SSA) | all sides, all angles, area, perimeter, triangle type | Law of cosines + law of sines; classify scalene/isoceles/equilateral |
| P1 | quadratic | Quadratic Equation | İkinci Dereceden Denklem | Solve quadratic equations ax²+bx+c=0 | coefficients a, b, c | roots (real or complex), discriminant, vertex, factored form | Show discriminant analysis and complex roots when Δ < 0 |
| P1 | pythagorean | Pythagorean Theorem | Pisagor Teoremi | Find the missing side of a right triangle | any 2 of: a, b (legs), c (hypotenuse) | missing side, perimeter, area | Extremely high student search; include visual |
| P1 | logarithm | Logarithm Calculator | Logaritma Hesaplama | Compute logarithms with any base | number, base (default 10; also e, 2) | log value, natural log (ln), log base 2 | Include change of base formula |
| P1 | exponent | Exponent / Power | Üs Hesaplama | Calculate any number raised to a power | base, exponent | result, expanded notation, scientific form if large | Include negative and fractional exponents |
| P2 | combinations | Combinations & Permutations | Kombinasyon ve Permütasyon | Calculate nCr and nPr for combinatorics problems | n, r, type (combination/permutation/both) | C(n,r), P(n,r), step-by-step factorial expansion | Common student exam need; include formulas |
| P2 | matrix | Matrix Calculator | Matris Hesaplama | Perform addition, subtraction, multiplication on 2x2 and 3x3 matrices | two matrices, operation | result matrix, determinant if square | Keep scope to 2x2 and 3x3; note inverse calc optional |
| P2 | factorial | Factorial | Faktöriyel | Calculate factorial of n (n!) | integer n (0–170) | n!, scientific notation for large n | Note n! > 170 overflows double; cap with explanation |
| P2 | statistics-basic | Descriptive Statistics | Betimsel İstatistik | Full descriptive stats summary for a dataset | list of numbers | min, max, mean, median, mode, range, std dev, variance, quartiles | Richer than average calc; student and researcher audience |
| P2 | z-score | Z-Score | Z-Skoru | Calculate z-score and find probability from standard normal table | value, mean, standard deviation | z-score, percentile, probability (one-tail and two-tail) | Stats students; pair with statistics-basic |

**Math subtotal: 20**

---

### Conversion (`conversion/`)

| Priority | Slug | Title (EN) | Title (TR) | Brief | Inputs | Outputs | Notes |
|---|---|---|---|---|---|---|---|
| P0 | length | Length Converter | Uzunluk Dönüştürücü | Convert between all common length units | value, from unit, to unit | converted value; also show key equivalents in a table | Units: m, cm, mm, km, in, ft, yd, mi, nm, μm |
| P0 | weight | Weight / Mass Converter | Ağırlık Dönüştürücü | Convert between metric and imperial weight units | value, from unit, to unit | converted value | Units: kg, g, mg, lb, oz, ton (metric), stone; high search |
| P0 | temperature | Temperature Converter | Sıcaklık Dönüştürücü | Convert between Celsius, Fahrenheit, Kelvin, Réaumur, and Rankine | value, from scale | all five scales simultaneously | C, F, K, Ré, R; show formula for each conversion |
| P0 | speed | Speed Converter | Hız Dönüştürücü | Convert speed between km/h, mph, m/s, knots | value, from unit, to unit | converted value, key conversions | km/h, mph, m/s, knot, ft/s; travel and physics use |
| P1 | area | Area Converter | Alan Dönüştürücü | Convert between metric and imperial area units | value, from unit, to unit | converted value | m², ft², yd², ha, acre, km², cm²; real estate cross-use |
| P1 | volume | Volume Converter | Hacim Dönüştürücü | Convert between metric and imperial volume units | value, from unit, to unit | converted value | L, mL, m³, ft³, gal (US/UK), fl oz, cup, tbsp, tsp |
| P1 | pressure | Pressure Converter | Basınç Dönüştürücü | Convert between common pressure units | value, from unit, to unit | converted value | Pa, kPa, bar, psi, atm, mmHg, inHg |
| P1 | energy | Energy Converter | Enerji Dönüştürücü | Convert between energy and work units | value, from unit, to unit | converted value | J, kJ, cal, kcal, kWh, BTU, ft·lbf, eV |
| P1 | data-storage | Data Storage Converter | Veri Boyutu Dönüştürücü | Convert between digital storage units | value, from unit, to unit | converted value | B, KB, MB, GB, TB, PB; binary (1024) and decimal (1000) toggle |
| P1 | time-convert | Time Unit Converter | Zaman Birimi Dönüştürücü | Convert between time units (not a clock) | value, from unit, to unit | converted value | seconds, minutes, hours, days, weeks, months, years |
| P2 | power-convert | Power Converter | Güç Dönüştürücü | Convert between power units | value, from unit, to unit | converted value | W, kW, MW, hp (mechanical), BTU/h |
| P2 | fuel-economy | Fuel Economy Converter | Yakıt Tüketimi Dönüştürücü | Convert between fuel efficiency units | value, from unit, to unit | converted value | L/100km, km/L, mpg (US), mpg (UK) |
| P2 | angle | Angle Converter | Açı Dönüştürücü | Convert between degree, radian, gradian, and other angle units | value, from unit, to unit | converted value | degrees, radians, gradians, arcminutes, arcseconds |
| P2 | numeral-system | Number Base Converter | Sayı Sistemi Dönüştürücü | Convert numbers between decimal, binary, octal, hex | number string, from base | decimal, binary, octal, hexadecimal | Include negative and fractional number support |
| P2 | cooking | Cooking Unit Converter | Yemek Ölçü Dönüştürücü | Convert cooking measurements between metric and US customary | value, from unit, to unit, ingredient (optional) | converted value; density lookup if ingredient given | cups/tbsp/tsp ↔ mL/g; include density for common ingredients |

**Conversion subtotal: 15**

---

**Grand total: 25 + 30 + 20 + 20 + 15 = 110 calculators** *(plus 2 alternatives counted in finance = 112)*

---

## Shared Helpers Anticipated

Category-level shared modules to be built once and imported across batch calculators:

| File | Used By | Purpose |
|---|---|---|
| `finance/_helpers/amortization.ts` | mortgage, loan-amortization, auto-loan, student-loan, refinance | Monthly payment and full schedule generation (standard annuity formula) |
| `finance/_helpers/compound.ts` | compound-interest, savings-goal, cd-yield, retirement, down-payment | Future value with optional periodic contributions, any compounding frequency |
| `finance/_helpers/tax-tr.ts` | income-tax, paycheck, vat, pension | Turkish SGK, gelir vergisi dilimi, damga vergisi, KDV lookups |
| `health/_helpers/macros.ts` | bmr, calorie, tdee, macros, calorie-deficit | BMR formulas (Mifflin-St Jeor, Harris-Benedict, Katch-McArdle), TDEE multipliers, macro ratios by goal |
| `health/_helpers/bmi-core.ts` | bmi, bmi-kids, ideal-weight, pregnancy-weight, lean-body-mass | BMI computation, WHO category lookup, pediatric percentile tables |
| `engineering/_helpers/units.ts` | ohms-law, voltage-drop, wire-gauge, electrical-power, led-resistor | Wire gauge tables (AWG↔mm²), unit conversions for electrical quantities |
| `engineering/_helpers/structures.ts` | beam-deflection, bending-stress, concrete, concrete-mix, steel-weight | Beam moment-of-inertia formulas, material property tables, mix ratios |
| `conversion/_helpers/units-table.ts` | length, weight, area, volume, pressure, energy, speed, temperature | SI and imperial conversion factors as a typed lookup table |
| `math/_helpers/number-theory.ts` | prime-factorization, lcm-gcd, factorial, combinations | GCD (Euclidean), LCM, sieve of Eratosthenes, factorial with BigInt |
| `math/_helpers/statistics.ts` | average, standard-deviation, statistics-basic, z-score, percentage-change | Mean, median, mode, std dev, variance, z-score, normal CDF approximation |

---

## Batch Plan (Faz 4 — 20 Paralel Agent)

22 batches × ~5 calculators. Same-batch calculators share a helper and belong to the same category.

> Convention: `category/slug` — each batch ships its shared helper first, then 5 calculators.

| Batch | Calculators | Shared Helper | Priority Mix |
|---|---|---|---|
| 1 | finance/mortgage, finance/loan-amortization, finance/auto-loan, finance/student-loan, finance/refinance | `amortization.ts` | P0, P0, P0, P1, P1 |
| 2 | finance/compound-interest, finance/savings-goal, finance/cd-yield, finance/retirement, finance/down-payment | `compound.ts` | P0, P0, P1, P0, P1 |
| 3 | finance/income-tax, finance/paycheck, finance/vat, finance/pension, finance/break-even | `tax-tr.ts` | P0, P1, P1, P2, P2 |
| 4 | finance/credit-card-payoff, finance/debt-payoff, finance/budget, finance/net-worth, finance/tip | none (standalone) | P0, P1, P1, P1, P1 |
| 5 | finance/investment-return, finance/roi, finance/inflation, finance/discount, finance/margin | none (standalone) | P0, P1, P1, P1, P2 |
| 6 | finance/salary, finance/home-affordability, finance/currency, finance/bond, finance/depreciation | none (standalone) | P0, P1, P2, P2, P2 |
| 7 | health/bmi, health/ideal-weight, health/bmi-kids, health/pregnancy-weight, health/lean-body-mass | `bmi-core.ts` | P0, P0, P2, P2, P1 |
| 8 | health/bmr, health/calorie, health/tdee, health/macros, health/calorie-deficit | `macros.ts` | P0, P0, P1, P1, P1 |
| 9 | health/body-fat, health/waist-hip-ratio, health/vo2max, health/cholesterol, health/calories-burned | none (standalone) | P0, P2, P2, P2, P2 |
| 10 | health/pregnancy, health/ovulation, health/conception, health/period, health/pregnancy-weight | none (standalone) | P0, P0, P1, P1, P2 |
| 11 | health/blood-pressure, health/heart-rate, health/sleep, health/bac, health/water-intake | none (standalone) | P1, P1, P1, P1, P1 |
| 12 | health/gfr, health/lean-body-mass (cross ref), engineering/ohms-law, engineering/voltage-drop, engineering/electrical-power | `units.ts` | P2, P1, P0, P0, P2 |
| 13 | engineering/wire-gauge, engineering/led-resistor, engineering/resistor-color, engineering/capacitor, engineering/transformer | `units.ts` | P1, P1, P1, P2, P2 |
| 14 | engineering/concrete, engineering/concrete-mix, engineering/steel-weight, engineering/square-footage, engineering/flow-rate | `structures.ts` | P0, P1, P2, P1, P1 |
| 15 | engineering/beam-deflection, engineering/bending-stress, engineering/torque, engineering/heat-transfer, engineering/pump-power | `structures.ts` | P1, P2, P1, P1, P2 |
| 16 | engineering/power-factor, engineering/signal-frequency, math/percentage, math/percentage-change, math/fraction | none / `units.ts` | P1, P2, P0, P1, P0 |
| 17 | math/average, math/square-root, math/standard-deviation, math/statistics-basic, math/z-score | `statistics.ts` | P0, P0, P1, P2, P2 |
| 18 | math/prime-factorization, math/lcm-gcd, math/factorial, math/combinations, math/scientific-notation | `number-theory.ts` | P1, P1, P2, P2, P0 |
| 19 | math/triangle, math/pythagorean, math/quadratic, math/logarithm, math/exponent | none (standalone) | P1, P1, P1, P1, P1 |
| 20 | math/ratio, math/matrix, conversion/length, conversion/weight, conversion/temperature | `units-table.ts` | P1, P2, P0, P0, P0 |
| 21 | conversion/speed, conversion/area, conversion/volume, conversion/pressure, conversion/energy | `units-table.ts` | P0, P1, P1, P1, P1 |
| 22 | conversion/data-storage, conversion/time-convert, conversion/power-convert, conversion/fuel-economy, conversion/angle, conversion/numeral-system, conversion/cooking | `units-table.ts` | P1, P1, P2, P2, P2, P2, P2 |

> Batch 22 has 7 items (all P2 conversions). Can be split into 22a (5) and 22b (2) if agent parallelism requires exactly 5 per batch.

---

## Open Questions / Ambiguities

1. **Compound vs. Continuous Interest**: Currently modeled as one calculator (`compound-interest`) with a "compounding frequency" selector that includes "continuous" as an option. If separate SEO pages are desired, split into `compound-interest` and `continuous-compound-interest`. Recommendation: keep merged, add tab UI.

2. **Income Tax — TR vs. US scope**: The `income-tax` slug covers both Turkish and US systems with a country selector. If traffic analysis later shows value in dedicated pages, split into `income-tax-tr` and `income-tax-us`. Start merged.

3. **Currency Converter — live rates**: Requires a free API (exchangerate-api.com, frankfurter.app). Needs a fallback to cached daily rates. Decide whether to hardcode daily rates server-side (GitHub Actions cron) or rely on client-side API call.

4. **Pension / BES**: The `pension` calc is TR-specific (BES system). For international audiences, this may have low value. Consider pairing it with a generic "retirement savings" projection tab. Currently listed as P2.

5. **Health/GFR and clinical calculators**: GFR and cholesterol border on medical advice. Ensure strong disclaimers on all clinical-adjacent health calculators. May need localization of normal-range references (TR vs. US labs).

6. **Batch 12 cross-category**: Batch 12 mixes health and engineering. Reconsider splitting if shared helper alignment is more important than batch size efficiency.

7. **Matrix Calculator scope**: Limited to 2×2 and 3×3. Students often need 4×4 for linear algebra. If scope expands, extract a `math/_helpers/matrix.ts` helper.

8. **`lean-body-mass` appears in two batches**: Listed in Batch 7 (health/bmi-core) and Batch 12 as a cross-reference. Remove from Batch 12; it belongs only in Batch 7.
