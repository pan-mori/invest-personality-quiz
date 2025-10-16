export interface CryptoQuestion {
  id: number
  text: string
  options: CryptoOption[]
}

export interface CryptoOption {
  id: string
  text: string
  isCorrect: boolean
  feedback: string
  biasType?: string
}

export const cryptoQuestions: CryptoQuestion[] = [
  {
    id: 1,
    text: "1.1. Proč nejčastěji investuješ do krypta?",
    options: [
      {
        id: "a",
        text: "Věřím v dlouhodobou technologii",
        isCorrect: true,
        feedback: "✅ Výborně! Drž se strategie buy & hold - nejlépe pouze u Bitcoinu. Kupuj jen tolik, kolik si můžeš dovolit držet roky bez nutnosti prodat. Diverzifikuj a pravidelně přikupuj menší částky."
      },
      {
        id: "b",
        text: "Chci rychle vydělat",
        isCorrect: false,
        feedback: "⚠️ Kryptoměny mohou nabídnout krátkodobé zisky, ale dlouhodobě je lepší brát je jako maraton, ne sprint. Pokud tě láká spekulace, vyhraď si na to jen malou část portfolia (např. 5–10 %) a zbytek investuj dlouhodobě. Tím snížíš riziko velké ztráty.",
        biasType: "Bias: Preference vysokých výnosů a spekulativní myšlení"
      },
      {
        id: "c",
        text: "Nechci přijít o příležitost (FOMO)",
        isCorrect: false,
        feedback: "❌ Největší past! Místo impulzivních nákupů si nastav pravidelný plán investic (např. měsíční nákup za pevnou částku – tzv. DCA). To ti pomůže zbavit se stresu z načasování a ochránit tě před přehnanými nákupy na vrcholu.",
        biasType: "Bias: FOMO (Fear of Missing Out) - Stádové chování"
      }
    ]
  },
  {
    id: 2,
    text: "1.2. Jak velkou část svých úspor máš v kryptu?",
    options: [
      {
        id: "a",
        text: "<10 %",
        isCorrect: true,
        feedback: "✅ To je obecně považováno za rozumnou a bezpečnější alokaci. Kryptoměny jsou vysoce rizikové aktivum, takže držet je jako menší část portfolia dává smysl. Riziko velké ztráty neohrozí tvoji finanční stabilitu."
      },
      {
        id: "b",
        text: "10–50 %",
        isCorrect: false,
        feedback: "⚠️ To už je výrazně vyšší riziko. Pokud trh padne o 70–80 %, může to citelně zasáhnout tvé úspory. Je důležité mít jasnou strategii (např. dlouhodobý horizont, diverzifikace i mimo krypto, pravidelné přikupování) a počítat s tím, že portfolio může silně kolísat.",
        biasType: "Bias: Nadměrná sebedůvěra a podceňování rizika"
      },
      {
        id: "c",
        text: ">50 %",
        isCorrect: false,
        feedback: "❌ Extrémně riziková strategie, kterou BIS a většina expertů považuje za hazardní. Hodí se jen pro lidi, kteří si mohou dovolit potenciálně přijít o značnou část majetku. Pokud tě k tomu vedou emoce (FOMO, chamtivost), je to varovný signál.",
        biasType: "Bias: Touha po vysokých výnosech + Podceňování rizika"
      }
    ]
  },
  {
    id: 3,
    text: "1.3. Kde máš uloženo své krypto?",
    options: [
      {
        id: "a",
        text: "Hardwarová peněženka / cold storage",
        isCorrect: true,
        feedback: "✅ Nejbezpečnější varianta pro dlouhodobé držení. Privátní klíče vlastníš ty, nikdo jiný. Riziko hacku burzy je nulové, ale je potřeba pečlivě chránit seed phrase (nikdy ji neukládat online)."
      },
      {
        id: "b",
        text: "Na burze s 2FA",
        isCorrect: false,
        feedback: "⚠️ Přijatelná varianta pro krátkodobé obchodování. Dvoufaktorová autentizace výrazně zvyšuje bezpečnost, ale stále platí, že klíče drží burza, ne ty ('not your keys, not your coins'). Pokud burza zkrachuje nebo bude hacknuta, můžeš přijít o prostředky.\n\n👉 Doporučení: 'Pro obchod burza, pro držení peněženka'.",
        biasType: "Bias: Falešný pocit bezpečí"
      },
      {
        id: "c",
        text: "Na burze bez zabezpečení",
        isCorrect: false,
        feedback: "❌ Nejhorší varianta! Otevírá dveře hackerům i podvodníkům, ztráta účtu je jen otázkou času. Kdo takto uchovává větší částku, vystavuje se zbytečně obrovskému riziku.\n\n👉 Doporučení: 'Pro obchod burza, pro držení peněženka'.",
        biasType: "Bias: Zavírání očí před rizikem + Nedostatek znalostí"
      }
    ]
  },
  {
    id: 4,
    text: "1.4. Kolik času denně trávíš sledováním grafů?",
    options: [
      {
        id: "a",
        text: "<5 minut",
        isCorrect: true,
        feedback: "✅ Zdravý přístup. Sleduješ trh jen orientačně, nenecháváš se vtáhnout do každodenní volatility. Vhodné pro dlouhodobé investory."
      },
      {
        id: "b",
        text: "10–60 minut",
        isCorrect: false,
        feedback: "⚠️ Střední riziko. Už věnuješ kryptu dost pozornosti, takže tě mohou ovlivňovat krátkodobé výkyvy a stáhnout tě k aktivnímu tradingu. Je potřeba mít pevný plán, aby ses nenechal strhnout k impulzivním nákupům nebo prodejům.",
        biasType: "Bias: Přehnané sledování trhu (Overreaction)"
      },
      {
        id: "c",
        text: ">1 hodin",
        isCorrect: false,
        feedback: "❌ Varovný signál! Většina dlouhodobých investorů zbytečně ztrácí čas i energii – a výsledek bývá horší než u klidného přístupu s jasnou strategií. Pokud se věnuješ tradingu, i zde je potřeba mít dny, kdy trhy vůbec neřešíš a nastavit si zdravou psychohygienu.",
        biasType: "Bias: Trading addiction + Přílišná reakce na volatilitu"
      }
    ]
  },
  {
    id: 5,
    text: "1.5. Když jsi pod stresem, saháš po kryptu (trading, kontrola portfolia)?",
    options: [
      {
        id: "a",
        text: "Ne, zvládám to jinak",
        isCorrect: true,
        feedback: "✅ Ideální přístup. Stres nepřetváříš do impulsivních nákupů/prodejů. Zdravá strategie snižuje riziko ztrát způsobených emocemi."
      },
      {
        id: "b",
        text: "Někdy",
        isCorrect: false,
        feedback: "⚠️ Střední riziko. Občasné impulzivní chování může snižovat výnosy, ale pokud si uvědomuješ situaci a máš plán, lze riziko minimalizovat.",
        biasType: "Bias: Emocionální investování"
      },
      {
        id: "c",
        text: "Ano, často",
        isCorrect: false,
        feedback: "❌ Varovný signál! Používání krypta jako 'úlevy od stresu' vede k vysokému riziku ztrát a psychického vyhoření. BIS i studie retail investorů ukazují, že právě emočně poháněné investice vedou k většině ztrát.",
        biasType: "Bias: Závislost na tradingu + Emocionální rozhodování"
      }
    ]
  },
  {
    id: 6,
    text: "1.6. Ovlivňuje nálada trhu tvoji osobní náladu?",
    options: [
      {
        id: "a",
        text: "Ne, nálada je stabilní",
        isCorrect: true,
        feedback: "✅ Skvělý základ pro dlouhodobé investování. Emoce máš pod kontrolou, neprodáváš ani nenakupuješ impulzivně. Umíš udržet odstup mezi svým životem a trhem."
      },
      {
        id: "b",
        text: "Trochu – dobrý den, když krypto roste",
        isCorrect: false,
        feedback: "⚠️ Běžná reakce, ale už tu hrozí, že se radost/negativní nálada promítne i do rozhodnutí. Je důležité vědomě si připomínat, že volatilita je normální a nesmí řídit tvůj život.",
        biasType: "Bias: Emocionální závislost na trhu"
      },
      {
        id: "c",
        text: "Hodně – moje emoce kopírují trh",
        isCorrect: false,
        feedback: "❌ Nebezpečný vzorec! Pokud tě trh emocionálně ovládá, je vysoké riziko FOMO a panických prodejů. To je přesně důvod, proč podle BIS většina investorů prodělává – nechají se vláčet náladou davu místo plánu.",
        biasType: "Bias: Stádové chování + Emocionální nestabilita"
      }
    ]
  },
  {
    id: 7,
    text: "1.7. Jak se cítíš, když se dostaneš do ztráty?",
    options: [
      {
        id: "a",
        text: "Beru to jako součást investování",
        isCorrect: true,
        feedback: "✅ Nejzdravější přístup. Víš, že ztráty jsou přirozené a do strategie započítané. Menší emoční reakce = menší riziko impulzivních rozhodnutí."
      },
      {
        id: "b",
        text: "Dlouho nad tím přemýšlím, ale časem pustím",
        isCorrect: false,
        feedback: "⚠️ Střední riziko. Emoce hrají roli, ale nakonec se s nimi vyrovnáš. Je dobré mít nastavený plán, aby ses při poklesu necítil ztracený.",
        biasType: "Bias: Averze ke ztrátě (Loss Aversion)"
      },
      {
        id: "c",
        text: "Mám výčitky, pocit selhání, hněv",
        isCorrect: false,
        feedback: "❌ Varovný signál! Pokud tě ztráta paralyzuje, je vysoké riziko panických prodejů nebo 'honění' ztrát riskantními obchody. To je přesně cesta, kterou BIS identifikuje jako důvod, proč většina retailu prodělává.",
        biasType: "Bias: Silná emocionální reakce + Averze ke ztrátě"
      }
    ]
  }
]
