import Image from "next/image"

export default function Testimonial() {
  return (
    <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                &ldquo;This AI document analyzer has revolutionized how we handle paperwork. What used to take hours now
                takes seconds. It's not just a time-saver; it's a game-changer for our business.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <Image
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://www.ceotodaymagazine.com/wp-content/uploads/2023/11/iStock-1371934584.jpg"
                    alt="Jane Doe"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Jane Doe</div>
                  <svg className="hidden md:block mx-1 h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">CEO, TechCorp</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

