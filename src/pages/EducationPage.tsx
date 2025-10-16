import { motion } from 'framer-motion'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'

interface Mistake {
  title: string
  description: string
  emoji: string
}

const mistakes: Mistake[] = [
  {
    emoji: "⚠️",
    title: "Špatné řízení rizik",
    description: "Mnozí investoři riskují více, než si mohou dovolit ztratit. Nedodržují správnou alokaci portfolia a nevyužívají diverzifikaci. To může vést k devastujícím ztrátám při poklesu trhu."
  },
  {
    emoji: "⏱️",
    title: "Krátkodobé myšlení",
    description: "Zaměření na rychlé zisky místo dlouhodobého budování bohatství. Investoři často podléhají krátkodobým výkyvům trhu a činí ukvapená rozhodnutí, která škodí jejich dlouhodobým cílům."
  },
  {
    emoji: "🔒",
    title: "Zanedbávání bezpečnosti",
    description: "Nepoužívání hardwarových peněženek, slabá hesla, sdílení citlivých informací. Bezpečnost by měla být prioritou číslo jedna - 'not your keys, not your coins'."
  },
  {
    emoji: "📚",
    title: "Nedostatek základních znalostí",
    description: "Investování do produktů, kterým nerozumíte. Je důležité pochopit, jak fungují kryptoměny, blockchain a rizika spojená s jednotlivými projekty."
  },
  {
    emoji: "🔄",
    title: "Nepoučení se z chyb",
    description: "Opakování stejných chyb. Úspěšní investoři analyzují své neúspěchy a upravují svou strategii. Každá chyba je příležitost se naučit něco nového."
  },
  {
    emoji: "🎯",
    title: "Absence strategie",
    description: "Investování bez jasného plánu, cílů nebo výstupní strategie. Bez strategie je snadné podlehnout emocím a činit iracionální rozhodnutí."
  },
  {
    emoji: "👥",
    title: "Slepé následování influencerů",
    description: "Důvěra v doporučení od influencerů bez vlastního výzkumu. Pamatujte - nikdo nezná budoucnost a každý má své vlastní zájmy."
  },
  {
    emoji: "🎰",
    title: "Závislost na kryptu",
    description: "Kompulzivní sledování grafů, emocionální trading, používání krypta jako úniku od stresu. To jsou známky závislosti, která téměř vždy vede ke ztrátám."
  },
  {
    emoji: "🧠",
    title: "Nechat se ovládat biasy",
    description: "FOMO, stádové chování, averze ke ztrátě, nadměrná sebedůvěra - kognitivní biasy ovlivňují naše rozhodování způsobem, kterého si často nejsme vědomi. Pochopení těchto biasů je klíčem k lepšímu investování."
  }
]

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="py-16 px-8 mt-8">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Nejčastější chyby při investování do kryptoměn
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Být crypto responsible znamená přistupovat ke kryptoměnám s vědomím, disciplínou a vzděláním - ne emocemi nebo impulzy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => window.location.href = '/crypto-quiz'}
                size="lg"
                className="group relative overflow-hidden bg-white dark:bg-gray-800 border-4 border-indigo-500 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-transparent py-8 px-12 text-xl font-extrabold shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 rounded-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-2xl">🔐</span>
                  Vyzkoušej krypto kvíz
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </Button>
              <Button
                onClick={() => window.location.href = '/personality-quiz'}
                size="lg"
                className="group relative overflow-hidden bg-white dark:bg-gray-800 border-4 border-indigo-500 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-transparent py-8 px-12 text-xl font-extrabold shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 rounded-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-2xl">🧠</span>
                  Zjisti svůj investiční typ
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mistakes Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mistakes.map((mistake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{mistake.emoji}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {mistake.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {mistake.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Proč většina investorů prodělává?
            </h2>
            <Card className="p-8 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
              <div className="space-y-4 text-left text-gray-700 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  Podle studie Bank for International Settlements (BIS) většina retailových investorů v kryptoměnách ztrácí peníze. Hlavní důvody:
                </p>
                <ul className="space-y-3 list-disc list-inside text-lg">
                  <li><strong>Emocionální rozhodování:</strong> Nákup na vrcholu (FOMO) a prodej při poklesu (panika)</li>
                  <li><strong>Nedostatek strategie:</strong> Bez jasného plánu je těžké činit racionální rozhodnutí</li>
                  <li><strong>Podcenění rizika:</strong> Investování více, než si mohou dovolit ztratit</li>
                  <li><strong>Kognitivní biasy:</strong> Stádové chování, averze ke ztrátě, nadměrná sebedůvěra</li>
                  <li><strong>Špatné načasování:</strong> Pokus o timing trhu místo dlouhodobého přístupu</li>
                </ul>
                <p className="text-lg leading-relaxed pt-4">
                  Pochopení těchto pastí a práce na vlastních investičních návycích je první krok k zodpovědnému investování.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 backdrop-blur-sm bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Začni svou cestu k zodpovědnému investování
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Zjisti, jaké biasy ovlivňují tvá investiční rozhodnutí a nauč se je kontrolovat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.location.href = '/personality-quiz'}
                  size="lg"
                  className="group relative overflow-hidden bg-white dark:bg-gray-800 border-4 border-indigo-500 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-transparent py-8 px-12 text-xl font-extrabold shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 rounded-2xl"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-2xl">🧠</span>
                    Investiční osobnost kvíz
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </Button>
                <Button
                  onClick={() => window.location.href = '/crypto-quiz'}
                  size="lg"
                  className="group relative overflow-hidden bg-white dark:bg-gray-800 border-4 border-indigo-500 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-transparent py-8 px-12 text-xl font-extrabold shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 rounded-2xl"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-2xl">🔐</span>
                    Krypto zodpovědnost kvíz
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Non-profit projekt zaměřený na vzdělávání krypto investorů
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Investování v kryptoměnách nese vysoké riziko. Nikdy neinvestujte více, než si můžete dovolit ztratit.
          </p>
        </div>
      </footer>
    </div>
  )
}
