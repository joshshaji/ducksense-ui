import { ClockIcon, DocumentTextIcon, ChartBarIcon } from "@heroicons/react/24/outline"

const features = [
  {
    name: "Save Time",
    description: "Our AI processes documents in seconds, saving you hours of manual work.",
    icon: ClockIcon,
  },
  {
    name: "Structured Output",
    description: "Convert unstructured data into organized, actionable information.",
    icon: DocumentTextIcon,
  },
  {
    name: "Insightful Analytics",
    description: "Gain valuable insights from your documents with our advanced analysis.",
    icon: ChartBarIcon,
  },
]

export default function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Stop wasting time on manual document processing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI-powered solution transforms how you handle documents, saving you time and providing valuable
            insights.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

