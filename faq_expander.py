#!/usr/bin/env python3
"""Expand FAQ content for calculator i18n files - add items to reach 5 per calculator."""
import os, re

BASE = "/Users/serdar/numio/src/calculators"

# FAQ additions for each calculator: list of (q, a) tuples to ADD
# Using a dict keyed by slug
FAQ_ADDITIONS = {
    # ========== 3 TO 5 (ADD 2) ==========
    # datetime
    "date-difference": [
        ('How are weeks and remaining days calculated?', 'The calculator divides the total days by 7 to get full weeks, and the remainder is the leftover days. For example, 23 days = 3 weeks and 2 days.'),
        ('Can I calculate the difference including the end date?', 'This calculator counts full 24-hour periods between dates. This is equivalent to an exclusive count — the end date itself is not counted. If you need to count the end date, add 1 to the total.'),
    ],
    "time-duration": [
        ('How do I enter a time that crosses noon correctly?', 'Use 24-hour format (e.g., 09:00 for 9 AM, 17:30 for 5:30 PM). The calculator works correctly with any 24-hour times, including overnight shifts that go past midnight.'),
        ('Does the break time include lunch and coffee breaks?', 'Enter any unpaid break time in minutes. This could be a lunch break, coffee break, or any other time you were not working. The total is subtracted from the elapsed time.'),
    ],
    "date-add": [
        ('What happens if I add 1 month to January 31?', 'The calculator clamps to the last valid day of the month. January 31 + 1 month = February 28 (or 29 in a leap year), since February has no 31st day.'),
        ('Can I add weeks and days together?', 'Yes. You can enter values in years, months, weeks, and days simultaneously. They are all applied to the start date in sequence: years/months first (with clamping), then weeks and days as exact 24-hour periods.'),
    ],
    "age": [
        ('How many days old is someone who is 30 years old?', 'A 30-year-old has lived approximately 10,957 days (30 x 365.25 accounting for leap years). The calculator gives the exact count by comparing the birth date to the as-of date.'),
        ('Does the calculator account for time of birth?', 'No. The calculator uses calendar dates only, ignoring the exact time of day. Age is counted in completed years, months, and days from the date of birth to the as-of date.'),
    ],
    # health
    "calorie-deficit": [
        ('Can I use this calculator for weight gain?', 'Yes — set your target weight higher than your current weight and use a negative deficit (surplus). A surplus of 300-500 kcal/day is typically recommended for healthy muscle gain, resulting in roughly 0.2-0.4 kg per week.'),
        ('How does water retention affect the estimates?', 'Water retention can cause temporary weight fluctuations of 1-3 kg, masking actual fat loss. The calculator shows a theoretical timeline based on the 7,700 kcal/kg rule, but real daily scale readings will vary due to hydration, glycogen stores, and food weight.'),
    ],
    "one-rep-max": [
        ('Can I use this for any exercise?', 'Yes — the formulas work for any compound or isolation exercise where you lift a weight for a known number of reps. Common applications include bench press, squat, deadlift, overhead press, and barbell row.'),
        ('Why do the Epley and Brzycki formulas give different results?', 'Epley and Brzycki use slightly different regression models. Epley tends to give slightly higher estimates for low-rep sets (1-5 reps), while Brzycki is more conservative. The average of both is shown as a balanced estimate.'),
    ],
    "bac": [
        ('How accurate is the Widmark formula?', 'The Widmark formula estimates BAC with reasonable accuracy for most people, but individual metabolism, body composition, food intake, and health conditions affect real BAC. Studies show the formula is within 0.01-0.02% of measured BAC for about 80% of people.'),
        ('How long does it take to become sober?', 'The body metabolises alcohol at roughly 0.015% BAC per hour regardless of gender or weight. So if your BAC is 0.08%, it takes about 5.3 hours to return to 0.00%. Coffee, cold showers, or exercise do not speed this up.'),
    ],
    "ideal-weight": [
        ('Do these formulas apply to athletes?', 'No. These formulas were developed for clinical drug dosing and do not account for high muscle mass. Athletes and bodybuilders may have a healthy body composition at weights well above the formula estimates due to lean muscle density.'),
        ('What height units are supported?', 'The calculator supports both centimetres (metric) and inches (imperial). For metric, enter height in cm (e.g., 175 cm). For imperial, enter height in inches (e.g., 69 inches = 5 feet 9 inches).'),
    ],
    "running-pace": [
        ('What is a good marathon pace?', 'A 4-hour marathon requires a 5:41/km pace (9:09/mile). A 3:30 marathon needs 4:58/km (8:00/mile), and a 3-hour marathon needs 4:15/km (6:50/mile). Most recreational runners target 4:00-5:00 hours for their first marathon.'),
        ('How do I use pace to set race goals?', 'Input your target distance and desired finish time to find the required pace. Then use this pace in training to run at goal effort. For example, if you want a 50-minute 10K, you need a 5:00/km pace throughout.'),
    ],
    # math
    "slope": [
        ('What is the angle of incline for a 1:1 slope?', 'A 1:1 slope (m = 1) has a 45-degree angle of incline. The angle is arctan(m), so m = 2 gives about 63.4 degrees, and m = 0.5 gives about 26.6 degrees.'),
        ('How do I find the midpoint formula?', 'The midpoint is ((x1+x2)/2, (y1+y2)/2). For points (1,2) and (5,8), the midpoint is (3,5). This is the point exactly halfway between the two given points.'),
    ],
    "quadratic": [
        ('What does it mean if the discriminant is negative?', 'A negative discriminant (D < 0) means the quadratic has two complex (imaginary) roots. These cannot be plotted on a standard graph but are valid mathematical solutions involving the imaginary unit i = sqrt(-1).'),
        ('How do I find the vertex of a parabola?', 'The vertex x-coordinate is x = -b/(2a). Plug this back into the equation to find the y-coordinate. If a > 0, the vertex is the minimum point; if a < 0, it is the maximum point.'),
    ],
    "gpa": [
        ('What is a good GPA?', 'In the US 4.0 scale, a GPA of 3.5-4.0 is considered excellent (A-/A average), 3.0-3.49 is good (B+/A- average), 2.0-2.99 is satisfactory (C/B average), and below 2.0 may place a student on academic probation.'),
        ('Can I calculate both semester and cumulative GPA?', 'For a single semester, enter just those course grades and credits. For cumulative GPA, enter all courses across all semesters. The tool always calculates a weighted average of whatever grades you provide.'),
    ],
    "circle": [
        ('What is pi (p) used in the formulas?', 'Pi (p = 3.14159...) is the ratio of a circle circumference to its diameter. It appears in all circle formulas: C = pd, A = pr2. The calculator uses p to high precision for accurate results.'),
        ('How do I find the diameter from the circumference?', 'Use d = C/p. If the circumference is 31.42, the diameter is 31.42 / 3.14159 = 10. Simply enter the circumference in the calculator and choose Circumference as the known value.'),
    ],
    "arithmetic-sequence": [
        ('What if the common difference is negative?', 'A negative common difference produces a decreasing sequence. For example, with a1 = 20 and d = -3, the terms are 20, 17, 14, 11, 8, and the 10th term is 20 + 9 x (-3) = -7.'),
        ('What is the difference between an arithmetic and geometric sequence?', 'An arithmetic sequence adds a constant d each step. A geometric sequence multiplies by a constant r each step. For example, 2, 4, 6, 8 (arithmetic, d=2) vs 2, 4, 8, 16 (geometric, r=2).'),
    ],
    "matrix": [
        ('When would I use a 2x2 vs 3x3 matrix?', '2x2 matrices are common in 2D graphics, rotation transforms, and simple systems of equations. 3x3 matrices appear in 3D graphics, 3D rotations, and systems of three equations with three unknowns.'),
        ('What does a determinant of zero tell me?', 'A determinant of zero means the matrix is singular (non-invertible). This indicates the rows (or columns) are linearly dependent — one row is a multiple or combination of another. Such matrices have no unique inverse.'),
    ],
    "permutations": [
        ('How many permutations of 3 items from 5?', 'Without repetition: 5P3 = 5!/(5-3)! = 60. With repetition: 5^3 = 125. This means there are 60 ways to arrange 3 distinct items chosen from 5, or 125 ways if items can repeat.'),
        ('What is the difference between permutations and combinations?', 'Permutations (nPr) count ordered arrangements where order matters (ABC is different from CBA). Combinations (nCr) count unordered selections where order does not matter (ABC = CBA). nPr = nCr x r!.'),
    ],
    "pythagorean": [
        ('What if I know the hypotenuse and one leg?', 'Use c^2 - a^2 = b^2. For a right triangle with c = 13 and a = 5: b = sqrt(169 - 25) = sqrt(144) = 12. Select Find leg (A) or Find leg (B) mode to solve this.'),
        ('Can this theorem be used for non-right triangles?', 'No. The Pythagorean theorem only applies to right triangles (one 90-degree angle). For non-right triangles, use the Law of Cosines: c^2 = a^2 + b^2 - 2ab x cos(C).'),
    ],
    # conversion
    "roman-numerals": [
        ('How do I read Roman numerals on clock faces?', 'Clock faces often use IIII instead of IV for 4 o clock for aesthetic symmetry. This is a historical tradition, not an error — both notations are accepted. Numbers above 12 use standard notation.'),
        ('What happens if I enter a number larger than 3999?', 'This calculator only supports 1-3999 in standard notation. Numbers above 3999 require a vinculum (overline) system where a bar multiplies the value by 1,000. For example, V with a bar = 5,000.'),
    ],
    "angular-velocity": [
        ('What is angular velocity used for in real life?', 'Angular velocity is used in engineering for rotating machinery (engines, turbines), in physics for rotational motion calculations, and in everyday contexts like measuring fan speed (rpm) or record player speed (33 1/3 rpm).'),
        ('How do I convert degrees per second to rad/s?', 'Multiply degrees per second by p/180. For example, 90-degree/s x p/180 = 1.5708 rad/s. This is useful when working with angular measurements in different unit systems.'),
    ],
    "kinematic-viscosity": [
        ('Why is kinematic viscosity important for lubricants?', 'Kinematic viscosity determines how well an oil flows at different temperatures. Engine oils are graded by their viscosity at 40 degree C and 100 degree C (e.g., 10W-30). Lower viscosity oils flow better in cold weather.'),
        ('What is the kinematic viscosity of common fluids?', 'Water at 20 degree C is about 1 cSt (1 mm2/s). Motor oil at 40 degree C is about 100-200 cSt. Air at 20 degree C is about 15 cSt. Honey is about 10,000 cSt at room temperature.'),
    ],
    "dynamic-viscosity": [
        ('What is the dynamic viscosity of common fluids?', 'Water at 20 degree C is about 1 mPa-s (1 cP). Olive oil at 20 degree C is about 80 mPa-s. Engine oil at 40 degree C is about 100-200 mPa-s. Glycerin at 20 degree C is about 1,500 mPa-s.'),
        ('How does temperature affect viscosity?', 'For liquids, viscosity decreases significantly as temperature rises. For example, engine oil at 0 degree C is about 20 times more viscous than at 100 degree C. For gases, viscosity increases slightly with temperature.'),
    ],
    "density": [
        ('What is the density of common materials?', 'Water at 4 degree C: 1,000 kg/m3 (1 g/cm3). Steel: 7,850 kg/m3. Aluminum: 2,700 kg/m3. Air at sea level: 1.225 kg/m3. Gold: 19,300 kg/m3. Gasoline: 720-780 kg/m3.'),
        ('How do I convert between specific gravity and density?', 'Specific gravity is the ratio of a material density to the density of water (1,000 kg/m3). So specific gravity 2.5 means the material density is 2.5 x 1,000 = 2,500 kg/m3.'),
    ],
    "flow-rate-convert": [
        ('How do I convert between L/s and m3/h?', 'Multiply L/s by 3.6 to get m3/h. For example, 10 L/s x 3.6 = 36 m3/h. Conversely, divide m3/h by 3.6 to get L/s. 1 L/s = 3.6 m3/h exactly.'),
        ('What is the difference between CFM and SCFM?', 'CFM is actual cubic feet per minute at the actual pressure and temperature. SCFM is corrected to standard conditions (typically 20 degree C, 1 atm). The calculator converts CFM; for SCFM, compensate for pressure/temperature separately.'),
    ],
    "torque-convert": [
        ('How do mechanics use torque in practice?', 'Mechanics use torque wrenches to tighten bolts to specific torque values, measured in N-m or lbf-ft. For example, lug nuts on a car wheel typically require 80-100 lbf-ft (108-136 N-m). Exceeding this can strip threads or damage components.'),
        ('What is the torque on a 20 cm wrench with 50 N of force?', 'Torque = force x distance = 50 N x 0.20 m = 10 N-m. If you apply the force at a 90-degree angle to the wrench handle, this is the maximum torque. Any other angle reduces the effective torque.'),
    ],
    "force": [
        ('How many pounds-force are in a kilonewton?', '1 kN = 1,000 N = 224.81 lbf. A car weighing about 1,500 kg exerts roughly 14.7 kN of force due to gravity. A typical adult human fist punch generates about 1-2 kN of peak force.'),
        ('What is the difference between mass and force in engineering?', 'Mass (kg) is a measure of the amount of matter. Force (N) is mass times acceleration. On Earth, 1 kg mass exerts 9.81 N of force due to gravity. This distinction is critical in engineering calculations.'),
    ],
    # finance
    "savings-goal": [
        ('How does the return rate affect my timeline?', 'A higher return rate significantly shortens your savings timeline due to compound growth. At a 5% annual return with $500 monthly contributions, it takes about 153 months to reach $100k from $0. At 10%, it takes about 119 months.'),
        ('What if I can only save irregular amounts?', 'This calculator assumes a fixed monthly contribution for simplicity. For irregular savings, use an average monthly contribution as a rough estimate. The actual result will vary depending on the timing and size of your contributions.'),
    ],
    "income-tax": [
        ('How are US tax brackets calculated?', 'The US uses progressive marginal tax brackets. For 2024, single filers pay 10% on income up to $11,600, 12% on $11,601-$47,150, 22% on $47,151-$100,525, and higher rates beyond. Your effective rate is always lower than your top marginal rate.'),
        ('Does the calculator account for Social Security and Medicare taxes?', 'No. This estimator covers federal income tax only. FICA taxes (Social Security at 6.2% up to $168,600, and Medicare at 1.45%) are separate payroll taxes that apply to wage income.'),
    ],
    "simple-interest": [
        ('How much interest does $1,000 earn in 6 months at 5%?', 'Using I = P x r x t: $1,000 x 0.05 x 0.5 = $25. The total amount after 6 months would be $1,025. For 1 year at the same rate, interest would be $50.'),
        ('What is the difference between APR and APY?', 'APR (Annual Percentage Rate) uses simple interest. APY (Annual Percentage Yield) includes compounding. A loan with 6% APR and monthly compounding has an APY of about 6.17%. Simple interest loans use APR, not APY.'),
    ],
    "auto-loan": [
        ('What is a good interest rate for a car loan?', 'As of 2025, a good rate for a new car is 4-7% APR for buyers with excellent credit (720+ FICO). Used car rates are typically 1-3% higher. Subprime rates (credit below 620) can be 10-20% APR. Rates vary by lender and term length.'),
        ('Should I make a larger down payment?', 'A larger down payment reduces the amount financed and total interest paid. The recommended minimum is 20% of the vehicle price to avoid being underwater. A $30,000 car with $6,000 down (20%) saves about $2,400 in interest over 60 months at 6% vs. zero down.'),
    ],
    "investment-return": [
        ('What is a reasonable annual return expectation?', 'Historically, the S&P 500 has returned about 10% annually before inflation (7% after inflation). Bonds return 2-5%. Balanced portfolios (60/40 stocks/bonds) have returned about 8% before inflation. Past performance does not guarantee future results.'),
        ('How do I account for inflation in my returns?', 'To get a real (inflation-adjusted) return, subtract the inflation rate from your nominal return. If your investments earn 8% and inflation is 3%, your real return is about 5%. This calculator shows nominal returns; adjust your expectations accordingly.'),
    ],
    "credit-card-payoff": [
        ('How much interest will I pay with minimum payments?', 'On a $5,000 balance at 22% APR with 2% minimum payments, you would pay about $5,800 in interest over 30+ years. Increasing your payment to $200/month cuts total interest to about $2,100 and payoff time to 32 months.'),
        ('What is the avalanche vs snowball method?', 'The avalanche method pays off the highest APR card first, minimising total interest. The snowball method pays off the smallest balance first for psychological wins. This calculator focuses on a single card; for multiple cards, apply the avalanche method for lowest total interest.'),
    ],
    "loan-amortization": [
        ('How much interest do I pay over 30 years on a $300,000 mortgage at 6%?', 'At 6% APR on a 30-year fixed mortgage for $300,000, total interest paid is approximately $347,515, with a monthly payment of about $1,799. Over 15 years at the same rate, total interest drops to about $155,682 with a higher monthly payment of $2,531.'),
        ('Can I see extra payments or lump sums?', 'This calculator produces a standard amortisation schedule based on the fixed monthly payment. To model extra payments, reduce the term length or use an amortisation calculator that specifically supports additional principal payments.'),
    ],
    "sales-tax": [
        ('What is the difference between sales tax and VAT?', 'Sales tax is applied only at the final point of sale to consumers, while VAT (Value Added Tax) is applied at every stage of production and distribution. In the US, sales tax rates vary by state (0-10.25%), while VAT is common in Europe (17-27%).'),
        ('How do I reverse-calculate sales tax?', 'If you know the total price including tax, divide by (1 + tax rate) to get the pre-tax price. For example, a $108.25 total with 8.25% tax = $108.25 / 1.0825 = $100.00 pre-tax. The Remove tax from total mode does this automatically.'),
    ],
    "cagr": [
        ('What is the CAGR of the S&P 500 over the last 50 years?', 'The S&P 500 has grown at a CAGR of approximately 10.5% from 1974 to 2024 (including dividends reinvested). A $10,000 investment in 1974 would be worth about $1.7 million by 2024 at this growth rate.'),
        ('How is CAGR different from average annual return?', 'CAGR is the geometric mean return, assuming smooth compounding. The arithmetic average annual return can be higher due to volatility (variance drain). For volatile investments, CAGR (geometric mean) is always lower than the arithmetic average return.'),
    ],
    # engineering
    "voltage-drop": [
        ('What is the NEC recommended maximum voltage drop?', 'The NEC recommends a maximum voltage drop of 3% for branch circuits and 5% total for feeder plus branch circuits. A 120V circuit with more than 3% drop (3.6V) may cause equipment malfunction and reduced efficiency.'),
        ('Does conductor size affect voltage drop significantly?', 'Yes. Doubling the conductor cross-sectional area (going from 14 AWG to 12 AWG) roughly halves the voltage drop. For a 15A, 120V circuit running 100 feet, 14 AWG copper gives about 3.5% drop, while 12 AWG gives about 2.2%.'),
    ],
    "flow-rate": [
        ('What flow velocity is recommended for water pipes?', 'For plumbing systems, recommended velocities are 0.6-1.5 m/s for cold water and 0.6-1.2 m/s for hot water to minimise noise and erosion. Above 2.0 m/s, water hammer and pipe erosion become significant concerns.'),
        ('How does pipe diameter affect flow rate?', 'Flow rate is proportional to the pipe cross-sectional area (pr2). Doubling the pipe diameter increases the area by 4x, allowing 4 times the flow rate at the same velocity. For example, a 50mm pipe carries 4x the flow of a 25mm pipe at the same velocity.'),
    ],
    "ohms-law": [
        ('How much power does a 100W light bulb draw at 120V?', 'Using P = V2/R: a 100W bulb at 120V draws about 0.833 amps and has a resistance of about 144 ohms. At 240V (Europe), the same bulb would draw 400W and burn out immediately.'),
        ('What happens if I use a higher voltage device on a lower voltage supply?', 'Using Ohms law: if you connect a 240V device rated at 1,000W to a 120V supply, it draws half the current (R is constant), producing only 250W (1/4 the power). The device will run at reduced performance and may not operate correctly.'),
    ],
    "concrete": [
        ('How many 40 kg bags of cement do I need for 1 m3 of concrete?', 'For a standard 1:2:3 mix (cement:sand:gravel), 1 m3 of concrete requires approximately 7-8 bags of 40 kg cement. A typical slab 4m x 3m x 0.15m = 1.8 m3 would need about 13-14 bags of 40 kg cement.'),
        ('What is the difference between concrete and cement?', 'Cement is a binding powder that hardens when mixed with water. Concrete is the finished product: a mixture of cement, sand, gravel, and water. Cement typically makes up about 10-15% of the total concrete volume.'),
    ],
    "resistor-combination": [
        ('How do I calculate more than 2 resistors in parallel?', 'For multiple resistors in parallel, use 1/Rtotal = 1/R1 + 1/R2 + 1/R3 + ... For three 100 ohm resistors in parallel: 1/R = 1/100 + 1/100 + 1/100 = 3/100, so R = 33.33 ohms.'),
        ('Why is parallel resistance always lower than the smallest resistor?', 'Each parallel path adds another conducting channel, reducing the overall resistance. Think of it as adding extra lanes to a highway — more current can flow, so the effective resistance decreases with each added parallel resistor.'),
    ],
    "resistor-color": [
        ('What is the tolerance of a gold band?', 'A gold tolerance band means the resistor value is accurate within +/- 5%. Silver indicates +/- 10%. No band (4-band) means +/- 20%. Brown (5-band) indicates +/- 1%. The tighter the tolerance, the more expensive the resistor.'),
        ('How do I remember the resistor color code order?', 'The mnemonic is: Black (0), Brown (1), Red (2), Orange (3), Yellow (4), Green (5), Blue (6), Violet (7), Grey (8), White (9). Remember: BB ROY of Great Britain has Very Good Wife (for the first letters).'),
    ],
    "steel-weight": [
        ('How much does a 12mm steel rebar weigh per meter?', 'A 12mm diameter steel rebar weighs approximately 0.888 kg/m. Common sizes: 10mm = 0.617 kg/m, 16mm = 1.579 kg/m, 20mm = 2.466 kg/m, 25mm = 3.853 kg/m. This calculator uses the formula weight = area x density for any size.'),
        ('What is the weight of a standard steel plate?', 'A 1m x 1m steel plate of 6mm thickness weighs about 47.1 kg. A 1/4-inch (6.35mm) steel plate weighs about 49.8 kg per square meter. Steel density is 7,850 kg/m3 regardless of the product form.'),
    ],
    "beam-deflection": [
        ('What is the maximum deflection allowed for steel beams?', 'Building codes typically limit live load deflection to L/360 for floors and L/240 for roofs, where L is the span. For a 6-meter simply supported beam, L/360 = 16.7 mm maximum deflection. Exceeding this can cause cracking in ceilings and floors.'),
        ('How does the second moment of area affect deflection?', 'Deflection is inversely proportional to the second moment of area (I). Doubling I halves the deflection. A standard I-beam has a much higher I value than a rectangular bar of the same weight, making it much stiffer for its mass.'),
    ],
    "torque": [
        ('How do I calculate torque from a motor?', 'Motor torque (N-m) = Power (W) / Angular velocity (rad/s). For a 1 kW motor running at 1,500 rpm (157.08 rad/s): torque = 1,000 / 157.08 = 6.37 N-m. This calculator focuses on static torque from force and distance.'),
        ('What is the difference between torque and work?', 'Torque is a rotational force (N-m) applied at a distance from the pivot. Work is force applied over a distance (also N-m, or Joules). Torque implies rotation without necessarily causing motion, while work requires actual displacement.'),
    ],
    
    # ========== 4 TO 5 (ADD 1) ==========
    # health
    "body-fat": [
        ('What is a healthy body fat percentage?', 'For men, 10-20% body fat is considered healthy; for women, 18-28%. Athletes typically have 6-13% (men) and 14-20% (women). Essential fat minimums are 2-5% for men and 10-13% for women — below these levels can be dangerous.'),
    ],
    "tdee": [
        ('How do I use TDEE for weight loss?', 'To lose 0.5 kg per week, subtract 500 kcal from your TDEE daily. For weight gain, add 300-500 kcal. Recalculate your TDEE every 5-10 kg of weight change, as your maintenance calories decrease with weight loss.'),
    ],
    "heart-rate": [
        ('What is a dangerous heart rate during exercise?', 'For most adults, a maximum heart rate is roughly 220 minus your age. A 40-year-old should not exceed 180 bpm during exercise. Resting heart rate above 100 bpm (tachycardia) or below 60 bpm without athletic training warrants medical consultation.'),
    ],
    "cholesterol": [
        ('What are the target cholesterol levels?', 'Total cholesterol should be below 200 mg/dL. LDL (bad) should be below 100 mg/dL. HDL (good) should be above 40 mg/dL for men and 50 mg/dL for women. Triglycerides should be below 150 mg/dL.'),
    ],
    "calories-burned": [
        ('How many calories does running burn per hour?', 'A person weighing 70 kg burns approximately 600-800 kcal per hour running at 8 km/h (5 mph). At 10 km/h (6.2 mph), it rises to about 800-1,000 kcal per hour. Higher body weight and intensity increase calorie burn.'),
    ],
    "blood-pressure": [
        ('What is the ideal blood pressure reading?', 'Normal blood pressure is below 120/80 mmHg. Elevated is 120-129/less than 80. Stage 1 hypertension is 130-139/80-89. Stage 2 is 140+/90+. Hypertensive crisis is above 180/120 and requires immediate medical attention.'),
    ],
    "ovulation": [
        ('How long after ovulation is the fertile window?', 'The fertile window is approximately 6 days: 5 days before ovulation plus the day of ovulation itself. Sperm can survive in the female reproductive tract for up to 5 days, while the egg is viable for only about 12-24 hours after ovulation.'),
    ],
    "vo2max": [
        ('What is a good VO2max for a 30-year-old?', 'For a 30-year-old male, a VO2max above 42 mL/kg/min is good, above 49 is excellent. For a 30-year-old female, above 35 is good, above 41 is excellent. Elite endurance athletes can reach 60-85 mL/kg/min.'),
    ],
    # math
    "percentage-change": [
        ('How do I calculate percentage change from a negative to a positive?', 'Use the formula (new - old) / |old| x 100. For a change from -50 to 150: (150 - (-50)) / 50 x 100 = 400% increase. The absolute value in the denominator ensures meaningful results when crossing zero.'),
    ],
    "square-root": [
        ('What is the square root of a negative number?', 'The square root of a negative number is an imaginary number. sqrt(-16) = 4i, where i is the imaginary unit (sqrt(-1)). This calculator covers real, non-negative numbers only.'),
    ],
    "ratio": [
        ('How do I simplify a ratio?', 'Divide both parts by their greatest common divisor (GCD). For 12:8, the GCD is 4, so 12/4 : 8/4 = 3:2. This calculator does this automatically and shows the simplified ratio.'),
    ],
    "fraction": [
        ('How do I convert a decimal to a fraction?', 'For 0.375: multiply by 1,000 (3 decimal places) to get 375/1,000, then simplify by dividing by GCD (125): 375/125 = 3 and 1,000/125 = 8, so 0.375 = 3/8.'),
    ],
    "average": [
        ('What is the difference between mean, median, and mode?', 'The mean is the arithmetic average (sum/n). The median is the middle value when sorted. The mode is the most frequent value. For symmetric distributions, all three are equal. For skewed data (like income), the median better represents the typical value.'),
    ],
    # conversion
    "speed": [
        ('How do I convert km/h to mph?', 'Multiply km/h by 0.621371 to get mph. For example, 100 km/h x 0.621371 = 62.14 mph. Conversely, multiply mph by 1.60934 to get km/h. A 70 mph motorway speed equals about 113 km/h.'),
    ],
    # finance
    "depreciation": [
        ('What is the difference between straight-line and declining balance depreciation?', 'Straight-line spreads the cost evenly over the useful life. Declining balance accelerates depreciation, giving larger deductions in early years. For a $10,000 asset over 5 years, straight-line gives $2,000/year; double-declining gives $4,000 in year 1, then $2,400, $1,440, etc.'),
    ],
    "pension": [
        ('How much should I save for retirement?', 'A common rule of thumb is to save 15% of your gross income annually for retirement starting at age 25. By age 67, aim to have 10-12 times your final salary saved. A 30-year-old earning $60,000 with $50,000 saved is on track with 15% annual contributions at 7% return.'),
    ],
    "compound-interest": [
        ('How does compounding frequency affect returns?', 'More frequent compounding yields slightly higher returns. $10,000 at 5% APR over 10 years: annual compounding gives $16,289, monthly gives $16,453, daily gives $16,470. The difference is modest but grows with larger amounts and longer timeframes.'),
    ],
    "vat": [
        ('What is the standard VAT rate in Europe?', 'Standard VAT rates in the EU range from 17% (Luxembourg) to 27% (Hungary). Most countries are around 19-23%. Reduced rates of 5-10% apply to certain goods like food, books, and childrens clothing.'),
    ],
    "break-even": [
        ('How do I calculate the break-even point in units?', 'Break-even (units) = Fixed Costs / (Selling Price per Unit - Variable Cost per Unit). If fixed costs are $50,000, selling price is $100, and variable cost is $40, then break-even = 50,000 / 60 = 834 units.'),
    ],
    "margin": [
        ('What is the difference between margin and markup?', 'Margin is profit as a percentage of the selling price. Markup is profit as a percentage of the cost. A 50% margin means you sell a $100 item for $200 (profit = $100, margin = 50%). A 50% markup means $100 cost + $50 = $150 selling price.'),
    ],
    "mortgage": [
        ('How much house can I afford?', 'The 28/36 rule suggests your monthly housing payment should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%. On a $100,000 annual salary ($8,333/month), you can afford about $2,333/month for housing.'),
    ],
    "currency": [
        ('Where do the exchange rates come from?', 'Exchange rates are updated from live market data. They represent the mid-market rate (the midpoint between buy and sell prices). Actual bank or transfer service rates typically include a markup of 0.5-3% above the mid-market rate.'),
    ],
    # engineering
    "pump-power": [
        ('How do I calculate pump power requirements?', 'Pump power (kW) = (Flow rate x Head x Specific gravity x g) / (3,600,000 x Efficiency). For a pump moving 100 m3/h of water to 20m height at 70% efficiency: Power = (100 x 20 x 1 x 9.81) / (3,600,000 x 0.70) = 7.78 kW.'),
    ],
    "square-footage": [
        ('How do I calculate square footage of an irregular room?', 'Divide irregular spaces into regular shapes (rectangles, triangles, circles). Calculate each area separately and sum them. For a L-shaped room, measure it as two rectangles. For a room with a bay window, add the window area separately.'),
    ],
    "free-space-path-loss": [
        ('What is free-space path loss for a 2.4 GHz signal at 100 meters?', 'FSPL (dB) = 20 x log10(distance) + 20 x log10(frequency) + 32.44. For 2.4 GHz at 100 m: FSPL = 20 x log10(100) + 20 x log10(2400) + 32.44 = 40 + 67.6 + 32.44 = 80.04 dB.'),
    ],
    "signal-frequency": [
        ('What is the wavelength of a 2.4 GHz WiFi signal?', 'Using lambda = c / f: 299,792,458 / 2,400,000,000 = 0.125 meters (12.5 cm). For 5 GHz WiFi, the wavelength is about 6 cm. Shorter wavelengths provide faster data rates but less penetration through walls.'),
    ],
    "dipole-antenna-length": [
        ('Why is a half-wave dipole 0.48 times the wavelength instead of 0.5?', 'The end effect — caused by capacitance at the antenna tips — shortens the physical length needed for resonance. A half-wave dipole is typically cut to 0.95 x (wavelength/2) = 0.475 x wavelength for practical use.'),
    ],
    "antenna-gain": [
        ('What is the beamwidth of a 60 cm dish at 10 GHz?', 'HPBW is approximately 70 x lambda / D. At 10 GHz, wavelength = 3 cm. HPBW = 70 x 0.03 / 0.60 = 3.5 degrees. The gain would be about 37 dBi at 55% efficiency. Larger dishes and higher frequencies give narrower beams.'),
    ],
}

