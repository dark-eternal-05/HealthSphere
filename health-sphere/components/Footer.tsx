import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">HealthSphere</h3>
            <p className="text-sm">Simplifying healthcare for doctors and patients</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/doctor-on-call">Doctor on Call</Link>
              </li>
              <li>
                <Link href="/find-doctor">Find a Doctor</Link>
              </li>
              <li>
                <Link href="/patient-records">Patient Records</Link>
              </li>
              <li>
                <Link href="/health-summary">Health Summary</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">© {new Date().getFullYear()} HealthSphere. All rights reserved.</div>
      </div>
    </footer>
  )
}

