import { Question } from '../types/quiz'

export const questions: Question[] = [
  {
    id: 1,
    text: "Když se rozhodujete o investici, obvykle:",
    image: "🤔",
    imageAlt: "Rozhodování o investici",
    options: [
      {
        id: "a",
        text: "Konzultujete s přáteli a sledujete, co dělají úspěšní investoři",
        scores: { herding: 3, riskAversion: 1, overreaction: 1, overconfident: 0, highReturns: 1 }
      },
      {
        id: "b", 
        text: "Pečlivě analyzujete všechny dostupné informace sami",
        scores: { herding: 0, riskAversion: 1, overreaction: 0, overconfident: 3, highReturns: 1 }
      },
      {
        id: "c",
        text: "Vybíráte pouze prověřené a bezpečné investice",
        scores: { herding: 1, riskAversion: 3, overreaction: 0, overconfident: 0, highReturns: 0 }
      },
      {
        id: "d",
        text: "Hledáte investice s nejvyšším potenciálním výnosem",
        scores: { herding: 1, riskAversion: 0, overreaction: 1, overconfident: 1, highReturns: 3 }
      }
    ]
  },
  {
    id: 2,
    text: "Když se trhy výrazně propadnou, vaší první reakcí je:",
    image: "📉",
    imageAlt: "Propad trhu",
    options: [
      {
        id: "a",
        text: "Prodat vše, dokud neztratím více peněz",
        scores: { herding: 2, riskAversion: 2, overreaction: 3, overconfident: 0, highReturns: 0 }
      },
      {
        id: "b",
        text: "Podívat se, co dělají ostatní investoři",
        scores: { herding: 3, riskAversion: 1, overreaction: 2, overconfident: 0, highReturns: 0 }
      },
      {
        id: "c",
        text: "Nic nedělat a držet své pozice",
        scores: { herding: 0, riskAversion: 2, overreaction: 0, overconfident: 2, highReturns: 1 }
      },
      {
        id: "d",
        text: "Dokoupit více za nižší ceny",
        scores: { herding: 0, riskAversion: 0, overreaction: 0, overconfident: 2, highReturns: 3 }
      }
    ]
  },
  {
    id: 3,
    text: "Jak často kontrolujete výkonnost svých investic?",
    image: "📱",
    imageAlt: "Kontrola investic na mobilu",
    options: [
      {
        id: "a",
        text: "Několikrát denně",
        scores: { herding: 1, riskAversion: 1, overreaction: 3, overconfident: 1, highReturns: 2 }
      },
      {
        id: "b",
        text: "Jednou týdně",
        scores: { herding: 1, riskAversion: 1, overreaction: 2, overconfident: 2, highReturns: 1 }
      },
      {
        id: "c",
        text: "Jednou měsíčně",
        scores: { herding: 0, riskAversion: 2, overreaction: 1, overconfident: 2, highReturns: 1 }
      },
      {
        id: "d",
        text: "Jednou za čtvrt roku nebo méně",
        scores: { herding: 0, riskAversion: 3, overreaction: 0, overconfident: 1, highReturns: 0 }
      }
    ]
  },
  {
    id: 4,
    text: "Při výběru investice je pro vás nejdůležitější:",
    image: "⚖️",
    imageAlt: "Rozhodování o prioritách",
    options: [
      {
        id: "a",
        text: "Bezpečnost a jistota výnosu",
        scores: { herding: 0, riskAversion: 3, overreaction: 0, overconfident: 0, highReturns: 0 }
      },
      {
        id: "b",
        text: "Doporučení od důvěryhodných zdrojů",
        scores: { herding: 3, riskAversion: 1, overreaction: 1, overconfident: 0, highReturns: 1 }
      },
      {
        id: "c",
        text: "Vysoký potenciál růstu",
        scores: { herding: 1, riskAversion: 0, overreaction: 1, overconfident: 1, highReturns: 3 }
      },
      {
        id: "d",
        text: "Vlastní analýza a přesvědčení",
        scores: { herding: 0, riskAversion: 0, overreaction: 0, overconfident: 3, highReturns: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "Když se objeví nový investiční trend (např. kryptoměny, ESG fondy), vy:",
    image: "🚀",
    imageAlt: "Nové investiční trendy",
    options: [
      {
        id: "a",
        text: "Okamžitě se zapojíte, abyste nepřišli o příležitost",
        scores: { herding: 3, riskAversion: 0, overreaction: 3, overconfident: 1, highReturns: 3 }
      },
      {
        id: "b",
        text: "Počkáte a sledujete, jak si vedou ostatní",
        scores: { herding: 2, riskAversion: 2, overreaction: 1, overconfident: 0, highReturns: 1 }
      },
      {
        id: "c",
        text: "Důkladně to prozkoumáte a pak se rozhodnete",
        scores: { herding: 0, riskAversion: 1, overreaction: 0, overconfident: 3, highReturns: 1 }
      },
      {
        id: "d",
        text: "Vyhýbáte se novým trendům",
        scores: { herding: 0, riskAversion: 3, overreaction: 0, overconfident: 0, highReturns: 0 }
      }
    ]
  },
  {
    id: 6,
    text: "Vaše portfolio je obvykle:",
    image: "💼",
    imageAlt: "Portfolio investic",
    options: [
      {
        id: "a",
        text: "Velmi diverzifikované napříč různými třídami aktiv",
        scores: { herding: 1, riskAversion: 3, overreaction: 0, overconfident: 1, highReturns: 0 }
      },
      {
        id: "b",
        text: "Zaměřené na několik vybraných investic, kterým důvěřujete",
        scores: { herding: 0, riskAversion: 1, overreaction: 0, overconfident: 3, highReturns: 2 }
      },
      {
        id: "c",
        text: "Podobné portfoliím úspěšných investorů",
        scores: { herding: 3, riskAversion: 1, overreaction: 1, overconfident: 0, highReturns: 1 }
      },
      {
        id: "d",
        text: "Složené převážně z růstových akcií a spekulativních investic",
        scores: { herding: 1, riskAversion: 0, overreaction: 2, overconfident: 1, highReturns: 3 }
      }
    ]
  },
  {
    id: 7,
    text: "Když čtete finanční zpravodajství:",
    image: "📰",
    imageAlt: "Finanční zpravodajství",
    options: [
      {
        id: "a",
        text: "Důvěřujete analýzám expertů a následujete jejich doporučení",
        scores: { herding: 3, riskAversion: 1, overreaction: 1, overconfident: 0, highReturns: 1 }
      },
      {
        id: "b",
        text: "Často zpochybňujete uvedené informace a spoléháte na vlastní úsudek",
        scores: { herding: 0, riskAversion: 0, overreaction: 0, overconfident: 3, highReturns: 1 }
      },
      {
        id: "c",
        text: "Hledáte především informace o bezpečných investicích",
        scores: { herding: 1, riskAversion: 3, overreaction: 0, overconfident: 0, highReturns: 0 }
      },
      {
        id: "d",
        text: "Zaměřujete se na tipy o rychle rostoucích akciích",
        scores: { herding: 1, riskAversion: 0, overreaction: 2, overconfident: 1, highReturns: 3 }
      }
    ]
  },
  {
    id: 8,
    text: "Při investičním rozhodnutí nejvíce ovlivňuje:",
    image: "🗣️",
    imageAlt: "Vlivy na rozhodování",
    options: [
      {
        id: "a",
        text: "Strach ze ztráty peněz",
        scores: { herding: 1, riskAversion: 3, overreaction: 2, overconfident: 0, highReturns: 0 }
      },
      {
        id: "b",
        text: "Touha po vysokých výnosech",
        scores: { herding: 1, riskAversion: 0, overreaction: 1, overconfident: 1, highReturns: 3 }
      },
      {
        id: "c",
        text: "Názory lidí, kterých si vážíte",
        scores: { herding: 3, riskAversion: 1, overreaction: 1, overconfident: 0, highReturns: 1 }
      },
      {
        id: "d",
        text: "Důvěra ve vlastní analýzu",
        scores: { herding: 0, riskAversion: 0, overreaction: 0, overconfident: 3, highReturns: 1 }
      }
    ]
  },
  {
    id: 9,
    text: "Když vaše investice klesá v hodnotě několik týdnů po nákupu:",
    image: "😰",
    imageAlt: "Stres z klesajících investic",
    options: [
      {
        id: "a",
        text: "Okamžitě prodáte, abyste zabránili dalším ztrátám",
        scores: { herding: 1, riskAversion: 2, overreaction: 3, overconfident: 0, highReturns: 0 }
      },
      {
        id: "b",
        text: "Konzultujete s jinými investory, co by dělali oni",
        scores: { herding: 3, riskAversion: 1, overreaction: 2, overconfident: 0, highReturns: 0 }
      },
      {
        id: "c",
        text: "Držíte pozici, protože jste přesvědčeni o své analýze",
        scores: { herding: 0, riskAversion: 1, overreaction: 0, overconfident: 3, highReturns: 1 }
      },
      {
        id: "d",
        text: "Dokupujete více, protože vidíte příležitost",
        scores: { herding: 0, riskAversion: 0, overreaction: 0, overconfident: 2, highReturns: 3 }
      }
    ]
  },
  {
    id: 10,
    text: "Vaším dlouhodobým investičním cílem je:",
    image: "🎯",
    imageAlt: "Dlouhodobé investiční cíle",
    options: [
      {
        id: "a",
        text: "Zachovat kupní sílu peněz s minimálním rizikem",
        scores: { herding: 0, riskAversion: 3, overreaction: 0, overconfident: 0, highReturns: 0 }
      },
      {
        id: "b",
        text: "Dosáhnout nadprůměrných výnosů",
        scores: { herding: 0, riskAversion: 0, overreaction: 1, overconfident: 2, highReturns: 3 }
      },
      {
        id: "c",
        text: "Investovat podobně jako úspěšní investoři",
        scores: { herding: 3, riskAversion: 1, overreaction: 0, overconfident: 0, highReturns: 2 }
      },
      {
        id: "d",
        text: "Vybudovat stabilní portfolio pro důchod",
        scores: { herding: 1, riskAversion: 2, overreaction: 0, overconfident: 1, highReturns: 1 }
      }
    ]
  }
]