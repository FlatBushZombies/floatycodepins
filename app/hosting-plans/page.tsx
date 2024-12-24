
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">

          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Hosting Plans
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Choose the perfect package for your VPS hosting
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                  ${plan.price}
                  <span className="ml-1 text-2xl font-medium text-gray-500">/session</span>
                </div>
                <ul role="list" className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-6 h-6 text-green-500" aria-hidden="true" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.name === "Pro" ? "default" : "outline"}>
                  Get started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const pricingPlans = [
  {
    name: "Basic",
    price: 199,
    description: "Perfect for small to medium business",
    features: [
      "1 Year",
      "Free domain email",
      "Domain of choice",
      "1 xxxx ",
    ],
  },
  {
    name: "Pro",
    price: 399,
    description: "Ideal for corporate organisations",
    features: [
      "4 Free email plans",
      ".com Domain",
    ],
  },
  {
    name: "Premium",
    price: 699,
    description: "The ultimate hosting experience",
    features: [
      "Full Hosting Plans",
      "24/7 Customer Support",
    ],
  },
]