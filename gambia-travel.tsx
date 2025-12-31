import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Camera,
  Waves,
  TreePine,
  Bird,
  Sun,
  Users,
  Calendar,
  Phone,
  Mail,
  Globe,
  Star,
  Clock,
  Plane,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BackToTop } from "@/components/back-to-top"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      <BackToTop />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Discover Gambia</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#attractions" className="text-sm font-medium hover:text-primary transition-colors">
              Attractions
            </Link>
            <Link href="#activities" className="text-sm font-medium hover:text-primary transition-colors">
              Activities
            </Link>
            <Link href="#culture" className="text-sm font-medium hover:text-primary transition-colors">
              Culture
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button>Plan Your Trip</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Gambia River at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to The Gambia</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            The Smiling Coast of Africa - Where Adventure Meets Serenity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Plane className="mr-2 h-5 w-5" />
              Book Your Adventure
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-black"
            >
              <Camera className="mr-2 h-5 w-5" />
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Bird Species</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1,100km</div>
              <div className="text-sm text-muted-foreground">River Gambia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">80km</div>
              <div className="text-sm text-muted-foreground">Atlantic Coastline</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30°C</div>
              <div className="text-sm text-muted-foreground">Average Temperature</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section id="attractions" className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Attractions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the natural wonders, rich culture, and unforgettable experiences that make Gambia unique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="River Gambia National Park"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4">Wildlife</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TreePine className="h-5 w-5" />
                  River Gambia National Park
                </CardTitle>
                <CardDescription>
                  Home to hippos, crocodiles, and over 270 bird species along the majestic Gambia River
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Full Day
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    4.8/5
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Atlantic Coast Beaches"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4">Beaches</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="h-5 w-5" />
                  Atlantic Coast Beaches
                </CardTitle>
                <CardDescription>
                  Pristine golden beaches perfect for relaxation, water sports, and stunning sunsets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Sun className="h-4 w-4" />
                    Year Round
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    4.9/5
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Bird Watching" fill className="object-cover" />
                <Badge className="absolute top-4 left-4">Birdwatching</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bird className="h-5 w-5" />
                  Abuko Nature Reserve
                </CardTitle>
                <CardDescription>
                  A birdwatcher's paradise with over 300 species including rare and endemic birds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Half Day
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    4.7/5
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Juffureh Village"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4">Culture</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Juffureh Village
                </CardTitle>
                <CardDescription>
                  Historic village made famous by Alex Haley's "Roots" - experience authentic Gambian culture
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Half Day
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    4.6/5
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Stone Circles" fill className="object-cover" />
                <Badge className="absolute top-4 left-4">UNESCO</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Stone Circles of Senegambia
                </CardTitle>
                <CardDescription>
                  UNESCO World Heritage site featuring mysterious ancient stone circles dating back 1,200 years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Full Day
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    4.5/5
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Local Markets" fill className="object-cover" />
                <Badge className="absolute top-4 left-4">Shopping</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Serrekunda Market
                </CardTitle>
                <CardDescription>
                  Vibrant local market offering traditional crafts, textiles, and authentic Gambian experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    2-3 Hours
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    4.4/5
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Activities & Experiences</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From river cruises to cultural immersion, discover the many ways to experience Gambia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Waves className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">River Cruises</h3>
                  <p className="text-muted-foreground">
                    Navigate the Gambia River on traditional boats, spotting wildlife and enjoying scenic landscapes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Bird className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bird Watching Tours</h3>
                  <p className="text-muted-foreground">
                    Join expert guides to spot rare species in mangroves, forests, and wetlands.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cultural Immersion</h3>
                  <p className="text-muted-foreground">
                    Experience traditional music, dance, and local customs in authentic village settings.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Beach Activities</h3>
                  <p className="text-muted-foreground">
                    Enjoy swimming, fishing, beach volleyball, and water sports along pristine coastlines.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TreePine className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Nature Walks</h3>
                  <p className="text-muted-foreground">
                    Explore diverse ecosystems from mangrove forests to savanna grasslands.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Photography Tours</h3>
                  <p className="text-muted-foreground">
                    Capture stunning landscapes, wildlife, and cultural moments with professional guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-16">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Rich Cultural Heritage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Gambia is home to diverse ethnic groups including Mandinka, Fula, Wolof, and Jola peoples, each
                contributing to the country's rich tapestry of traditions, languages, and customs.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Traditional Music & Dance</h4>
                    <p className="text-sm text-muted-foreground">
                      Experience the rhythms of djembe drums and traditional dances
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Local Cuisine</h4>
                    <p className="text-sm text-muted-foreground">
                      Taste authentic dishes like benachin, domoda, and fresh seafood
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Handicrafts</h4>
                    <p className="text-sm text-muted-foreground">
                      Discover beautiful textiles, wood carvings, and traditional jewelry
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Traditional Gambian culture"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Time to Visit</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plan your perfect Gambian adventure with our seasonal guide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-orange-500" />
                  Dry Season
                </CardTitle>
                <CardDescription>November - May</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Perfect weather with minimal rainfall, ideal for all outdoor activities and wildlife viewing.
                </p>
                <Badge variant="secondary">Recommended</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="h-5 w-5 text-blue-500" />
                  Wet Season
                </CardTitle>
                <CardDescription>June - October</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Lush green landscapes and fewer crowds, though some activities may be limited by rain.
                </p>
                <Badge variant="outline">Budget Friendly</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bird className="h-5 w-5 text-green-500" />
                  Bird Season
                </CardTitle>
                <CardDescription>November - April</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Peak time for birdwatching with migratory species joining resident birds.
                </p>
                <Badge variant="secondary">Best for Birding</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to explore the Smiling Coast? Get in touch with our local experts to plan your perfect Gambian
              adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-2">Speak with our travel experts</p>
                <p className="font-semibold">+220 123 4567</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-2">Get detailed information</p>
                <p className="font-semibold">info@discovergambia.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-2">Tourism office location</p>
                <p className="font-semibold">Banjul, The Gambia</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Trip Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Discover Gambia</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your gateway to experiencing the natural beauty and rich culture of The Gambia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#attractions" className="text-muted-foreground hover:text-primary">
                    Attractions
                  </Link>
                </li>
                <li>
                  <Link href="#activities" className="text-muted-foreground hover:text-primary">
                    Activities
                  </Link>
                </li>
                <li>
                  <Link href="#culture" className="text-muted-foreground hover:text-primary">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-muted-foreground">Guided Tours</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Accommodation</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Transportation</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Travel Planning</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+220 123 4567</li>
                <li>info@discovergambia.com</li>
                <li>Banjul, The Gambia</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Discover Gambia. All rights reserved.</p>
            <p>Experience the Smiling Coast of Africa</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
