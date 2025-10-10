export default function MapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Как нас найти</h2>
          <p className="text-lg text-gray-600">г. Симферополь</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.123456789!2d34.1234567!3d44.9234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU1JzI0LjQiTiAzNMKwMDcnMjQuNCJF!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения ОтельШин"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
