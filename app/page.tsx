"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Menu, X, Sun, Moon, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
	{
		id: "street",
		title: "Street Photography",
		description: "Capturing the raw essence of urban life",
		image: "/images/Ksomani-0060.jpg",
		color: "from-warm-800/60 to-warm-700/80",
	},
	{
		id: "events",
		title: "Event Photography",
		description: "Preserving moments that matter most",
		image: "/images/IMG_0041.jpg",
		color: "from-clay-700/60 to-clay-600/80",
	},
	{
		id: "nature",
		title: "Nature Photography",
		description: "Finding beauty in the natural world",
		image: "/images/IMG_1642.jpg",
		color: "from-warm-600/60 to-warm-500/80",
	},
	{
		id: "portraits",
		title: "Portraits",
		description: "Revealing the soul behind the eyes",
		image: "/images/Potraits.png",
		color: "from-dusk-700/60 to-dusk-600/80",
	},
	{
		id: "urban",
		title: "Urban Architecture",
		description: "Geometric poetry in concrete and steel",
		image: "/images/IMG_9703.jpg",
		color: "from-warm-700/60 to-warm-600/80",
	},
	{
		id: "abstract",
		title: "Abstract & Experimental",
		description: "Pushing the boundaries of visual perception",
		image: "/images/abstract.jpeg",
		color: "from-clay-800/60 to-warm-700/80",
	},
]

const galleryImages = [
	{
		id: 1,
		category: "street",
		src: "/images/Ksomani-0192.jpg",
		title: "Street Life 1",
	},
	{
		id: 2,
		category: "nature",
		src: "/images/IMG_1642.jpg",
		title: "Nature Scene 1",
	},
	{
		id: 3,
		category: "portraits",
		src: "/images/eye.jpeg",
		title: "Portrait 1",
	},
	{
		id: 4,
		category: "urban",
		src: "/images/IMG_9703.jpg",
		title: "Urban Architecture 1",
	},
	{
		id: 5,
		category: "events",
		src: "/images/IMG_1626.jpg",
		title: "Event 1",
	},
	{
		id: 6,
		category: "abstract",
		src: "/images/IMG_9793.jpg",
		title: "Abstract 1",
	},
	{
		id: 7,
		category: "street",
		src: "/images/Ksomani-0293.jpg",
		title: "Street Life 2",
	},
	{
		id: 8,
		category: "nature",
		src: "/images/nature.jpeg",
		title: "Nature Scene 2",
	},
	{
		id: 9,
		category: "portraits",
		src: "/images/girl-potrait.jpg",
		title: "Portrait 2",
	},
	{
		id: 10,
		category: "urban",
		src: "/images/urban-architecture.jpeg",
		title: "Urban Architecture 2",
	},
	{
		id: 11,
		category: "events",
		src: "/images/Ksomani-0355.jpg",
		title: "Event 2",
	},
	{
		id: 12,
		category: "abstract",
		src: "/images/abs-2.jpeg",
		title: "Abstract 2",
	},
	{
		id: 13,
		category: "street",
		src: "/images/Ksomani-0094.jpg",
		title: "Street Life 3",
	},
	{
		id: 14,
		category: "nature",
		src: "/images/nature-3.jpeg",
		title: "Nature Scene 3",
	},
]

