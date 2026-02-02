import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Users, Code, Globe, Layers } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Consulting",
    description: "Strategic IT consulting and digital transformation advisory services to help businesses optimize their technology investments and drive innovation.",
    link: "/services/consulting",
    features: ["Digital Strategy", "Process Optimization", "Technology Advisory", "Change Management"]
  },
  {
    icon: Code,
    title: "Software Solutions",
    description: "Custom software development and enterprise application solutions tailored to your unique business requirements and growth objectives.",
    link: "/services/software-solutions",
    features: ["Custom Development", "Enterprise Apps", "API Integration", "Legacy Modernization"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications and digital experiences built with cutting-edge technologies for optimal performance and user engagement.",
    link: "/services/web-development",
    features: ["Responsive Design", "E-commerce", "Progressive Web Apps", "CMS Solutions"]
  },
  {
    icon: Layers,
    title: "SAP Services",
    description: "Comprehensive SAP implementation, integration, and support services covering the complete SAP ecosystem for enterprise digital transformation.",
    link: "/services/sap",
    features: ["SAP Implementation", "SAP Integration", "SAP Migration", "SAP Support"]
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Transforming Businesses Through Technology
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From strategic consulting to cutting-edge development, we deliver comprehensive technology solutions 
              that drive growth and innovation for enterprises worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(service.link)}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 cursor-pointer hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-8 h-8 flex items-center justify-center rounded-full bg-slate-700/50 group-hover:bg-blue-500 transition-colors">
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "150+", label: "Enterprise Clients" },
              { value: "25+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how our services can help you achieve your digital transformation goals.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-100 transition-colors">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
