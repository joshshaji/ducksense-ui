import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-blue-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to save time?</span>
          <span className="block">Start using our AI document analyzer today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-blue-200">
          Don't waste another minute manually processing documents. Our AI can do it in seconds.
        </p>
        <Link
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
        >
          Sign up for free
        </Link>
      </div>
    </section>
  )
}