export default function PhotographyPortfolio() {
	const [isDark, setIsDark] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activeFilter, setActiveFilter] = useState("all")
	const [selectedImage, setSelectedImage] = useState<number | null>(null)
	const { scrollY } = useScroll()
	const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
		}
	}, [isDark])

	const filteredImages =
		activeFilter === "all"
			? galleryImages
			: galleryImages.filter((img) => img.category === activeFilter)

	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
		setIsMenuOpen(false)
	}

	return (
		<div
			className={`min-h-screen transition-colors duration-300 ${
				isDark ? "dark bg-warm-975 text-warm-100" : "bg-warm-50 text-warm-900"
			}`}
		>
			{/* Header */}
			<motion.header
				style={{ opacity: headerOpacity }}
				className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-warm-50/90 dark:bg-warm-975/90 border-b border-warm-200 dark:border-warm-800"
			>
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<motion.h1
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="text-2xl font-serif font-bold text-warm-900 dark:text-warm-100"
					>
						Krishna Somani
					</motion.h1>

					<nav className="hidden md:flex items-center space-x-8">
						<button
							onClick={() => scrollToSection("home")}
							className="text-warm-700 hover:text-warm-900 dark:text-warm-300 dark:hover:text-warm-100 transition-colors"
						>
							Home
						</button>
						<button
							onClick={() => scrollToSection("portfolio")}
							className="text-warm-700 hover:text-warm-900 dark:text-warm-300 dark:hover:text-warm-100 transition-colors"
						>
							Portfolio
						</button>
						<button
							onClick={() => scrollToSection("about")}
							className="text-warm-700 hover:text-warm-900 dark:text-warm-300 dark:hover:text-warm-100 transition-colors"
						>
							About
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className="text-warm-700 hover:text-warm-900 dark:text-warm-300 dark:hover:text-warm-100 transition-colors"
						>
							Contact
						</button>
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsDark(!isDark)}
							className="p-2 bg-[#c8bebc] hover:bg-[#898483] text-white transition-all duration-300"
						>
							{isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</Button>
					</nav>

					<div className="md:hidden flex items-center space-x-2">
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsDark(!isDark)}
							className="p-2 bg-[#c8bebc] hover:bg-[#898483] text-white transition-all duration-300"
						>
							{isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="p-2 text-warm-700 hover:text-warm-900 dark:text-warm-300 dark:hover:text-warm-100"
						>
							{isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className="md:hidden bg-warm-50 dark:bg-warm-975 border-t border-warm-200 dark:border-warm-800"
					>
						<div className="container mx-auto px-4 py-4 space-y-4">
							<button
								onClick={() => scrollToSection("home")}
								className="block w-full text-left text-warm-700 hover:text-warm-900 dark:text-warm-300 dark:hover:text-warm-100 transition-colors"
							>
								Home
							</button>
							<button
								onClick={() => scrollToSection("portfolio")}
								className="block w-full text-left text-warm-700 hover:text-warm-900 dark:text-warm-300 dark:hover:text-warm-100 transition-colors"
							>
								Portfolio
							</button>
							<button
								onClick={() => scrollToSection("about")}
								className="block w-full text-left text-warm-700 hover:text-warm-900 dark:text-warm-300 dark:hover:text-warm-100 transition-colors"
							>
								About
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="block w-full text-left text-warm-700 hover:text-warm-900 dark:text-warm-300 dark:hover:text-warm-100 transition-colors"
							>
								Contact
							</button>
						</div>
					</motion.div>
				)}
			</motion.header>

			{/* Hero Section */}
			<section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `url('/images/Ksomani-0153.jpg')`,
					}}
				/>
				<div className="absolute inset-0 backdrop-blur-none bg-black/10" />

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="relative z-10 text-center text-white"
				>
					<h1 className="text-6xl md:text-8xl font-serif font-bold mb-4">Krishna Somani</h1>
					<p className="text-xl md:text-2xl font-light italic mb-8">Capture moments, Forever.</p>
					<Button
						onClick={() => scrollToSection("portfolio")}
						variant="outline"
						className="border-warm-100 text-warm-100 bg-[#898483] hover:bg-[#c8bebc] hover:text-warm-900 transition-all duration-300"
					>
						Explore My Work
					</Button>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1.5 }}
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				>
					<ChevronDown className="h-8 w-8 text-white animate-bounce" />
				</motion.div>
			</section>

			{/* Scroll-Based Categories */}
			{categories.map((category, index) => {
				// Use a CSS custom property for object-position, and set it via a mobile media query
				let objectPosition = undefined;
				if (category.image === '/images/Ksomani-0060.jpg') objectPosition = '--cat-obj-pos: 45% 0%';
				// if (category.image === '/images/Ksomani-0067.jpg') objectPosition = '--cat-obj-pos: 40% 0%';
				if (category.image === '/images/IMG_0041.jpg') objectPosition = '--cat-obj-pos: 75% 0%';
				if (category.image === '/images/IMG_9703.jpg') objectPosition = '--cat-obj-pos: 70% 0%';
				return (
					<motion.section
						key={category.id}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="relative h-screen flex items-center justify-center overflow-hidden"
					>
						<div
							className="absolute inset-0 bg-cover bg-center bg-no-repeat cat-mobile-focus"
							style={{
								backgroundImage: `url('${category.image}')`,
								...(objectPosition ? { '--cat-obj-pos': objectPosition.split(': ')[1] } : {}),
							}}
						/>
						<div className="absolute inset-0 backdrop-blur-none bg-black/10" />

						<motion.div
							initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
						>
							<h2 className="text-5xl md:text-7xl font-serif font-bold mb-4">{category.title}</h2>
							<p className="text-xl md:text-2xl font-light">{category.description}</p>
						</motion.div>
					</motion.section>
				);
			})}

			{/* Gallery Section */}
			<section id="portfolio" className="py-20 px-4 bg-warm-50 dark:bg-warm-975">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-warm-900 dark:text-warm-100">
							Portfolio
						</h2>
						<p className="text-xl text-warm-600 dark:text-warm-400">A curated collection of my finest work</p>
					</motion.div>

					{/* Filter Buttons - NO YELLOW */}
					<div className="flex flex-wrap justify-center gap-4 mb-12">
						<Button
							variant={activeFilter === "all" ? "default" : "outline"}
							onClick={() => setActiveFilter("all")}
							className={`transition-all duration-300 ${
								activeFilter === "all"
									? "bg-[#898483] hover:bg-[#898483]/90 text-white border-[#898483]"
									: "bg-[#c8bebc] border-[#c8bebc] text-white hover:bg-[#898483] hover:border-[#898483]"
							}`}
						>
							All
						</Button>
						{categories.map((category) => (
							<Button
								key={category.id}
								variant={activeFilter === category.id ? "default" : "outline"}
								onClick={() => setActiveFilter(category.id)}
								className={`transition-all duration-300 ${
									activeFilter === category.id
										? "bg-[#898483] hover:bg-[#898483]/90 text-white border-[#898483]"
										: "bg-[#c8bebc] border-[#c8bebc] text-white hover:bg-[#898483] hover:border-[#898483]"
								}`}
							>
								{category.title}
							</Button>
						))}
					</div>

					{/* Gallery Grid */}
					<motion.div
						layout
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
					>
						{filteredImages.map((image) => {
							// Set custom object-position for specific images on mobile
							let galleryObjPos = undefined;
							if (image.src === '/images/girl-potrait.jpg') galleryObjPos = '0% 38%';
							if (image.src === '/images/Ksomani-0094.jpg') galleryObjPos = '0% 0%';
							return (
								<motion.div
									key={image.id}
									layout
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									whileHover={{ scale: 1.02 }}
									className="gallery-item relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
									onClick={() => setSelectedImage(image.id)}
								>
									<img
										src={image.src || "/placeholder.svg"}
										alt={image.title}
										className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105 gallery-mobile-focus"
										style={galleryObjPos ? { ['--gallery-obj-pos' as any]: galleryObjPos } as React.CSSProperties : undefined}
									/>
									<div className="absolute inset-0 bg-warm-900/0 group-hover:bg-warm-900/20 transition-all duration-300 flex items-center justify-center">
										<h3 className="text-warm-50 text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-serif">
											{image.title}
										</h3>
									</div>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="section-spacing px-4 bg-warm-100 dark:bg-warm-950">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<img
								src="/images/DSCF0283.JPG"
								alt="Krishna Somani"
								className="w-full max-w-md mx-auto rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
							/>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-6"
						>
							<h2 className="text-4xl md:text-6xl font-serif font-bold text-warm-900 dark:text-warm-100">
								About Krishna
							</h2>
							<div className="space-y-4 text-lg text-warm-600 dark:text-warm-300">
								<p>
									Photography is more than capturing images—it's about freezing emotions, preserving memories, and
									telling stories that transcend time.
								</p>
								<p>
									With over a decade of experience behind the lens, I specialize in finding the extraordinary in the
									ordinary, whether it's the raw energy of street life, the intimate moments of a wedding, or the serene
									beauty of nature.
								</p>
								<p>
									Every photograph is a conversation between light and shadow, between the photographer and the subject,
									between the moment and eternity.
								</p>
							</div>

							<div className="flex space-x-4">
								<a
									href="https://www.instagram.com/shutter.shenanigan/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button
										variant="outline"
										size="sm"
										className="bg-[#c8bebc] border-[#c8bebc] text-white hover:bg-[#898483] hover:border-[#898483] transition-all duration-300"
									>
										<Instagram className="h-4 w-4 mr-2" />
										Instagram
									</Button>
								</a>
								<a
									href="https://www.linkedin.com/in/krishna-somani-355373332/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button
										variant="outline"
										size="sm"
										className="bg-[#c8bebc] border-[#c8bebc] text-white hover:bg-[#898483] hover:border-[#898483] transition-all duration-300"
									>
										<Linkedin className="h-4 w-4 mr-2" />
										LinkedIn
									</Button>
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="section-spacing px-4 bg-warm-50 dark:bg-warm-975">
				<div className="container mx-auto max-w-4xl">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-warm-900 dark:text-warm-100">
							Let's Work Together
						</h2>
						<p className="text-xl text-warm-600 dark:text-warm-400">Ready to capture your story?</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-6"
						>
							<Card className="p-6 bg-warm-100 dark:bg-warm-950 border-warm-200 dark:border-warm-900">
								<form className="space-y-4">
									<div>
										<Input
											placeholder="Your Name"
											className="w-full bg-white dark:bg-warm-950 border-warm-400 dark:border-warm-700 text-warm-900 dark:text-warm-100 focus:border-[#898483] focus:ring-[#898483]"
										/>
									</div>
									<div>
										<Input
											type="email"
											placeholder="Your Email"
											className="w-full bg-white dark:bg-warm-950 border-warm-400 dark:border-warm-700 text-warm-900 dark:text-warm-100 focus:border-[#898483] focus:ring-[#898483]"
										/>
									</div>
									<div>
										<Textarea
											placeholder="Tell me about your project..."
											className="w-full h-32 bg-white dark:bg-warm-950 border-warm-400 dark:border-warm-700 text-warm-900 dark:text-warm-100 focus:border-[#898483] focus:ring-[#898483]"
										/>
									</div>
									<Button className="w-full bg-[#898483] hover:bg-[#c8bebc] text-white border-[#898483] transition-all duration-300">
										Send Message
									</Button>
								</form>
							</Card>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-6"
						>
							<div className="space-y-4">
								<div className="flex items-center space-x-3">
									<Mail className="h-5 w-5 text-warm-600 dark:text-warm-400" />
									<span className="text-warm-700 dark:text-warm-300">ksomaniwork@gmail.com</span>
								</div>
								<div className="flex items-center space-x-3">
									<Phone className="h-5 w-5 text-warm-600 dark:text-warm-400" />
									<span className="text-warm-700 dark:text-warm-300">7400233023</span>
								</div>
							</div>

							<div className="pt-6">
								<h3 className="text-xl font-semibold mb-4 text-warm-900 dark:text-warm-100">Services</h3>
								<div className="flex flex-wrap gap-2">
									<Badge
										variant="secondary"
										className="bg-warm-200 text-warm-800 dark:bg-warm-900 dark:text-warm-200"
									>
										Wedding Photography
									</Badge>
									<Badge
										variant="secondary"
										className="bg-warm-200 text-warm-800 dark:bg-warm-900 dark:text-warm-200"
									>
										Portrait Sessions
									</Badge>
									<Badge
										variant="secondary"
										className="bg-warm-200 text-warm-800 dark:bg-warm-900 dark:text-warm-200"
									>
										Event Coverage
									</Badge>
									<Badge
										variant="secondary"
										className="bg-warm-200 text-warm-800 dark:bg-warm-900 dark:text-warm-200"
									>
										Commercial Work
									</Badge>
									<Badge
										variant="secondary"
										className="bg-warm-200 text-warm-800 dark:bg-warm-900 dark:text-warm-200"
									>
										Fine Art Prints
									</Badge>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 px-4 border-t border-warm-200 dark:border-warm-900 bg-warm-100 dark:bg-warm-950">
				<div className="container mx-auto text-center">
					<p className="text-warm-600 dark:text-warm-400">© 2024 Krishna Somani. All rights reserved.</p>
					<p className="text-sm text-warm-500 dark:text-warm-500 mt-2 italic font-serif">
						"Capture moments, Forever."
					</p>
				</div>
			</footer>

			{/* Lightbox */}
			{selectedImage && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center overflow-hidden w-screen max-w-none box-border overflow-x-hidden"
					style={{ width: '100vw', maxWidth: '100vw', left: 0, right: 0, margin: 0, padding: 0 }}
					onClick={() => setSelectedImage(null)}
				>
					<motion.img
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0.8 }}
						src={galleryImages.find((img) => img.id === selectedImage)?.src}
						alt={galleryImages.find((img) => img.id === selectedImage)?.title}
						className="max-w-full max-h-full object-contain overflow-x-hidden select-none block m-auto"
						style={{ touchAction: 'none', maxWidth: '100vw', maxHeight: '100vh', width: '100%', height: 'auto' }}
						draggable={false}
						onClick={(e) => e.stopPropagation()}
					/>
					<Button
						variant="ghost"
						size="sm"
						className="absolute top-4 right-4 text-white hover:bg-white/20"
						onClick={() => setSelectedImage(null)}
					>
						<X className="h-6 w-6" />
					</Button>
				</motion.div>
			)}
		</div>
	)
}
