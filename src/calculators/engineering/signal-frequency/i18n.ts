import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Signal Frequency & Wavelength Calculator",
    short: "Convert between frequency, wavelength and period for electromagnetic or acoustic waves.",
    description:
      "Free wavelength-to-frequency calculator. Convert any value between frequency (Hz / kHz / MHz / GHz / THz), wavelength (km / m / cm / mm / µm) and period (seconds). Choose vacuum for electromagnetic waves (radio, WiFi, light) or air/water for sound, with NIST-grade physical constants.",
    keywords: [
      "frequency to wavelength",
      "wavelength to frequency",
      "RF calculator",
      "radio wavelength",
      "WiFi frequency",
      "speed of light",
      "speed of sound",
      "period calculator",
    ],
    inputs: {
      mode: { label: "Calculation mode", help: "Choose which quantity you want to compute from the input value." },
      value: { label: "Input value", help: "Frequency in Hz, wavelength in metres, or period in seconds — depending on the mode selected." },
      medium: { label: "Medium", help: "Vacuum uses the speed of light (electromagnetic). Air and water use the speed of sound (acoustic)." },
    },
    outputs: {
      frequencyHz: { label: "Frequency", help: "Frequency in hertz (cycles per second)." },
      frequencyDisplay: { label: "Frequency (auto-scaled)", help: "Same frequency expressed in kHz, MHz, GHz or THz for readability." },
      wavelengthM: { label: "Wavelength", help: "Wavelength in metres." },
      wavelengthDisplay: { label: "Wavelength (auto-scaled)", help: "Wavelength in km/m/cm/mm/µm/nm depending on magnitude." },
      periodS: { label: "Period", help: "Time of one complete cycle: T = 1 / f." },
      waveSpeedMs: { label: "Wave speed", help: "Propagation speed used for this calculation (m/s)." },
      waveType: { label: "Wave type", help: "Electromagnetic (vacuum) or acoustic (air/water)." },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "Frequency → wavelength",
        "wavelength-to-frequency": "Wavelength → frequency",
        "period-to-frequency": "Period → frequency",
      },
      medium: {
        vacuum: "Vacuum / free space (c = 299 792 458 m/s)",
        air: "Air, 20 °C (sound, 343 m/s)",
        water: "Water, 20 °C (sound, 1480 m/s)",
      },
    },
    errors: {
      nonPositive: "Value must be greater than zero.",
    },
    faq: [
      {
        q: "How do I convert frequency to wavelength?",
        a: "Use λ = v / f, where v is the wave speed in the medium and f is the frequency. For electromagnetic waves in vacuum, v = c = 299 792 458 m/s. Example: at 2.4 GHz (WiFi), λ = 299 792 458 / 2.4×10⁹ ≈ 0.125 m = 12.5 cm.",
      },
      {
        q: "What's the difference between electromagnetic and acoustic waves?",
        a: "Electromagnetic waves (radio, microwave, light) travel through vacuum at c ≈ 3×10⁸ m/s. Acoustic waves (sound) need a material medium and travel ~343 m/s in air or ~1480 m/s in fresh water — about a million times slower. Using the wrong medium for a wave type will give a wavelength that's off by ~10⁶.",
      },
      {
        q: "How is the period of a signal calculated?",
        a: "Period T is the time for one full cycle: T = 1 / f. A 1 kHz tone has a period of 1 ms; a 100 MHz FM radio signal has a period of 10 ns.",
      },
      {
        q: "Why is the speed of light in vacuum exact?",
        a: "Since the 1983 redefinition of the metre, c is fixed by definition at exactly 299 792 458 m/s (CODATA). The metre is defined as the distance light travels in 1/299 792 458 second — making c a defined constant, not a measured one.",
      },
    ],
  },
  nl: {
    title: "Signaalfrequentie & Wavelengte Calculator",
    short: "Converteer between frequency, wavelengte and period for electromagnetic or acoustic waves.",
    description:
      "Gratis wavelengte-to-frequency calculator. Converteer any value between frequency (Hz / kHz / MHz / GHz / THz), wavelengte (km / m / cm / mm / µm) and period (seconden). Choose vacuum for electromagnetic waves (radio, WiFi, light) or air/water for sound, with NIST-grade physical constants.",
    keywords: [
      "frequency to wavelengte",
      "wavelengte to frequency",
      "RF calculator",
      "radio wavelengte",
      "WiFi frequency",
      "speed of light",
      "speed of sound",
      "period calculator",
    ],
    inputs: {
      mode: { label: "Calculation mode", help: "Choose which quantity you want to compute from the input value." },
      value: { label: "Input value", help: "Frequency in Hz, wavelengte in metres, or period in seconden — depending on the mode selected." },
      medium: { label: "Medium", help: "Vacuum uses the speed of light (electromagnetic). Air and water use the speed of sound (acoustic)." },
    },
    outputs: {
      frequencyHz: { label: "Frequency", help: "Frequency in hertz (cycles per second)." },
      frequencyDisplay: { label: "Frequency (auto-scaled)", help: "Same frequency expressed in kHz, MHz, GHz or THz for readability." },
      wavelengthM: { label: "Wavelengte", help: "Wavelengte in metres." },
      wavelengthDisplay: { label: "Wavelengte (auto-scaled)", help: "Wavelengte in km/m/cm/mm/µm/nm depending on magnitude." },
      periodS: { label: "Period", help: "Time of one complete cycle: T = 1 / f." },
      waveSpeedMs: { label: "Wave speed", help: "Propagation speed used for this calculation (m/s)." },
      waveType: { label: "Wave type", help: "Electromagnetic (vacuum) or acoustic (air/water)." },
    },
    options: {
      mode: {
        "frequency-to-wavelengte": "Frequency → wavelengte",
        "wavelengte-to-frequency": "Wavelengte → frequency",
        "period-to-frequency": "Period → frequency",
      },
      medium: {
        vacuum: "Vacuum / gratis space (c = 299 792 458 m/s)",
        air: "Air, 20 °C (sound, 343 m/s)",
        water: "Water, 20 °C (sound, 1480 m/s)",
      },
    },
    errors: {
      nonPositive: "Waarde must be greater than zero.",
    },
    faq: [
      {
        q: "How do I converteer frequency to wavelengte?",
        a: "Use λ = v / f, where v is the wave speed in the medium and f is the frequency. For electromagnetic waves in vacuum, v = c = 299 792 458 m/s. Example: at 2.4 GHz (WiFi), λ = 299 792 458 / 2.4×10⁹ ≈ 0.125 m = 12.5 cm.",
      },
      {
        q: "What's the difference between electromagnetic and acoustic waves?",
        a: "Electromagnetic waves (radio, microwave, light) travel through vacuum at c ≈ 3×10⁸ m/s. Acoustic waves (sound) need a material medium and travel ~343 m/s in air or ~1480 m/s in fresh water — about a million times slower. Using the wrong medium for a wave type will give a wavelengte that's off by ~10⁶.",
      },
      {
        q: "How is the period of a signal berekend?",
        a: "Period T is the time for one full cycle: T = 1 / f. A 1 kHz tone has a period of 1 ms; a 100 MHz FM radio signal has a period of 10 ns.",
      },
      {
        q: "Why is the speed of light in vacuum exact?",
        a: "Since the 1983 redefinition of the metre, c is fixed by definition at exactly 299 792 458 m/s (CODATA). The metre is defined as the distance light travels in 1/299 792 458 second — making c a defined constant, not a measured one.",
      },
    ],
  },

  pl: {
    title: "Częstotliwość Sygnału & Wavedługość Kalkulator",
    short: "Konwertuj between frequency, wavedługość and period for electromagnetic or acoustic waves.",
    description:
      "Darmowy wavedługość-to-frequency kalkulator. Konwertuj any value between frequency (Hz / kHz / MHz / GHz / THz), wavedługość (km / m / cm / mm / µm) and period (sekund). Choose vacuum for electromagnetic waves (radio, WiFi, light) or air/water for sound, with NIST-grade physical constants.",
    keywords: [
      "frequency to wavedługość",
      "wavedługość to frequency",
      "RF kalkulator",
      "radio wavedługość",
      "WiFi frequency",
      "speed of light",
      "speed of sound",
      "period kalkulator",
    ],
    inputs: {
      mode: { label: "Calculation mode", help: "Choose which quantity you want to compute from the input value." },
      value: { label: "Input value", help: "Frequency in Hz, wavedługość in metres, or period in sekund — depending on the mode selected." },
      medium: { label: "Medium", help: "Vacuum uses the speed of light (electromagnetic). Air and water use the speed of sound (acoustic)." },
    },
    outputs: {
      frequencyHz: { label: "Frequency", help: "Frequency in hertz (cycles per second)." },
      frequencyDisplay: { label: "Frequency (auto-scaled)", help: "Same frequency expressed in kHz, MHz, GHz or THz for readability." },
      wavelengthM: { label: "Wavedługość", help: "Wavedługość in metres." },
      wavelengthDisplay: { label: "Wavedługość (auto-scaled)", help: "Wavedługość in km/m/cm/mm/µm/nm depending on magnitude." },
      periodS: { label: "Period", help: "Time of one complete cycle: T = 1 / f." },
      waveSpeedMs: { label: "Wave speed", help: "Propagation speed used for this calculation (m/s)." },
      waveType: { label: "Wave type", help: "Electromagnetic (vacuum) or acoustic (air/water)." },
    },
    options: {
      mode: {
        "frequency-to-wavedługość": "Frequency → wavedługość",
        "wavedługość-to-frequency": "Wavedługość → frequency",
        "period-to-frequency": "Period → frequency",
      },
      medium: {
        vacuum: "Vacuum / darmowy space (c = 299 792 458 m/s)",
        air: "Air, 20 °C (sound, 343 m/s)",
        water: "Water, 20 °C (sound, 1480 m/s)",
      },
    },
    errors: {
      nonPositive: "Wartość must be greater than zero.",
    },
    faq: [
      {
        q: "How do I konwertuj frequency to wavedługość?",
        a: "Use λ = v / f, where v is the wave speed in the medium and f is the frequency. For electromagnetic waves in vacuum, v = c = 299 792 458 m/s. Example: at 2.4 GHz (WiFi), λ = 299 792 458 / 2.4×10⁹ ≈ 0.125 m = 12.5 cm.",
      },
      {
        q: "What's the difference between electromagnetic and acoustic waves?",
        a: "Electromagnetic waves (radio, microwave, light) travel through vacuum at c ≈ 3×10⁸ m/s. Acoustic waves (sound) need a material medium and travel ~343 m/s in air or ~1480 m/s in fresh water — about a million times slower. Using the wrong medium for a wave type will give a wavedługość that's off by ~10⁶.",
      },
      {
        q: "How is the period of a signal obliczd?",
        a: "Period T is the time for one full cycle: T = 1 / f. A 1 kHz tone has a period of 1 ms; a 100 MHz FM radio signal has a period of 10 ns.",
      },
      {
        q: "Why is the speed of light in vacuum exact?",
        a: "Since the 1983 redefinition of the metre, c is fixed by definition at exactly 299 792 458 m/s (CODATA). The metre is defined as the distance light travels in 1/299 792 458 second — making c a defined constant, not a measured one.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Frequência de Sinal",
    short: "Converta entre frequência, período e comprimento de onda.",
    description:
      "Calculadora gratuita de frequência de sinal. Converta entre frequência (Hz), período (s) e comprimento de onda (m) para qualquer onda eletromagnética.",
    keywords: ["frequência sinal", "período onda", "comprimento onda", "Hz", "ondas eletromagnéticas"],
    inputs: {
      mode: { label: "Calculation mode", help: "Choose which quantity you want to compute from the input value." },
      value: { label: "Input value", help: "Frequency in Hz, wavelength in metres, or period in seconds — depending on the mode selected." },
      medium: { label: "Medium", help: "Vacuum uses the speed of light (electromagnetic). Air and water use the speed of sound (acoustic)." },
    },
    outputs: {
      frequencyHz: { label: "Frequency", help: "Frequency in hertz (cycles per second)." },
      frequencyDisplay: { label: "Frequency (auto-scaled)", help: "Same frequency expressed in kHz, MHz, GHz or THz for readability." },
      wavelengthM: { label: "Wavelength", help: "Wavelength in metres." },
      wavelengthDisplay: { label: "Wavelength (auto-scaled)", help: "Wavelength in km/m/cm/mm/µm/nm depending on magnitude." },
      periodS: { label: "Period", help: "Time of one complete cycle: T = 1 / f." },
      waveSpeedMs: { label: "Wave speed", help: "Propagation speed used for this calculation (m/s)." },
      waveType: { label: "Wave type", help: "Electromagnetic (vacuum) or acoustic (air/water)." },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "Frequency → wavelength",
        "wavelength-to-frequency": "Wavelength → frequency",
        "period-to-frequency": "Period → frequency",
      },
      medium: {
        vacuum: "Vacuum / free space (c = 299 792 458 m/s)",
        air: "Air, 20 °C (sound, 343 m/s)",
        water: "Water, 20 °C (sound, 1480 m/s)",
      },
    },
    errors: {
      nonPositive: "Value must be greater than zero.",
    },
    faq: [
      {
        q: "How do I convert frequency to wavelength?",
        a: "Use λ = v / f, where v is the wave speed in the medium and f is the frequency. For electromagnetic waves in vacuum, v = c = 299 792 458 m/s. Example: at 2.4 GHz (WiFi), λ = 299 792 458 / 2.4×10⁹ ≈ 0.125 m = 12.5 cm.",
      },
      {
        q: "What's the difference between electromagnetic and acoustic waves?",
        a: "Electromagnetic waves (radio, microwave, light) travel through vacuum at c ≈ 3×10⁸ m/s. Acoustic waves (sound) need a material medium and travel ~343 m/s in air or ~1480 m/s in fresh water — about a million times slower. Using the wrong medium for a wave type will give a wavelength that's off by ~10⁶.",
      },
      {
        q: "How is the period of a signal calculated?",
        a: "Period T is the time for one full cycle: T = 1 / f. A 1 kHz tone has a period of 1 ms; a 100 MHz FM radio signal has a period of 10 ns.",
      },
      {
        q: "Why is the speed of light in vacuum exact?",
        a: "Since the 1983 redefinition of the metre, c is fixed by definition at exactly 299 792 458 m/s (CODATA). The metre is defined as the distance light travels in 1/299 792 458 second — making c a defined constant, not a measured one.",
      },
    ],
  },
  id: {
    title: "Kalkulator Frekuensi Sinyal",
    short: "Konversi antara frekuensi, periode, dan panjang gelombang.",
    description:
      "Kalkulator frekuensi sinyal gratis. Konversi antara frekuensi (Hz), periode (s), dan panjang gelombang (m) untuk gelombang elektromagnetik apa pun.",
    keywords: ["frekuensi sinyal", "periode gelombang", "panjang gelombang", "Hz", "gelombang elektromagnetik"],
    inputs: {
      mode: { label: "Calculation mode", help: "Choose which quantity you want to compute from the input value." },
      value: { label: "Input value", help: "Frequency in Hz, wavelength in metres, or period in seconds — depending on the mode selected." },
      medium: { label: "Medium", help: "Vacuum uses the speed of light (electromagnetic). Air and water use the speed of sound (acoustic)." },
    },
    outputs: {
      frequencyHz: { label: "Frequency", help: "Frequency in hertz (cycles per second)." },
      frequencyDisplay: { label: "Frequency (auto-scaled)", help: "Same frequency expressed in kHz, MHz, GHz or THz for readability." },
      wavelengthM: { label: "Wavelength", help: "Wavelength in metres." },
      wavelengthDisplay: { label: "Wavelength (auto-scaled)", help: "Wavelength in km/m/cm/mm/µm/nm depending on magnitude." },
      periodS: { label: "Period", help: "Time of one complete cycle: T = 1 / f." },
      waveSpeedMs: { label: "Wave speed", help: "Propagation speed used for this calculation (m/s)." },
      waveType: { label: "Wave type", help: "Electromagnetic (vacuum) or acoustic (air/water)." },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "Frequency → wavelength",
        "wavelength-to-frequency": "Wavelength → frequency",
        "period-to-frequency": "Period → frequency",
      },
      medium: {
        vacuum: "Vacuum / free space (c = 299 792 458 m/s)",
        air: "Air, 20 °C (sound, 343 m/s)",
        water: "Water, 20 °C (sound, 1480 m/s)",
      },
    },
    errors: {
      nonPositive: "Value must be greater than zero.",
    },
    faq: [
      {
        q: "How do I convert frequency to wavelength?",
        a: "Use λ = v / f, where v is the wave speed in the medium and f is the frequency. For electromagnetic waves in vacuum, v = c = 299 792 458 m/s. Example: at 2.4 GHz (WiFi), λ = 299 792 458 / 2.4×10⁹ ≈ 0.125 m = 12.5 cm.",
      },
      {
        q: "What's the difference between electromagnetic and acoustic waves?",
        a: "Electromagnetic waves (radio, microwave, light) travel through vacuum at c ≈ 3×10⁸ m/s. Acoustic waves (sound) need a material medium and travel ~343 m/s in air or ~1480 m/s in fresh water — about a million times slower. Using the wrong medium for a wave type will give a wavelength that's off by ~10⁶.",
      },
      {
        q: "How is the period of a signal calculated?",
        a: "Period T is the time for one full cycle: T = 1 / f. A 1 kHz tone has a period of 1 ms; a 100 MHz FM radio signal has a period of 10 ns.",
      },
      {
        q: "Why is the speed of light in vacuum exact?",
        a: "Since the 1983 redefinition of the metre, c is fixed by definition at exactly 299 792 458 m/s (CODATA). The metre is defined as the distance light travels in 1/299 792 458 second — making c a defined constant, not a measured one.",
      },
    ],
  },


  tr: {
    title: "Sinyal Frekansı ve Dalga Boyu Hesaplayıcı",
    short: "Elektromanyetik veya akustik dalgalar için frekans, dalga boyu ve periyot arasında dönüşüm yapın.",
    description:
      "Ücretsiz dalga boyu-frekans hesaplayıcısı. Frekans (Hz/kHz/MHz/GHz/THz), dalga boyu (km/m/cm/mm/µm) ve periyot (saniye) arasında dönüşüm yapın. Elektromanyetik dalgalar (radyo, WiFi, ışık) için vakum, ses için hava/su seçin.",
    keywords: [
      "frekans dalga boyu",
      "dalga boyu hesaplayıcı",
      "RF hesaplayıcı",
      "radyo dalga boyu",
      "WiFi frekansı",
      "ışık hızı",
      "ses hızı",
      "periyot hesaplama",
    ],
    inputs: {
      mode: { label: "Hesaplama modu", help: "Giriş değerinden hangi büyüklüğü hesaplamak istediğinizi seçin." },
      value: { label: "Giriş değeri", help: "Moda göre frekans (Hz), dalga boyu (m) veya periyot (s)." },
      medium: { label: "Ortam", help: "Vakum ışık hızını kullanır (elektromanyetik). Hava ve su ses hızını kullanır (akustik)." },
    },
    outputs: {
      frequencyHz: { label: "Frekans", help: "Hertz cinsinden frekans (saniyedeki çevrim sayısı)." },
      frequencyDisplay: { label: "Frekans (ölçeklenmiş)", help: "Okunabilirlik için kHz/MHz/GHz/THz olarak frekans." },
      wavelengthM: { label: "Dalga boyu", help: "Metre cinsinden dalga boyu." },
      wavelengthDisplay: { label: "Dalga boyu (ölçeklenmiş)", help: "Büyüklüğe göre km/m/cm/mm/µm/nm cinsinden dalga boyu." },
      periodS: { label: "Periyot", help: "Bir tam çevrimin süresi: T = 1 / f." },
      waveSpeedMs: { label: "Dalga hızı", help: "Hesaplamada kullanılan yayılma hızı (m/s)." },
      waveType: { label: "Dalga türü", help: "Elektromanyetik (vakum) veya akustik (hava/su)." },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "Frekans → dalga boyu",
        "wavelength-to-frequency": "Dalga boyu → frekans",
        "period-to-frequency": "Periyot → frekans",
      },
      medium: {
        vacuum: "Vakum / boş uzay (c = 299 792 458 m/s)",
        air: "Hava, 20 °C (ses, 343 m/s)",
        water: "Su, 20 °C (ses, 1480 m/s)",
      },
    },
    errors: { nonPositive: "Değer sıfırdan büyük olmalıdır." },
    faq: [
      {
        q: "Frekans dalga boyuna nasıl çevrilir?",
        a: "λ = v / f formülü kullanılır. Vakumda elektromanyetik dalgalar için v = c = 299 792 458 m/s. Örnek: 2,4 GHz WiFi → λ ≈ 12,5 cm.",
      },
      {
        q: "Elektromanyetik ve akustik dalgalar arasındaki fark nedir?",
        a: "Elektromanyetik dalgalar vakumda c ≈ 3×10⁸ m/s ile yayılır. Akustik dalgalar (ses) madde gerektirir, havada 343 m/s ve tatlı suda 1480 m/s ile — yaklaşık bir milyon kat daha yavaş.",
      },
      {
        q: "Bir sinyalin periyodu nasıl hesaplanır?",
        a: "T = 1 / f. 1 kHz'lik bir tonun periyodu 1 ms'dir; 100 MHz FM sinyali için 10 ns.",
      },
    ],
  },

  de: {
    title: "Signalfrequenz und Wellenlänge Rechner",
    short: "Frequenz, Wellenlänge und Periode für elektromagnetische oder akustische Wellen umrechnen.",
    description:
      "Kostenloser Rechner für Wellenlänge und Frequenz. Rechnen Sie zwischen Frequenz (Hz/kHz/MHz/GHz/THz), Wellenlänge (km/m/cm/mm/µm) und Periode (Sekunden) um. Vakuum für elektromagnetische Wellen (Funk, WiFi, Licht) oder Luft/Wasser für Schall.",
    keywords: [
      "Frequenz Wellenlänge",
      "Wellenlängenrechner",
      "HF-Rechner",
      "Funkwellenlänge",
      "WiFi-Frequenz",
      "Lichtgeschwindigkeit",
      "Schallgeschwindigkeit",
      "Periode berechnen",
    ],
    inputs: {
      mode: { label: "Berechnungsmodus", help: "Wählen Sie, welche Größe aus dem Eingabewert berechnet werden soll." },
      value: { label: "Eingabewert", help: "Frequenz (Hz), Wellenlänge (m) oder Periode (s) — je nach Modus." },
      medium: { label: "Medium", help: "Vakuum nutzt die Lichtgeschwindigkeit (elektromagnetisch). Luft/Wasser nutzen die Schallgeschwindigkeit (akustisch)." },
    },
    outputs: {
      frequencyHz: { label: "Frequenz", help: "Frequenz in Hertz." },
      frequencyDisplay: { label: "Frequenz (skaliert)", help: "Frequenz in kHz/MHz/GHz/THz für bessere Lesbarkeit." },
      wavelengthM: { label: "Wellenlänge", help: "Wellenlänge in Metern." },
      wavelengthDisplay: { label: "Wellenlänge (skaliert)", help: "Wellenlänge in km/m/cm/mm/µm/nm je nach Größenordnung." },
      periodS: { label: "Periode", help: "Dauer einer vollen Schwingung: T = 1 / f." },
      waveSpeedMs: { label: "Wellengeschwindigkeit", help: "Verwendete Ausbreitungsgeschwindigkeit (m/s)." },
      waveType: { label: "Wellentyp", help: "Elektromagnetisch (Vakuum) oder akustisch (Luft/Wasser)." },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "Frequenz → Wellenlänge",
        "wavelength-to-frequency": "Wellenlänge → Frequenz",
        "period-to-frequency": "Periode → Frequenz",
      },
      medium: {
        vacuum: "Vakuum / freier Raum (c = 299 792 458 m/s)",
        air: "Luft, 20 °C (Schall, 343 m/s)",
        water: "Wasser, 20 °C (Schall, 1480 m/s)",
      },
    },
    errors: { nonPositive: "Wert muss größer als null sein." },
    faq: [
      { q: "Wie rechne ich Frequenz in Wellenlänge um?", a: "λ = v / f. Für elektromagnetische Wellen im Vakuum gilt v = c = 299 792 458 m/s. Beispiel: 2,4 GHz (WiFi) → λ ≈ 12,5 cm." },
      { q: "Unterschied elektromagnetisch und akustisch?", a: "Elektromagnetische Wellen breiten sich im Vakuum mit c ≈ 3×10⁸ m/s aus. Schallwellen brauchen ein Medium (343 m/s Luft, 1480 m/s Süßwasser)." },
      { q: "Wie wird die Periode berechnet?", a: "T = 1 / f. 1 kHz → 1 ms; 100 MHz → 10 ns." },
    ],
  },

  fr: {
    title: "Calculateur Fréquence et Longueur d'onde",
    short: "Convertir entre fréquence, longueur d'onde et période pour ondes électromagnétiques ou acoustiques.",
    description:
      "Calculateur gratuit longueur d'onde / fréquence. Conversion entre fréquence (Hz/kHz/MHz/GHz/THz), longueur d'onde (km/m/cm/mm/µm) et période (s). Vide pour les ondes électromagnétiques (radio, WiFi, lumière) ou air/eau pour le son.",
    keywords: [
      "fréquence longueur d'onde",
      "calculateur longueur d'onde",
      "calculateur RF",
      "longueur d'onde radio",
      "fréquence WiFi",
      "vitesse de la lumière",
      "vitesse du son",
      "période",
    ],
    inputs: {
      mode: { label: "Mode de calcul", help: "Choisissez quelle grandeur calculer à partir de la valeur saisie." },
      value: { label: "Valeur d'entrée", help: "Fréquence (Hz), longueur d'onde (m) ou période (s) — selon le mode." },
      medium: { label: "Milieu", help: "Vide utilise la vitesse de la lumière (EM). Air/eau utilisent la vitesse du son (acoustique)." },
    },
    outputs: {
      frequencyHz: { label: "Fréquence", help: "Fréquence en hertz." },
      frequencyDisplay: { label: "Fréquence (auto-échelle)", help: "Fréquence en kHz/MHz/GHz/THz." },
      wavelengthM: { label: "Longueur d'onde", help: "Longueur d'onde en mètres." },
      wavelengthDisplay: { label: "Longueur d'onde (auto-échelle)", help: "En km/m/cm/mm/µm/nm selon l'ordre de grandeur." },
      periodS: { label: "Période", help: "Durée d'un cycle complet : T = 1 / f." },
      waveSpeedMs: { label: "Vitesse de l'onde", help: "Vitesse de propagation utilisée (m/s)." },
      waveType: { label: "Type d'onde", help: "Électromagnétique (vide) ou acoustique (air/eau)." },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "Fréquence → longueur d'onde",
        "wavelength-to-frequency": "Longueur d'onde → fréquence",
        "period-to-frequency": "Période → fréquence",
      },
      medium: {
        vacuum: "Vide / espace libre (c = 299 792 458 m/s)",
        air: "Air, 20 °C (son, 343 m/s)",
        water: "Eau, 20 °C (son, 1480 m/s)",
      },
    },
    errors: { nonPositive: "La valeur doit être supérieure à zéro." },
    faq: [
      { q: "Comment convertir fréquence en longueur d'onde ?", a: "λ = v / f. Pour les ondes EM dans le vide, v = c = 299 792 458 m/s. Exemple : 2,4 GHz (WiFi) → λ ≈ 12,5 cm." },
      { q: "Différence entre ondes EM et acoustiques ?", a: "Les ondes EM se propagent dans le vide à c ≈ 3×10⁸ m/s. Le son a besoin d'un milieu : 343 m/s dans l'air, 1480 m/s dans l'eau douce." },
      { q: "Comment se calcule la période ?", a: "T = 1 / f. 1 kHz → 1 ms ; 100 MHz → 10 ns." },
    ],
  },

  es: {
    title: "Calculadora de Frecuencia y Longitud de Onda",
    short: "Convierte entre frecuencia, longitud de onda y período para ondas electromagnéticas o acústicas.",
    description:
      "Calculadora gratuita de longitud de onda y frecuencia. Convierte entre frecuencia (Hz/kHz/MHz/GHz/THz), longitud de onda (km/m/cm/mm/µm) y período (segundos). Vacío para ondas electromagnéticas (radio, WiFi, luz) o aire/agua para sonido.",
    keywords: [
      "frecuencia longitud de onda",
      "calculadora longitud de onda",
      "calculadora RF",
      "longitud de onda radio",
      "frecuencia WiFi",
      "velocidad de la luz",
      "velocidad del sonido",
      "período",
    ],
    inputs: {
      mode: { label: "Modo de cálculo", help: "Elige qué magnitud calcular a partir del valor introducido." },
      value: { label: "Valor de entrada", help: "Frecuencia (Hz), longitud de onda (m) o período (s) según el modo." },
      medium: { label: "Medio", help: "Vacío usa la velocidad de la luz (EM). Aire/agua usan la velocidad del sonido (acústicas)." },
    },
    outputs: {
      frequencyHz: { label: "Frecuencia", help: "Frecuencia en hertz." },
      frequencyDisplay: { label: "Frecuencia (escalada)", help: "Frecuencia en kHz/MHz/GHz/THz." },
      wavelengthM: { label: "Longitud de onda", help: "Longitud de onda en metros." },
      wavelengthDisplay: { label: "Longitud de onda (escalada)", help: "En km/m/cm/mm/µm/nm según orden de magnitud." },
      periodS: { label: "Período", help: "Duración de un ciclo completo: T = 1 / f." },
      waveSpeedMs: { label: "Velocidad de la onda", help: "Velocidad de propagación usada (m/s)." },
      waveType: { label: "Tipo de onda", help: "Electromagnética (vacío) o acústica (aire/agua)." },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "Frecuencia → longitud de onda",
        "wavelength-to-frequency": "Longitud de onda → frecuencia",
        "period-to-frequency": "Período → frecuencia",
      },
      medium: {
        vacuum: "Vacío / espacio libre (c = 299 792 458 m/s)",
        air: "Aire, 20 °C (sonido, 343 m/s)",
        water: "Agua, 20 °C (sonido, 1480 m/s)",
      },
    },
    errors: { nonPositive: "El valor debe ser mayor que cero." },
    faq: [
      { q: "¿Cómo se convierte frecuencia a longitud de onda?", a: "λ = v / f. Para EM en vacío, v = c = 299 792 458 m/s. Ejemplo: 2,4 GHz (WiFi) → λ ≈ 12,5 cm." },
      { q: "¿Diferencia entre ondas EM y acústicas?", a: "Las EM viajan en el vacío a c ≈ 3×10⁸ m/s. El sonido necesita un medio: 343 m/s en aire, 1480 m/s en agua dulce." },
      { q: "¿Cómo se calcula el período?", a: "T = 1 / f. 1 kHz → 1 ms; 100 MHz → 10 ns." },
    ],
  },

  it: {
    title: "Calcolatore Frequenza e Lunghezza d'Onda",
    short: "Converti tra frequenza, lunghezza d'onda e periodo per onde elettromagnetiche o acustiche.",
    description:
      "Calcolatore gratuito di lunghezza d'onda e frequenza. Conversione tra frequenza (Hz/kHz/MHz/GHz/THz), lunghezza d'onda (km/m/cm/mm/µm) e periodo (s). Vuoto per onde elettromagnetiche (radio, WiFi, luce) o aria/acqua per il suono.",
    keywords: [
      "frequenza lunghezza d'onda",
      "calcolatore lunghezza d'onda",
      "calcolatore RF",
      "lunghezza d'onda radio",
      "frequenza WiFi",
      "velocità della luce",
      "velocità del suono",
      "periodo",
    ],
    inputs: {
      mode: { label: "Modalità di calcolo", help: "Scegli quale grandezza calcolare dal valore inserito." },
      value: { label: "Valore di ingresso", help: "Frequenza (Hz), lunghezza d'onda (m) o periodo (s) in base alla modalità." },
      medium: { label: "Mezzo", help: "Il vuoto usa la velocità della luce (EM). Aria/acqua usano la velocità del suono (acustica)." },
    },
    outputs: {
      frequencyHz: { label: "Frequenza", help: "Frequenza in hertz." },
      frequencyDisplay: { label: "Frequenza (scalata)", help: "Frequenza in kHz/MHz/GHz/THz." },
      wavelengthM: { label: "Lunghezza d'onda", help: "Lunghezza d'onda in metri." },
      wavelengthDisplay: { label: "Lunghezza d'onda (scalata)", help: "In km/m/cm/mm/µm/nm a seconda dell'ordine di grandezza." },
      periodS: { label: "Periodo", help: "Durata di un ciclo completo: T = 1 / f." },
      waveSpeedMs: { label: "Velocità dell'onda", help: "Velocità di propagazione usata (m/s)." },
      waveType: { label: "Tipo di onda", help: "Elettromagnetica (vuoto) o acustica (aria/acqua)." },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "Frequenza → lunghezza d'onda",
        "wavelength-to-frequency": "Lunghezza d'onda → frequenza",
        "period-to-frequency": "Periodo → frequenza",
      },
      medium: {
        vacuum: "Vuoto / spazio libero (c = 299 792 458 m/s)",
        air: "Aria, 20 °C (suono, 343 m/s)",
        water: "Acqua, 20 °C (suono, 1480 m/s)",
      },
    },
    errors: { nonPositive: "Il valore deve essere maggiore di zero." },
    faq: [
      { q: "Come si converte frequenza in lunghezza d'onda?", a: "λ = v / f. Per onde EM nel vuoto, v = c = 299 792 458 m/s. Esempio: 2,4 GHz (WiFi) → λ ≈ 12,5 cm." },
      { q: "Differenza tra onde EM e acustiche?", a: "Le EM si propagano nel vuoto a c ≈ 3×10⁸ m/s. Il suono richiede un mezzo: 343 m/s in aria, 1480 m/s in acqua dolce." },
      { q: "Come si calcola il periodo?", a: "T = 1 / f. 1 kHz → 1 ms; 100 MHz → 10 ns." },
    ],
  },

  ar: {
    title: "حاسبة تردد وطول موجة الإشارة",
    short: "حوّل بين التردد وطول الموجة والدور للموجات الكهرومغناطيسية أو الصوتية.",
    description:
      "حاسبة مجانية لتحويل التردد وطول الموجة. تحويل بين التردد (Hz/kHz/MHz/GHz/THz) وطول الموجة (km/m/cm/mm/µm) والدور (ثانية). الفراغ للموجات الكهرومغناطيسية (راديو، WiFi، ضوء) أو الهواء/الماء للصوت.",
    keywords: [
      "تردد طول الموجة",
      "حاسبة طول الموجة",
      "حاسبة RF",
      "طول موجة الراديو",
      "تردد WiFi",
      "سرعة الضوء",
      "سرعة الصوت",
      "حساب الدور",
    ],
    inputs: {
      mode: { label: "وضع الحساب", help: "اختر الكمية المراد حسابها من القيمة المدخلة." },
      value: { label: "القيمة المدخلة", help: "تردد (Hz)، طول موجة (m) أو دور (s) حسب الوضع." },
      medium: { label: "الوسط", help: "الفراغ يستخدم سرعة الضوء (كهرومغناطيسي). الهواء/الماء يستخدمان سرعة الصوت (صوتي)." },
    },
    outputs: {
      frequencyHz: { label: "التردد", help: "التردد بالهرتز." },
      frequencyDisplay: { label: "التردد (متدرج)", help: "التردد بـ kHz/MHz/GHz/THz للقراءة." },
      wavelengthM: { label: "طول الموجة", help: "طول الموجة بالمتر." },
      wavelengthDisplay: { label: "طول الموجة (متدرج)", help: "بـ km/m/cm/mm/µm/nm حسب الترتيب." },
      periodS: { label: "الدور", help: "زمن دورة كاملة: T = 1 / f." },
      waveSpeedMs: { label: "سرعة الموجة", help: "سرعة الانتشار المستخدمة (m/s)." },
      waveType: { label: "نوع الموجة", help: "كهرومغناطيسية (فراغ) أو صوتية (هواء/ماء)." },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "تردد → طول موجة",
        "wavelength-to-frequency": "طول موجة → تردد",
        "period-to-frequency": "دور → تردد",
      },
      medium: {
        vacuum: "فراغ / فضاء حر (c = 299 792 458 m/s)",
        air: "هواء، 20 °م (صوت، 343 m/s)",
        water: "ماء، 20 °م (صوت، 1480 m/s)",
      },
    },
    errors: { nonPositive: "يجب أن تكون القيمة أكبر من الصفر." },
    faq: [
      { q: "كيف أحول التردد إلى طول موجة؟", a: "λ = v / f. للموجات الكهرومغناطيسية في الفراغ v = c = 299 792 458 m/s. مثال: 2.4 GHz (WiFi) → λ ≈ 12.5 سم." },
      { q: "الفرق بين الموجات الكهرومغناطيسية والصوتية؟", a: "الكهرومغناطيسية تنتشر في الفراغ بسرعة c ≈ 3×10⁸ m/s. الصوت يحتاج وسطاً: 343 m/s في الهواء و1480 m/s في الماء العذب." },
      { q: "كيف يُحسب دور الإشارة؟", a: "T = 1 / f. 1 kHz → 1 ms؛ 100 MHz → 10 ns." },
    ],
  },

  ru: {
    title: "Калькулятор частоты и длины волны сигнала",
    short: "Преобразование между частотой, длиной волны и периодом для электромагнитных или акустических волн.",
    description:
      "Бесплатный калькулятор длины волны и частоты. Преобразование между частотой (Гц/кГц/МГц/ГГц/ТГц), длиной волны (км/м/см/мм/мкм) и периодом (с). Вакуум для электромагнитных волн (радио, WiFi, свет) или воздух/вода для звука.",
    keywords: [
      "частота длина волны",
      "калькулятор длины волны",
      "РЧ калькулятор",
      "радио длина волны",
      "частота WiFi",
      "скорость света",
      "скорость звука",
      "период",
    ],
    inputs: {
      mode: { label: "Режим расчёта", help: "Выберите, какую величину рассчитать из вводимого значения." },
      value: { label: "Входное значение", help: "Частота (Гц), длина волны (м) или период (с) в зависимости от режима." },
      medium: { label: "Среда", help: "Вакуум использует скорость света (ЭМ). Воздух/вода — скорость звука (акустика)." },
    },
    outputs: {
      frequencyHz: { label: "Частота", help: "Частота в герцах." },
      frequencyDisplay: { label: "Частота (масштаб)", help: "Частота в кГц/МГц/ГГц/ТГц." },
      wavelengthM: { label: "Длина волны", help: "Длина волны в метрах." },
      wavelengthDisplay: { label: "Длина волны (масштаб)", help: "В км/м/см/мм/мкм/нм по порядку величины." },
      periodS: { label: "Период", help: "Время одного полного цикла: T = 1 / f." },
      waveSpeedMs: { label: "Скорость волны", help: "Используемая скорость распространения (м/с)." },
      waveType: { label: "Тип волны", help: "Электромагнитная (вакуум) или акустическая (воздух/вода)." },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "Частота → длина волны",
        "wavelength-to-frequency": "Длина волны → частота",
        "period-to-frequency": "Период → частота",
      },
      medium: {
        vacuum: "Вакуум / свободное пространство (c = 299 792 458 м/с)",
        air: "Воздух, 20 °C (звук, 343 м/с)",
        water: "Вода, 20 °C (звук, 1480 м/с)",
      },
    },
    errors: { nonPositive: "Значение должно быть больше нуля." },
    faq: [
      { q: "Как пересчитать частоту в длину волны?", a: "λ = v / f. Для ЭМ-волн в вакууме v = c = 299 792 458 м/с. Пример: 2,4 ГГц (WiFi) → λ ≈ 12,5 см." },
      { q: "Чем отличаются ЭМ и акустические волны?", a: "ЭМ-волны распространяются в вакууме со скоростью c ≈ 3×10⁸ м/с. Звуку нужна среда: 343 м/с в воздухе, 1480 м/с в пресной воде." },
      { q: "Как рассчитывается период?", a: "T = 1 / f. 1 кГц → 1 мс; 100 МГц → 10 нс." },
    ],
  },

  zh: {
    title: "信号频率与波长计算器",
    short: "在电磁波或声波的频率、波长和周期之间进行换算。",
    description:
      "免费波长-频率换算器。在频率（Hz/kHz/MHz/GHz/THz）、波长（km/m/cm/mm/µm）和周期（秒）之间换算。电磁波（无线电、WiFi、光）选真空，声波选空气/水。",
    keywords: [
      "频率波长换算",
      "波长计算器",
      "射频计算器",
      "无线电波长",
      "WiFi 频率",
      "光速",
      "声速",
      "周期",
    ],
    inputs: {
      mode: { label: "计算模式", help: "选择要从输入值计算的物理量。" },
      value: { label: "输入值", help: "根据模式输入频率（Hz）、波长（m）或周期（s）。" },
      medium: { label: "介质", help: "真空使用光速（电磁）。空气和水使用声速（声学）。" },
    },
    outputs: {
      frequencyHz: { label: "频率", help: "以赫兹为单位的频率。" },
      frequencyDisplay: { label: "频率（自动单位）", help: "以 kHz/MHz/GHz/THz 表示。" },
      wavelengthM: { label: "波长", help: "以米为单位的波长。" },
      wavelengthDisplay: { label: "波长（自动单位）", help: "根据数量级以 km/m/cm/mm/µm/nm 表示。" },
      periodS: { label: "周期", help: "一个完整周期的时间：T = 1 / f。" },
      waveSpeedMs: { label: "波速", help: "本次计算使用的传播速度（m/s）。" },
      waveType: { label: "波类型", help: "电磁波（真空）或声波（空气/水）。" },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "频率 → 波长",
        "wavelength-to-frequency": "波长 → 频率",
        "period-to-frequency": "周期 → 频率",
      },
      medium: {
        vacuum: "真空 / 自由空间（c = 299 792 458 m/s）",
        air: "空气，20 °C（声速 343 m/s）",
        water: "水，20 °C（声速 1480 m/s）",
      },
    },
    errors: { nonPositive: "数值必须大于零。" },
    faq: [
      { q: "如何把频率换算成波长？", a: "λ = v / f。真空中电磁波 v = c = 299 792 458 m/s。例：2.4 GHz（WiFi）→ λ ≈ 12.5 cm。" },
      { q: "电磁波与声波有何不同？", a: "电磁波在真空中以 c ≈ 3×10⁸ m/s 传播；声波需要介质：空气 343 m/s，淡水 1480 m/s。" },
      { q: "周期如何计算？", a: "T = 1 / f。1 kHz → 1 ms；100 MHz → 10 ns。" },
    ],
  },

  ja: {
    title: "信号周波数・波長計算機",
    short: "電磁波または音響波の周波数・波長・周期を相互変換します。",
    description:
      "無料の波長-周波数計算機。周波数 (Hz/kHz/MHz/GHz/THz)・波長 (km/m/cm/mm/µm)・周期 (s) を相互変換します。電磁波 (電波、WiFi、光) は真空、音波は空気/水を選択します。",
    keywords: [
      "周波数 波長",
      "波長計算機",
      "RF 計算機",
      "電波 波長",
      "WiFi 周波数",
      "光速",
      "音速",
      "周期",
    ],
    inputs: {
      mode: { label: "計算モード", help: "入力値から計算したい量を選択します。" },
      value: { label: "入力値", help: "モードに応じて周波数 (Hz)・波長 (m)・周期 (s)。" },
      medium: { label: "媒質", help: "真空は光速 (電磁波)、空気/水は音速 (音響波) を使用します。" },
    },
    outputs: {
      frequencyHz: { label: "周波数", help: "ヘルツ単位の周波数。" },
      frequencyDisplay: { label: "周波数 (自動単位)", help: "kHz/MHz/GHz/THz に自動変換。" },
      wavelengthM: { label: "波長", help: "メートル単位の波長。" },
      wavelengthDisplay: { label: "波長 (自動単位)", help: "桁に応じて km/m/cm/mm/µm/nm。" },
      periodS: { label: "周期", help: "1 サイクルの時間：T = 1 / f。" },
      waveSpeedMs: { label: "波の速度", help: "計算に用いた伝搬速度 (m/s)。" },
      waveType: { label: "波の種類", help: "電磁波 (真空) または音響波 (空気/水)。" },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "周波数 → 波長",
        "wavelength-to-frequency": "波長 → 周波数",
        "period-to-frequency": "周期 → 周波数",
      },
      medium: {
        vacuum: "真空 / 自由空間 (c = 299 792 458 m/s)",
        air: "空気、20 °C (音速 343 m/s)",
        water: "水、20 °C (音速 1480 m/s)",
      },
    },
    errors: { nonPositive: "値は 0 より大きい必要があります。" },
    faq: [
      { q: "周波数を波長に変換するには？", a: "λ = v / f。真空中の電磁波では v = c = 299 792 458 m/s。例：2.4 GHz (WiFi) → λ ≈ 12.5 cm。" },
      { q: "電磁波と音響波の違いは？", a: "電磁波は真空中を c ≈ 3×10⁸ m/s で進みます。音は媒質が必要で空気 343 m/s、淡水 1480 m/s です。" },
      { q: "周期はどう計算しますか？", a: "T = 1 / f。1 kHz → 1 ms、100 MHz → 10 ns。" },
    ],
  },

  ko: {
    title: "신호 주파수 및 파장 계산기",
    short: "전자기파 또는 음파의 주파수, 파장, 주기를 상호 변환합니다.",
    description:
      "무료 파장-주파수 변환기. 주파수(Hz/kHz/MHz/GHz/THz), 파장(km/m/cm/mm/µm), 주기(초) 사이에서 변환합니다. 전자기파(라디오, WiFi, 빛)는 진공, 음파는 공기/물을 선택합니다.",
    keywords: [
      "주파수 파장",
      "파장 계산기",
      "RF 계산기",
      "전파 파장",
      "WiFi 주파수",
      "빛의 속도",
      "음속",
      "주기",
    ],
    inputs: {
      mode: { label: "계산 모드", help: "입력값에서 계산할 양을 선택하세요." },
      value: { label: "입력값", help: "모드에 따라 주파수(Hz), 파장(m), 또는 주기(s)." },
      medium: { label: "매질", help: "진공은 빛의 속도(전자기), 공기/물은 음속(음파)을 사용합니다." },
    },
    outputs: {
      frequencyHz: { label: "주파수", help: "헤르츠 단위 주파수." },
      frequencyDisplay: { label: "주파수 (자동 단위)", help: "kHz/MHz/GHz/THz로 표시." },
      wavelengthM: { label: "파장", help: "미터 단위 파장." },
      wavelengthDisplay: { label: "파장 (자동 단위)", help: "크기에 따라 km/m/cm/mm/µm/nm." },
      periodS: { label: "주기", help: "한 사이클의 시간: T = 1 / f." },
      waveSpeedMs: { label: "파동 속도", help: "계산에 사용된 전파 속도 (m/s)." },
      waveType: { label: "파동 유형", help: "전자기파(진공) 또는 음파(공기/물)." },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "주파수 → 파장",
        "wavelength-to-frequency": "파장 → 주파수",
        "period-to-frequency": "주기 → 주파수",
      },
      medium: {
        vacuum: "진공 / 자유공간 (c = 299 792 458 m/s)",
        air: "공기, 20 °C (음속 343 m/s)",
        water: "물, 20 °C (음속 1480 m/s)",
      },
    },
    errors: { nonPositive: "값은 0보다 커야 합니다." },
    faq: [
      { q: "주파수를 파장으로 변환하려면?", a: "λ = v / f. 진공의 전자기파는 v = c = 299 792 458 m/s. 예: 2.4 GHz (WiFi) → λ ≈ 12.5 cm." },
      { q: "전자기파와 음파의 차이는?", a: "전자기파는 진공에서 c ≈ 3×10⁸ m/s로 전파됩니다. 음파는 매질이 필요하며 공기 343 m/s, 담수 1480 m/s입니다." },
      { q: "주기는 어떻게 계산하나요?", a: "T = 1 / f. 1 kHz → 1 ms; 100 MHz → 10 ns." },
    ],
  },

  hi: {
    title: "सिग्नल आवृत्ति और तरंगदैर्ध्य कैलकुलेटर",
    short: "विद्युतचुम्बकीय या ध्वनिक तरंगों के लिए आवृत्ति, तरंगदैर्ध्य और आवर्तकाल के बीच रूपांतरण करें।",
    description:
      "निःशुल्क तरंगदैर्ध्य-आवृत्ति कैलकुलेटर। आवृत्ति (Hz/kHz/MHz/GHz/THz), तरंगदैर्ध्य (km/m/cm/mm/µm) और आवर्तकाल (सेकंड) के बीच रूपांतरण करें। विद्युतचुम्बकीय तरंगों (रेडियो, WiFi, प्रकाश) के लिए निर्वात या ध्वनि के लिए हवा/पानी चुनें।",
    keywords: [
      "आवृत्ति तरंगदैर्ध्य",
      "तरंगदैर्ध्य कैलकुलेटर",
      "RF कैलकुलेटर",
      "रेडियो तरंगदैर्ध्य",
      "WiFi आवृत्ति",
      "प्रकाश की गति",
      "ध्वनि की गति",
      "आवर्तकाल",
    ],
    inputs: {
      mode: { label: "गणना मोड", help: "इनपुट मान से कौन सी राशि गणना करनी है चुनें।" },
      value: { label: "इनपुट मान", help: "मोड के अनुसार आवृत्ति (Hz), तरंगदैर्ध्य (m), या आवर्तकाल (s)।" },
      medium: { label: "माध्यम", help: "निर्वात प्रकाश की गति का उपयोग करता है (विद्युतचुम्बकीय)। हवा/पानी ध्वनि की गति का उपयोग करते हैं।" },
    },
    outputs: {
      frequencyHz: { label: "आवृत्ति", help: "हर्ट्ज़ में आवृत्ति।" },
      frequencyDisplay: { label: "आवृत्ति (स्केल्ड)", help: "kHz/MHz/GHz/THz में आवृत्ति।" },
      wavelengthM: { label: "तरंगदैर्ध्य", help: "मीटर में तरंगदैर्ध्य।" },
      wavelengthDisplay: { label: "तरंगदैर्ध्य (स्केल्ड)", help: "परिमाण के अनुसार km/m/cm/mm/µm/nm।" },
      periodS: { label: "आवर्तकाल", help: "एक पूर्ण चक्र का समय: T = 1 / f।" },
      waveSpeedMs: { label: "तरंग गति", help: "गणना में प्रयुक्त संचरण गति (m/s)।" },
      waveType: { label: "तरंग प्रकार", help: "विद्युतचुम्बकीय (निर्वात) या ध्वनिक (हवा/पानी)।" },
    },
    options: {
      mode: {
        "frequency-to-wavelength": "आवृत्ति → तरंगदैर्ध्य",
        "wavelength-to-frequency": "तरंगदैर्ध्य → आवृत्ति",
        "period-to-frequency": "आवर्तकाल → आवृत्ति",
      },
      medium: {
        vacuum: "निर्वात / मुक्त अंतरिक्ष (c = 299 792 458 m/s)",
        air: "हवा, 20 °C (ध्वनि, 343 m/s)",
        water: "पानी, 20 °C (ध्वनि, 1480 m/s)",
      },
    },
    errors: { nonPositive: "मान शून्य से अधिक होना चाहिए।" },
    faq: [
      { q: "आवृत्ति को तरंगदैर्ध्य में कैसे बदलें?", a: "λ = v / f। निर्वात में विद्युतचुम्बकीय तरंगों के लिए v = c = 299 792 458 m/s। उदाहरण: 2.4 GHz (WiFi) → λ ≈ 12.5 सेमी।" },
      { q: "विद्युतचुम्बकीय और ध्वनिक तरंगों में अंतर?", a: "विद्युतचुम्बकीय तरंगें निर्वात में c ≈ 3×10⁸ m/s पर यात्रा करती हैं। ध्वनि को माध्यम चाहिए: हवा 343 m/s, मीठा पानी 1480 m/s।" },
      { q: "आवर्तकाल की गणना कैसे होती है?", a: "T = 1 / f। 1 kHz → 1 ms; 100 MHz → 10 ns।" },
    ],
  },
};

export default i18n;