def expand_faq(filepath, additions):
    """Add FAQ items to the en locale faq array."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find en locale's faq block
    en_idx = content.find("en: {")
    if en_idx == -1:
        print(f"  ERROR: No en locale in {filepath}")
        return False
    
    faq_idx = content.find("faq:", en_idx)
    if faq_idx == -1:
        print(f"  ERROR: No faq in en locale of {filepath}")
        return False
    
    # Find the opening [
    bracket_idx = content.find("[", faq_idx)
    if bracket_idx == -1:
        print(f"  ERROR: No [ after faq in {filepath}")
        return False
    
    # Find the matching closing ]
    depth = 0
    close_idx = bracket_idx
    for i in range(bracket_idx, len(content)):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                close_idx = i
                break
    
    # Get the faq section content to detect format
    faq_section = content[bracket_idx:close_idx+1]
    uses_question_answer = 'question:' in faq_section
    
    # Build new items
    new_items = []
    for q, a in additions:
        if uses_question_answer:
            item = '\n      {\n        question: "%s",\n        answer:\n          "%s",\n      },' % (q, a)
        else:
            item = '\n      { q: "%s", a: "%s" },' % (q, a)
        new_items.append(item)
    
    insert_text = ''.join(new_items)
    
    # Insert before the closing ]
    new_content = content[:close_idx] + insert_text + '\n    ' + content[close_idx:]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"  OK: Added {len(additions)} FAQ items to {filepath}")
    return True

# Categorize calculators
def categorize(slug):
    """Figure out which category a slug belongs to."""
    for category in ["datetime", "health", "math", "conversion", "finance", "engineering"]:
        path = os.path.join(BASE, category, slug, "i18n.ts")
        if os.path.exists(path):
            return category
    return None

# Process all calculators
processed = 0
errors = 0

for slug, additions in FAQ_ADDITIONS.items():
    category = categorize(slug)
    if category is None:
        print(f"ERROR: Cannot find calculator for slug '{slug}'")
        errors += 1
        continue
    
    filepath = os.path.join(BASE, category, slug, "i18n.ts")
    print(f"Processing {category}/{slug}...")
    
    if expand_faq(filepath, additions):
        processed += 1
    else:
        errors += 1

print(f"\nDone! Processed {processed} files, {errors} errors.")