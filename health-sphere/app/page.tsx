import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to HealthSphere</h1>
        <p className="text-xl mb-6">Simplifying healthcare for doctors and patients</p>
        <Button asChild>
          <Link href="/appointment">Book an Appointment</Link>
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="Doctor on Call"
          description="Connect with doctors via VoIP for quick consultations"
          link="/doctor-on-call"
        />
        <FeatureCard
          title="Find a Doctor"
          description="Search and compare doctors based on performance parameters"
          link="/find-doctor"
        />
        <FeatureCard
          title="Patient Records"
          description="Access and manage your medical history securely"
          link="/patient-records"
        />
        <FeatureCard
          title="Health Summary"
          description="Get an AI-powered summary of your health status"
          link="/health-summary"
        />
        <FeatureCard
          title="Medicine Comparison"
          description="Find the most affordable options for your prescriptions"
          link="/medicine-comparison"
        />
        <FeatureCard
          title="Medical Records Simplification"
          description="Understand your medical records with AI-powered explanations"
          link="/simplify-records"
        />
      </section>
    </div>
  )
}

function FeatureCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <Button asChild className="mt-4">
          <Link href={link}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

