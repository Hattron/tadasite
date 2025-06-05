export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 sm:p-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            Ta Da
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Interior Design
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-neutral-800 dark:text-neutral-200 mb-4">
              Ta Da
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 font-light tracking-wide">
              Interior Design
            </p>
          </div>

          {/* Under Construction Message */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-700 dark:text-neutral-300 mb-6">
              Something Beautiful is Coming
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              We&apos;re crafting an extraordinary experience that will transform how you think about interior design. 
              Our new website is under construction, but great things are worth the wait.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="w-full max-w-md mx-auto bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 mb-4">
              <div className="bg-gradient-to-r from-neutral-400 to-neutral-600 dark:from-neutral-500 dark:to-neutral-300 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '65%'}}></div>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              We&apos;re 65% there
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              Ready to transform your space? Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:hello@tadainteriordesign.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © 2024 Ta Da Interior Design. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-gradient-to-br from-neutral-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-gradient-to-tl from-neutral-300/20 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
}
