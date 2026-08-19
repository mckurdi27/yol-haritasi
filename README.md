[README.md](https://github.com/user-attachments/files/31196731/README.md)
# 📖 Bir Müslümanın Yol Haritası

# 16 Dilli Günlük Dinî Bilgi Rehberi 

# Bu sıra tüm 30 gün boyunca DEĞİŞMEZ. 
16 dil ve sıralaması değişmez ama herzaman seçili dil en üstte gösterilir 
KAYNAK DOSYALAR herzaman 2. sırada olacak
Bunu  ve days.json dosyasını ana şablon olarak kullan
İstenen değişiklik için sadece değiştirelecek bölümle ilgili değişikliği söyle
değişikliği onayladığım takdirde
TAM KOD BLOĞU olarak
Kopyala Yapıştır yapacak şekilde ver, ekstra düzenlemem gerekmesin
---

# Sistem
- Her gün 19 yeni soru
- Sorular kesintisiz numaralandırılır
- 16 dil ve sıralaması değişmez 
- Seçilen dil en üstte gösterilir
- Her sorunun altında önemli kaynaklar bulunur
- Günlük içerikler ayrı JSON dosyalarında tutulur
- Her günün başlığı ve alt başlığı günlük JSON dosyasında bulunur

# Günlük Dosyalar
Her günün içeriği:`data/day-XX.json`şeklinde eklenir.
Örneğin:

`data/day-01.json` → 1–19. sorular  
`data/day-02.json` → 20–38. sorular  
`data/day-03.json` → 39–57. sorular  
`data/day-04.json` → 58–76. sorular  

Her günlük JSON dosyası days.json dosyası esas alınarak 
oradaki dil sırasına göre 

- `"dayTitle"`
- `"daySubtitle"`
- `"questions"`
- `"sources"`

bilgileri bulunur.

# 📊 Proje Özeti

| Özellik | Değer |
|---|---|
| Gün sayısı | 30 |
| Her gün | 19 soru |
| Toplam soru | 570 |
| Dil sayısı | 16 |
| Günlük JSON | 30 dosya |
| İlk soru | 1 |
| Son soru | 570 |
---
# 📁 Dosya Yapısı

```text
yol-haritasi/
│
├── index.html
├── app.js
├── style.css
├── README.md
├── days.json
└── Images/
    ├── Aksa.jpg
    ├── Kabe.jpg
    ├── Nebevi.jpg
└── data/
    ├── day-01.json
    ├── day-02.json
    ├── day-03.json
    ├── day-04.json
    ├── ...
    └── day-30.json

---
# 📅 30 Günlük Yol Haritası

## 1. Gün — İslâm'a İlk Adım
**Alt başlık:** İslâm nedir, Müslüman kimdir, Allah, Kur'an, Peygamberimiz, iman ve İslâm'ın şartları
**Soru aralığı:** 1–19
---
## 2. Gün — Vahiy, Kur'an ve İslâm'ın Temel Kaynakları
**Alt başlık:** Vahiy, Cebrâil, ilk vahiy, Kur'an'ın yapısı ve sünneti tanımak
**Soru aralığı:** 20–38
---
## 3. Gün — Allah'ı Tanımak
**Alt başlık:** Allah'ın varlığı, birliği, isimleri, sıfatları ve Allah'a iman
**Soru aralığı:** 39–57
---
## 4. Gün — Peygamberler ve Peygamberlik
**Alt başlık:** Peygamberlerin görevi, özellikleri, mucizeler ve peygamberlere iman
**Soru aralığı:** 58–76
---
## 5. Gün — Hz. Muhammed ﷺ
**Alt başlık:** Peygamberimizin hayatı, güzel ahlâkı, tebliği ve ümmetine örnekliği
**Soru aralığı:** 77–95
---
## 6. Gün — İman ve İmanın Esasları
**Alt başlık:** Allah'a, meleklere, kitaplara, peygamberlere, âhiret gününe ve kadere iman
**Soru aralığı:** 96–114
---
## 7. Gün — Melekler ve Görünmeyen Âlem
**Alt başlık:** Melekler, görevleri, cinler ve gayb âlemi hakkında temel bilgiler
**Soru aralığı:** 115–133
---
## 8. Gün — İlâhî Kitaplar
**Alt başlık:** Tevrat, Zebur, İncil, Kur'an ve ilâhî kitaplara iman
**Soru aralığı:** 134–152
---
## 9. Gün — Âhiret ve Ölüm
**Alt başlık:** Ölüm, kabir hayatı, kıyamet, diriliş, hesap, cennet ve cehennem
**Soru aralığı:** 153–171
---
## 10. Gün — Kader ve Kaza
**Alt başlık:** Kader, kaza, insan iradesi, sorumluluk ve Allah'ın ilmi
**Soru aralığı:** 172–190
---
## 11. Gün — İslâm'ın Beş Şartı
**Alt başlık:** Kelime-i şehadet, namaz, oruç, zekât ve hac
**Soru aralığı:** 191–209
---
## 12. Gün — Namazı Tanımak
**Alt başlık:** Namazın anlamı, önemi, vakitleri, farzları ve namazın temel hükümleri
**Soru aralığı:** 210–228
---
## 13. Gün — Abdest, Gusül ve Temizlik
**Alt başlık:** Taharet, abdest, gusül, teyemmüm ve maddî-manevî temizlik
**Soru aralığı:** 229–247
---
## 14. Gün — Oruç ve Ramazan
**Alt başlık:** Oruç, Ramazan, sahur, iftar, orucu bozan ve bozmayan durumlar
**Soru aralığı:** 248–266
---
## 15. Gün — Zekât ve Sadaka
**Alt başlık:** Zekâtın anlamı, şartları, kimlere verileceği ve sadakanın önemi
**Soru aralığı:** 267–285
---
## 16. Gün — Hac ve Umre
**Alt başlık:** Hac, umre, ihram, Kâbe, Arafat, tavaf ve hac ibadetinin temel esasları
**Soru aralığı:** 286–304
---
## 17. Gün — Helâl ve Haram
**Alt başlık:** Helâl, haram, şüpheli şeyler, kazanç, yiyecekler ve günlük hayatta İslâmî ölçüler
**Soru aralığı:** 305–323
---
## 18. Gün — Güzel Ahlâk
**Alt başlık:** Doğruluk, sabır, şükür, merhamet, adalet, tevazu ve güzel davranışlar
**Soru aralığı:** 324–342
---
## 19. Gün — Kötü Ahlâktan Sakınmak
**Alt başlık:** Yalan, gıybet, iftira, kibir, haset, öfke ve diğer kötü davranışlardan korunmak
**Soru aralığı:** 343–361
---
## 20. Gün — Dua ve Zikir
**Alt başlık:** Dua, zikir, tesbih, istiğfar, salavat ve Allah'ı anmanın önemi
**Soru aralığı:** 362–380
---
## 21. Gün — Kur'an ile Yaşamak
**Alt başlık:** Kur'an okumak, anlamak, düşünmek, uygulamak ve Kur'an'ın hayatımızdaki yeri
**Soru aralığı:** 381–399
---
## 22. Gün — Sünnet ve Hadis
**Alt başlık:** Hadis, sünnet, sahih hadis, Peygamberimizin örnekliği ve sünnete bağlılık
**Soru aralığı:** 400–418
---
## 23. Gün — Aile ve İslâm
**Alt başlık:** Evlilik, anne-baba, eşler, çocuklar, akrabalık ve aile sorumlulukları
**Soru aralığı:** 419–437
---
## 24. Gün — Komşuluk ve Toplum
**Alt başlık:** Komşu hakları, kardeşlik, yardımlaşma, adalet ve toplumdaki sorumluluklar
**Soru aralığı:** 438–456
---
## 25. Gün — İslâm'da Ticaret ve Kazanç
**Alt başlık:** Helâl kazanç, alışveriş, borç, emanet, faiz ve ticaret ahlâkı
**Soru aralığı:** 457–475
---
## 26. Gün — Günlük Hayatta Müslüman
**Alt başlık:** Yemek, içmek, giyinmek, çalışmak, konuşmak, seyahat etmek ve günlük adab
**Soru aralığı:** 476–494
---
## 27. Gün — Hastalık, Sıkıntı ve Sabır
**Alt başlık:** Bela, imtihan, sabır, tevekkül, şükür ve zorluklar karşısında Müslümanın tavrı
**Soru aralığı:** 495–513
---
## 28. Gün — Tövbe ve Allah'a Dönüş
**Alt başlık:** Günah, tövbe, istiğfar, pişmanlık, Allah'ın rahmeti ve yeniden başlamak
**Soru aralığı:** 514–532
---
## 29. Gün — Müslümanın Hayat Rehberi
**Alt başlık:** İman, ibadet, ahlâk, aile, toplum ve günlük hayatı İslâm'ın rehberliğiyle şekillendirmek
**Soru aralığı:** 533–551
---
## 30. Gün — İslâm'ı Yaşamak
**Alt başlık:** Öğrenilen bilgileri hayata geçirmek, Allah'a kulluk etmek ve İslâm'ı bilinçli bir şekilde yaşamak
**Soru aralığı:** 552–570
---
