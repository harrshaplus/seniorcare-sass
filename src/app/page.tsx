import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Enriching Senior Citizens with
          <span className="text-indigo-600"> Better Choices</span>
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
          A comprehensive platform connecting seniors with healthcare providers, caregivers, and essential services.
        </p>
        <div className="mt-10">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-indigo-600 text-2xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold mb-2">Health Monitoring</h3>
            <p className="text-gray-600">Track vital signs, medication schedules, and health records in one place.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-indigo-600 text-2xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">Caregiver Connection</h3>
            <p className="text-gray-600">Find and connect with trusted caregivers and healthcare professionals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-indigo-600 text-2xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Emergency Support</h3>
            <p className="text-gray-600">Quick access to emergency services and immediate assistance when needed.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-3xl font-bold mb-4">$9.99<span className="text-lg text-gray-500">/month</span></p>
            <ul className="space-y-2">
              <li>✓ Health monitoring</li>
              <li>✓ Basic caregiver matching</li>
              <li>✓ Emergency contact</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 bg-indigo-50">
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <p className="text-3xl font-bold mb-4">$19.99<span className="text-lg text-gray-500">/month</span></p>
            <ul className="space-y-2">
              <li>✓ All Basic features</li>
              <li>✓ Priority caregiver matching</li>
              <li>✓ 24/7 emergency support</li>
              <li>✓ Medication management</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Family</h3>
            <p className="text-3xl font-bold mb-4">$29.99<span className="text-lg text-gray-500">/month</span></p>
            <ul className="space-y-2">
              <li>✓ All Premium features</li>
              <li>✓ Multiple family members</li>
              <li>✓ Family dashboard</li>
              <li>✓ Group video calls</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
