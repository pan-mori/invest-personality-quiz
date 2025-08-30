import { BiasInfo, BiasType } from '../types/quiz'

export const biasInfoMap: Record<BiasType, BiasInfo> = {
  herding: {
    name: 'herding',
    title: 'Stádový investor',
    description: 'Máte sklon důvěřovat ostatním a následovat dav. Často se přidáváte k trendu ze strachu, že přijdete o příležitost.',
    characteristics: [
      'Sledujete investiční tipy na sociálních sítích',
      'Preferujete populární akcie a fondy',
      'Rozhodujete se na základě toho, co dělají ostatní',
      'Bojíte se investovat proti trendu'
    ],
    risks: [
      'Nakupování na vrcholu bubliny',
      'Prodávání v panice během poklesu',
      'Nedostatečná diversifikace',
      'Ignorování fundamentální analýzy'
    ],
    tips: [
      'Vytvořte si vlastní investiční strategii',
      'Analyzujte fundamenty před investicí',
      'Nereagujte impulzivně na tržní zprávy',
      'Diversifikujte své portfolio nezávisle na trendech'
    ],
    color: '#3B82F6',
    icon: '👥'
  },
  riskAversion: {
    name: 'riskAversion',
    title: 'Konzervativní investor',
    description: 'Vybíráte pouze nízko rizikové investice, což může vést k příliš konzervativní investiční strategii.',
    characteristics: [
      'Preferujete spořicí účty a státní dluhopisy',
      'Vyhýbáte se akciovému trhu',
      'Bojíte se jakékoli ztráty kapitálu',
      'Upřednostňujete jistotu před výnosem'
    ],
    risks: [
      'Inflace snižuje reálnou hodnotu úspor',
      'Nízké výnosy nedosáhnou finančních cílů',
      'Propásnutí růstových příležitostí',
      'Nedostatečné zhodnocení dlouhodobě'
    ],
    tips: [
      'Postupně zvyšujte podíl rizikových aktiv',
      'Investujte do diverzifikovaných fondů',
      'Použijte dollar-cost averaging',
      'Vzdělávejte se o dlouhodobém investování'
    ],
    color: '#10B981',
    icon: '🛡️'
  },
  overreaction: {
    name: 'overreaction',
    title: 'Emotivní investor',
    description: 'Chcete zachytit tržní trendy a máte sklon k krátkodobému myšlení. Často přereagujete na tržní události.',
    characteristics: [
      'Často kupujete a prodáváte',
      'Reagujete rychle na tržní zprávy',
      'Sledujete denní výkyvy cen',
      'Změníte strategii na základě krátkodobých trendů'
    ],
    risks: [
      'Vysoké transakční náklady',
      'Nakupování draho, prodávání levně',
      'Stresující investiční zážitek',
      'Horší výnosy než u indexu'
    ],
    tips: [
      'Vytvořte dlouhodobý investiční plán',
      'Omezte sledování cen na minimum',
      'Nastavte automatické investice',
      'Zaměřte se na fundamentální analýzu'
    ],
    color: '#F59E0B',
    icon: '📈'
  },
  overconfident: {
    name: 'overconfident',
    title: 'Sebevědomý investor',
    description: 'Můžete si plést instinkt s objektivní analýzou a přehlížet změny tržního prostředí.',
    characteristics: [
      'Věříte si ve výběr jednotlivých akcií',
      'Spoléháte na své analytické schopnosti',
      'Nepotřebujete rady finančních poradců',
      'Věříte, že překonáte trh'
    ],
    risks: [
      'Nedostatečná diversifikace',
      'Ignorování rizikových faktorů',
      'Přílišná koncentrace do známých aktiv',
      'Podceňování tržní volatility'
    ],
    tips: [
      'Pravidelně přehodnocujte svou strategii',
      'Sledujte výkonnost oproti benchmarku',
      'Konzultujte s nezávislými experty',
      'Používejte objektivní analytické nástroje'
    ],
    color: '#8B5CF6',
    icon: '🧠'
  },
  highReturns: {
    name: 'highReturns',
    title: 'Spekulativní investor',
    description: 'Máte sklon vybírat investice nabízející vysoké výnosy, možná se zaměřujete na výnosy a přehlížíte rizika.',
    characteristics: [
      'Zajímáte se o rychle rostoucí akcie',
      'Lákají vás investice s vysokým potenciálem',
      'Podceňujete význam rizika',
      'Chcete rychlé zhodnocení kapitálu'
    ],
    risks: [
      'Vysoká volatilita portfolia',
      'Možnost významných ztrát',
      'Koncentrace do rizikových aktiv',
      'Ignorování principu risk-reward'
    ],
    tips: [
      'Vyvažujte riziko a výnos',
      'Investujte pouze část do vysokorizikových aktiv',
      'Používejte stop-loss příkazy',
      'Diverzifikujte napříč sektory a regiony'
    ],
    color: '#EF4444',
    icon: '🚀'
  }
}